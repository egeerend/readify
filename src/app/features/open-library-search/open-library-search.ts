import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { OpenLibraryService, OpenLibraryBook } from '../../core/services/open-library.service';
import { BookService, Book } from '../../core/services/book.service';
import { CartService } from '../../core/services/cart.service';
import { PricingService } from '../../core/services/pricing.service';
import { CurrencySelectorComponent } from '../../shared/currency-selector/currency-selector';

@Component({
  selector: 'app-open-library-search',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencySelectorComponent],
  templateUrl: './open-library-search.html',
  styleUrls: ['./open-library-search.scss']
})
export class OpenLibrarySearchComponent implements OnInit {
  searchQuery: string = '';
  searchType: 'general' | 'title' | 'author' | 'subject' = 'general';
  searchResults: OpenLibraryBook[] = [];
  isLoading: boolean = false;
  error: string = '';
  importingBooks: Set<string> = new Set();
  hasSearched: boolean = false; // Track if user has actually searched
  private searchSubject = new Subject<string>(); // For debouncing

  constructor(
    private openLibraryService: OpenLibraryService,
    private bookService: BookService,
    private cartService: CartService,
    private pricingService: PricingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Set up debounced search
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(term => term.length >= 2)
    ).subscribe(searchTerm => {
      // Only auto-search if user hasn't manually searched yet
      if (!this.hasSearched) {
        this.performSearch();
      }
    });

    // Check for query parameters from category navigation
    this.route.queryParams.subscribe(params => {
      if (params['query'] && params['type']) {
        this.searchQuery = params['query'];
        this.searchType = params['type'] as 'general' | 'title' | 'author' | 'subject';
        // Automatically search when coming from category
        this.searchBooks();
      }
    });
  }

  /**
   * Handle search input changes (for debouncing)
   */
  onSearchInput(): void {
    this.error = ''; // Clear error while typing
    if (this.searchQuery.trim()) {
      this.searchSubject.next(this.searchQuery);
    }
  }

  /**
   * Search books based on the selected criteria (called by button click)
   */
  searchBooks(): void {
    this.hasSearched = true; // Mark that user has manually searched
    this.performSearch();
  }

  /**
   * Perform the actual search operation
   */
  private performSearch(): void {
    if (!this.searchQuery.trim()) {
      this.error = 'Please enter a search query';
      return;
    }

    this.isLoading = true;
    this.error = '';
    this.searchResults = [];

    let searchObservable;
    
    switch (this.searchType) {
      case 'author':
        searchObservable = this.openLibraryService.searchByAuthor(this.searchQuery);
        break;
      case 'subject':
        searchObservable = this.openLibraryService.searchBySubject(this.searchQuery);
        break;
      case 'title':
        searchObservable = this.openLibraryService.searchBooks(`title:${this.searchQuery}`);
        break;
      default:
        searchObservable = this.openLibraryService.searchBooks(this.searchQuery);
    }

    searchObservable.subscribe({
      next: (response) => {
        this.searchResults = response.docs || [];
        this.isLoading = false;
        // Only show "no results" if user has actually searched (not just typing)
        if (this.searchResults.length === 0 && this.hasSearched) {
          this.error = 'No books found for your search query';
        }
      },
      error: (error: any) => {
        console.error('Search error:', error);
        this.error = 'Failed to search books. Please try again.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Import a book from Open Library to local database
   */
  async importBook(openLibraryBook: OpenLibraryBook): Promise<void> {
    const bookKey = openLibraryBook.key;
    if (this.importingBooks.has(bookKey)) {
      return; // Already importing
    }

    this.importingBooks.add(bookKey);

    try {
      const book = await this.bookService.importBookFromOpenLibrary(openLibraryBook).toPromise();
      console.log(`Book imported successfully:`, book);
      
      // Show success message (you might want to use a toast service)
      alert(`Book "${openLibraryBook.title}" imported successfully!`);
    } catch (error) {
      console.error('Import error:', error);
      alert(`Failed to import book: ${error}`);
    } finally {
      this.importingBooks.delete(bookKey);
    }
  }

  /**
   * Get the display authors string
   */
  getAuthorsString(authors?: string[]): string {
    return authors?.join(', ') || 'Unknown Author';
  }

  /**
   * Get the book cover image URL
   */
  getCoverImage(openLibraryBook: OpenLibraryBook): string {
    return this.openLibraryService.getCoverImageUrl(openLibraryBook.cover_i, openLibraryBook.cover_edition_key);
  }

  /**
   * Get formatted published date
   */
  getPublishedDate(publishedYear?: number): string {
    return publishedYear?.toString() || 'Unknown';
  }

  /**
   * Get ISBN from Open Library book
   */
  getISBN(openLibraryBook: OpenLibraryBook): string {
    return openLibraryBook.isbn?.[0] || 'N/A';
  }

  /**
   * Get categories string
   */
  getCategoriesString(subjects?: string[]): string {
    return subjects?.slice(0, 3).join(', ') || 'General';
  }

  /**
   * Check if a book is currently being imported
   */
  isImporting(bookKey: string): boolean {
    return this.importingBooks.has(bookKey);
  }

  /**
   * Handle image load errors
   */
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/no-book-cover.jpg';
  }

  /**
   * Clear error message
   */
  clearError(): void {
    this.error = '';
  }

  /**
   * Clear search results and query
   */
  clearSearch(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.error = '';
  }

  // Cart functionality
  async addToCart(book: OpenLibraryBook, event?: Event): Promise<void> {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    
    // Convert OpenLibraryBook to Book format
    const bookToAdd: Book = this.convertToBook(book);
    await this.cartService.addToCart(bookToAdd);
  }

  // Check if book is in cart
  isInCart(book: OpenLibraryBook): boolean {
    const bookId = this.generateBookId(book);
    return this.cartService.isInCart(bookId);
  }

  // Get book quantity in cart
  getBookQuantity(book: OpenLibraryBook): number {
    const bookId = this.generateBookId(book);
    return this.cartService.getBookQuantity(bookId);
  }

  // Generate random price for Open Library books with currency conversion
  generatePrice(book: OpenLibraryBook): number {
    // Generate a price based on book properties for consistency
    const basePrice = 10;
    const titleLength = book.title?.length || 10;
    const yearFactor = book.first_publish_year ? (2024 - book.first_publish_year) * 0.1 : 1;
    const editionFactor = book.edition_count ? Math.min(book.edition_count * 0.5, 5) : 1;
    
    let priceInUSD = basePrice + (titleLength * 0.2) + yearFactor + editionFactor;
    
    // Round to 2 decimal places and ensure reasonable range
    priceInUSD = Math.round(priceInUSD * 100) / 100;
    priceInUSD = Math.max(5.99, Math.min(priceInUSD, 49.99));
    
    // Convert to current currency using PricingService
    return this.pricingService.convertPrice(priceInUSD);
  }

  // Get current currency symbol for display
  getCurrentCurrencySymbol(): string {
    return this.pricingService.getCurrentCurrency().symbol;
  }

  // Convert OpenLibraryBook to Book
  private convertToBook(openLibraryBook: OpenLibraryBook): Book {
    return {
      id: this.generateBookId(openLibraryBook),
      title: openLibraryBook.title || 'Unknown Title',
      author: this.getAuthorsString(openLibraryBook.author_name),
      isbn: this.getISBN(openLibraryBook),
      category: openLibraryBook.subject?.[0] || 'General',
      description: `A book from Open Library. Published in ${openLibraryBook.first_publish_year || 'Unknown'}.`,
      price: this.generatePrice(openLibraryBook),
      originalPrice: this.generatePrice(openLibraryBook) * 1.2,
      coverImage: this.getCoverImage(openLibraryBook),
      rating: openLibraryBook.ratings_average || 4.0,
      isFeatured: false,
      isBestseller: (openLibraryBook.ratings_count || 0) > 100,
      isNew: (openLibraryBook.first_publish_year || 0) > 2020,
      stock: 50,
      language: 'English',
      pageCount: 200,
      publisher: openLibraryBook.publisher?.[0] || 'Unknown Publisher',
      publishedDate: this.getPublishedDate(openLibraryBook.first_publish_year),
      reviewCount: openLibraryBook.ratings_count || 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  // Generate consistent book ID
  private generateBookId(book: OpenLibraryBook): string {
    if (book.key) {
      return book.key.replace('/works/', 'ol-');
    }
    // Fallback ID generation
    const title = book.title?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().slice(0, 20) || 'unknown';
    const author = book.author_name?.[0]?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().slice(0, 15) || 'unknown';
    return `ol-${title}-${author}`;
  }

  // Navigate to book detail page
  viewBookDetail(book: OpenLibraryBook, event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const bookId = this.generateBookId(book);
    this.router.navigate(['/books', bookId]);
  }
}
