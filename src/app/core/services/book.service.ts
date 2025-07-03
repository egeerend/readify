import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, catchError, of } from 'rxjs';
import { OpenLibraryService } from './open-library.service';
import { PricingService } from './pricing.service';

export interface Book {
  id?: string;
  title: string;
  author: string;
  isbn?: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  stock?: number;
  isActive?: boolean;
  isFeatured: boolean;
  isBestseller: boolean;
  isNew: boolean;
  publishedDate: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
  // Open Library specific fields
  openLibraryId?: string;
  pageCount?: number;
  publisher?: string;
  language?: string;
  format?: string;
  availability?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksSubject = new BehaviorSubject<Book[]>([]);
  public books$ = this.booksSubject.asObservable();
  private currentBooks: Book[] = [];

  constructor(
    private openLibraryService: OpenLibraryService,
    private pricingService: PricingService
  ) {}

  /**
   * Get reliable cover image URL with fallback
   */
  private getReliableCoverUrl(originalUrl: string): string {
    // If the URL is already a fallback, return it
    if (originalUrl.includes('assets/images/no-book-cover.jpg')) {
      return originalUrl;
    }
    
    // For Open Library URLs, ensure they're using HTTPS and the correct format
    if (originalUrl.includes('covers.openlibrary.org')) {
      // Replace HTTP with HTTPS for better reliability
      return originalUrl.replace('http://', 'https://');
    }
    
    return originalUrl;
  }

  /**
   * Get alternative cover image URLs for books
   */
  private getAlternativeCoverUrls(): { [key: string]: string[] } {
    return {
      'The Great Gatsby': [
        'https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg',
        'https://covers.openlibrary.org/b/olid/OL82563W-M.jpg',
        'assets/images/no-book-cover.jpg'
      ],
      'To Kill a Mockingbird': [
        'https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg',
        'https://covers.openlibrary.org/b/olid/OL5735363W-M.jpg',
        'assets/images/no-book-cover.jpg'
      ],
      '1984': [
        'https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg',
        'https://covers.openlibrary.org/b/olid/OL14934393M-M.jpg',
        'assets/images/no-book-cover.jpg'
      ]
    };
  }

  // Load popular/featured books from Open Library API
  async loadBooks(): Promise<void> {
    try {
      console.log('Starting to load books from Open Library API...');
      
      // Show fallback books immediately while loading from API
      this.loadFallbackBooks();
      
      const popularBooksPromise = this.openLibraryService.getPopularBooks(20);
      const randomBooksPromise = this.openLibraryService.searchBooks('*', 20, 0, 'random');
      
      const [popularResponse, randomResponse] = await Promise.all([
        popularBooksPromise.toPromise(),
        randomBooksPromise.toPromise()
      ]);

      const allBooks: Book[] = [];
      
      if (popularResponse) {
        const popularBooks = this.openLibraryService.convertSearchResponseToBooks(popularResponse);
        allBooks.push(...popularBooks);
      }
      
      if (randomResponse) {
        const randomBooks = this.openLibraryService.convertSearchResponseToBooks(randomResponse);
        allBooks.push(...randomBooks);
      }

      // If we got books from the API, replace the fallback books
      if (allBooks.length > 0) {
        // Remove duplicates based on Open Library ID
        const uniqueBooks = allBooks.filter((book, index, self) => 
          index === self.findIndex(b => b.openLibraryId === book.openLibraryId)
        );

        console.log(`Total unique books loaded from API: ${uniqueBooks.length}`);
        this.currentBooks = uniqueBooks;
        this.booksSubject.next(this.currentBooks);
      } else {
        console.log('No books loaded from API, keeping fallback books');
      }
    } catch (error) {
      console.error('Error loading books from Open Library:', error);
      // Fallback books are already loaded
    }
  }

  // Search books using Open Library API
  searchBooks(query: string): Observable<Book[]> {
    return this.openLibraryService.searchBooks(query, 40).pipe(
      map(response => {
        if (response && response.docs) {
          return this.openLibraryService.convertSearchResponseToBooks(response);
        }
        return [];
      }),
      catchError(error => {
        console.error('Error searching books:', error);
        return of([]);
      })
    );
  }

  // Get books by category using Open Library API
  getBooksByCategory(category: string): Observable<Book[]> {
    return this.openLibraryService.searchBySubject(category.toLowerCase(), 40).pipe(
      map(response => {
        if (response && response.docs) {
          return this.openLibraryService.convertSearchResponseToBooks(response);
        }
        return [];
      }),
      catchError(error => {
        console.error('Error getting books by category:', error);
        return of([]);
      })
    );
  }

  // Get random featured books for home page
  async getRandomFeaturedBooks(limitCount: number = 6): Promise<Book[]> {
    try {
      const categories = ['fiction', 'mystery', 'science', 'history', 'biography', 'romance'];
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      
      const response = await this.openLibraryService.getRandomBooksBySubject(randomCategory, limitCount * 2).toPromise();
      
      if (response && response.docs) {
        const books = this.openLibraryService.convertSearchResponseToBooks(response);
        return this.shuffleArray(books).slice(0, limitCount).map(book => {
          return { ...book, isFeatured: true };
        });
      }
    } catch (error) {
      console.error('Error getting random featured books:', error);
    }
    
    // Return fallback books if API fails
    return this.getFallbackBooks().slice(0, limitCount);
  }

  // Get books by a specific book ID
  getBookById(id: string): Observable<Book | null> {
    const book = this.currentBooks.find(b => b.id === id);
    return of(book || null);
  }

  // Get all books (for admin)
  getAllBooks(): Observable<Book[]> {
    return this.books$;
  }

  // Add a new book (admin functionality - stub)
  addBook(book: Book): Observable<Book> {
    console.log('Add book functionality - would integrate with backend');
    return of(book);
  }

  // Update book (admin functionality - stub)
  updateBook(book: Book): Observable<Book> {
    console.log('Update book functionality - would integrate with backend');
    return of(book);
  }

  // Delete book (admin functionality - stub)
  deleteBook(id: string): Observable<boolean> {
    console.log('Delete book functionality - would integrate with backend');
    return of(true);
  }

  // Import book from Open Library (admin functionality)
  importBookFromOpenLibrary(openLibraryBook: any): Observable<Book> {
    const book = this.openLibraryService.convertToBook(openLibraryBook);
    console.log('Importing book from Open Library:', book);
    return of(book);
  }

  /**
   * Calculate automated price for a book
   */
  calculateAutomatedPrice(book: Book): number {
    return this.pricingService.calculateBookPrice({
      category: book.category,
      isBestseller: book.isBestseller,
      isFeatured: book.isFeatured,
      isNew: book.isNew,
      pageCount: book.pageCount,
      publishedDate: book.publishedDate,
      author: book.author
    });
  }

  /**
   * Format price with current currency
   */
  formatPrice(price: number): string {
    return this.pricingService.formatPrice(price);
  }

  // Utility method to shuffle array
  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Load fallback books when API is unavailable
  private loadFallbackBooks(): void {
    const fallbackBooks = this.getFallbackBooks();
    this.currentBooks = fallbackBooks;
    this.booksSubject.next(this.currentBooks);
    console.log(`Loaded ${fallbackBooks.length} fallback books`);
  }

  // Get fallback static books with automated pricing
  private getFallbackBooks(): Book[] {
    const baseBooks = [
      {
        id: 'fallback-1',
        openLibraryId: 'OL82563W',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A classic American novel set in the Jazz Age.',
        category: 'Fiction',
        price: 12.99,
        originalPrice: 15.99,
        coverImage: 'https://covers.openlibrary.org/b/id/8225261-M.jpg',
        rating: 4.2,
        reviewCount: 1500,
        stock: 25,
        isActive: true,
        isFeatured: true,
        isBestseller: true,
        isNew: false,
        publishedDate: '1925-04-10',
        pageCount: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['classic', 'american-literature', 'jazz-age']
      },
      {
        id: 'fallback-2',
        openLibraryId: 'OL5735363W',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A gripping tale of racial injustice and childhood innocence.',
        category: 'Fiction',
        price: 14.99,
        originalPrice: 18.99,
        coverImage: 'https://covers.openlibrary.org/b/id/8227691-M.jpg',
        rating: 4.5,
        reviewCount: 2100,
        stock: 18,
        isActive: true,
        isFeatured: false,
        isBestseller: true,
        isNew: false,
        publishedDate: '1960-07-11',
        pageCount: 376,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['classic', 'social-justice', 'coming-of-age']
      },
      {
        id: 'fallback-3',
        openLibraryId: 'OL14934393M',
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian social science fiction novel and cautionary tale.',
        category: 'Fiction',
        price: 13.99,
        originalPrice: 16.99,
        coverImage: 'https://covers.openlibrary.org/b/id/7222246-M.jpg',
        rating: 4.3,
        reviewCount: 2800,
        stock: 30,
        isActive: true,
        isFeatured: true,
        isBestseller: false,
        isNew: false,
        publishedDate: '1949-06-08',
        pageCount: 328,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dystopian', 'political', 'classic']
      },
      {
        id: 'fallback-4',
        openLibraryId: 'OL8509161M',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        description: 'A handbook of agile software craftsmanship.',
        category: 'Programming',
        price: 39.99,
        originalPrice: 49.99,
        coverImage: 'https://covers.openlibrary.org/b/id/8509161-M.jpg',
        rating: 4.6,
        reviewCount: 890,
        stock: 15,
        isActive: true,
        isFeatured: true,
        isBestseller: false,
        isNew: false,
        publishedDate: '2008-08-01',
        pageCount: 464,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['programming', 'software-engineering', 'best-practices']
      },
      {
        id: 'fallback-5',
        openLibraryId: 'OL8494321M',
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        description: 'A brief history of humankind.',
        category: 'History',
        price: 18.99,
        originalPrice: 24.99,
        coverImage: 'https://covers.openlibrary.org/b/id/8494321-M.jpg',
        rating: 4.4,
        reviewCount: 1200,
        stock: 22,
        isActive: true,
        isFeatured: false,
        isBestseller: true,
        isNew: false,
        publishedDate: '2014-09-04',
        pageCount: 512,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['history', 'anthropology', 'evolution']
      },
      {
        id: 'fallback-6',
        openLibraryId: 'OL8225261M',
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        description: 'Essential JavaScript techniques and best practices.',
        category: 'Programming',
        price: 29.99,
        originalPrice: 35.99,
        coverImage: 'https://covers.openlibrary.org/b/id/8225261-M.jpg',
        rating: 4.1,
        reviewCount: 650,
        stock: 12,
        isActive: true,
        isFeatured: false,
        isBestseller: false,
        isNew: true,
        publishedDate: '2023-01-15',
        pageCount: 176,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['programming', 'javascript', 'web-development']
      }
    ];

    // Calculate automated prices for each book
    return baseBooks.map(book => ({
      ...book,
      price: this.calculateAutomatedPrice(book as Book),
      originalPrice: undefined // Will be set if there are discounts
    }));
  }

  // Get bestseller books
  async getBestsellerBooks(limitCount: number = 5): Promise<Book[]> {
    try {
      const response = await this.openLibraryService.searchBooks('*', limitCount * 2, 0, 'rating desc').toPromise();
      if (response && response.docs) {
        const books = this.openLibraryService.convertSearchResponseToBooks(response);
        return books.slice(0, limitCount).map(book => {
          return { ...book, isBestseller: true };
        });
      }
    } catch (error) {
      console.error('Error getting bestseller books:', error);
    }
    
    return this.getFallbackBooks().filter(book => book.isBestseller).slice(0, limitCount);
  }

  // Get new arrival books
  async getNewArrivalBooks(limitCount: number = 4): Promise<Book[]> {
    try {
      const response = await this.openLibraryService.getNewReleases(limitCount * 2).toPromise();
      if (response && response.docs) {
        const books = this.openLibraryService.convertSearchResponseToBooks(response);
        return books.slice(0, limitCount).map(book => {
          return { ...book, isNew: true };
        });
      }
    } catch (error) {
      console.error('Error getting new arrival books:', error);
    }
    
    return this.getFallbackBooks().slice(0, limitCount);
  }
}
