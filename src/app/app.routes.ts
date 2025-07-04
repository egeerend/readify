import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { BookListComponent } from './features/book-list/book-list';
import { BookDetailComponent } from './features/book-detail/book-detail';
import { LoginComponent } from './features/login/login';
import { CartComponent } from './features/cart/cart';
import { adminRoutes } from './features/admin/admin.routes';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminSetupComponent } from './features/admin-setup/admin-setup';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { 
    path: 'profile', 
    loadComponent: () => import('./features/profile/profile').then(m => m.ProfileComponent)
  },
  { 
    path: 'profile-test', 
    loadComponent: () => import('./features/profile/profile').then(m => m.ProfileComponent)
  },
  { path: 'books/:id', loadComponent: () => import('./features/book-detail/book-detail').then(m => m.BookDetailComponent) },
  { path: 'search', loadComponent: () => import('./features/open-library-search/open-library-search').then(m => m.OpenLibrarySearchComponent) },
  { path: 'admin-setup', component: AdminSetupComponent }, // Development only - remove in production
  { 
    path: 'admin', 
    children: adminRoutes,
    canActivate: [AdminGuard]
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 page
];