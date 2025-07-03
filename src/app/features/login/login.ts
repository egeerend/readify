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
  
  // Password reset properties
  showPasswordResetModal = false;
  resetEmail = '';
  resetLoading = false;
  resetSuccessMessage = '';
  resetErrorMessage = '';

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

  // Password reset methods
  openPasswordResetModal() {
    this.showPasswordResetModal = true;
    this.resetEmail = this.email; // Pre-fill with current email if available
    this.resetSuccessMessage = '';
    this.resetErrorMessage = '';
  }

  closePasswordResetModal() {
    this.showPasswordResetModal = false;
    this.resetEmail = '';
    this.resetLoading = false;
    this.resetSuccessMessage = '';
    this.resetErrorMessage = '';
  }

  async sendPasswordReset() {
    if (!this.resetEmail) {
      this.resetErrorMessage = 'Lütfen e-posta adresinizi girin.';
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.resetEmail)) {
      this.resetErrorMessage = 'Geçerli bir e-posta adresi girin.';
      return;
    }

    this.resetLoading = true;
    this.resetErrorMessage = '';
    this.resetSuccessMessage = '';

    try {
      await this.authService.sendPasswordResetEmail(this.resetEmail);
      this.resetSuccessMessage = 'Şifre sıfırlama e-postası gönderildi! E-posta kutunuzu kontrol edin.';
      
      // Auto-close modal after 3 seconds
      setTimeout(() => {
        this.closePasswordResetModal();
      }, 3000);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        this.resetErrorMessage = 'Bu e-posta adresi ile kayıtlı bir hesap bulunamadı.';
      } else if (error.code === 'auth/invalid-email') {
        this.resetErrorMessage = 'Geçersiz e-posta adresi.';
      } else {
        this.resetErrorMessage = 'E-posta gönderilirken hata oluştu: ' + error.message;
      }
    } finally {
      this.resetLoading = false;
    }
  }
}