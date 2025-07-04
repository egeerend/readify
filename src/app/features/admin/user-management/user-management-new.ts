import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, UserProfile } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.scss']
})
export class UserManagementComponent implements OnInit {
  users: UserProfile[] = [];
  filteredUsers: UserProfile[] = [];
  selectedUser: UserProfile | null = null;
  showUserDetails = false;
  searchTerm = '';
  selectedRole = '';
  selectedStatus = '';
  sortBy = 'createdAt';
  sortDirection = 'desc';
  loading = false;
  error = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.loading = true;
    this.error = '';
    try {
      this.users = await this.authService.getAllUsers();
      this.filteredUsers = [...this.users];
      this.applyFilters();
    } catch (error: any) {
      console.error('Error loading users:', error);
      this.error = 'Failed to load users. Please try again.';
      // Fallback to mock data for demonstration
      this.loadMockUsers();
    } finally {
      this.loading = false;
    }
  }

  loadMockUsers() {
    // Fallback mock data if Firebase fails
    this.users = [
      {
        uid: '1',
        email: 'john.doe@example.com',
        displayName: 'John Doe',
        photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        role: 'user',
        isActive: true,
        createdAt: new Date('2023-01-15'),
        lastLoginAt: new Date('2024-01-20'),
        firstName: 'John',
        lastName: 'Doe',
        totalOrders: 5,
        totalSpent: 129.99
      },
      {
        uid: '2',
        email: 'admin@readify.com',
        displayName: 'Admin User',
        role: 'admin',
        isActive: true,
        createdAt: new Date('2023-01-01'),
        lastLoginAt: new Date('2024-01-21'),
        firstName: 'Admin',
        lastName: 'User',
        totalOrders: 0,
        totalSpent: 0
      },
      {
        uid: '3',
        email: 'jane.smith@example.com',
        displayName: 'Jane Smith',
        photoURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        role: 'user',
        isActive: true,
        createdAt: new Date('2023-02-20'),
        lastLoginAt: new Date('2024-01-19'),
        firstName: 'Jane',
        lastName: 'Smith',
        totalOrders: 12,
        totalSpent: 284.50
      },
      {
        uid: '4',
        email: 'bob.wilson@example.com',
        displayName: 'Bob Wilson',
        role: 'user',
        isActive: false,
        createdAt: new Date('2023-03-10'),
        lastLoginAt: new Date('2023-12-01'),
        firstName: 'Bob',
        lastName: 'Wilson',
        totalOrders: 2,
        totalSpent: 45.99
      }
    ];
    this.filteredUsers = [...this.users];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      // Search filter
      const searchMatch = !this.searchTerm || 
        user.displayName?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Role filter
      const roleMatch = !this.selectedRole || user.role === this.selectedRole;

      // Status filter
      const statusMatch = !this.selectedStatus || 
        (this.selectedStatus === 'active' && user.isActive) ||
        (this.selectedStatus === 'inactive' && !user.isActive);

      return searchMatch && roleMatch && statusMatch;
    });

    this.sortUsers();
  }

  sortUsers() {
    this.filteredUsers.sort((a, b) => {
      let valueA: any = a[this.sortBy as keyof UserProfile];
      let valueB: any = b[this.sortBy as keyof UserProfile];

      // Handle date comparisons
      if (valueA instanceof Date && valueB instanceof Date) {
        return this.sortDirection === 'asc' ? 
          valueA.getTime() - valueB.getTime() : 
          valueB.getTime() - valueA.getTime();
      }

      // Handle string comparisons
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortDirection === 'asc' ? 
          valueA.localeCompare(valueB) : 
          valueB.localeCompare(valueA);
      }

      // Handle number comparisons
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }

      return 0;
    });
  }

  onSearch() {
    this.applyFilters();
  }

  onRoleFilter() {
    this.applyFilters();
  }

  onStatusFilter() {
    this.applyFilters();
  }

  onSort() {
    this.sortUsers();
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortUsers();
  }

  viewUserDetails(user: UserProfile) {
    this.selectedUser = user;
    this.showUserDetails = true;
  }

  closeUserDetails() {
    this.showUserDetails = false;
    this.selectedUser = null;
  }

  async toggleUserStatus(user: UserProfile) {
    try {
      if (user.isActive) {
        await this.authService.deactivateUser(user.uid);
        user.isActive = false;
      } else {
        await this.authService.reactivateUser(user.uid);
        user.isActive = true;
      }
      this.applyFilters();
    } catch (error) {
      console.error('Error toggling user status:', error);
      alert('Failed to update user status');
    }
  }

  async promoteToAdmin(user: UserProfile) {
    if (confirm(`Are you sure you want to promote ${user.displayName} to admin?`)) {
      try {
        await this.authService.promoteToAdmin(user.uid);
        user.role = 'admin';
        this.applyFilters();
      } catch (error) {
        console.error('Error promoting user:', error);
        alert('Failed to promote user to admin');
      }
    }
  }

  async demoteFromAdmin(user: UserProfile) {
    if (confirm(`Are you sure you want to demote ${user.displayName} from admin?`)) {
      try {
        await this.authService.demoteFromAdmin(user.uid);
        user.role = 'user';
        this.applyFilters();
      } catch (error) {
        console.error('Error demoting user:', error);
        alert('Failed to demote user from admin');
      }
    }
  }

  async deleteUser(user: UserProfile) {
    if (confirm(`Are you sure you want to delete ${user.displayName}? This action cannot be undone.`)) {
      try {
        // For now, just mark as inactive since we don't have a delete method
        await this.authService.deactivateUser(user.uid);
        this.loadUsers(); // Reload users
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    }
  }

  // Helper methods for template
  getTotalUsers(): number {
    return this.users.length;
  }

  getActiveUsers(): number {
    return this.users.filter(user => user.isActive).length;
  }

  getAdminUsers(): number {
    return this.users.filter(user => user.role === 'admin').length;
  }

  getLastLoginFormatted(date?: Date): string {
    if (!date) return 'Never';
    return new Date(date).toLocaleDateString();
  }

  getCreatedAtFormatted(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  getRoleColor(role: string): string {
    return role === 'admin' ? 'admin' : 'user';
  }

  getStatusColor(isActive: boolean): string {
    return isActive ? 'active' : 'inactive';
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getDefaultAvatar(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=100`;
  }

  onImageError(event: Event, user: UserProfile) {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = this.getDefaultAvatar(user.displayName || user.email);
    }
  }

  getRoleDisplayName(user: UserProfile): string {
    return user.role === 'admin' ? '👑 Admin' : '👤 User';
  }

  getStatusDisplay(user: UserProfile): string {
    return user.isActive ? 'Active' : 'Inactive';
  }

  getSortDirectionSymbol(): string {
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  getUserStatusColor(user: UserProfile): string {
    return user.isActive ? 'status-active' : 'status-inactive';
  }

  getStatusButtonClass(user: UserProfile): string {
    return user.isActive ? 'btn-warning' : 'btn-success';
  }

  getStatusButtonTitle(user: UserProfile): string {
    return user.isActive ? 'Deactivate User' : 'Activate User';
  }

  getStatusIcon(user: UserProfile): string {
    return user.isActive ? '🔒' : '🔓';
  }

  isUserRole(user: UserProfile): boolean {
    return user.role === 'user';
  }

  isAdminRole(user: UserProfile): boolean {
    return user.role === 'admin';
  }

  hasActiveFilters(): boolean {
    return !!(this.searchTerm || this.selectedRole || this.selectedStatus);
  }

  hasNoActiveFilters(): boolean {
    return !this.hasActiveFilters();
  }

  getModalStatusClass(user: UserProfile): string {
    return user.isActive ? 'warning' : 'success';
  }

  getStatusButtonText(user: UserProfile): string {
    return user.isActive ? 'Deactivate User' : 'Activate User';
  }

  formatCurrency(amount: number = 0): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
}
