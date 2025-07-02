import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { BookService } from '../../../core/services/book.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboardComponent implements OnInit {
  
  stats = {
    totalBooks: 0,
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0
  };

  recentActivities: any[] = [];
  topBooks: any[] = [];

  constructor(
    private authService: AuthService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Load statistics and recent activities
    this.stats = {
      totalBooks: 1247,
      totalUsers: 8950,
      totalOrders: 342,
      revenue: 15680
    };

    this.recentActivities = [
      { action: 'New book added', item: 'The Midnight Library', time: '2 hours ago', type: 'book' },
      { action: 'User registered', item: 'john.doe@email.com', time: '3 hours ago', type: 'user' },
      { action: 'Order completed', item: 'Order #12845', time: '5 hours ago', type: 'order' },
      { action: 'Book updated', item: 'Dune - Frank Herbert', time: '1 day ago', type: 'book' },
      { action: 'New review', item: '5-star review for "1984"', time: '1 day ago', type: 'review' }
    ];

    this.topBooks = [
      { title: 'The Great Gatsby', sales: 156, revenue: 2184 },
      { title: 'To Kill a Mockingbird', sales: 134, revenue: 1876 },
      { title: '1984', sales: 128, revenue: 1792 },
      { title: 'Dune', sales: 98, revenue: 1568 },
      { title: 'The Hobbit', sales: 87, revenue: 1044 }
    ];
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'book': return '📚';
      case 'user': return '👤';
      case 'order': return '🛒';
      case 'review': return '⭐';
      default: return '📝';
    }
  }
}
