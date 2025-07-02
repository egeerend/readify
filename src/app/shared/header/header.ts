import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { AuthService, UserProfile } from '../../core/services/auth.service';
import { CartService, CartItem } from '../../core/services/cart.service';
import { User } from 'firebase/auth';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencySelectorComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  isMenuOpen = false;
  activeSection = 'home';
  currentUser: User | null = null;
  currentUserProfile: UserProfile | null = null;
  cartItemCount$: Observable<number>;
  private routerSubscription?: Subscription;
  private authSubscription?: Subscription;
  private profileSubscription?: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Subscribe to cart changes to show item count
    this.cartItemCount$ = this.cartService.cart$.pipe(
      filter(() => isPlatformBrowser(this.platformId)),
      // Convert cart items to total count
      map((cartItems: CartItem[]) => cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0))
    );
  }

  ngOnInit() {
    // Listen to route changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkCurrentRoute();
      });

    // Listen to authentication changes
    this.authSubscription = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    // Listen to user profile changes
    this.profileSubscription = this.authService.currentUserProfile$.subscribe(profile => {
      this.currentUserProfile = profile;
    });

    this.checkCurrentRoute();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId) || this.router.url !== '/') {
      return;
    }

    const sections = ['home', 'categories', 'featured', 'bestsellers', 'new-arrivals'];
    const scrollPosition = window.pageYOffset + 100; // Offset for header height

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection = sections[i];
        break;
      }
    }
  }

  checkCurrentRoute() {
    if (this.router.url === '/') {
      // Set initial active section for home page
      setTimeout(() => {
        this.onWindowScroll();
      }, 100);
    } else {
      this.activeSection = '';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // If not on home page, navigate to home first
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 100);
      });
    } else {
      this.performScroll(sectionId);
    }

    // Close mobile menu if open
    this.isMenuOpen = false;
  }

  async signOut() {
    try {
      await this.authService.signOut();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }

  isAdmin(): boolean {
    return this.currentUserProfile?.role === 'admin';
  }

  private performScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update active section immediately
      this.activeSection = sectionId;
    }
  }
}
