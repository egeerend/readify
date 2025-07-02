import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService, Book } from '../../../core/services/book.service';
import { OpenLibrarySearchComponent } from '../../open-library-search/open-library-search';

@Component({
  selector: 'app-book-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OpenLibrarySearchComponent],
  templateUrl: './book-management.html',
  styleUrls: ['./book-management.scss']
})
export class BookManagementComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  bookForm: FormGroup;
  isEditing = false;
  editingBookId: string | null = null;
  showAddForm = false;
  showGoogleSearch = false;
  searchTerm = '';
  selectedCategory = '';
  sortBy = 'title';
  sortDirection = 'asc';
  loading = false;
  
  categories = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Biography',
    'History',
    'Self-Help',
    'Business',
    'Technology',
    'Health',
    'Travel',
    'Children',
    'Young Adult'
  ];

  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      isbn: ['', [Validators.pattern(/^\d{10}(\d{3})?$/)]],  // Made optional
      price: [0, [Validators.required, Validators.min(0)]],  // Allow 0 for free books
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      coverImage: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      isFeatured: [false],
      isBestseller: [false],
      isNew: [false],
      isActive: [true]
    });
  }

  ngOnInit() {
    this.loadBooks();
  }

  async loadBooks() {
    this.loading = true;
    try {
      await this.bookService.loadBooks();
      this.bookService.books$.subscribe(books => {
        this.books = books;
        this.filterBooks();
        this.loading = false;
      });
    } catch (error) {
      console.error('Error loading books:', error);
      this.loading = false;
    }
  }

  filterBooks() {
    this.filteredBooks = this.books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           (book.isbn && book.isbn.includes(this.searchTerm));
      const matchesCategory = !this.selectedCategory || book.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    this.sortBooks();
  }

  sortBooks() {
    this.filteredBooks.sort((a, b) => {
      let aValue = a[this.sortBy as keyof Book];
      let bValue = b[this.sortBy as keyof Book];
      
      // Handle undefined values
      if (aValue === undefined) aValue = '';
      if (bValue === undefined) bValue = '';
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  onSearch() {
    this.filterBooks();
  }

  onCategoryFilter() {
    this.filterBooks();
  }

  onSort() {
    this.sortBooks();
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortBooks();
  }

  showAddBookForm() {
    this.showAddForm = true;
    this.isEditing = false;
    this.editingBookId = null;
    this.bookForm.reset();
  }

  editBook(book: Book) {
    this.showAddForm = true;
    this.isEditing = true;
    this.editingBookId = book.id || null;
    this.bookForm.patchValue(book);
  }

  async deleteBook(book: Book) {
    if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
      try {
        await this.bookService.deleteBook(book.id!);
        console.log('Book deleted:', book.title);
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  }

  async onSubmit() {
    if (this.bookForm.valid) {
      const bookData = this.bookForm.value;
      
      try {
        if (this.isEditing && this.editingBookId) {
          // Update existing book
          const bookToUpdate = { ...bookData, id: this.editingBookId };
          await this.bookService.updateBook(bookToUpdate);
          console.log('Book updated');
        } else {
          // Add new book
          const newBookId = await this.bookService.addBook(bookData);
          console.log('Book added with ID:', newBookId);
        }
        
        this.cancelForm();
      } catch (error) {
        console.error('Error saving book:', error);
      }
    }
  }

  cancelForm() {
    this.showAddForm = false;
    this.isEditing = false;
    this.editingBookId = null;
    this.bookForm.reset();
  }

  toggleBookStatus(book: Book, status: 'isFeatured' | 'isBestseller' | 'isNew') {
    book[status] = !book[status];
    // In a real app, this would save to the database
    this.bookService.updateBook(book);
    console.log(`${book.title} ${status} status:`, book[status]);
  }

  getFormFieldError(fieldName: string): string {
    const field = this.bookForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['minlength']) return `${fieldName} is too short`;
      if (field.errors['min']) return `${fieldName} must be greater than 0`;
      if (field.errors['pattern']) return `Invalid ${fieldName} format`;
    }
    return '';
  }

  showOpenLibrarySearch() {
    this.showGoogleSearch = true;
  }

  hideOpenLibrarySearch() {
    this.showGoogleSearch = false;
  }
}
