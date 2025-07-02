import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout';
import { AdminDashboardComponent } from './dashboard/admin-dashboard';
import { BookManagementComponent } from './book-management/book-management';
import { UserManagementComponent } from './user-management/user-management';
import { AnalyticsComponent } from './analytics/analytics';
import { SettingsComponent } from './settings/settings';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      { 
        path: 'dashboard', 
        component: AdminDashboardComponent 
      },
      { 
        path: 'books', 
        component: BookManagementComponent 
      },
      { 
        path: 'users', 
        component: UserManagementComponent 
      },
      { 
        path: 'analytics', 
        component: AnalyticsComponent 
      },
      { 
        path: 'settings', 
        component: SettingsComponent 
      }
    ]
  }
];
