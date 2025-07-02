import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'admin' | 'user';
  isActive: boolean;
  createdAt: Date;
  lastLoginAt?: Date;
  totalOrders: number;
  totalSpent: number;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedUser: User | null = null;
  showUserDetails = false;
  searchTerm = '';
  selectedRole = '';
  selectedStatus = '';
  sortBy = 'createdAt';
  sortDirection = 'desc';
  loading = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.loading = true;
    try {
      // In a real app, this would fetch from a user service
      this.users = [
        {
          id: '1',
          email: 'john.doe@example.com',
          displayName: 'John Doe',
          photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
          role: 'user',
          isActive: true,
          createdAt: new Date('2023-01-15'),
          lastLoginAt: new Date('2024-01-20'),
          totalOrders: 12,
          totalSpent: 245.99
        },
        {
          id: '2',
          email: 'jane.smith@example.com',
          displayName: 'Jane Smith',
          photoURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
          role: 'user',
          isActive: true,
          createdAt: new Date('2023-02-20'),
          lastLoginAt: new Date('2024-01-19'),
          totalOrders: 8,
          totalSpent: 189.50
        },
        {
          id: '3',
          email: 'admin@readify.com',
          displayName: 'Admin User',
          photoURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
          role: 'admin',
          isActive: true,
          createdAt: new Date('2022-12-01'),
          lastLoginAt: new Date('2024-01-21'),
          totalOrders: 0,
          totalSpent: 0
        },
        {
          id: '4',
          email: 'bob.wilson@example.com',
          displayName: 'Bob Wilson',
          role: 'user',
          isActive: false,
          createdAt: new Date('2023-05-10'),
          lastLoginAt: new Date('2023-11-15'),
          totalOrders: 3,
          totalSpent: 67.25
        },
        {
          id: '5',
          email: 'alice.brown@example.com',
          displayName: 'Alice Brown',
          photoURL: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
          role: 'user',
          isActive: true,
          createdAt: new Date('2023-03-08'),
          lastLoginAt: new Date('2024-01-18'),
          totalOrders: 15,
          totalSpent: 312.75
        }
      ];
      this.filterUsers();
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      this.loading = false;
    }
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           user.displayName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      const matchesStatus = !this.selectedStatus || 
                           (this.selectedStatus === 'active' && user.isActive) ||
                           (this.selectedStatus === 'inactive' && !user.isActive);
      return matchesSearch && matchesRole && matchesStatus;
    });
    
    this.sortUsers();
  }

  sortUsers() {
    this.filteredUsers.sort((a, b) => {
      let aValue = a[this.sortBy as keyof User];
      let bValue = b[this.sortBy as keyof User];
      
      if (aValue === undefined) aValue = '';
      if (bValue === undefined) bValue = '';
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  onSearch() {
    this.filterUsers();
  }

  onRoleFilter() {
    this.filterUsers();
  }

  onStatusFilter() {
    this.filterUsers();
  }

  onSort() {
    this.sortUsers();
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortUsers();
  }

  viewUserDetails(user: User) {
    this.selectedUser = user;
    this.showUserDetails = true;
  }

  closeUserDetails() {
    this.selectedUser = null;
    this.showUserDetails = false;
  }

  async toggleUserStatus(user: User) {
    if (confirm(`Are you sure you want to ${user.isActive ? 'deactivate' : 'activate'} ${user.displayName}?`)) {
      try {
        user.isActive = !user.isActive;
        // In a real app, this would update the user in the database
        console.log(`User ${user.displayName} ${user.isActive ? 'activated' : 'deactivated'}`);
      } catch (error) {
        console.error('Error updating user status:', error);
        // Revert the change if there's an error
        user.isActive = !user.isActive;
      }
    }
  }

  async deleteUser(user: User) {
    if (user.role === 'admin') {
      alert('Cannot delete admin users');
      return;
    }
    
    if (confirm(`Are you sure you want to delete ${user.displayName}? This action cannot be undone.`)) {
      try {
        this.users = this.users.filter(u => u.id !== user.id);
        this.filterUsers();
        console.log(`User ${user.displayName} deleted`);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  }

  async promoteToAdmin(user: User) {
    if (confirm(`Are you sure you want to promote ${user.displayName} to admin?`)) {
      try {
        user.role = 'admin';
        // In a real app, this would update the user role in the database
        console.log(`User ${user.displayName} promoted to admin`);
      } catch (error) {
        console.error('Error promoting user:', error);
        user.role = 'user'; // Revert on error
      }
    }
  }

  async demoteFromAdmin(user: User) {
    if (confirm(`Are you sure you want to demote ${user.displayName} from admin?`)) {
      try {
        user.role = 'user';
        // In a real app, this would update the user role in the database
        console.log(`User ${user.displayName} demoted from admin`);
      } catch (error) {
        console.error('Error demoting user:', error);
        user.role = 'admin'; // Revert on error
      }
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  getUserStatusColor(user: User): string {
    if (!user.isActive) return 'status-inactive';
    if (user.role === 'admin') return 'status-admin';
    return 'status-active';
  }

  getDefaultAvatar(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=100`;
  }

  // Statistics methods
  getTotalUsers(): number {
    return this.users.length;
  }

  getActiveUsers(): number {
    return this.users.filter(u => u.isActive).length;
  }

  getAdminUsers(): number {
    return this.users.filter(u => u.role === 'admin').length;
  }

  // Image handling
  onImageError(event: Event, user: User) {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = this.getDefaultAvatar(user.displayName);
    }
  }

  // Role helper methods
  isUserRole(user: User): boolean {
    return user.role === 'user';
  }

  isAdminRole(user: User): boolean {
    return user.role === 'admin';
  }

  getRoleDisplayName(user: User): string {
    return user.role === 'admin' ? '👑 Admin' : '👤 User';
  }

  // Status helper methods
  getStatusDisplay(user: User): string {
    return user.isActive ? 'Active' : 'Inactive';
  }

  getStatusButtonClass(user: User): string {
    return user.isActive ? 'btn-warning' : 'btn-success';
  }

  getStatusButtonTitle(user: User): string {
    return user.isActive ? 'Deactivate User' : 'Activate User';
  }

  getStatusIcon(user: User): string {
    return user.isActive ? '⏸️' : '▶️';
  }

  getStatusButtonText(user: User): string {
    return user.isActive ? 'Deactivate User' : 'Activate User';
  }

  getModalStatusClass(user: User): string {
    return user.isActive ? 'warning' : 'success';
  }

  // Sorting helper methods
  getSortDirectionSymbol(): string {
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  // Filtering helper methods
  hasActiveFilters(): boolean {
    return !!(this.searchTerm || this.selectedRole || this.selectedStatus);
  }

  hasNoActiveFilters(): boolean {
    return !this.hasActiveFilters();
  }

  getEmptyStateMessage(): string {
    if (this.hasActiveFilters()) {
      return "Try adjusting your filters to see more results.";
    }
    return "No users found. This is unexpected!";
  }
}
