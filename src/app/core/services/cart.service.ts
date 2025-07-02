import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book.service';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

export interface CartItem {
  book: Book;
  quantity: number;
  addedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private readonly CART_STORAGE_KEY = 'readify_cart';
  
  // Observable that components can subscribe to
  cart$ = this.cartSubject.asObservable();

  constructor(private authService: AuthService, private notificationService: NotificationService) {
    this.initializeCart();
    this.setupAuthListener();
  }

  // Initialize cart on service start
  private async initializeCart(): Promise<void> {
    // First, load from localStorage for immediate display
    this.loadCartFromLocalStorage();
    
    // Then check if user is authenticated and sync with Firebase
    const user = this.authService.getCurrentUser();
    if (user) {
      await this.syncCartWithFirebase(user.uid);
    }
  }

  // Listen to authentication state changes
  private setupAuthListener(): void {
    this.authService.currentUser$.subscribe(async (user) => {
      if (user) {
        // User logged in - sync cart with Firebase
        // Only show initial sync message if there are local items to potentially merge
        if (this.cartItems.length > 0) {
          this.notificationService.info('Cart Sync', 'Syncing your cart with your account...', 2000);
        }
        await this.syncCartWithFirebase(user.uid);
        // Success messages are now handled in syncCartWithFirebase for better context
      } else {
        // User logged out - only show notification if there are items in cart
        if (this.cartItems.length > 0) {
          this.notificationService.info('Signed Out', 'Cart saved locally. Sign in to sync across devices.', 4000);
        }
        await this.handleUserLogout();
      }
    });
  }

  // Sync cart between localStorage and Firebase
  private async syncCartWithFirebase(userId: string): Promise<void> {
    try {
      // Get cart from Firebase
      const firebaseCart = await this.loadCartFromFirebase(userId);
      const localCart = this.cartItems;
      const hadLocalItems = localCart.length > 0;
      const hasFirebaseItems = firebaseCart.length > 0;

      // Merge carts (Firebase takes priority, but add unique local items)
      const mergedCart = [...firebaseCart];
      let itemsAdded = 0;
      
      localCart.forEach(localItem => {
        const existsInFirebase = firebaseCart.some(
          firebaseItem => firebaseItem.book.id === localItem.book.id
        );
        
        if (!existsInFirebase) {
          mergedCart.push(localItem);
          itemsAdded++;
        }
      });

      // Update local cart and save to Firebase
      this.cartItems = mergedCart;
      this.cartSubject.next([...this.cartItems]);
      
      // Only save to Firebase if there are items to save
      if (mergedCart.length > 0) {
        await this.saveCartToFirebase(userId);
      }
      
      // Clear localStorage since we're now using Firebase
      localStorage.removeItem(this.CART_STORAGE_KEY);
      
      // Show meaningful sync notification only if there was actual syncing to do
      if (hasFirebaseItems && hadLocalItems && itemsAdded > 0) {
        this.notificationService.success('Cart Merged', `Added ${itemsAdded} local items to your account cart.`, 3000);
      } else if (hasFirebaseItems && !hadLocalItems) {
        this.notificationService.success('Cart Restored', `Restored ${firebaseCart.length} items from your account.`, 3000);
      }
      
    } catch (error) {
      console.error('Error syncing cart with Firebase:', error);
      // Fall back to localStorage if Firebase fails
      this.loadCartFromLocalStorage();
    }
  }

  // Handle user logout
  private async handleUserLogout(): Promise<void> {
    // Save current cart to localStorage for anonymous users
    this.saveCartToLocalStorage();
    // Note: We don't clear the cart on logout to preserve shopping experience
  }

  // Add book to cart
  async addToCart(book: Book, quantity: number = 1): Promise<void> {
    const existingItem = this.cartItems.find(item => item.book.id === book.id);
    
    if (existingItem) {
      // If book already in cart, increase quantity
      existingItem.quantity += quantity;
    } else {
      // Add new item to cart
      const newItem: CartItem = {
        book,
        quantity,
        addedAt: new Date()
      };
      this.cartItems.push(newItem);
    }
    
    await this.updateCart();
  }

  // Remove book from cart
  async removeFromCart(bookId: string): Promise<void> {
    this.cartItems = this.cartItems.filter(item => item.book.id !== bookId);
    await this.updateCart();
  }

  // Update quantity of specific item
  async updateQuantity(bookId: string, quantity: number): Promise<void> {
    const item = this.cartItems.find(item => item.book.id === bookId);
    if (item) {
      if (quantity <= 0) {
        await this.removeFromCart(bookId);
      } else {
        item.quantity = quantity;
        await this.updateCart();
      }
    }
  }

  // Clear entire cart
  async clearCart(): Promise<void> {
    this.cartItems = [];
    await this.updateCart();
  }

  // Get total number of items
  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Get total price
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => 
      total + (item.book.price * item.quantity), 0
    );
  }

  // Check if book is in cart
  isInCart(bookId: string): boolean {
    return this.cartItems.some(item => item.book.id === bookId);
  }

  // Get quantity of specific book
  getBookQuantity(bookId: string): number {
    const item = this.cartItems.find(item => item.book.id === bookId);
    return item ? item.quantity : 0;
  }

  // Private methods
  private async updateCart(): Promise<void> {
    // Update local observable
    this.cartSubject.next([...this.cartItems]);
    
    // Save to appropriate storage
    const user = this.authService.getCurrentUser();
    if (user) {
      await this.saveCartToFirebase(user.uid);
    } else {
      this.saveCartToLocalStorage();
    }
  }

  // Firebase storage methods
  private async saveCartToFirebase(userId: string): Promise<void> {
    try {
      const cartRef = doc(db, 'carts', userId);
      const cartData = {
        items: this.cartItems,
        updatedAt: new Date(),
        totalItems: this.getTotalItems(),
        totalPrice: this.getTotalPrice()
      };
      await setDoc(cartRef, cartData);
    } catch (error) {
      console.error('Error saving cart to Firebase:', error);
      // Fall back to localStorage if Firebase fails
      this.saveCartToLocalStorage();
    }
  }

  private async loadCartFromFirebase(userId: string): Promise<CartItem[]> {
    try {
      const cartRef = doc(db, 'carts', userId);
      const cartSnap = await getDoc(cartRef);
      
      if (cartSnap.exists()) {
        const cartData = cartSnap.data();
        return cartData['items'] || [];
      }
      return [];
    } catch (error) {
      console.error('Error loading cart from Firebase:', error);
      return [];
    }
  }

  private async deleteCartFromFirebase(userId: string): Promise<void> {
    try {
      const cartRef = doc(db, 'carts', userId);
      await deleteDoc(cartRef);
    } catch (error) {
      console.error('Error deleting cart from Firebase:', error);
    }
  }

  // LocalStorage methods (fallback)
  private saveCartToLocalStorage(): void {
    try {
      localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }

  private loadCartFromLocalStorage(): void {
    try {
      const savedCart = localStorage.getItem(this.CART_STORAGE_KEY);
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.cartSubject.next([...this.cartItems]);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      this.cartItems = [];
    }
  }
}