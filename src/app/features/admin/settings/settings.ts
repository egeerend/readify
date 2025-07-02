import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PricingService, PricingConfig } from '../../../core/services/pricing.service';

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  supportEmail: string;
  phoneNumber: string;
  address: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  businessHours: string;
  currency: string;
  taxRate: number;
  shippingCost: number;
  freeShippingThreshold: number;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  orderNotifications: boolean;
  userRegistrationNotifications: boolean;
  lowStockNotifications: boolean;
  reviewNotifications: boolean;
  newsletterEnabled: boolean;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  sessionTimeout: number;
  passwordMinLength: number;
  requireSpecialChars: boolean;
  maxLoginAttempts: number;
  accountLockoutDuration: number;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class SettingsComponent implements OnInit {
  activeTab = 'general';
  generalForm: FormGroup;
  notificationForm: FormGroup;
  securityForm: FormGroup;
  pricingForm: FormGroup;
  loading = false;
  saveMessage = '';

  pricingConfig: PricingConfig;

  siteSettings: SiteSettings = {
    siteName: 'Readify',
    siteDescription: 'Your premier destination for books of all genres',
    contactEmail: 'contact@readify.com',
    supportEmail: 'support@readify.com',
    phoneNumber: '+1 (555) 123-4567',
    address: '123 Book Street, Reading City, RC 12345',
    socialMedia: {
      facebook: 'https://facebook.com/readify',
      twitter: 'https://twitter.com/readify',
      instagram: 'https://instagram.com/readify',
      linkedin: 'https://linkedin.com/company/readify'
    },
    businessHours: 'Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM',
    currency: 'USD',
    taxRate: 8.5,
    shippingCost: 5.99,
    freeShippingThreshold: 50
  };

  notificationSettings: NotificationSettings = {
    emailNotifications: true,
    orderNotifications: true,
    userRegistrationNotifications: true,
    lowStockNotifications: true,
    reviewNotifications: false,
    newsletterEnabled: true
  };

  securitySettings: SecuritySettings = {
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordMinLength: 8,
    requireSpecialChars: true,
    maxLoginAttempts: 5,
    accountLockoutDuration: 15
  };

  currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }
  ];

  sessionTimeouts = [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 60, label: '1 hour' },
    { value: 120, label: '2 hours' },
    { value: 240, label: '4 hours' }
  ];

  constructor(
    private fb: FormBuilder,
    private pricingService: PricingService
  ) {
    this.generalForm = this.fb.group({
      siteName: [this.siteSettings.siteName, [Validators.required, Validators.minLength(2)]],
      siteDescription: [this.siteSettings.siteDescription, [Validators.required, Validators.minLength(10)]],
      contactEmail: [this.siteSettings.contactEmail, [Validators.required, Validators.email]],
      supportEmail: [this.siteSettings.supportEmail, [Validators.required, Validators.email]],
      phoneNumber: [this.siteSettings.phoneNumber, Validators.required],
      address: [this.siteSettings.address, Validators.required],
      facebook: [this.siteSettings.socialMedia.facebook, Validators.pattern(/^https?:\/\/.*/)],
      twitter: [this.siteSettings.socialMedia.twitter, Validators.pattern(/^https?:\/\/.*/)],
      instagram: [this.siteSettings.socialMedia.instagram, Validators.pattern(/^https?:\/\/.*/)],
      linkedin: [this.siteSettings.socialMedia.linkedin, Validators.pattern(/^https?:\/\/.*/)],
      businessHours: [this.siteSettings.businessHours, Validators.required],
      currency: [this.siteSettings.currency, Validators.required],
      taxRate: [this.siteSettings.taxRate, [Validators.required, Validators.min(0), Validators.max(100)]],
      shippingCost: [this.siteSettings.shippingCost, [Validators.required, Validators.min(0)]],
      freeShippingThreshold: [this.siteSettings.freeShippingThreshold, [Validators.required, Validators.min(0)]]
    });

    this.notificationForm = this.fb.group({
      emailNotifications: [this.notificationSettings.emailNotifications],
      orderNotifications: [this.notificationSettings.orderNotifications],
      userRegistrationNotifications: [this.notificationSettings.userRegistrationNotifications],
      lowStockNotifications: [this.notificationSettings.lowStockNotifications],
      reviewNotifications: [this.notificationSettings.reviewNotifications],
      newsletterEnabled: [this.notificationSettings.newsletterEnabled]
    });

    this.securityForm = this.fb.group({
      twoFactorAuth: [this.securitySettings.twoFactorAuth],
      sessionTimeout: [this.securitySettings.sessionTimeout, Validators.required],
      passwordMinLength: [this.securitySettings.passwordMinLength, [Validators.required, Validators.min(6), Validators.max(20)]],
      requireSpecialChars: [this.securitySettings.requireSpecialChars],
      maxLoginAttempts: [this.securitySettings.maxLoginAttempts, [Validators.required, Validators.min(3), Validators.max(10)]],
      accountLockoutDuration: [this.securitySettings.accountLockoutDuration, [Validators.required, Validators.min(5), Validators.max(60)]]
    });

    // Initialize pricing config
    this.pricingConfig = this.pricingService.getPricingConfig();
    
    this.pricingForm = this.fb.group({
      // Base prices
      fiction: [this.pricingConfig.basePrices.fiction, [Validators.required, Validators.min(0)]],
      programming: [this.pricingConfig.basePrices.programming, [Validators.required, Validators.min(0)]],
      science: [this.pricingConfig.basePrices.science, [Validators.required, Validators.min(0)]],
      history: [this.pricingConfig.basePrices.history, [Validators.required, Validators.min(0)]],
      biography: [this.pricingConfig.basePrices.biography, [Validators.required, Validators.min(0)]],
      business: [this.pricingConfig.basePrices.business, [Validators.required, Validators.min(0)]],
      philosophy: [this.pricingConfig.basePrices.philosophy, [Validators.required, Validators.min(0)]],
      psychology: [this.pricingConfig.basePrices.psychology, [Validators.required, Validators.min(0)]],
      art: [this.pricingConfig.basePrices.art, [Validators.required, Validators.min(0)]],
      health: [this.pricingConfig.basePrices.health, [Validators.required, Validators.min(0)]],
      education: [this.pricingConfig.basePrices.education, [Validators.required, Validators.min(0)]],
      religion: [this.pricingConfig.basePrices.religion, [Validators.required, Validators.min(0)]],
      general: [this.pricingConfig.basePrices['general'], [Validators.required, Validators.min(0)]],
      
      // Modifiers
      bestsellerModifier: [this.pricingConfig.modifiers.bestseller, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      featuredModifier: [this.pricingConfig.modifiers.featured, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      newBookModifier: [this.pricingConfig.modifiers.newBook, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      
      // Page count modifiers
      under200Pages: [this.pricingConfig.modifiers.pageCount.under200, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      between200And400Pages: [this.pricingConfig.modifiers.pageCount.between200And400, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      between400And600Pages: [this.pricingConfig.modifiers.pageCount.between400And600, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      over600Pages: [this.pricingConfig.modifiers.pageCount.over600, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      
      // Published year modifiers
      currentYear: [this.pricingConfig.modifiers.publishedYear.current, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      recentYears: [this.pricingConfig.modifiers.publishedYear.recent, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      olderBooks: [this.pricingConfig.modifiers.publishedYear.older, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      
      // Author popularity modifiers
      famousAuthor: [this.pricingConfig.modifiers.authorPopularity.famous, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      knownAuthor: [this.pricingConfig.modifiers.authorPopularity.known, [Validators.required, Validators.min(0.1), Validators.max(5)]],
      unknownAuthor: [this.pricingConfig.modifiers.authorPopularity.unknown, [Validators.required, Validators.min(0.1), Validators.max(5)]]
    });
  }

  ngOnInit() {
    // Load settings from backend
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.saveMessage = '';
  }

  async saveGeneralSettings() {
    if (this.generalForm.valid) {
      this.loading = true;
      try {
        const formValue = this.generalForm.value;
        this.siteSettings = {
          ...this.siteSettings,
          siteName: formValue.siteName,
          siteDescription: formValue.siteDescription,
          contactEmail: formValue.contactEmail,
          supportEmail: formValue.supportEmail,
          phoneNumber: formValue.phoneNumber,
          address: formValue.address,
          socialMedia: {
            facebook: formValue.facebook,
            twitter: formValue.twitter,
            instagram: formValue.instagram,
            linkedin: formValue.linkedin
          },
          businessHours: formValue.businessHours,
          currency: formValue.currency,
          taxRate: formValue.taxRate,
          shippingCost: formValue.shippingCost,
          freeShippingThreshold: formValue.freeShippingThreshold
        };

        // In a real app, save to backend
        await this.delay(1000);
        this.saveMessage = 'General settings saved successfully!';
        setTimeout(() => this.saveMessage = '', 3000);
      } catch (error) {
        console.error('Error saving general settings:', error);
        this.saveMessage = 'Error saving settings. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }

  async saveNotificationSettings() {
    this.loading = true;
    try {
      this.notificationSettings = { ...this.notificationForm.value };
      
      // In a real app, save to backend
      await this.delay(1000);
      this.saveMessage = 'Notification settings saved successfully!';
      setTimeout(() => this.saveMessage = '', 3000);
    } catch (error) {
      console.error('Error saving notification settings:', error);
      this.saveMessage = 'Error saving settings. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  async saveSecuritySettings() {
    if (this.securityForm.valid) {
      this.loading = true;
      try {
        this.securitySettings = { ...this.securityForm.value };
        
        // In a real app, save to backend
        await this.delay(1000);
        this.saveMessage = 'Security settings saved successfully!';
        setTimeout(() => this.saveMessage = '', 3000);
      } catch (error) {
        console.error('Error saving security settings:', error);
        this.saveMessage = 'Error saving settings. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }

  async savePricingSettings() {
    if (this.pricingForm.valid) {
      this.loading = true;
      try {
        const formValue = this.pricingForm.value;
        
        // Update pricing configuration
        const updatedConfig: Partial<PricingConfig> = {
          basePrices: {
            ...this.pricingConfig.basePrices,
            fiction: formValue.fiction,
            programming: formValue.programming,
            science: formValue.science,
            history: formValue.history,
            biography: formValue.biography,
            business: formValue.business,
            philosophy: formValue.philosophy,
            psychology: formValue.psychology,
            art: formValue.art,
            health: formValue.health,
            education: formValue.education,
            religion: formValue.religion,
            general: formValue.general
          },
          modifiers: {
            bestseller: formValue.bestsellerModifier,
            featured: formValue.featuredModifier,
            newBook: formValue.newBookModifier,
            pageCount: {
              under200: formValue.under200Pages,
              between200And400: formValue.between200And400Pages,
              between400And600: formValue.between400And600Pages,
              over600: formValue.over600Pages
            },
            publishedYear: {
              current: formValue.currentYear,
              recent: formValue.recentYears,
              older: formValue.olderBooks
            },
            authorPopularity: {
              famous: formValue.famousAuthor,
              known: formValue.knownAuthor,
              unknown: formValue.unknownAuthor
            }
          }
        };

        this.pricingService.updatePricingConfig(updatedConfig);
        this.pricingConfig = this.pricingService.getPricingConfig();

        await this.delay(1000);
        this.saveMessage = 'Pricing settings saved successfully! New books will use updated pricing.';
        setTimeout(() => this.saveMessage = '', 3000);
      } catch (error) {
        console.error('Error saving pricing settings:', error);
        this.saveMessage = 'Error saving pricing settings. Please try again.';
      } finally {
        this.loading = false;
      }
    } else {
      this.saveMessage = 'Please correct the form errors before saving.';
      setTimeout(() => this.saveMessage = '', 3000);
    }
  }

  resetToDefaults() {
    if (confirm('Are you sure you want to reset all settings to default values? This action cannot be undone.')) {
      // Reset forms to default values
      if (this.activeTab === 'general') {
        this.generalForm.reset();
        this.generalForm.patchValue(this.siteSettings);
      } else if (this.activeTab === 'notifications') {
        this.notificationForm.reset();
        this.notificationForm.patchValue(this.notificationSettings);
      } else if (this.activeTab === 'security') {
        this.securityForm.reset();
        this.securityForm.patchValue(this.securitySettings);
      } else if (this.activeTab === 'pricing') {
        // Reset pricing to default configuration
        this.pricingService.resetToDefaults();
        this.pricingConfig = this.pricingService.getPricingConfig();
        this.pricingForm.reset();
        this.pricingForm.patchValue({
          // Base prices
          fiction: this.pricingConfig.basePrices.fiction,
          programming: this.pricingConfig.basePrices.programming,
          science: this.pricingConfig.basePrices.science,
          history: this.pricingConfig.basePrices.history,
          biography: this.pricingConfig.basePrices.biography,
          business: this.pricingConfig.basePrices.business,
          philosophy: this.pricingConfig.basePrices.philosophy,
          psychology: this.pricingConfig.basePrices.psychology,
          art: this.pricingConfig.basePrices.art,
          health: this.pricingConfig.basePrices.health,
          education: this.pricingConfig.basePrices.education,
          religion: this.pricingConfig.basePrices.religion,
          general: this.pricingConfig.basePrices['general'],
          
          // Modifiers
          bestsellerModifier: this.pricingConfig.modifiers.bestseller,
          featuredModifier: this.pricingConfig.modifiers.featured,
          newBookModifier: this.pricingConfig.modifiers.newBook,
          
          // Page count modifiers
          under200Pages: this.pricingConfig.modifiers.pageCount.under200,
          between200And400Pages: this.pricingConfig.modifiers.pageCount.between200And400,
          between400And600Pages: this.pricingConfig.modifiers.pageCount.between400And600,
          over600Pages: this.pricingConfig.modifiers.pageCount.over600,
          
          // Published year modifiers
          currentYear: this.pricingConfig.modifiers.publishedYear.current,
          recentYears: this.pricingConfig.modifiers.publishedYear.recent,
          olderBooks: this.pricingConfig.modifiers.publishedYear.older,
          
          // Author popularity modifiers
          famousAuthor: this.pricingConfig.modifiers.authorPopularity.famous,
          knownAuthor: this.pricingConfig.modifiers.authorPopularity.known,
          unknownAuthor: this.pricingConfig.modifiers.authorPopularity.unknown
        });
      }
      this.saveMessage = 'Settings reset to defaults';
      setTimeout(() => this.saveMessage = '', 3000);
    }
  }

  exportSettings() {
    const settings = {
      general: this.siteSettings,
      notifications: this.notificationSettings,
      security: this.securitySettings
    };
    
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;  
    link.download = 'readify-settings.json';
    link.click();
    
    URL.revokeObjectURL(url);
    this.saveMessage = 'Settings exported successfully!';
    setTimeout(() => this.saveMessage = '', 3000);
  }

  importSettings(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const settings = JSON.parse(e.target?.result as string);
          
          if (settings.general) {
            this.siteSettings = settings.general;
            this.generalForm.patchValue({
              ...settings.general,
              ...settings.general.socialMedia
            });
          }
          
          if (settings.notifications) {
            this.notificationSettings = settings.notifications;
            this.notificationForm.patchValue(settings.notifications);
          }
          
          if (settings.security) {
            this.securitySettings = settings.security;
            this.securityForm.patchValue(settings.security);
          }
          
          this.saveMessage = 'Settings imported successfully!';
          setTimeout(() => this.saveMessage = '', 3000);
        } catch (error) {
          console.error('Error importing settings:', error);
          this.saveMessage = 'Error importing settings. Please check the file format.';
        }
      };
      reader.readAsText(file);
    }
  }

  getFormFieldError(form: FormGroup, fieldName: string): string {
    const field = form.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Invalid email format';
      if (field.errors['minlength']) return `${fieldName} is too short`;
      if (field.errors['min']) return `Value must be greater than minimum`;
      if (field.errors['max']) return `Value exceeds maximum`;
      if (field.errors['pattern']) return `Invalid ${fieldName} format`;
    }
    return '';
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
