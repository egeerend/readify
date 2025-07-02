import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
  duration?: number; // Auto-hide after duration (milliseconds)
  persistent?: boolean; // Don't auto-hide
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [];
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  
  notifications$ = this.notificationsSubject.asObservable();

  // Show a notification
  show(notification: Omit<Notification, 'id'>): string {
    const id = this.generateId();
    const fullNotification: Notification = {
      id,
      duration: 5000, // Default 5 seconds
      ...notification
    };

    this.notifications.push(fullNotification);
    this.notificationsSubject.next([...this.notifications]);

    // Auto-hide after duration if not persistent
    if (!fullNotification.persistent && fullNotification.duration) {
      setTimeout(() => {
        this.hide(id);
      }, fullNotification.duration);
    }

    return id;
  }

  // Hide a specific notification
  hide(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notificationsSubject.next([...this.notifications]);
  }

  // Clear all notifications
  clearAll(): void {
    this.notifications = [];
    this.notificationsSubject.next([]);
  }

  // Convenience methods
  success(title: string, message: string, duration?: number): string {
    return this.show({ type: 'success', title, message, duration });
  }

  info(title: string, message: string, duration?: number): string {
    return this.show({ type: 'info', title, message, duration });
  }

  warning(title: string, message: string, duration?: number): string {
    return this.show({ type: 'warning', title, message, duration });
  }

  error(title: string, message: string, persistent?: boolean): string {
    return this.show({ type: 'error', title, message, persistent });
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
