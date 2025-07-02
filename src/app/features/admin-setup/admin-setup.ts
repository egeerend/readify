import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-setup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-setup-container">
      <div class="admin-setup-card">
        <h2>🔧 Admin Setup (Development Only)</h2>
        <p>This is a development utility to promote users to admin role.</p>
        
        <div *ngIf="currentUser; else notLoggedIn">
          <p><strong>Current User:</strong> {{ currentUser.email }}</p>
          <p><strong>Current Role:</strong> {{ isAdmin ? 'Admin' : 'User' }}</p>
          
          <div class="actions">
            <button 
              *ngIf="!isAdmin" 
              (click)="promoteToAdmin()" 
              [disabled]="loading"
              class="btn btn-primary">
              {{ loading ? 'Promoting...' : 'Promote to Admin' }}
            </button>
            
            <button 
              *ngIf="isAdmin" 
              (click)="navigateToAdmin()"
              class="btn btn-success">
              Go to Admin Panel
            </button>
            
            <button 
              *ngIf="isAdmin" 
              (click)="demoteFromAdmin()" 
              [disabled]="loading"
              class="btn btn-warning">
              {{ loading ? 'Demoting...' : 'Demote from Admin' }}
            </button>
          </div>
          
          <div *ngIf="message" [class]="messageClass">
            {{ message }}
          </div>
        </div>
        
        <ng-template #notLoggedIn>
          <p>Please log in first to use this utility.</p>
          <button (click)="navigateToLogin()" class="btn btn-primary">Go to Login</button>
        </ng-template>
        
        <div class="warning">
          ⚠️ <strong>Warning:</strong> This component should only be used in development. 
          Remove it before production deployment.
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-setup-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .admin-setup-card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      max-width: 500px;
      width: 100%;
      text-align: center;
    }

    h2 {
      color: #333;
      margin-bottom: 1rem;
    }

    p {
      color: #666;
      margin-bottom: 1rem;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 2rem 0;
    }

    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      display: inline-block;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-primary {
      background: #667eea;
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background: #5a67d8;
    }

    .btn-success {
      background: #48bb78;
      color: white;
    }

    .btn-success:hover {
      background: #38a169;
    }

    .btn-warning {
      background: #ed8936;
      color: white;
    }

    .btn-warning:hover:not(:disabled) {
      background: #dd6b20;
    }

    .warning {
      background: #fed7d7;
      border: 1px solid #feb2b2;
      border-radius: 8px;
      padding: 1rem;
      margin-top: 2rem;
      color: #c53030;
      font-size: 0.9rem;
    }

    .success-message {
      background: #c6f6d5;
      border: 1px solid #9ae6b4;
      color: #276749;
      padding: 0.75rem;
      border-radius: 6px;
      margin-top: 1rem;
    }

    .error-message {
      background: #fed7d7;
      border: 1px solid #feb2b2;
      color: #c53030;
      padding: 0.75rem;
      border-radius: 6px;
      margin-top: 1rem;
    }
  `]
})
export class AdminSetupComponent {
  currentUser: any = null;
  isAdmin = false;
  loading = false;
  message = '';
  messageClass = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Subscribe to current user
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    // Subscribe to user profile to check admin status
    this.authService.currentUserProfile$.subscribe(profile => {
      this.isAdmin = profile?.role === 'admin';
    });
  }

  async promoteToAdmin() {
    if (!this.currentUser) return;

    this.loading = true;
    this.message = '';
    
    try {
      await this.authService.promoteToAdmin(this.currentUser.uid);
      this.message = 'Successfully promoted to admin!';
      this.messageClass = 'success-message';
    } catch (error) {
      this.message = 'Failed to promote to admin. Please try again.';
      this.messageClass = 'error-message';
      console.error('Promotion error:', error);
    } finally {
      this.loading = false;
    }
  }

  async demoteFromAdmin() {
    if (!this.currentUser) return;

    this.loading = true;
    this.message = '';
    
    try {
      await this.authService.demoteFromAdmin(this.currentUser.uid);
      this.message = 'Successfully demoted from admin.';
      this.messageClass = 'success-message';
    } catch (error) {
      this.message = 'Failed to demote from admin. Please try again.';
      this.messageClass = 'error-message';
      console.error('Demotion error:', error);
    } finally {
      this.loading = false;
    }
  }

  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
