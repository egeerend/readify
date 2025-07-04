# 📚 Readify - Modern Angular Bookstore

A sophisticated, full-featured bookstore application built with Angular 18 and Firebase, featuring a complete shopping cart system with user authentication and cross-device synchronization.

![Angular](https://img.shields.io/badge/Angular-18-red)
![Firebase](https://img.shields.io/badge/Firebase-9-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![SCSS](https://img.shields.io/badge/SCSS-1.69-pink)

## ✨ Features

### 🛒 Shopping Cart System
- **Firebase Integration**: Cart data synced across devices per user account
- **Real-time Updates**: Live cart count and total in header
- **Smart Sync**: Merges local cart with Firebase on login
- **Fallback Support**: localStorage for anonymous users
- **Visual Indicators**: Shows sync status (cloud/local storage)

### 🔐 User Authentication  
- **Firebase Auth**: Secure user registration and login
- **User Profiles**: Complete user management with Firestore
- **Admin Panel**: Role-based admin access for management
- **Session Management**: Persistent authentication across sessions

### 📖 Book Management
- **Dynamic Catalog**: Comprehensive book listing and categorization
- **Search & Filter**: Advanced search with category filtering
- **Book Details**: Detailed book information pages
- **Cover Images**: Smart image loading with fallbacks
- **Ratings System**: Star ratings and reviews

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Smooth Animations**: CSS transitions and hover effects
- **Toast Notifications**: User feedback with beautiful notifications
- **Loading States**: Professional loading indicators
- **Error Handling**: Graceful error handling with user feedback

### 📱 Cross-Platform
- **Progressive Web App**: Works on desktop and mobile
- **Offline Capable**: Local storage fallbacks
- **Fast Loading**: Optimized bundle size and lazy loading
- **SEO Ready**: Server-side rendering ready structure

## 🌐 Live Demo

**[🚀 View Live Application](https://egeerend.github.io/readify/)**

The application is deployed and fully functional on GitHub Pages. You can access all features including:
- User authentication and profile management
- Book browsing and searching
- Shopping cart functionality
- Admin panel (for authorized users)
- Responsive design on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/egeerend/readify.git
   cd readify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - **Copy your Firebase configuration:**
     1. Go to Project Settings → General → Your apps
     2. Click the web app config icon (`</>`)
     3. Copy the config object values
     4. Replace the values in `src/app/core/firebase.config.ts`:
     
   ```typescript
   // src/app/core/firebase.config.ts
   const firebaseConfig = {
     apiKey: "your-api-key-here",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.firebasestorage.app",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id",
     measurementId: "your-measurement-id"
   };
   ```

   **⚠️ Security Note**: Never commit your actual Firebase keys to GitHub. For production deployment, use environment variables or GitHub Secrets.

4. **Run the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/                     # Core services and guards
│   │   ├── services/            # Business logic services
│   │   │   ├── auth.service.ts  # Authentication
│   │   │   ├── cart.service.ts  # Shopping cart with Firebase
│   │   │   ├── book.service.ts  # Book management
│   │   │   └── notification.service.ts # Toast notifications
│   │   ├── guards/              # Route guards
│   │   └── firebase.config.ts   # Firebase configuration
│   ├── features/                # Feature modules
│   │   ├── home/               # Landing page
│   │   ├── cart/               # Shopping cart
│   │   ├── book-list/          # Book catalog
│   │   ├── book-detail/        # Book details
│   │   ├── login/              # Authentication
│   │   └── admin/              # Admin panel
│   ├── shared/                 # Shared components
│   │   ├── header/             # Navigation header
│   │   ├── footer/             # Page footer
│   │   ├── notifications/      # Toast notifications
│   │   └── pipes/              # Custom pipes
│   └── assets/                 # Static assets
```

## 🔧 Technologies Used

### Frontend
- **Angular 18**: Latest Angular framework with standalone components
- **TypeScript 5**: Strong typing and modern JavaScript features
- **SCSS**: Advanced styling with variables and mixins
- **RxJS**: Reactive programming for data streams

### Backend & Database
- **Firebase Auth**: User authentication and authorization
- **Firestore**: NoSQL database for cart and user data
- **Firebase Hosting**: (Optional) For deployment
- **Open Library API**: Book data and cover images from [OpenLibrary.org](https://openlibrary.org)

### Development Tools
- **Angular CLI**: Project scaffolding and build tools
- **Prettier**: Code formatting
- **Jasmine/Karma**: Testing framework

## 📚 **Data Sources**

This application uses the **[Open Library API](https://openlibrary.org/developers/api)** to fetch book data, cover images, and metadata. Open Library is an open, editable library catalog, building towards a web page for every book ever published.

**Credits**: 
- **Book Data**: Provided by [OpenLibrary.org](https://openlibrary.org) - Internet Archive's open library project
- **Cover Images**: Served via Open Library Covers API
- **Search Functionality**: Powered by Open Library Search API

**Open Library API Endpoints Used:**
- `https://openlibrary.org/search.json` - Book search
- `https://covers.openlibrary.org/b/id/{cover_id}-L.jpg` - Cover images
- `https://openlibrary.org/works/{work_id}.json` - Book details

## 🔥 Key Features Implementation

### Firebase Cart Sync
```typescript
// Smart cart synchronization
- Anonymous: localStorage only
- Logged in: Firestore + real-time sync
- Login: Merge local → Firebase
- Logout: Save to localStorage
```

### Real-time Updates
```typescript
// Observable pattern for live updates
cart$ = this.cartService.cart$.pipe(
  map(items => items.reduce((count, item) => count + item.quantity, 0))
);
```

### Smart Error Handling
```typescript
// Graceful Firebase fallbacks
try {
  await this.saveToFirebase(cart);
} catch (error) {
  this.saveToLocalStorage(cart); // Fallback
  this.showNotification('Working offline');
}
```

## 📊 Database Schema

### Firestore Collections

#### Users Collection (`/users/{userId}`)
```typescript
{
  uid: string;
  email: string;
  displayName?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  lastLoginAt: Date;
  preferences: {
    favoriteGenres: string[];
    newsletter: boolean;
  };
}
```

#### Carts Collection (`/carts/{userId}`)
```typescript
{
  items: CartItem[];
  updatedAt: Date;
  totalItems: number;
  totalPrice: number;
}
```

## 🚀 Deployment

### GitHub Pages (Current Deployment)
This app is deployed using GitHub Pages with the `angular-cli-ghpages` tool:

```bash
# Build for production
ng build --configuration production

# Deploy to GitHub Pages
npm install -g angular-cli-ghpages
npx angular-cli-ghpages --dir=dist/readify/browser
```

**Live Demo**: [https://egeerend.github.io/readify/](https://egeerend.github.io/readify/)

### Deployment Features
- ✅ **Production Build**: Optimized bundle with tree-shaking
- ✅ **Automatic Deployment**: Direct to GitHub Pages
- ✅ **Custom Domain Ready**: Configure custom domain in GitHub settings
- ✅ **404 Fallback**: SPA routing support with 404.html
- ✅ **Jekyll Bypass**: .nojekyll file for proper asset serving

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

### Environment Variables for Production

For production deployment, use environment variables instead of hardcoded Firebase config:

1. **For GitHub Actions/CI/CD**, add these secrets to your repository:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_MEASUREMENT_ID`

2. **For local production builds**, create `.env` file:
   ```env
   FIREBASE_API_KEY=your-api-key
   FIREBASE_AUTH_DOMAIN=your-domain.firebaseapp.com
   FIREBASE_PROJECT_ID=your-project-id
   # ... other config values
   ```

### Other Platforms
- **Vercel**: Connect GitHub repo for auto-deployment
- **Netlify**: Drag & drop dist folder  
- **GitHub Pages**: Use GitHub Actions for CI/CD

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] Payment integration (Stripe/PayPal)
- [ ] Email notifications for orders
- [ ] Advanced search with filters
- [ ] Book recommendations
- [ ] Wishlist functionality
- [ ] Order history and tracking
- [ ] Multi-language support
- [ ] Dark theme mode

## 🐛 Known Issues

- Cart sync notification may appear briefly on page refresh
- Book images may take time to load on slow connections

## 💡 Performance

- Lazy loading for route modules
- OnPush change detection strategy
- Optimized bundle size (~1MB initial)
- Image optimization and fallbacks

## 📞 Support

For support, create an issue on GitHub at https://github.com/egeerend/readify/issues

## 🙏 **Credits & Acknowledgments**

- **[OpenLibrary.org](https://openlibrary.org)** - Providing free access to millions of books and their metadata through their open API
- **[Internet Archive](https://archive.org)** - Supporting the Open Library project and digital preservation
- **[Firebase](https://firebase.google.com)** - Backend-as-a-Service for authentication and database
- **[Angular Team](https://angular.io)** - For the amazing Angular framework
- **Book Cover Images** - Sourced from Open Library Covers API

**Special Thanks**: This project uses the Open Library API, which is made possible by the Internet Archive and countless volunteers who contribute to the open knowledge movement.

---

**Built with ❤️ by Egeren**

## 🔐 Security & Environment Setup

### Environment Configuration
This project uses environment files to store sensitive Firebase configuration. 

**⚠️ SECURITY IMPORTANT**: 
- Real Firebase keys are stored in `environment.ts` and `environment.prod.ts`
- These files are **gitignored** and not committed to the repository
- Template files are provided for setup

### Setup Steps:
1. Copy template files:
```bash
cp src/environments/environment.template.ts src/environments/environment.ts
cp src/environments/environment.prod.template.ts src/environments/environment.prod.ts
```

2. Update with your Firebase configuration:
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "your-actual-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
  }
};
```

### GitHub Secrets for CI/CD
For deployment and actions, set these **Repository Secrets**:

1. Go to GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN` 
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_MEASUREMENT_ID`

### Firebase Security Rules
Configure Firestore security rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /carts/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🐛 Recent Issues & Fixes

### Profile Page Issues (December 2024)
**Problem**: Profile page was not displaying for users, multiple template and compilation errors.

**Root Causes**:
1. **AuthGuard blocking access**: Profile route had AuthGuard that redirected unauthenticated users
2. **TypeScript compilation errors**: Optional chaining operators (`?.`) were causing errors within `*ngIf` blocks
3. **Missing null checks**: Template was not handling cases where no user was logged in
4. **Incomplete user flow**: No proper loading states or redirect handling

**Solutions Implemented**:
1. **Removed AuthGuard temporarily** from profile route to allow testing
2. **Added proper authentication handling**: Profile component now redirects to login if user is not authenticated
3. **Fixed TypeScript errors**: Removed unnecessary optional chaining within `*ngIf="user"` blocks
4. **Added loading states**: Added spinner and loading message while checking authentication
5. **Improved user experience**: Added proper error handling and user feedback
6. **Updated currency options**: Limited to USD, EUR, and TRY as requested

**Files Modified**:
- `src/app/app.routes.ts` - Removed AuthGuard from profile route
- `src/app/features/profile/profile.ts` - Added authentication redirect logic
- `src/app/features/profile/profile.html` - Fixed template errors, added loading state
- `src/app/features/profile/profile.scss` - Added loading spinner styles

**Current Status**: ✅ **RESOLVED** - Profile page now loads correctly and handles authentication properly.

---
