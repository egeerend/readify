import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-layout">
      <!-- Sidebar Navigation -->
      <nav class="admin-sidebar">
        <div class="sidebar-header">
          <h2>
            <span class="logo-icon">📚</span>
            Readify Admin
          </h2>
        </div>
        
        <ul class="sidebar-menu">
          <li>
            <a routerLink="/admin/dashboard" routerLinkActive="active">
              <span class="menu-icon">📊</span>
              Dashboard
            </a>
          </li>
          <li>
            <a routerLink="/admin/books" routerLinkActive="active">
              <span class="menu-icon">📚</span>
              Book Management
            </a>
          </li>
          <li>
            <a routerLink="/admin/users" routerLinkActive="active">
              <span class="menu-icon">👥</span>
              User Management
            </a>
          </li>
          <li>
            <a routerLink="/admin/analytics" routerLinkActive="active">
              <span class="menu-icon">📈</span>
              Analytics
            </a>
          </li>
          <li>
            <a routerLink="/admin/settings" routerLinkActive="active">
              <span class="menu-icon">⚙️</span>
              Settings
            </a>
          </li>
        </ul>
        
        <div class="sidebar-footer">
          <a href="/" class="back-to-site">
            <span class="menu-icon">🏠</span>
            Back to Site
          </a>
        </div>
      </nav>

      <!-- Main Content Area -->
      <main class="admin-main">
        <!-- Header -->
        <header class="admin-header">
          <div class="header-content">
            <h1>Admin Panel</h1>
            <div class="header-actions">
              <button class="notification-btn" title="Notifications">
                <span class="notification-icon">🔔</span>
                <span class="notification-badge">3</span>
              </button>
              <div class="admin-profile">
                <img src="https://via.placeholder.com/40x40" alt="Admin" class="profile-avatar">
                <span class="profile-name">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Page Content -->
        <div class="admin-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    /* Admin Layout */
    .admin-layout {
      display: flex;
      min-height: 100vh;
      background-color: #f8fafc;
    }

    /* Sidebar */
    .admin-sidebar {
      width: 260px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: 1000;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .sidebar-header h2 {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo-icon {
      font-size: 1.8rem;
    }

    .sidebar-menu {
      flex: 1;
      list-style: none;
      padding: 1rem 0;
      margin: 0;
    }

    .sidebar-menu li {
      margin: 0;
    }

    .sidebar-menu a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.875rem 1.5rem;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;
    }

    .sidebar-menu a:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      border-left-color: rgba(255, 255, 255, 0.5);
    }

    .sidebar-menu a.active {
      background-color: rgba(255, 255, 255, 0.15);
      color: white;
      border-left-color: white;
      font-weight: 500;
    }

    .menu-icon {
      font-size: 1.1rem;
      width: 20px;
      text-align: center;
    }

    .sidebar-footer {
      padding: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .back-to-site {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.875rem;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .back-to-site:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }

    /* Main Content */
    .admin-main {
      flex: 1;
      margin-left: 260px;
      display: flex;
      flex-direction: column;
    }

    /* Header */
    .admin-header {
      background: white;
      padding: 1rem 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
      border-bottom: 1px solid #e2e8f0;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .admin-header h1 {
      margin: 0;
      color: #1a202c;
      font-size: 1.75rem;
      font-weight: 600;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .notification-btn {
      position: relative;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: background-color 0.3s ease;
    }

    .notification-btn:hover {
      background-color: #f7fafc;
    }

    .notification-badge {
      position: absolute;
      top: 0;
      right: 0;
      background: #e53e3e;
      color: white;
      font-size: 0.75rem;
      padding: 0.125rem 0.375rem;
      border-radius: 10px;
      min-width: 18px;
      text-align: center;
    }

    .admin-profile {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem;
      border-radius: 8px;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    .admin-profile:hover {
      background-color: #f7fafc;
    }

    .profile-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .profile-name {
      font-weight: 500;
      color: #2d3748;
    }

    /* Content */
    .admin-content {
      flex: 1;
      padding: 0;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .admin-sidebar {
        width: 220px;
      }
      
      .admin-main {
        margin-left: 220px;
      }
    }

    @media (max-width: 768px) {
      .admin-sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      
      .admin-main {
        margin-left: 0;
      }
      
      .admin-header {
        padding: 1rem;
      }
    }
  `]
})
export class AdminLayoutComponent {
}
