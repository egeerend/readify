import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  
  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cart$;
  }

  ngOnInit(): void {}

  // Remove item from cart
  async removeItem(bookId: string): Promise<void> {
    await this.cartService.removeFromCart(bookId);
  }

  // Update quantity
  async updateQuantity(bookId: string, quantity: number): Promise<void> {
    await this.cartService.updateQuantity(bookId, quantity);
  }

  // Clear entire cart
  async clearCart(): Promise<void> {
    if (confirm('Are you sure you want to clear your cart?')) {
      await this.cartService.clearCart();
    }
  }

  // Get total price
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  // Get total items
  getTotalItems(): number {
    return this.cartService.getTotalItems();
  }

  // Format price for display
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }
}