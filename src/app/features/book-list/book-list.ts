import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookService, Book } from '../../core/services/book.service';
import { CartService } from '../../core/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  isLoading: boolean = true;
  searchQuery: string = '';
  selectedCategory: string = 'all';
  sortBy: string = 'title';
  sortOrder: 'asc' | 'desc' = 'asc';
  
  categories: string[] = [];
  // Category carousel properties
  categoryScrollPosition = 0;
  categoryScrollStep = 200;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Check for category query parameter
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
        console.log('Category from URL:', this.selectedCategory);
      }
      this.loadBooks();
    });
  }

  async loadBooks(): Promise<void> {
    try {
      console.log('BookListComponent: Starting to load books...');
      this.isLoading = true;
      
      // If a specific category is selected, load books from that category
      if (this.selectedCategory !== 'all') {
        console.log('Loading books for category:', this.selectedCategory);
        this.bookService.getBooksByCategory(this.selectedCategory.toLowerCase()).subscribe(books => {
          console.log('BookListComponent: Received category books:', books);
          this.books = books.filter(book => book.isActive);
          console.log('BookListComponent: Filtered active books:', this.books.length);
          this.extractCategories();
          this.applyFilters();
          this.isLoading = false;
        });
      } else {
        // Load all books
        await this.bookService.loadBooks();
        
        this.bookService.books$.subscribe(books => {
          console.log('BookListComponent: Received all books:', books);
          this.books = books.filter(book => book.isActive);
          console.log('BookListComponent: Filtered active books:', this.books.length);
          this.extractCategories();
          this.applyFilters();
          this.isLoading = false;
        });
      }
    } catch (error) {
      console.error('BookListComponent: Error loading books:', error);
      this.isLoading = false;
    }
  }

  extractCategories(): void {
    const categorySet = new Set<string>();
    this.books.forEach(book => {
      if (book.category) {
        categorySet.add(book.category);
      }
    });
    this.categories = Array.from(categorySet).sort();
  }

  applyFilters(): void {
    let filtered = [...this.books];

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(book => book.category === this.selectedCategory);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let valueA: any, valueB: any;

      switch (this.sortBy) {
        case 'title':
          valueA = a.title.toLowerCase();
          valueB = b.title.toLowerCase();
          break;
        case 'author':
          valueA = a.author.toLowerCase();
          valueB = b.author.toLowerCase();
          break;
        case 'price':
          valueA = a.price;
          valueB = b.price;
          break;
        case 'rating':
          valueA = a.rating;
          valueB = b.rating;
          break;
        case 'publishedDate':
          valueA = new Date(a.publishedDate);
          valueB = new Date(b.publishedDate);
          break;
        default:
          valueA = a.title.toLowerCase();
          valueB = b.title.toLowerCase();
      }

      if (valueA < valueB) {
        return this.sortOrder === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    this.filteredBooks = filtered;
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.applyFilters();
  }

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

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.onCategoryChange();
  }

  getStarsArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  truncateDescription(description: string, maxLength: number = 150): string {
    if (!description) return 'No description available';
    return description.length > maxLength 
      ? description.substring(0, maxLength) + '...'
      : description;
  }

  formatPrice(price: number): string {
    return price > 0 ? `$${price.toFixed(2)}` : 'Free';
  }

  getPublishedYear(date: Date | string): string {
    return new Date(date).getFullYear().toString();
  }

  onImageError(event: any): void {
    event.target.src = 'assets/images/no-book-cover.jpg';
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

  // Check if book is in cart
  isInCart(bookId: string): boolean {
    return this.cartService.isInCart(bookId);
  }

  // Get quantity of book in cart
  getBookQuantity(bookId: string): number {
    return this.cartService.getBookQuantity(bookId);
  }
}
