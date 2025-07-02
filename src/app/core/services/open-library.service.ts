import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Book } from './book.service';
import { PricingService } from './pricing.service';

export interface OpenLibrarySearchResponse {
  start: number;
  num_found: number;
  numFound: number;
  numFoundExact: boolean;
  docs: OpenLibraryBook[];
}

export interface OpenLibraryBook {
  key: string;
  title: string;
  author_name?: string[];
  author_key?: string[];
  first_publish_year?: number;
  publisher?: string[];
  isbn?: string[];
  cover_i?: number;
  cover_edition_key?: string;
  edition_count?: number;
  subject?: string[];
  language?: string[];
  has_fulltext?: boolean;
  public_scan_b?: boolean;
  ia?: string[];
  ebook_access?: string;
  ebook_count_i?: number;
  publish_date?: string[];
  publish_year?: number[];
  ratings_average?: number;
  ratings_count?: number;
  want_to_read_count?: number;
  currently_reading_count?: number;
  already_read_count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {
  private readonly baseUrl = 'https://openlibrary.org';
  private readonly searchUrl = `${this.baseUrl}/search.json`;
  private readonly coversUrl = 'https://covers.openlibrary.org';

  constructor(
    private http: HttpClient,
    private pricingService: PricingService
  ) {
    console.log('OpenLibraryService initialized');
  }

  /**
   * Search books using Open Library API
   * @param query Search query
   * @param limit Maximum number of results (default: 40)
   * @param offset Starting index for pagination (default: 0)
   * @param sort Sort order (new, old, random, key, etc.)
   * @returns Observable of Open Library search response
   */
  searchBooks(
    query: string, 
    limit: number = 40, 
    offset: number = 0, 
    sort?: string
  ): Observable<OpenLibrarySearchResponse> {
    let params = new HttpParams()
      .set('q', query)
      .set('limit', limit.toString())
      .set('offset', offset.toString())
      .set('fields', 'key,title,author_name,author_key,first_publish_year,publisher,isbn,cover_i,cover_edition_key,edition_count,subject,language,has_fulltext,public_scan_b,ia,ebook_access,ebook_count_i,publish_date,publish_year,ratings_average,ratings_count,want_to_read_count,currently_reading_count,already_read_count');

    if (sort) {
      params = params.set('sort', sort);
    }

    return this.http.get<OpenLibrarySearchResponse>(this.searchUrl, { params })
      .pipe(
        catchError(error => {
          console.error('Error searching books:', error);
          return of({
            start: 0,
            num_found: 0,
            numFound: 0,
            numFoundExact: true,
            docs: []
          });
        })
      );
  }

  /**
   * Search books by category/subject
   * @param subject Subject/category to search for
   * @param limit Maximum number of results
   * @param offset Starting index for pagination
   * @param sort Sort order
   * @returns Observable of Open Library search response
   */
  searchBySubject(
    subject: string, 
    limit: number = 40, 
    offset: number = 0, 
    sort?: string
  ): Observable<OpenLibrarySearchResponse> {
    return this.searchBooks(`subject:${subject}`, limit, offset, sort);
  }

  /**
   * Search books by author
   * @param author Author name to search for
   * @param limit Maximum number of results
   * @param offset Starting index for pagination
   * @returns Observable of Open Library search response
   */
  searchByAuthor(
    author: string, 
    limit: number = 40, 
    offset: number = 0
  ): Observable<OpenLibrarySearchResponse> {
    return this.searchBooks(`author:${author}`, limit, offset);
  }

  /**
   * Get random books from a category
   * @param subject Subject/category
   * @param limit Number of books to return
   * @returns Observable of random books
   */
  getRandomBooksBySubject(subject: string, limit: number = 10): Observable<OpenLibrarySearchResponse> {
    return this.searchBySubject(subject, limit, 0, 'random');
  }

  /**
   * Get popular/trending books
   * @param limit Number of books to return
   * @returns Observable of popular books
   */
  getPopularBooks(limit: number = 40): Observable<OpenLibrarySearchResponse> {
    return this.searchBooks('*', limit, 0, 'rating desc');
  }

  /**
   * Get new releases
   * @param limit Number of books to return
   * @returns Observable of new books
   */
  getNewReleases(limit: number = 40): Observable<OpenLibrarySearchResponse> {
    return this.searchBooks('*', limit, 0, 'new');
  }

  /**
   * Convert Open Library book to our Book interface
   * @param olBook Open Library book object
   * @returns Book object
   */
  convertToBook(olBook: OpenLibraryBook): Book {
    const bookId = olBook.key?.replace('/works/', '') || olBook.key || Math.random().toString(36).substr(2, 9);
    const publishedYear = olBook.first_publish_year || parseInt(olBook.publish_date?.[0] || '2000');
    const category = this.extractCategory(olBook.subject);
    const isBestseller = (olBook.ratings_count || 0) > 100;
    const isNew = publishedYear > 2020;
    const author = olBook.author_name?.join(', ') || 'Unknown Author';
    
    // Calculate automated price
    const price = this.pricingService.calculateBookPrice({
      category: category,
      isBestseller: isBestseller,
      isFeatured: false,
      isNew: isNew,
      pageCount: 300, // Default page count since Open Library doesn't provide this in search
      publishedDate: publishedYear.toString(),
      author: author
    });
    
    return {
      id: bookId,
      title: olBook.title || 'Unknown Title',
      author: author,
      isbn: olBook.isbn?.[0] || '',
      publishedDate: publishedYear.toString(),
      publisher: olBook.publisher?.[0] || '',
      pageCount: 300, // Default since not available in Open Library search
      category: category,
      description: '', // Not available in search, would need separate API call
      coverImage: this.getCoverImageUrl(olBook.cover_i, olBook.cover_edition_key),
      price: price,
      originalPrice: isBestseller ? price * 1.2 : undefined, // Show discount for bestsellers
      rating: olBook.ratings_average || 0,
      reviewCount: olBook.ratings_count || 0,
      language: olBook.language?.[0] || 'en',
      format: olBook.has_fulltext ? 'Digital' : 'Physical',
      availability: olBook.ebook_access === 'public' ? 'Available' : 'Limited',
      tags: olBook.subject?.slice(0, 5) || [],
      isFeatured: false,
      isBestseller: isBestseller,
      isNew: isNew,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  /**
   * Extract primary category from subjects
   * @param subjects Array of subjects
   * @returns Primary category
   */
  private extractCategory(subjects?: string[]): string {
    if (!subjects || subjects.length === 0) return 'General';
    
    const categoryMap: { [key: string]: string } = {
      'fiction': 'Fiction',
      'fantasy': 'Fiction',
      'science fiction': 'Fiction',
      'mystery': 'Mystery',
      'romance': 'Romance',
      'biography': 'Biography',
      'history': 'History',
      'science': 'Science',
      'self-help': 'Self-Help',
      'business': 'Business',
      'psychology': 'Psychology',
      'philosophy': 'Philosophy',
      'religion': 'Religion',
      'politics': 'Politics',
      'travel': 'Travel',
      'cooking': 'Cooking',
      'art': 'Arts',
      'music': 'Arts',
      'sports': 'Sports',
      'health': 'Health',
      'medicine': 'Science',
      'technology': 'Technology',
      'computer': 'Technology',
      'education': 'Education',
      'children': 'Children',
      'juvenile': 'Children',
      'young adult': 'Young Adult',
      'poetry': 'Poetry',
      'drama': 'Drama',
      'humor': 'Humor',
      'thriller': 'Mystery',
      'crime': 'Mystery',
      'horror': 'Horror'
    };

    // Find the first matching category
    for (const subject of subjects) {
      const lowerSubject = subject.toLowerCase();
      for (const [key, category] of Object.entries(categoryMap)) {
        if (lowerSubject.includes(key)) {
          return category;
        }
      }
    }

    return 'General';
  }

  /**
   * Get cover image URL for a book
   * @param coverId Cover ID
   * @param editionKey Edition key (fallback)
   * @param size Size (S, M, L)
   * @returns Cover image URL
   */
  getCoverImageUrl(coverId?: number, editionKey?: string, size: string = 'M'): string {
    if (coverId) {
      return `${this.coversUrl}/b/id/${coverId}-${size}.jpg`;
    } else if (editionKey) {
      return `${this.coversUrl}/b/olid/${editionKey}-${size}.jpg`;
    }
    return 'assets/images/no-book-cover.jpg';
  }

  /**
   * Get author image URL
   * @param authorKey Author key
   * @param size Size (S, M, L)
   * @returns Author image URL
   */
  getAuthorImageUrl(authorKey: string, size: string = 'M'): string {
    return `${this.coversUrl}/a/olid/${authorKey}-${size}.jpg`;
  }

  /**
   * Convert search response to Book array
   * @param response Open Library search response
   * @returns Array of Book objects
   */
  convertSearchResponseToBooks(response: OpenLibrarySearchResponse): Book[] {
    return response.docs.map(book => this.convertToBook(book));
  }

  /**
   * Get a specific book by its Open Library ID
   * @param id Open Library work ID (e.g., "OL123456W")
   * @returns Observable of book details
   */
  getBookById(id: string): Observable<OpenLibraryBook | null> {
    const workUrl = `${this.baseUrl}/works/${id}.json`;
    
    return this.http.get<any>(workUrl).pipe(
      map(work => {
        if (!work) return null;
        
        // Convert work to OpenLibraryBook format
        const book: OpenLibraryBook = {
          key: work.key,
          title: work.title,
          author_name: work.authors?.map((author: any) => author.name || 'Unknown Author') || ['Unknown Author'],
          first_publish_year: work.first_publish_date ? parseInt(work.first_publish_date.substring(0, 4)) : undefined,
          subject: work.subjects?.slice(0, 10) || [],
          publisher: work.publishers || [],
          isbn: work.isbn_13 || work.isbn_10 || [],
          cover_i: work.covers?.[0],
          ratings_average: 0, // Work endpoint doesn't provide ratings
          ratings_count: 0,
          has_fulltext: false,
          ebook_access: 'no',
          publish_date: work.first_publish_date ? [work.first_publish_date] : [],
          language: work.languages?.map((lang: any) => lang.key?.replace('/languages/', '') || 'en') || ['en'],
          edition_count: work.edition_count || 1
        };
        
        return book;
      }),
      catchError(error => {
        console.error('Error fetching book by ID:', error);
        return of(null);
      })
    );
  }
}
