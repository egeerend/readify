import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookService, Book } from '../../core/services/book.service';
import { CategoryService, BookCategory } from '../../core/services/category.service';
import { CartService } from '../../core/services/cart.service';
import { SharedModule } from '../../shared/shared-module';
import { PriceFormatPipe } from '../../shared/pipes/price-format.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, PriceFormatPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  private readonly bookService = inject(BookService);
  private readonly categoryService = inject(CategoryService);
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  featuredBooks: Book[] = [];
  bestsellerBooks: Book[] = [];
  newArrivals: Book[] = [];
  categories: BookCategory[] = [];
  isLoading = false;
  
  // Modal state
  showModal = false;
  selectedBook: Book | null = null;

  // Category carousel properties
  categoryScrollPosition = 0;
  categoryScrollStep = 300;

  constructor() {}

  async ngOnInit() {
    this.categories = this.categoryService.getHomePageCategories();
    await this.loadBooks();
    
    // Log book images for debugging
    console.log('Featured books loaded:', this.featuredBooks.map(book => ({
      title: book.title,
      coverImage: book.coverImage
    })));
  }

  async loadBooks() {
    try {
      this.isLoading = true;
      
      // Load random featured books (changes on each refresh)
      this.featuredBooks = await this.bookService.getRandomFeaturedBooks(6);
      
      // Load bestseller books
      this.bestsellerBooks = await this.bookService.getBestsellerBooks(5);
      
      // Load new arrivals
      this.newArrivals = await this.bookService.getNewArrivalBooks(4);
      
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading books:', error);
      this.isLoading = false;
    }
  }

  // Refresh featured books
  async refreshFeaturedBooks(): Promise<void> {
    await this.loadBooks();
  }

  // Navigate to search page with category as subject
  onCategoryClick(category: BookCategory): void {
    // Handle "More Categories" specially
    if (category.id === 'more') {
      // Navigate to the book list page to show all categories
      this.router.navigate(['/search']);
      return;
    }

    // For regular categories, navigate with category filter
    this.router.navigate(['/search'], { 
      queryParams: { 
        type: 'subject',
        query: category.name 
      } 
    });
  }

  // Handle image load errors with multiple fallbacks
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    const originalSrc = target.src;
    console.log('Image failed to load:', originalSrc);
    
    // Try fallback strategies
    if (!target.dataset['fallbackAttempted']) {
      target.dataset['fallbackAttempted'] = 'true';
      
      // First try: Generate a custom placeholder with book info
      this.createBookPlaceholder(target);
    } else {
      // Final fallback: Use default no-cover image
      target.src = 'assets/images/no-book-cover.jpg';
      target.classList.add('error');
      target.style.backgroundColor = '#f8f9fa';
      target.style.border = '2px dashed #dee2e6';
    }
  }

  // Create a custom placeholder for books without covers
  private createBookPlaceholder(img: HTMLImageElement): void {
    const bookTitle = img.alt || 'Unknown Book';
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      canvas.width = 300;
      canvas.height = 400;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#667eea');
      gradient.addColorStop(1, '#764ba2');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 300, 400);
      
      // Add book icon
      ctx.font = '48px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText('📚', 150, 150);
      
      // Add title text
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = 'white';
      const words = bookTitle.split(' ');
      let line = '';
      let y = 220;
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > 260 && n > 0) {
          ctx.fillText(line, 150, y);
          line = words[n] + ' ';
          y += 20;
        } else {
          line = testLine;
        }
        
        if (y > 340) break; // Prevent overflow
      }
      ctx.fillText(line, 150, y);
      
      // Convert canvas to data URL and set as image source
      img.src = canvas.toDataURL();
    } else {
      // Fallback if canvas is not supported
      img.src = 'assets/images/no-book-cover.jpg';
    }
  }

  getRatingStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
    
    if (hasHalfStar) {
      stars.push('half');
    }
    
    while (stars.length < 5) {
      stars.push('empty');
    }
    
    return stars;
  }

  // Cart functionality
  async addToCart(book: Book, event?: Event): Promise<void> {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    await this.cartService.addToCart(book);
    console.log(`${book.title} added to cart!`);
  }

  // Navigate to book detail page
  quickViewBook(book: Book, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    // Show quick view modal instead of navigating
    this.selectedBook = book;
    this.showModal = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Close modal
  closeModal(): void {
    this.showModal = false;
    this.selectedBook = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Navigate to full book detail page
  viewFullDetails(book: Book): void {
    this.closeModal();
    
    // Handle different book ID types for proper routing
    if (book.id && (book.id.startsWith('OL') || book.id.includes('/works/'))) {
      // For Open Library books, generate the proper book ID and use query params
      const title = book.title?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().slice(0, 20) || 'unknown';
      const author = book.author?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().slice(0, 15) || 'unknown';
      const bookId = `ol-${title}-${author}`;
      
      this.router.navigate(['/books', bookId], { 
        queryParams: { 
          title: book.title || 'unknown',
          author: book.author || 'unknown'
        }
      });
    } else {
      // For catalog books, use the standard books route
      this.router.navigate(['/books', book.id]);
    }
  }

  // Check if book is in cart
  isInCart(bookId: string): boolean {
    return this.cartService.isInCart(bookId);
  }

  // Get quantity of book in cart
  getBookQuantity(bookId: string): number {
    return this.cartService.getBookQuantity(bookId);
  }

  // Category carousel navigation methods
  scrollCategoriesLeft(): void {
    const container = document.querySelector('.category-carousel-container') as HTMLElement;
    if (container) {
      this.categoryScrollPosition = Math.max(0, this.categoryScrollPosition - this.categoryScrollStep);
      container.scrollTo({
        left: this.categoryScrollPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollCategoriesRight(): void {
    const container = document.querySelector('.category-carousel-container') as HTMLElement;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      this.categoryScrollPosition = Math.min(maxScroll, this.categoryScrollPosition + this.categoryScrollStep);
      container.scrollTo({
        left: this.categoryScrollPosition,
        behavior: 'smooth'
      });
    }
  }

  // Track by function for better performance
  trackByBookId(index: number, book: Book): string {
    return book.id || index.toString();
  }

  // Handle successful image load
  onImageLoad(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.classList.add('loaded');
    target.style.opacity = '1';
    console.log('Image loaded successfully:', target.src);
  }
}
