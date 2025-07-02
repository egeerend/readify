import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface AnalyticsData {
  revenue: {
    total: number;
    monthly: number;
    growth: number;
  };
  sales: {
    total: number;
    monthly: number;
    growth: number;
  };
  users: {
    total: number;
    monthly: number;
    growth: number;
  };
  orders: {
    total: number;
    monthly: number;
    growth: number;
  };
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.scss']
})
export class AnalyticsComponent implements OnInit {
  analyticsData: AnalyticsData = {
    revenue: { total: 15680, monthly: 3420, growth: 12.5 },
    sales: { total: 1247, monthly: 287, growth: 8.3 },
    users: { total: 8950, monthly: 425, growth: 15.2 },
    orders: { total: 342, monthly: 89, growth: 18.7 }
  };

  revenueChartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [2100, 2400, 2800, 3200, 3600, 3420],
      borderColor: '#667eea',
      backgroundColor: 'rgba(102, 126, 234, 0.1)'
    }]
  };

  salesChartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [180, 220, 240, 280, 310, 287],
      borderColor: '#f093fb',
      backgroundColor: 'rgba(240, 147, 251, 0.1)'
    }]
  };

  topCategories = [
    { name: 'Fiction', sales: 156, percentage: 35, color: '#667eea' },
    { name: 'Non-Fiction', sales: 134, percentage: 30, color: '#f093fb' },
    { name: 'Science Fiction', sales: 89, percentage: 20, color: '#4facfe' },
    { name: 'Romance', sales: 67, percentage: 15, color: '#38a169' }
  ];

  topBooks = [
    { title: 'The Great Gatsby', sales: 45, revenue: 675, trend: 'up' },
    { title: 'To Kill a Mockingbird', sales: 38, revenue: 532, trend: 'up' },
    { title: '1984', sales: 34, revenue: 442, trend: 'down' },
    { title: 'Dune', sales: 29, revenue: 464, trend: 'up' },
    { title: 'The Hobbit', sales: 26, revenue: 312, trend: 'stable' }
  ];

  recentActivity = [
    { type: 'sale', message: 'New order placed', amount: 45.99, time: '2 minutes ago' },
    { type: 'user', message: 'New user registered', amount: 0, time: '15 minutes ago' },
    { type: 'sale', message: 'Order completed', amount: 89.50, time: '23 minutes ago' },
    { type: 'review', message: 'New 5-star review', amount: 0, time: '1 hour ago' },
    { type: 'sale', message: 'Large order placed', amount: 234.75, time: '2 hours ago' }
  ];

  selectedPeriod = 'monthly';
  loading = false;

  ngOnInit() {
    this.loadAnalytics();
  }

  loadAnalytics() {
    this.loading = true;
    // Simulate API loading
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  onPeriodChange() {
    this.loadAnalytics();
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  formatPercentage(value: number): string {
    return `${value > 0 ? '+' : ''}${value}%`;
  }

  getTrendIcon(trend: string): string {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '📊';
    }
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'sale': return '💰';
      case 'user': return '👤';
      case 'review': return '⭐';
      default: return '📊';
    }
  }

  getGrowthClass(growth: number): string {
    if (growth > 0) return 'positive';
    if (growth < 0) return 'negative';
    return 'neutral';
  }
}
