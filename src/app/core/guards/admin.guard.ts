import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.currentUserProfile$.pipe(
      take(1),
      map(profile => {
        if (profile?.role === 'admin') {
          return true;
        } else {
          // Redirect to home if not admin
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
