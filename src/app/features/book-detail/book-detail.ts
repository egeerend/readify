import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService, Book } from '../../core/services/book.service';
import { OpenLibraryService, OpenLibraryBook } from '../../core/services/open-library.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-detail.html',
  styleUrls: ['./book-detail.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  openLibraryBook: OpenLibraryBook | null = null;
  isLoading = true;
  error = '';
  isOpenLibraryBook = false;
  bookId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private openLibraryService: OpenLibraryService,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.bookId = params['id'];
      await this.loadBookDetails();
    });
  }

  async loadBookDetails() {
    this.isLoading = true;
    this.error = '';

    try {
      // Check if it's an Open Library book (starts with 'OL' and ends with 'W' for works, or 'ol-')
      if (this.bookId.startsWith('ol-') || this.bookId.match(/^OL\d+[WMA]$/)) {
        this.isOpenLibraryBook = true;
        await this.loadOpenLibraryBook();
      } else {
        this.isOpenLibraryBook = false;
        await this.loadLocalBook();
      }
    } catch (error) {
      console.error('Error loading book details:', error);
      this.error = 'Failed to load book details';
    } finally {
      this.isLoading = false;
    }
  }

  async loadLocalBook() {
    try {
      this.bookService.getAllBooks().subscribe(books => {
        this.book = books.find((b: Book) => b.id === this.bookId) || null;
        
        if (!this.book) {
          this.error = 'Book not found';
        }
      });
    } catch (error) {
      console.error('Error loading local book:', error);
      this.error = 'Failed to load book details';
    }
  }

  async loadOpenLibraryBook() {
    try {
      // Check if it's a proper Open Library work ID (like OL123456W)
      if (this.bookId.match(/^OL\d+[WMA]$/)) {
        // Get book details directly by ID from Open Library
        const bookData = await this.openLibraryService.getBookById(this.bookId).toPromise();
        if (bookData) {
          this.openLibraryBook = bookData;
        } else {
          this.error = 'Book not found in Open Library';
        }
      } else {
        // Handle legacy 'ol-' prefixed IDs
        const parts = this.bookId.replace('ol-', '').split('-');
        const title = parts[0];
        const author = parts[1];
        
        if (title && title !== 'unknown') {
          // Search for the book to get full details
          const searchResults = await this.openLibraryService.searchBooks(title).toPromise();
          if (searchResults && searchResults.docs && searchResults.docs.length > 0) {
            // Find the best match
            const matchedBook = searchResults.docs.find(book => 
              this.generateBookId(book) === this.bookId
            ) || searchResults.docs[0];
            
            this.openLibraryBook = matchedBook;
          } else {
            this.error = 'Book not found in Open Library';
          }
        } else {
          this.error = 'Invalid book ID';
        }
      }
    } catch (error) {
      console.error('Error loading Open Library book:', error);
      this.error = 'Failed to load book details from Open Library';
    }
  }

  // Generate book ID for Open Library books (same as in open-library service)
  generateBookId(book: OpenLibraryBook): string {
    if (book.key) {
      return book.key.replace('/works/', ''); // This should match what open-library.service generates
    }
    const title = book.title?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().slice(0, 20) || 'unknown';
    const author = book.author_name?.[0]?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().slice(0, 15) || 'unknown';
    return `ol-${title}-${author}`;
  }

  getCoverImage(): string {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      if (this.openLibraryBook.cover_i) {
        return `https://covers.openlibrary.org/b/id/${this.openLibraryBook.cover_i}-L.jpg`;
      }
      if (this.openLibraryBook.isbn && this.openLibraryBook.isbn.length > 0) {
        return `https://covers.openlibrary.org/b/isbn/${this.openLibraryBook.isbn[0]}-L.jpg`;
      }
    } else if (this.book) {
      return this.book.coverImage;
    }
    return '/assets/images/no-book-cover.jpg';
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '/assets/images/no-book-cover.jpg';
  }

  getAuthorsString(authors?: string[]): string {
    if (!authors || authors.length === 0) return 'Unknown Author';
    return authors.slice(0, 3).join(', ');
  }

  getISBN(): string {
    if (this.isOpenLibraryBook && this.openLibraryBook?.isbn && this.openLibraryBook.isbn.length > 0) {
      return this.openLibraryBook.isbn[0];
    } else if (this.book?.isbn) {
      return this.book.isbn;
    }
    return 'N/A';
  }

  getPublisher(): string {
    if (this.isOpenLibraryBook && this.openLibraryBook?.publisher && this.openLibraryBook.publisher.length > 0) {
      return this.openLibraryBook.publisher[0];
    } else if (this.book?.publisher) {
      return this.book.publisher;
    }
    return 'N/A';
  }

  getPublishedYear(): string {
    if (this.isOpenLibraryBook && this.openLibraryBook?.first_publish_year) {
      return this.openLibraryBook.first_publish_year.toString();
    } else if (this.book?.publishedDate) {
      return new Date(this.book.publishedDate).getFullYear().toString();
    }
    return 'N/A';
  }

  getPageCount(): string {
    if (this.isOpenLibraryBook && this.openLibraryBook?.edition_count) {
      return `${this.openLibraryBook.edition_count} editions`;
    } else if (this.book?.pageCount) {
      return `${this.book.pageCount} pages`;
    }
    return 'N/A';
  }

  generatePrice(): number {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      // Generate price based on book attributes (same logic as search component)
      const basePrice = 15;
      let price = basePrice;
      
      if (this.openLibraryBook.ratings_average && this.openLibraryBook.ratings_average > 4) {
        price += 5;
      }
      if (this.openLibraryBook.first_publish_year && this.openLibraryBook.first_publish_year > 2010) {
        price += 3;
      }
      if (this.openLibraryBook.subject && this.openLibraryBook.subject.length > 5) {
        price += 2;
      }
      
      return Math.round(price * 100) / 100;
    } else if (this.book) {
      return this.book.price;
    }
    return 0;
  }

  getRating(): number {
    if (this.isOpenLibraryBook && this.openLibraryBook?.ratings_average) {
      return this.openLibraryBook.ratings_average;
    } else if (this.book?.rating) {
      return this.book.rating;
    }
    return 0;
  }

  getRatingCount(): number {
    if (this.isOpenLibraryBook && this.openLibraryBook?.ratings_count) {
      return this.openLibraryBook.ratings_count;
    } else if (this.book?.reviewCount) {
      return this.book.reviewCount;
    }
    return 0;
  }

  getDescription(): string {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      // For Open Library books, use available metadata to create description
      const parts: string[] = [];
      if (this.openLibraryBook.subject && this.openLibraryBook.subject.length > 0) {
        parts.push(`Categories: ${this.openLibraryBook.subject.slice(0, 3).join(', ')}`);
      }
      if (this.openLibraryBook.edition_count) {
        parts.push(`Available in ${this.openLibraryBook.edition_count} editions`);
      }
      return parts.length > 0 ? parts.join('. ') : 'No description available.';
    } else if (this.book?.description) {
      return this.book.description;
    }
    return 'No description available.';
  }

  async addToCart() {
    try {
      if (this.isOpenLibraryBook && this.openLibraryBook) {
        // Convert Open Library book to Book format for cart
        const cartBook: Book = {
          id: this.bookId,
          title: this.openLibraryBook.title,
          author: this.getAuthorsString(this.openLibraryBook.author_name),
          description: this.getDescription(),
          price: this.generatePrice(),
          category: this.openLibraryBook.subject?.[0] || 'General',
          coverImage: this.getCoverImage(),
          rating: this.getRating(),
          reviewCount: this.getRatingCount(),
          isFeatured: false,
          isBestseller: false,
          isNew: false,
          publishedDate: this.openLibraryBook.first_publish_year?.toString() || '',
          createdAt: new Date(),
          updatedAt: new Date(),
          isbn: this.getISBN(),
          publisher: this.getPublisher(),
          pageCount: this.openLibraryBook.edition_count || 0,
          openLibraryId: this.openLibraryBook.key
        };
        
        await this.cartService.addToCart(cartBook, 1);
      } else if (this.book) {
        await this.cartService.addToCart(this.book, 1);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }

  isInCart(): boolean {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      return this.cartService.isInCart(this.bookId);
    } else if (this.book) {
      return this.cartService.isInCart(this.book.id!);
    }
    return false;
  }

  getCartQuantity(): number {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      return this.cartService.getBookQuantity(this.bookId);
    } else if (this.book) {
      return this.cartService.getBookQuantity(this.book.id!);
    }
    return 0;
  }

  goBack() {
    window.history.back();
  }

  // Helper methods for template
  hasCategories(): boolean {
    return !!(this.book?.category || (this.isOpenLibraryBook && this.openLibraryBook?.subject && this.openLibraryBook.subject.length > 0));
  }

  getCategories(): string[] {
    if (this.book?.category) {
      return [this.book.category];
    }
    if (this.isOpenLibraryBook && this.openLibraryBook?.subject) {
      return this.openLibraryBook.subject.slice(0, 5);
    }
    return [];
  }

  hasLanguage(): boolean {
    return !!(this.book?.language || (this.isOpenLibraryBook && this.openLibraryBook?.language && this.openLibraryBook.language.length > 0));
  }

  getLanguage(): string {
    if (this.book?.language) {
      return this.book.language;
    }
    if (this.isOpenLibraryBook && this.openLibraryBook?.language && this.openLibraryBook.language.length > 0) {
      return this.openLibraryBook.language[0];
    }
    return 'English';
  }
}
