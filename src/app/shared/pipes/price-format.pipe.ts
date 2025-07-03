import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { PricingService, Currency } from '../../core/services/pricing.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'priceFormat',
  standalone: true,
  pure: false // Make it impure so it updates when currency changes
})
export class PriceFormatPipe implements PipeTransform, OnDestroy {
  private currentCurrency: Currency | null = null;
  private subscription?: Subscription;

  constructor(private pricingService: PricingService) {
    this.subscription = this.pricingService.currency$.subscribe(currency => {
      this.currentCurrency = currency;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  transform(priceInUSD: number | null | undefined): string {
    // Handle missing or invalid price values
    if (priceInUSD === null || priceInUSD === undefined || isNaN(priceInUSD)) {
      return 'Price not available';
    }

    if (!this.currentCurrency) {
      return `$${priceInUSD.toFixed(2)}`;
    }

    const convertedPrice = priceInUSD * this.currentCurrency.rate;
    
    // Format based on currency
    switch (this.currentCurrency.code) {
      case 'EUR':
        return `${convertedPrice.toFixed(2)}€`;
      case 'TRY':
        return `₺${convertedPrice.toFixed(2)}`;
      case 'USD':
      default:
        return `$${convertedPrice.toFixed(2)}`;
    }
  }
}
