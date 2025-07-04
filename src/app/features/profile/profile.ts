import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserProfile, Review } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent implements OnInit {
  user: UserProfile | null = null;
  isEditing = false;
  activeTab = 'personal';
  loading = false;
  error = '';
  success = '';

  // Form data
  editForm = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
    },
    preferences: {
      favoriteGenres: [] as string[],
      newsletter: false,
      language: 'en',
      currency: 'USD',
      notifications: {
        email: true,
        sms: false,
        push: true
      }
    }
  };

  // Password reset
  resetPasswordEmail = '';
  resetPasswordLoading = false;

  // Available options
  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  genreOptions = [
    'Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Science Fiction',
    'Fantasy', 'Biography', 'History', 'Self-Help', 'Business',
    'Children', 'Young Adult', 'Horror', 'Thriller', 'Poetry'
  ];

  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Turkish' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' }
  ];

  currencyOptions = [
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'EUR', label: 'Euro (€)' },
    { value: 'TRY', label: 'Turkish Lira (₺)' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.authService.currentUserProfile$.subscribe(profile => {
      this.user = profile;
      if (profile) {
        this.populateForm(profile);
      } else {
        // If no user is logged in, redirect to login
        this.router.navigate(['/login']);
      }
    });
  }

  populateForm(profile: UserProfile) {
    this.editForm = {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      displayName: profile.displayName || '',
      email: profile.email || '',
      phone: profile.phone || '',
      gender: profile.gender || '',
      dateOfBirth: profile.dateOfBirth ? this.formatDateForInput(profile.dateOfBirth) : '',
      address: {
        street: profile.address?.street || '',
        city: profile.address?.city || '',
        state: profile.address?.state || '',
        country: profile.address?.country || '',
        zipCode: profile.address?.zipCode || ''
      },
      preferences: {
        favoriteGenres: profile.preferences?.favoriteGenres || [],
        newsletter: profile.preferences?.newsletter || false,
        language: profile.preferences?.language || 'en',
        currency: profile.preferences?.currency || 'USD',
        notifications: {
          email: profile.preferences?.notifications?.email || true,
          sms: profile.preferences?.notifications?.sms || false,
          push: profile.preferences?.notifications?.push || true
        }
      }
    };
  }

  formatDateForInput(date: Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.error = '';
    this.success = '';
  }

  async saveProfile() {
    if (!this.user) return;

    this.loading = true;
    this.error = '';
    this.success = '';

    try {
      const updates: Partial<UserProfile> = {
        firstName: this.editForm.firstName,
        lastName: this.editForm.lastName,
        displayName: this.editForm.displayName,
        phone: this.editForm.phone,
        gender: this.editForm.gender as any,
        dateOfBirth: this.editForm.dateOfBirth ? new Date(this.editForm.dateOfBirth) : undefined,
        address: this.editForm.address,
        preferences: this.editForm.preferences
      };

      await this.authService.updateCurrentUserProfile(updates);
      this.success = 'Profile updated successfully!';
      this.isEditing = false;
    } catch (error: any) {
      this.error = error.message || 'Failed to update profile';
    } finally {
      this.loading = false;
    }
  }

  async sendPasswordReset() {
    if (!this.resetPasswordEmail) {
      this.error = 'Please enter your email address';
      return;
    }

    this.resetPasswordLoading = true;
    this.error = '';

    try {
      await this.authService.sendPasswordReset(this.resetPasswordEmail);
      this.success = 'Password reset email sent successfully!';
      this.resetPasswordEmail = '';
    } catch (error: any) {
      this.error = error.message || 'Failed to send password reset email';
    } finally {
      this.resetPasswordLoading = false;
    }
  }

  onGenreChange(genre: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    
    if (checked) {
      this.editForm.preferences.favoriteGenres.push(genre);
    } else {
      this.editForm.preferences.favoriteGenres = 
        this.editForm.preferences.favoriteGenres.filter(g => g !== genre);
    }
  }

  isGenreSelected(genre: string): boolean {
    return this.editForm.preferences.favoriteGenres.includes(genre);
  }

  formatDate(date: Date | undefined): string {
    if (!date) return 'Never';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getFullName(): string {
    if (!this.user) return '';
    return `${this.user.firstName || ''} ${this.user.lastName || ''}`.trim() || 
           this.user.displayName || 
           this.user.email.split('@')[0];
  }

  getProfileImage(): string {
    if (this.user?.photoURL) {
      return this.user.photoURL;
    }
    const name = this.getFullName();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=200`;
  }

  getWishlistCount(): number {
    return this.user?.wishlist?.length || 0;
  }

  getReviewsCount(): number {
    return this.user?.reviews?.length || 0;
  }

  getAverageRating(): number {
    if (!this.user?.reviews?.length) return 0;
    const total = this.user.reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round((total / this.user.reviews.length) * 10) / 10;
  }

  viewWishlist() {
    this.router.navigate(['/wishlist']);
  }

  clearMessages() {
    this.error = '';
    this.success = '';
  }
}
