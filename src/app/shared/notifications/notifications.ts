import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, Notification } from '../../core/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notifications-container">
      <div 
        *ngFor="let notification of notifications; trackBy: trackByNotification"
        class="notification"
        [class.success]="notification.type === 'success'"
        [class.info]="notification.type === 'info'"
        [class.warning]="notification.type === 'warning'"
        [class.error]="notification.type === 'error'"
        [@slideIn]
      >
        <div class="notification-icon">
          <span *ngIf="notification.type === 'success'">✅</span>
          <span *ngIf="notification.type === 'info'">ℹ️</span>
          <span *ngIf="notification.type === 'warning'">⚠️</span>
          <span *ngIf="notification.type === 'error'">❌</span>
        </div>
        <div class="notification-content">
          <h4 class="notification-title">{{ notification.title }}</h4>
          <p class="notification-message">{{ notification.message }}</p>
        </div>
        <button 
          class="notification-close"
          (click)="closeNotification(notification.id)"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  `,
  styles: [`
    .notifications-container {
      position: fixed;
      top: 100px;
      right: 20px;
      z-index: 2000;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 350px;
    }

    .notification {
      background: white;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      border-left: 4px solid;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      transition: all 0.3s ease;
      animation: slideIn 0.3s ease-out;

      &.success {
        border-left-color: #2ecc71;
        background: linear-gradient(135deg, #ffffff 0%, #f8fff8 100%);
      }

      &.info {
        border-left-color: #3498db;
        background: linear-gradient(135deg, #ffffff 0%, #f8fcff 100%);
      }

      &.warning {
        border-left-color: #f39c12;
        background: linear-gradient(135deg, #ffffff 0%, #fffdf8 100%);
      }

      &.error {
        border-left-color: #e74c3c;
        background: linear-gradient(135deg, #ffffff 0%, #fff8f8 100%);
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .notification-icon {
      font-size: 1.2rem;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .notification-content {
      flex: 1;
    }

    .notification-title {
      font-size: 0.9rem;
      font-weight: 600;
      margin: 0 0 4px 0;
      color: #333;
    }

    .notification-message {
      font-size: 0.8rem;
      margin: 0;
      color: #666;
      line-height: 1.4;
    }

    .notification-close {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: #999;
      padding: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.2s ease;
      flex-shrink: 0;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: #333;
      }
    }

    @media (max-width: 768px) {
      .notifications-container {
        left: 20px;
        right: 20px;
        top: 80px;
        max-width: none;
      }
    }
  `]
})
export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  private subscription?: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.notifications$.subscribe(
      notifications => this.notifications = notifications
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeNotification(id: string): void {
    this.notificationService.hide(id);
  }

  trackByNotification(index: number, notification: Notification): string {
    return notification.id;
  }
}
