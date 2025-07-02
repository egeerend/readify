import { Injectable } from '@angular/core';

export interface BookCategory {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  icon?: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private categories: BookCategory[] = [
    {
      id: 'fiction',
      name: 'fiction',
      displayName: 'Fiction',
      description: 'Imaginative and creative literature',
      icon: '📖',
      isActive: true
    },
    {
      id: 'programming',
      name: 'programming',
      displayName: 'Programming',
      description: 'Software development and coding',
      icon: '💻',
      isActive: true
    },
    {
      id: 'science',
      name: 'science',
      displayName: 'Science',
      description: 'Scientific research and discoveries',
      icon: '🔬',
      isActive: true
    },
    {
      id: 'history',
      name: 'history',
      displayName: 'History',
      description: 'Historical events and figures',
      icon: '📜',
      isActive: true
    },
    {
      id: 'business',
      name: 'business',
      displayName: 'Business',
      description: 'Business strategy and entrepreneurship',
      icon: '💼',
      isActive: true
    },
    {
      id: 'mystery',
      name: 'mystery',
      displayName: 'Mystery',
      description: 'Suspense and detective stories',
      icon: '🔍',
      isActive: true
    },
    {
      id: 'fantasy',
      name: 'fantasy',
      displayName: 'Fantasy',
      description: 'Magical and fantastical worlds',
      icon: '🧙‍♂️',
      isActive: true
    },
    {
      id: 'romance',
      name: 'romance',
      displayName: 'Romance',
      description: 'Love stories and relationships',
      icon: '💕',
      isActive: true
    },
    {
      id: 'self-help',
      name: 'self-help',
      displayName: 'Self-Help',
      description: 'Personal development and improvement',
      icon: '🌟',
      isActive: true
    },
    {
      id: 'biography',
      name: 'biography',
      displayName: 'Biography',
      description: 'Life stories of notable people',
      icon: '👤',
      isActive: true
    },
    {
      id: 'technology',
      name: 'technology',
      displayName: 'Technology',
      description: 'Latest tech trends and innovations',
      icon: '⚡',
      isActive: true
    },
    {
      id: 'health',
      name: 'health',
      displayName: 'Health',
      description: 'Health and wellness topics',
      icon: '🏥',
      isActive: true
    },
    {
      id: 'cooking',
      name: 'cooking',
      displayName: 'Cooking',
      description: 'Recipes and culinary arts',
      icon: '👨‍🍳',
      isActive: true
    },
    {
      id: 'travel',
      name: 'travel',
      displayName: 'Travel',
      description: 'Travel guides and adventures',
      icon: '✈️',
      isActive: true
    },
    {
      id: 'art',
      name: 'art',
      displayName: 'Art',
      description: 'Visual arts and creativity',
      icon: '🎨',
      isActive: true
    },
    {
      id: 'more',
      name: 'more',
      displayName: 'More Categories',
      description: 'Click to see all categories',
      icon: '➕',
      isActive: true
    }
  ];

  constructor() {}

  /**
   * Get all active categories
   */
  getAllCategories(): BookCategory[] {
    return this.categories.filter(cat => cat.isActive);
  }

  /**
   * Get category names for display (like in dropdowns)
   */
  getCategoryNames(): string[] {
    return this.getAllCategories().map(cat => cat.displayName);
  }

  /**
   * Get category for API calls (lowercase names)
   */
  getCategoryApiNames(): string[] {
    return this.getAllCategories().map(cat => cat.name);
  }

  /**
   * Get category by ID
   */
  getCategoryById(id: string): BookCategory | undefined {
    return this.categories.find(cat => cat.id === id);
  }

  /**
   * Get category by display name
   */
  getCategoryByDisplayName(displayName: string): BookCategory | undefined {
    return this.categories.find(cat => cat.displayName === displayName);
  }

  /**
   * Add a new category
   */
  addCategory(category: Omit<BookCategory, 'id'>): void {
    const id = category.name.toLowerCase().replace(/\s+/g, '-');
    this.categories.push({
      id,
      ...category
    });
  }

  /**
   * Update an existing category
   */
  updateCategory(id: string, updates: Partial<BookCategory>): boolean {
    const index = this.categories.findIndex(cat => cat.id === id);
    if (index !== -1) {
      this.categories[index] = { ...this.categories[index], ...updates };
      return true;
    }
    return false;
  }

  /**
   * Toggle category active state
   */
  toggleCategory(id: string): boolean {
    const category = this.getCategoryById(id);
    if (category) {
      category.isActive = !category.isActive;
      return true;
    }
    return false;
  }

  /**
   * Get categories for home page display (with icons)
   */
  getHomePageCategories(): BookCategory[] {
    const regularCategories = this.getAllCategories().filter(cat => cat.id !== 'more').slice(0, 7); // Show first 7 regular categories
    const moreCategory = this.getCategoryById('more');
    
    // Add the "More Categories" button at the end
    if (moreCategory) {
      regularCategories.push(moreCategory);
    }
    
    return regularCategories;
  }
}
