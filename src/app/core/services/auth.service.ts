import { Injectable } from '@angular/core';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  User,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc 
} from 'firebase/firestore';
import { auth, db } from '../firebase.config';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  role?: 'user' | 'admin';
  createdAt: Date;
  lastLoginAt: Date;
  preferences?: {
    favoriteGenres?: string[];
    newsletter?: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private currentUserProfileSubject = new BehaviorSubject<UserProfile | null>(null);
  public currentUserProfile$ = this.currentUserProfileSubject.asObservable();

  constructor() {
    // Listen to authentication state changes
    auth.onAuthStateChanged(async (user) => {
      this.currentUserSubject.next(user);
      if (user) {
        this.updateLastLogin(user.uid);
        // Load user profile when authenticated
        const profile = await this.getUserProfile(user.uid);
        this.currentUserProfileSubject.next(profile);
      } else {
        this.currentUserProfileSubject.next(null);
      }
    });
  }

  // Register new user
  async register(email: string, password: string, firstName?: string, lastName?: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update display name if provided
      if (firstName || lastName) {
        const displayName = `${firstName || ''} ${lastName || ''}`.trim();
        await updateProfile(user, { displayName });
      }

      // Save user profile to Firestore
      await this.saveUserProfile(user, firstName, lastName);

      return user;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Sign in existing user
  async signIn(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Sign out user
  async signOut(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error('Sign out failed');
    }
  }

  // Save user profile to Firestore
  private async saveUserProfile(user: User, firstName?: string, lastName?: string): Promise<void> {
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email!,
      displayName: user.displayName || undefined,
      firstName,
      lastName,
      role: 'user', // Default role is user
      createdAt: new Date(),
      lastLoginAt: new Date(),
      preferences: {
        favoriteGenres: [],
        newsletter: false
      }
    };

    await setDoc(doc(db, 'users', user.uid), userProfile);
  }

  // Update last login time
  private async updateLastLogin(uid: string): Promise<void> {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        await setDoc(userRef, { 
          lastLoginAt: new Date() 
        }, { merge: true });
      }
    } catch (error) {
      console.error('Error updating last login:', error);
    }
  }

  // Get user profile from Firestore
  async getUserProfile(uid: string): Promise<UserProfile | null> {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        return userSnap.data() as UserProfile;
      }
      return null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  }

  // Update user profile
  async updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
    try {
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, updates, { merge: true });
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw new Error('Failed to update profile');
    }
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  // Check if current user is admin
  isAdmin(): boolean {
    const profile = this.currentUserProfileSubject.value;
    return profile?.role === 'admin';
  }

  // Get current user profile
  getCurrentUserProfile(): UserProfile | null {
    return this.currentUserProfileSubject.value;
  }

  // Promote user to admin (for development/testing purposes)
  async promoteToAdmin(uid: string): Promise<void> {
    try {
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, { role: 'admin' }, { merge: true });
      
      // If promoting current user, update the profile subject
      if (uid === this.getCurrentUser()?.uid) {
        const updatedProfile = await this.getUserProfile(uid);
        this.currentUserProfileSubject.next(updatedProfile);
      }
    } catch (error) {
      console.error('Error promoting user to admin:', error);
      throw new Error('Failed to promote user to admin');
    }
  }

  // Demote admin to user
  async demoteFromAdmin(uid: string): Promise<void> {
    try {
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, { role: 'user' }, { merge: true });
      
      // If demoting current user, update the profile subject
      if (uid === this.getCurrentUser()?.uid) {
        const updatedProfile = await this.getUserProfile(uid);
        this.currentUserProfileSubject.next(updatedProfile);
      }
    } catch (error) {
      console.error('Error demoting user from admin:', error);
      throw new Error('Failed to demote user from admin');
    }
  }

  // Send password reset email
  async sendPasswordReset(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Error message helper
  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No user found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'This email address is already registered.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/invalid-email':
        return 'Invalid email address format.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      default:
        return 'An error occurred. Please try again.';
    }
  }

  // Password reset method
  async sendPasswordResetEmail(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      throw error; // Let the component handle the specific error
    }
  }
}
