import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PricingConfig {
  basePrices: {
    fiction: number;
    programming: number;
    science: number;
    history: number;
    biography: number;
    business: number;
    philosophy: number;
    psychology: number;
    art: number;
    health: number;
    education: number;
    religion: number;
    [key: string]: number;
  };
  modifiers: {
    bestseller: number;
    featured: number;
    newBook: number;
    pageCount: {
      under200: number;
      between200And400: number;
      between400And600: number;
      over600: number;
    };
    publishedYear: {
      current: number;
      recent: number; // last 3 years
      older: number;  // more than 3 years
    };
    authorPopularity: {
      famous: number;
      known: number;
      unknown: number;
    };
  };
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Exchange rate to USD
}

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  private currentCurrency = new BehaviorSubject<Currency>({
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    rate: 1.0
  });

  public currency$ = this.currentCurrency.asObservable();

  private currencies: Currency[] = [
    { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.0 },
    { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.85 },
    { code: 'TRY', symbol: '₺', name: 'Turkish Lira', rate: 27.50 }
  ];

  private pricingConfig: PricingConfig = {
    basePrices: {
      fiction: 12.99,
      programming: 45.99,
      science: 35.99,
      history: 18.99,
      biography: 22.99,
      business: 28.99,
      philosophy: 16.99,
      psychology: 24.99,
      art: 29.99,
      health: 19.99,
      education: 39.99,
      religion: 15.99,
      general: 14.99
    },
    modifiers: {
      bestseller: 1.3,    // 30% increase
      featured: 1.15,     // 15% increase
      newBook: 1.1,       // 10% increase
      pageCount: {
        under200: 0.8,        // 20% decrease
        between200And400: 1.0, // no change
        between400And600: 1.2, // 20% increase
        over600: 1.4          // 40% increase
      },
      publishedYear: {
        current: 1.2,  // 20% increase for current year
        recent: 1.1,   // 10% increase for recent books
        older: 0.9     // 10% decrease for older books
      },
      authorPopularity: {
        famous: 1.5,   // 50% increase
        known: 1.2,    // 20% increase
        unknown: 1.0   // no change
      }
    }
  };

  constructor() {
    // Load saved currency from localStorage
    const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency) {
      const currency = this.currencies.find(c => c.code === savedCurrency);
      if (currency) {
        this.currentCurrency.next(currency);
      }
    }
  }

  /**
   * Calculate automated price for a book based on various factors
   */
  calculateBookPrice(bookData: {
    category: string;
    isBestseller?: boolean;
    isFeatured?: boolean;
    isNew?: boolean;
    pageCount?: number;
    publishedDate?: string;
    author?: string;
  }): number {
    // Start with base category price
    const category = bookData.category?.toLowerCase() || 'general';
    let price = this.pricingConfig.basePrices[category] || this.pricingConfig.basePrices['general'];

    // Apply bestseller modifier
    if (bookData.isBestseller) {
      price *= this.pricingConfig.modifiers.bestseller;
    }

    // Apply featured modifier
    if (bookData.isFeatured) {
      price *= this.pricingConfig.modifiers.featured;
    }

    // Apply new book modifier
    if (bookData.isNew) {
      price *= this.pricingConfig.modifiers.newBook;
    }

    // Apply page count modifier
    if (bookData.pageCount) {
      if (bookData.pageCount < 200) {
        price *= this.pricingConfig.modifiers.pageCount.under200;
      } else if (bookData.pageCount <= 400) {
        price *= this.pricingConfig.modifiers.pageCount.between200And400;
      } else if (bookData.pageCount <= 600) {
        price *= this.pricingConfig.modifiers.pageCount.between400And600;
      } else {
        price *= this.pricingConfig.modifiers.pageCount.over600;
      }
    }

    // Apply publication year modifier
    if (bookData.publishedDate) {
      const publishYear = new Date(bookData.publishedDate).getFullYear();
      const currentYear = new Date().getFullYear();
      const yearsOld = currentYear - publishYear;

      if (yearsOld === 0) {
        price *= this.pricingConfig.modifiers.publishedYear.current;
      } else if (yearsOld <= 3) {
        price *= this.pricingConfig.modifiers.publishedYear.recent;
      } else {
        price *= this.pricingConfig.modifiers.publishedYear.older;
      }
    }

    // Apply author popularity modifier (simplified - you could enhance this)
    if (bookData.author) {
      const famousAuthors = ['Stephen King', 'J.K. Rowling', 'Dan Brown', 'John Grisham', 'Agatha Christie'];
      const knownAuthors = ['Malcolm Gladwell', 'Yuval Noah Harari', 'Jordan Peterson'];
      
      if (famousAuthors.some(author => bookData.author!.includes(author))) {
        price *= this.pricingConfig.modifiers.authorPopularity.famous;
      } else if (knownAuthors.some(author => bookData.author!.includes(author))) {
        price *= this.pricingConfig.modifiers.authorPopularity.known;
      }
    }

    // Round to 2 decimal places
    return Math.round(price * 100) / 100;
  }

  /**
   * Convert price to current selected currency
   */
  convertPrice(usdPrice: number): number {
    const currentCurrency = this.currentCurrency.value;
    const convertedPrice = usdPrice * currentCurrency.rate;
    return Math.round(convertedPrice * 100) / 100;
  }

  /**
   * Format price with currency symbol
   */
  formatPrice(usdPrice: number): string {
    const currentCurrency = this.currentCurrency.value;
    const convertedPrice = this.convertPrice(usdPrice);
    
    // Format based on currency
    switch (currentCurrency.code) {
      case 'EUR':
        return `${convertedPrice.toFixed(2)}${currentCurrency.symbol}`;
      case 'TRY':
        return `${convertedPrice.toFixed(2)} ${currentCurrency.symbol}`;
      default:
        return `${currentCurrency.symbol}${convertedPrice.toFixed(2)}`;
    }
  }

  /**
   * Get all available currencies
   */
  getCurrencies(): Currency[] {
    return this.currencies;
  }

  /**
   * Get current currency
   */
  getCurrentCurrency(): Currency {
    return this.currentCurrency.value;
  }

  /**
   * Set current currency
   */
  setCurrency(currencyCode: string): void {
    const currency = this.currencies.find(c => c.code === currencyCode);
    if (currency) {
      this.currentCurrency.next(currency);
      localStorage.setItem('selectedCurrency', currencyCode);
    }
  }

  /**
   * Update exchange rates (in a real app, this would fetch from an API)
   */
  updateExchangeRates(rates: { [currencyCode: string]: number }): void {
    this.currencies.forEach(currency => {
      if (rates[currency.code]) {
        currency.rate = rates[currency.code];
      }
    });
    
    // Update current currency if it was affected
    const currentCurrency = this.getCurrentCurrency();
    if (rates[currentCurrency.code]) {
      this.currentCurrency.next({ ...currentCurrency, rate: rates[currentCurrency.code] });
    }
  }

  /**
   * Get pricing configuration for admin panel
   */
  getPricingConfig(): PricingConfig {
    return { ...this.pricingConfig };
  }

  /**
   * Update pricing configuration
   */
  updatePricingConfig(config: Partial<PricingConfig>): void {
    this.pricingConfig = { ...this.pricingConfig, ...config };
    // In a real app, you'd save this to backend
    localStorage.setItem('pricingConfig', JSON.stringify(this.pricingConfig));
  }

  /**
   * Reset pricing configuration to defaults
   */
  resetToDefaults(): void {
    this.pricingConfig = {
      basePrices: {
        fiction: 12.99,
        programming: 45.99,
        science: 35.99,
        history: 18.99,
        biography: 22.99,
        business: 28.99,
        philosophy: 16.99,
        psychology: 24.99,
        art: 29.99,
        health: 19.99,
        education: 39.99,
        religion: 15.99,
        general: 14.99
      },
      modifiers: {
        bestseller: 1.3,    
        featured: 1.15,     
        newBook: 1.1,       
        pageCount: {
          under200: 0.8,        
          between200And400: 1.0, 
          between400And600: 1.2, 
          over600: 1.4          
        },
        publishedYear: {
          current: 1.2,  
          recent: 1.1,   
          older: 0.9     
        },
        authorPopularity: {
          famous: 1.5,   
          known: 1.2,    
          unknown: 1.0   
        }
      }
    };
    
    // Clear localStorage
    localStorage.removeItem('pricingConfig');
  }
}
