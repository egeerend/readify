import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  isRegistering = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      if (this.isRegistering) {
        await this.authService.register(this.email, this.password, this.firstName, this.lastName);
        this.successMessage = 'Account created successfully! Welcome to Readify!';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      } else {
        await this.authService.signIn(this.email, this.password);
        this.successMessage = 'Welcome back!';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    } finally {
      this.isLoading = false;
    }
  }

  toggleMode() {
    this.isRegistering = !this.isRegistering;
    this.errorMessage = '';
    this.successMessage = '';
    this.email = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
  }
}