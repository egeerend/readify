import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingService, Currency } from '../../core/services/pricing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="currency-selector">
      <div class="currency-dropdown" [class.open]="isOpen">
        <button class="currency-toggle" (click)="toggleDropdown()">
          <i class="fas fa-coins" style="color: #ffd700; margin-right: 4px;"></i>
          <span class="currency-symbol">{{ currentCurrency.symbol }}</span>
          <span class="currency-code">{{ currentCurrency.code }}</span>
          <i class="fas fa-chevron-down" [class.rotated]="isOpen"></i>
        </button>
        
        <div class="currency-options" *ngIf="isOpen">
          <button 
            *ngFor="let currency of currencies" 
            class="currency-option"
            [class.active]="currency.code === currentCurrency.code"
            (click)="selectCurrency(currency.code)"
          >
            <span class="currency-symbol">{{ currency.symbol }}</span>
            <span class="currency-info">
              <span class="currency-code">{{ currency.code }}</span>
              <span class="currency-name">{{ currency.name }}</span>
            </span>
            <i *ngIf="currency.code === currentCurrency.code" class="fas fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .currency-selector {
      position: relative;
      z-index: 1000;
    }

    .currency-dropdown {
      position: relative;
    }

    .currency-toggle {
      background: #667eea;
      border: 1px solid #5a67d8;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: #5a67d8;
        border-color: #4c51bf;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .currency-symbol {
        font-weight: 600;
        font-size: 1rem;
        color: #ffd700;
      }

      .currency-code {
        font-size: 0.8rem;
        opacity: 0.95;
      }

      i {
        font-size: 0.7rem;
        transition: transform 0.3s ease;
        
        &.rotated {
          transform: rotate(180deg);
        }
      }
    }

    .currency-options {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      min-width: 200px;
      overflow: hidden;
      margin-top: 8px;
      animation: slideDown 0.2s ease;
      z-index: 1001;
    }

    .currency-option {
      width: 100%;
      padding: 12px 16px;
      border: none;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: background-color 0.2s ease;
      color: #333;

      &:hover {
        background: #f7fafc;
        color: #667eea;
      }

      &.active {
        background: #667eea;
        color: white;
        
        .currency-symbol {
          color: #ffd700;
        }
        
        .currency-code, .currency-name {
          color: white;
        }
      }

      .currency-symbol {
        font-weight: 600;
        font-size: 1.1rem;
        width: 20px;
        text-align: center;
      }

      .currency-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
      }

      .currency-code {
        font-weight: 600;
        font-size: 0.9rem;
      }

      .currency-name {
        font-size: 0.8rem;
        color: #666;
      }

      i {
        color: #4caf50;
        font-size: 0.9rem;
      }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    // For use in header context
    :host-context(.header) .currency-toggle {
      background: rgba(0, 0, 0, 0.1);
      border-color: rgba(0, 0, 0, 0.2);
      color: #333;

      &:hover {
        background: rgba(0, 0, 0, 0.15);
      }
    }
  `]
})
export class CurrencySelectorComponent implements OnInit, OnDestroy {
  currencies: Currency[] = [];
  currentCurrency: Currency = { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.0 };
  isOpen: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private pricingService: PricingService) {}

  ngOnInit(): void {
    this.currencies = this.pricingService.getCurrencies();
    
    this.subscription.add(
      this.pricingService.currency$.subscribe(currency => {
        this.currentCurrency = currency;
      })
    );

    // Close dropdown when clicking outside
    document.addEventListener('click', this.closeDropdown.bind(this));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    document.removeEventListener('click', this.closeDropdown.bind(this));
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectCurrency(currencyCode: string): void {
    this.pricingService.setCurrency(currencyCode);
    this.isOpen = false;
  }

  private closeDropdown(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.currency-selector')) {
      this.isOpen = false;
    }
  }
}
