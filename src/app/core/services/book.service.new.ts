import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, catchError, of } from 'rxjs';
import { OpenLibraryService } from './open-library.service';

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

  constructor(private openLibraryService: OpenLibraryService) {}

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

  // Get fallback static books
  private getFallbackBooks(): Book[] {
    const staticBooks = [
      {
        id: 'fallback-1',
        openLibraryId: 'OL82563W',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A classic American novel set in the Jazz Age.',
        price: 12.99,
        category: 'Fiction',
        coverImage: 'https://covers.openlibrary.org/b/id/8225261-M.jpg',
        rating: 4.2,
        reviewCount: 1500,
        stock: 25,
        isActive: true,
        isFeatured: true,
        isBestseller: true,
        isNew: false,
        publishedDate: '1925',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['classic', 'american', 'jazz age'],
        pageCount: 180,
        publisher: 'Scribner',
        language: 'English'
      },
      {
        id: 'fallback-2',
        openLibraryId: 'OL82564W',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A gripping tale of racial injustice and childhood innocence.',
        price: 13.99,
        category: 'Fiction',
        coverImage: 'https://covers.openlibrary.org/b/id/8227691-M.jpg',
        rating: 4.5,
        reviewCount: 2000,
        stock: 30,
        isActive: true,
        isFeatured: true,
        isBestseller: true,
        isNew: false,
        publishedDate: '1960',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['classic', 'social justice', 'coming of age'],
        pageCount: 281,
        publisher: 'J.B. Lippincott & Co.',
        language: 'English'
      },
      {
        id: 'fallback-3',
        openLibraryId: 'OL82565W',
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian social science fiction novel.',
        price: 14.99,
        category: 'Fiction',
        coverImage: 'https://covers.openlibrary.org/b/id/7222246-M.jpg',
        rating: 4.4,
        reviewCount: 1800,
        stock: 20,
        isActive: true,
        isFeatured: false,
        isBestseller: true,
        isNew: false,
        publishedDate: '1949',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dystopian', 'political', 'classic'],
        pageCount: 328,
        publisher: 'Secker & Warburg',
        language: 'English'
      },
      {
        id: 'fallback-4',
        openLibraryId: 'OL82566W',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A romantic novel of manners.',
        price: 11.99,
        category: 'Romance',
        coverImage: 'https://covers.openlibrary.org/b/id/8509161-M.jpg',
        rating: 4.3,
        reviewCount: 1200,
        stock: 18,
        isActive: true,
        isFeatured: true,
        isBestseller: false,
        isNew: false,
        publishedDate: '1813',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['romance', 'classic', 'british'],
        pageCount: 432,
        publisher: 'T. Egerton',
        language: 'English'
      },
      {
        id: 'fallback-5',
        openLibraryId: 'OL82567W',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'A controversial novel about teenage rebellion.',
        price: 13.50,
        category: 'Fiction',
        coverImage: 'https://covers.openlibrary.org/b/id/8494321-M.jpg',
        rating: 3.8,
        reviewCount: 900,
        stock: 15,
        isActive: true,
        isFeatured: false,
        isBestseller: true,
        isNew: false,
        publishedDate: '1951',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['coming of age', 'controversial', 'american'],
        pageCount: 277,
        publisher: 'Little, Brown and Company',
        language: 'English'
      },
      {
        id: 'fallback-6',
        openLibraryId: 'OL82568W',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'An epic high-fantasy novel.',
        price: 18.99,
        category: 'Fiction',
        coverImage: 'https://covers.openlibrary.org/b/id/8225261-M.jpg',
        rating: 4.6,
        reviewCount: 2500,
        stock: 12,
        isActive: true,
        isFeatured: true,
        isBestseller: true,
        isNew: false,
        publishedDate: '1954',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['fantasy', 'epic', 'adventure'],
        pageCount: 1216,
        publisher: 'George Allen & Unwin',
        language: 'English'
      }
    ];

    return staticBooks;
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
