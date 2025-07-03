import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  OpenLibrarySearchComponent,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IE6AZ7KO.js";
import {
  AsyncPipe,
  AuthService,
  BookService,
  CartService,
  CommonModule,
  Component,
  HostListener,
  Inject,
  Injectable,
  NavigationEnd,
  NgForOf,
  NgIf,
  NotificationService,
  PLATFORM_ID,
  Pipe,
  PricingService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Subscription,
  __async,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  filter,
  isPlatformBrowser,
  map,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  take,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GNTFI3NV.js";

// src/app/shared/pipes/price-format.pipe.ts
var PriceFormatPipe = class _PriceFormatPipe {
  pricingService;
  currentCurrency = null;
  subscription;
  constructor(pricingService) {
    this.pricingService = pricingService;
    this.subscription = this.pricingService.currency$.subscribe((currency) => {
      this.currentCurrency = currency;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  transform(priceInUSD) {
    if (!this.currentCurrency) {
      return `$${priceInUSD.toFixed(2)}`;
    }
    const convertedPrice = priceInUSD * this.currentCurrency.rate;
    switch (this.currentCurrency.code) {
      case "EUR":
        return `${convertedPrice.toFixed(2)}\u20AC`;
      case "TRY":
        return `\u20BA${convertedPrice.toFixed(2)}`;
      case "USD":
      default:
        return `$${convertedPrice.toFixed(2)}`;
    }
  }
  static \u0275fac = function PriceFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PriceFormatPipe)(\u0275\u0275directiveInject(PricingService, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "priceFormat", type: _PriceFormatPipe, pure: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PriceFormatPipe, [{
    type: Pipe,
    args: [{
      name: "priceFormat",
      standalone: true,
      pure: false
      // Make it impure so it updates when currency changes
    }]
  }], () => [{ type: PricingService }], null);
})();

// src/app/core/services/category.service.ts
var CategoryService = class _CategoryService {
  categories = [
    {
      id: "fiction",
      name: "fiction",
      displayName: "Fiction",
      description: "Imaginative and creative literature",
      icon: "\u{1F4D6}",
      isActive: true
    },
    {
      id: "programming",
      name: "programming",
      displayName: "Programming",
      description: "Software development and coding",
      icon: "\u{1F4BB}",
      isActive: true
    },
    {
      id: "science",
      name: "science",
      displayName: "Science",
      description: "Scientific research and discoveries",
      icon: "\u{1F52C}",
      isActive: true
    },
    {
      id: "history",
      name: "history",
      displayName: "History",
      description: "Historical events and figures",
      icon: "\u{1F4DC}",
      isActive: true
    },
    {
      id: "business",
      name: "business",
      displayName: "Business",
      description: "Business strategy and entrepreneurship",
      icon: "\u{1F4BC}",
      isActive: true
    },
    {
      id: "mystery",
      name: "mystery",
      displayName: "Mystery",
      description: "Suspense and detective stories",
      icon: "\u{1F50D}",
      isActive: true
    },
    {
      id: "fantasy",
      name: "fantasy",
      displayName: "Fantasy",
      description: "Magical and fantastical worlds",
      icon: "\u{1F9D9}\u200D\u2642\uFE0F",
      isActive: true
    },
    {
      id: "romance",
      name: "romance",
      displayName: "Romance",
      description: "Love stories and relationships",
      icon: "\u{1F495}",
      isActive: true
    },
    {
      id: "self-help",
      name: "self-help",
      displayName: "Self-Help",
      description: "Personal development and improvement",
      icon: "\u{1F31F}",
      isActive: true
    },
    {
      id: "biography",
      name: "biography",
      displayName: "Biography",
      description: "Life stories of notable people",
      icon: "\u{1F464}",
      isActive: true
    },
    {
      id: "technology",
      name: "technology",
      displayName: "Technology",
      description: "Latest tech trends and innovations",
      icon: "\u26A1",
      isActive: true
    },
    {
      id: "health",
      name: "health",
      displayName: "Health",
      description: "Health and wellness topics",
      icon: "\u{1F3E5}",
      isActive: true
    },
    {
      id: "cooking",
      name: "cooking",
      displayName: "Cooking",
      description: "Recipes and culinary arts",
      icon: "\u{1F468}\u200D\u{1F373}",
      isActive: true
    },
    {
      id: "travel",
      name: "travel",
      displayName: "Travel",
      description: "Travel guides and adventures",
      icon: "\u2708\uFE0F",
      isActive: true
    },
    {
      id: "art",
      name: "art",
      displayName: "Art",
      description: "Visual arts and creativity",
      icon: "\u{1F3A8}",
      isActive: true
    },
    {
      id: "more",
      name: "more",
      displayName: "More Categories",
      description: "Click to see all categories",
      icon: "\u2795",
      isActive: true
    }
  ];
  constructor() {
  }
  /**
   * Get all active categories
   */
  getAllCategories() {
    return this.categories.filter((cat) => cat.isActive);
  }
  /**
   * Get category names for display (like in dropdowns)
   */
  getCategoryNames() {
    return this.getAllCategories().map((cat) => cat.displayName);
  }
  /**
   * Get category for API calls (lowercase names)
   */
  getCategoryApiNames() {
    return this.getAllCategories().map((cat) => cat.name);
  }
  /**
   * Get category by ID
   */
  getCategoryById(id) {
    return this.categories.find((cat) => cat.id === id);
  }
  /**
   * Get category by display name
   */
  getCategoryByDisplayName(displayName) {
    return this.categories.find((cat) => cat.displayName === displayName);
  }
  /**
   * Add a new category
   */
  addCategory(category) {
    const id = category.name.toLowerCase().replace(/\s+/g, "-");
    this.categories.push(__spreadValues({
      id
    }, category));
  }
  /**
   * Update an existing category
   */
  updateCategory(id, updates) {
    const index = this.categories.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      this.categories[index] = __spreadValues(__spreadValues({}, this.categories[index]), updates);
      return true;
    }
    return false;
  }
  /**
   * Toggle category active state
   */
  toggleCategory(id) {
    const category = this.getCategoryById(id);
    if (category) {
      category.isActive = !category.isActive;
      return true;
    }
    return false;
  }
  /**
   * Get categories for home page display (with icons)
   */
  getHomePageCategories() {
    const regularCategories = this.getAllCategories().filter((cat) => cat.id !== "more").slice(0, 7);
    const moreCategory = this.getCategoryById("more");
    if (moreCategory) {
      regularCategories.push(moreCategory);
    }
    return regularCategories;
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/home/home.ts
var _c0 = (a0) => ["/books", a0];
function HomeComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function HomeComponent_div_32_Template_div_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCategoryClick(category_r2));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 48);
    \u0275\u0275element(8, "i", 49);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275attribute("data-category-id", category_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r2.icon || "\u{1F4DA}", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fa-arrow-right", category_r2.id !== "more")("fa-th-large", category_r2.id === "more");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.id === "more" ? "View All" : "Explore");
  }
}
function HomeComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading featured books...");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_47_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r5.title);
  }
}
function HomeComponent_div_47_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_47_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "Bestseller");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_47_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_47_div_1_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r6 = ctx.$implicit;
    \u0275\u0275classProp("full", star_r6 === "full")("half", star_r6 === "half")("empty", star_r6 === "empty");
  }
}
function HomeComponent_div_47_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275template(2, HomeComponent_div_47_div_1_div_23_span_2_Template, 2, 6, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getRatingStars(book_r5.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", book_r5.rating, ")");
  }
}
function HomeComponent_div_47_div_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "priceFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const book_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, book_r5.originalPrice));
  }
}
function HomeComponent_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "img", 56);
    \u0275\u0275listener("error", function HomeComponent_div_47_div_1_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageError($event));
    })("load", function HomeComponent_div_47_div_1_Template_img_load_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageLoad($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HomeComponent_div_47_div_1_div_4_Template, 4, 1, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58)(6, "button", 59);
    \u0275\u0275listener("click", function HomeComponent_div_47_div_1_Template_button_click_6_listener($event) {
      const book_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.quickViewBook(book_r5, $event));
    });
    \u0275\u0275element(7, "i", 60);
    \u0275\u0275text(8, " Quick View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 61);
    \u0275\u0275listener("click", function HomeComponent_div_47_div_1_Template_button_click_9_listener($event) {
      const book_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart(book_r5, $event));
    });
    \u0275\u0275element(10, "i", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 62);
    \u0275\u0275template(13, HomeComponent_div_47_div_1_span_13_Template, 2, 0, "span", 63)(14, HomeComponent_div_47_div_1_span_14_Template, 2, 0, "span", 64)(15, HomeComponent_div_47_div_1_span_15_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 66)(17, "h3", 67);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 68);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 69);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, HomeComponent_div_47_div_1_div_23_Template, 5, 2, "div", 70);
    \u0275\u0275elementStart(24, "div", 71)(25, "span", 72);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "priceFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, HomeComponent_div_47_div_1_span_28_Template, 3, 3, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 74)(30, "button", 75);
    \u0275\u0275listener("click", function HomeComponent_div_47_div_1_Template_button_click_30_listener($event) {
      const book_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart(book_r5, $event));
    });
    \u0275\u0275element(31, "i", 49);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const book_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(34, _c0, book_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("display", "block");
    \u0275\u0275property("src", book_r5.coverImage, \u0275\u0275sanitizeUrl)("alt", book_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !book_r5.coverImage);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("btn-success", book_r5.id && ctx_r2.isInCart(book_r5.id));
    \u0275\u0275property("disabled", book_r5.id && ctx_r2.isInCart(book_r5.id))("title", book_r5.id && ctx_r2.isInCart(book_r5.id) ? "Already in cart" : "Add to cart");
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-shopping-cart", !book_r5.id || !ctx_r2.isInCart(book_r5.id))("fa-check", book_r5.id && ctx_r2.isInCart(book_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", book_r5.id && ctx_r2.isInCart(book_r5.id) ? "In Cart" : "Add to Cart", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r5.isFeatured);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r5.isBestseller);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r5.isNew);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", book_r5.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r5.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r5.rating > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 32, book_r5.price));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r5.originalPrice && book_r5.originalPrice > book_r5.price);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-success", book_r5.id && ctx_r2.isInCart(book_r5.id));
    \u0275\u0275property("disabled", book_r5.id && ctx_r2.isInCart(book_r5.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-shopping-cart", !book_r5.id || !ctx_r2.isInCart(book_r5.id))("fa-check", book_r5.id && ctx_r2.isInCart(book_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", book_r5.id && ctx_r2.isInCart(book_r5.id) ? "In Cart" : "Add to Cart", " ");
  }
}
function HomeComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, HomeComponent_div_47_div_1_Template, 33, 36, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.featuredBooks)("ngForTrackBy", ctx_r2.trackByBookId);
  }
}
function HomeComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p", 35);
    \u0275\u0275text(2, "Discover hundreds more books in our collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 36);
    \u0275\u0275text(4, "Show All Featured Books");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_57_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r8 = ctx.$implicit;
    \u0275\u0275classProp("full", star_r8 === "full")("half", star_r8 === "half")("empty", star_r8 === "empty");
  }
}
function HomeComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "img", 88);
    \u0275\u0275listener("error", function HomeComponent_div_57_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 89)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 90)(8, "div", 82);
    \u0275\u0275template(9, HomeComponent_div_57_span_9_Template, 2, 6, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 91);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "priceFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 92);
    \u0275\u0275listener("click", function HomeComponent_div_57_Template_button_click_13_listener($event) {
      const book_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart(book_r9, $event));
    });
    \u0275\u0275element(14, "i", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const book_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, book_r9.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", book_r9.coverImage, \u0275\u0275sanitizeUrl)("alt", book_r9.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r9.author);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getRatingStars(book_r9.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, book_r9.price));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-success", book_r9.id && ctx_r2.isInCart(book_r9.id));
    \u0275\u0275property("disabled", book_r9.id && ctx_r2.isInCart(book_r9.id))("title", book_r9.id && ctx_r2.isInCart(book_r9.id) ? "Already in cart" : "Add to cart");
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-shopping-cart", !book_r9.id || !ctx_r2.isInCart(book_r9.id))("fa-check", book_r9.id && ctx_r2.isInCart(book_r9.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", book_r9.id && ctx_r2.isInCart(book_r9.id) ? "In Cart" : "Add to Cart", " ");
  }
}
function HomeComponent_div_71_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r12 = ctx.$implicit;
    \u0275\u0275classProp("full", star_r12 === "full")("half", star_r12 === "half")("empty", star_r12 === "empty");
  }
}
function HomeComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "img", 93);
    \u0275\u0275listener("error", function HomeComponent_div_71_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "button", 59);
    \u0275\u0275listener("click", function HomeComponent_div_71_Template_button_click_4_listener($event) {
      const book_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.quickViewBook(book_r11, $event));
    });
    \u0275\u0275element(5, "i", 60);
    \u0275\u0275text(6, " Quick View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 61);
    \u0275\u0275listener("click", function HomeComponent_div_71_Template_button_click_7_listener($event) {
      const book_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart(book_r11, $event));
    });
    \u0275\u0275element(8, "i", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 62)(11, "span", 80);
    \u0275\u0275text(12, "New Arrival");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 66)(14, "h3", 67);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 68);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 81)(19, "div", 82);
    \u0275\u0275template(20, HomeComponent_div_71_span_20_Template, 2, 6, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 84);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 71)(24, "span", 72);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "priceFormat");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const book_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, book_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", book_r11.coverImage, \u0275\u0275sanitizeUrl)("alt", book_r11.title);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("btn-success", book_r11.id && ctx_r2.isInCart(book_r11.id));
    \u0275\u0275property("disabled", book_r11.id && ctx_r2.isInCart(book_r11.id))("title", book_r11.id && ctx_r2.isInCart(book_r11.id) ? "Already in cart" : "Add to cart");
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-shopping-cart", !book_r11.id || !ctx_r2.isInCart(book_r11.id))("fa-check", book_r11.id && ctx_r2.isInCart(book_r11.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", book_r11.id && ctx_r2.isInCart(book_r11.id) ? "In Cart" : "Add to Cart", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(book_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", book_r11.author);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getRatingStars(book_r11.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", book_r11.rating, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 17, book_r11.price));
  }
}
var HomeComponent = class _HomeComponent {
  bookService;
  categoryService;
  router;
  cartService;
  featuredBooks = [];
  bestsellerBooks = [];
  newArrivals = [];
  categories = [];
  isLoading = true;
  // Category carousel properties
  categoryScrollPosition = 0;
  categoryScrollStep = 300;
  constructor(bookService, categoryService, router, cartService) {
    this.bookService = bookService;
    this.categoryService = categoryService;
    this.router = router;
    this.cartService = cartService;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.categories = this.categoryService.getHomePageCategories();
      yield this.loadBooks();
      console.log("Featured books loaded:", this.featuredBooks.map((book) => ({
        title: book.title,
        coverImage: book.coverImage
      })));
    });
  }
  loadBooks() {
    return __async(this, null, function* () {
      try {
        this.isLoading = true;
        this.featuredBooks = yield this.bookService.getRandomFeaturedBooks(6);
        this.bestsellerBooks = yield this.bookService.getBestsellerBooks(5);
        this.newArrivals = yield this.bookService.getNewArrivalBooks(4);
        this.isLoading = false;
      } catch (error) {
        console.error("Error loading books:", error);
        this.isLoading = false;
      }
    });
  }
  // Refresh featured books
  refreshFeaturedBooks() {
    return __async(this, null, function* () {
      yield this.loadBooks();
    });
  }
  // Navigate to search page with category as subject
  onCategoryClick(category) {
    if (category.id === "more") {
      this.router.navigate(["/search"]);
      return;
    }
    this.router.navigate(["/search"], {
      queryParams: {
        type: "subject",
        query: category.name
      }
    });
  }
  // Handle image load errors with multiple fallbacks
  onImageError(event) {
    const target = event.target;
    const originalSrc = target.src;
    console.log("Image failed to load:", originalSrc);
    if (!target.dataset["fallbackAttempted"]) {
      target.dataset["fallbackAttempted"] = "true";
      this.createBookPlaceholder(target);
    } else {
      target.src = "assets/images/no-book-cover.jpg";
      target.classList.add("error");
      target.style.backgroundColor = "#f8f9fa";
      target.style.border = "2px dashed #dee2e6";
    }
  }
  // Create a custom placeholder for books without covers
  createBookPlaceholder(img) {
    const bookTitle = img.alt || "Unknown Book";
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      canvas.width = 300;
      canvas.height = 400;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "#667eea");
      gradient.addColorStop(1, "#764ba2");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 300, 400);
      ctx.font = "48px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("\u{1F4DA}", 150, 150);
      ctx.font = "bold 16px Arial";
      ctx.fillStyle = "white";
      const words = bookTitle.split(" ");
      let line = "";
      let y = 220;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > 260 && n > 0) {
          ctx.fillText(line, 150, y);
          line = words[n] + " ";
          y += 20;
        } else {
          line = testLine;
        }
        if (y > 340)
          break;
      }
      ctx.fillText(line, 150, y);
      img.src = canvas.toDataURL();
    } else {
      img.src = "assets/images/no-book-cover.jpg";
    }
  }
  getRatingStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push("full");
    }
    if (hasHalfStar) {
      stars.push("half");
    }
    while (stars.length < 5) {
      stars.push("empty");
    }
    return stars;
  }
  // Cart functionality
  addToCart(book, event) {
    return __async(this, null, function* () {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      yield this.cartService.addToCart(book);
      console.log(`${book.title} added to cart!`);
    });
  }
  // Navigate to book detail page
  quickViewBook(book, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.router.navigate(["/books", book.id]);
  }
  // Check if book is in cart
  isInCart(bookId) {
    return this.cartService.isInCart(bookId);
  }
  // Get quantity of book in cart
  getBookQuantity(bookId) {
    return this.cartService.getBookQuantity(bookId);
  }
  // Category carousel navigation methods
  scrollCategoriesLeft() {
    const container = document.querySelector(".category-carousel-container");
    if (container) {
      this.categoryScrollPosition = Math.max(0, this.categoryScrollPosition - this.categoryScrollStep);
      container.scrollTo({
        left: this.categoryScrollPosition,
        behavior: "smooth"
      });
    }
  }
  scrollCategoriesRight() {
    const container = document.querySelector(".category-carousel-container");
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      this.categoryScrollPosition = Math.min(maxScroll, this.categoryScrollPosition + this.categoryScrollStep);
      container.scrollTo({
        left: this.categoryScrollPosition,
        behavior: "smooth"
      });
    }
  }
  // Track by function for better performance
  trackByBookId(index, book) {
    return book.id || index.toString();
  }
  // Handle successful image load
  onImageLoad(event) {
    const target = event.target;
    target.classList.add("loaded");
    target.style.opacity = "1";
    console.log("Image loaded successfully:", target.src);
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CartService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 88, vars: 10, consts: [["id", "home", 1, "hero-section"], [1, "hero-content"], [1, "hero-buttons"], ["routerLink", "/search", 1, "btn-primary"], ["routerLink", "/login", 1, "btn-secondary"], [1, "hero-image"], ["src", "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "alt", "Books"], [1, "scroll-indicator"], [1, "scroll-arrow"], ["id", "categories", 1, "categories-section"], [1, "container"], [1, "section-header"], [1, "fas", "fa-tags", "me-2"], [1, "section-subtitle"], [1, "category-carousel"], [1, "carousel-arrow", "carousel-arrow-left", 3, "click", "disabled"], [1, "fas", "fa-chevron-left"], [1, "category-carousel-container"], [1, "category-items"], ["class", "category-card clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "carousel-arrow", "carousel-arrow-right", 3, "click"], [1, "fas", "fa-chevron-right"], ["id", "featured", 1, "featured-section"], [1, "header-actions"], [1, "refresh-btn", 3, "click", "disabled"], [1, "fas", "fa-sync-alt"], ["routerLink", "/search", 1, "view-more-btn"], ["class", "loading-state", 4, "ngIf"], ["class", "books-grid", 4, "ngIf"], ["class", "section-footer", 4, "ngIf"], ["id", "bestsellers", 1, "bestsellers-section"], ["routerLink", "/books", 1, "view-more-btn"], [1, "books-row"], ["class", "book-card-small", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "section-footer"], [1, "more-text"], ["routerLink", "/search", 1, "explore-btn"], ["id", "new-arrivals", 1, "new-arrivals-section"], [1, "books-grid"], ["class", "book-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "newsletter-section"], [1, "newsletter-content"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email address"], [1, "btn-primary"], [1, "category-card", "clickable", 3, "click"], [1, "category-icon"], [1, "category-description"], [1, "category-overlay"], [1, "fas"], [1, "loading-state"], [1, "spinner"], ["class", "book-card", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "book-card", 3, "routerLink"], [1, "book-cover"], [1, "image-container"], ["loading", "lazy", 1, "book-image", 3, "error", "load", "src", "alt"], ["class", "image-placeholder", 4, "ngIf"], [1, "book-overlay"], ["title", "View book details", 1, "quick-view-btn", 3, "click"], [1, "fas", "fa-eye"], [1, "add-to-cart-btn", 3, "click", "disabled", "title"], [1, "book-badges"], ["class", "badge featured", 4, "ngIf"], ["class", "badge bestseller", 4, "ngIf"], ["class", "badge new", 4, "ngIf"], [1, "book-info"], [1, "book-title"], [1, "book-author"], [1, "book-category"], ["class", "book-rating", 4, "ngIf"], [1, "book-price"], [1, "current-price"], ["class", "original-price", 4, "ngIf"], [1, "book-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "image-placeholder"], [1, "fas", "fa-book", "fa-3x"], [1, "badge", "featured"], [1, "badge", "bestseller"], [1, "badge", "new"], [1, "book-rating"], [1, "stars"], ["class", "star", 3, "full", "half", "empty", 4, "ngFor", "ngForOf"], [1, "rating-text"], [1, "star"], [1, "original-price"], [1, "book-card-small", 3, "routerLink"], ["loading", "lazy", 2, "min-height", "100px", "background", "#f8f9fa", 3, "error", "src", "alt"], [1, "book-details"], [1, "rating-price"], [1, "price"], [1, "add-to-cart-btn-small", 3, "click", "disabled", "title"], ["loading", "lazy", 2, "min-height", "300px", "background", "#f8f9fa", 3, "error", "src", "alt"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Welcome to Readify");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Discover your next favorite book from our vast collection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2)(7, "button", 3);
      \u0275\u0275text(8, "Browse Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275text(10, "Sign In");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 5);
      \u0275\u0275element(12, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "span");
      \u0275\u0275text(16, "\u2193");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Scroll to explore");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "section", 9)(20, "div", 10)(21, "div", 11)(22, "h2");
      \u0275\u0275element(23, "i", 12);
      \u0275\u0275text(24, " Browse by Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 13);
      \u0275\u0275text(26, "Explore our diverse collection of books across different genres");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 14)(28, "button", 15);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_28_listener() {
        return ctx.scrollCategoriesLeft();
      });
      \u0275\u0275element(29, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
      \u0275\u0275template(32, HomeComponent_div_32_Template, 11, 9, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 20);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_33_listener() {
        return ctx.scrollCategoriesRight();
      });
      \u0275\u0275element(34, "i", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "section", 22)(36, "div", 10)(37, "div", 11)(38, "h2");
      \u0275\u0275text(39, "Featured Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 23)(41, "button", 24);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_41_listener() {
        return ctx.loadBooks();
      });
      \u0275\u0275element(42, "i", 25);
      \u0275\u0275text(43, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 26);
      \u0275\u0275text(45, "Show More \u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, HomeComponent_div_46_Template, 4, 0, "div", 27)(47, HomeComponent_div_47_Template, 2, 2, "div", 28)(48, HomeComponent_div_48_Template, 5, 0, "div", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "section", 30)(50, "div", 10)(51, "div", 11)(52, "h2");
      \u0275\u0275text(53, "Bestsellers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "button", 31);
      \u0275\u0275text(55, "Show More \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 32);
      \u0275\u0275template(57, HomeComponent_div_57_Template, 16, 20, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 34)(59, "p", 35);
      \u0275\u0275text(60, "\u{1F4C8} Top-selling books loved by readers worldwide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 36);
      \u0275\u0275text(62, "Show All Bestsellers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "section", 37)(64, "div", 10)(65, "div", 11)(66, "h2");
      \u0275\u0275text(67, "New Arrivals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 31);
      \u0275\u0275text(69, "Show More \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 38);
      \u0275\u0275template(71, HomeComponent_div_71_Template, 27, 21, "div", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 34)(73, "p", 35);
      \u0275\u0275text(74, "\u2728 Fresh releases and latest additions to our library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 36);
      \u0275\u0275text(76, "Show All New Arrivals");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "section", 40)(78, "div", 10)(79, "div", 41)(80, "h2");
      \u0275\u0275text(81, "Stay Updated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "Get the latest book recommendations and exclusive offers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 42);
      \u0275\u0275element(85, "input", 43);
      \u0275\u0275elementStart(86, "button", 44);
      \u0275\u0275text(87, "Subscribe");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275property("disabled", ctx.categoryScrollPosition <= 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spin", ctx.isLoading);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.bestsellerBooks);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.newArrivals);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, PriceFormatPipe], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\nsection[_ngcontent-%COMP%] {\n  scroll-margin-top: 80px;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 100px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1300px;\n  margin: 0 auto;\n  min-height: 80vh;\n  position: relative;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 50px;\n  padding-left: 80px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 30px;\n  opacity: 0.9;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n  border: none;\n  border-radius: 10px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-block;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n}\n.hero-section[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n}\n.hero-section[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   .scroll-arrow[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n.hero-section[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   .scroll-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n}\n.hero-section[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.categories-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n}\n.categories-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.categories-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 15px;\n  color: #2c3e50;\n  font-weight: 700;\n}\n.categories-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.categories-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n  z-index: 2;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: scale(1.1);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]:disabled {\n  background: #e9ecef;\n  color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-x: hidden;\n  position: relative;\n  border-radius: 15px;\n  padding: 10px;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  transition: transform 0.3s ease;\n  padding: 10px 0;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px 25px;\n  border-radius: 15px;\n  text-align: center;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  flex-shrink: 0;\n  width: 220px;\n  position: relative;\n  overflow: hidden;\n  border: 2px solid transparent;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);\n  border-color: #667eea;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover   .category-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover[data-category-id=more]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover[data-category-id=more]   .category-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card.clickable[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card.clickable[_ngcontent-%COMP%]:active {\n  transform: translateY(-5px);\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 15px;\n  transition: transform 0.3s ease;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 10px;\n  color: #2c3e50;\n  transition: color 0.3s ease;\n  font-weight: 600;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n  height: 40px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.9),\n      rgba(118, 75, 162, 0.9));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: white;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[data-category-id=more][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-color: #667eea;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[data-category-id=more][_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5rem;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[data-category-id=more][_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[data-category-id=more][_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[data-category-id=more][_ngcontent-%COMP%]   .category-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(90, 103, 216, 0.95),\n      rgba(85, 60, 154, 0.95));\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[data-category-id=more][_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: translateY(-8px) scale(1.05);\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[data-category-id=more][_ngcontent-%COMP%]:hover   .category-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(90, 103, 216, 0.95),\n      rgba(85, 60, 154, 0.95));\n}\n.categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n@media (max-width: 768px) {\n  .categories-section[_ngcontent-%COMP%] {\n    padding: 60px 0;\n  }\n  .categories-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .categories-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {\n    width: 180px;\n    padding: 25px 20px;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .categories-section[_ngcontent-%COMP%]   .category-carousel[_ngcontent-%COMP%]   .category-carousel-container[_ngcontent-%COMP%]   .category-items[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n.featured-section[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.featured-section[_ngcontent-%COMP%]   .books-grid[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .books-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 30px;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]:hover, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n  background: #f8f9fa;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .book-image[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .book-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  opacity: 0;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .book-image.loaded[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .book-image.loaded[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .book-image.error[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .book-image.error[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: grayscale(20%);\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  opacity: 0.8;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-align: center;\n  padding: 0 15px;\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.3;\n  max-height: 60px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]::before, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  animation: shimmer 2s infinite;\n  z-index: 1;\n  opacity: 0;\n}\n.loading[_ngcontent-%COMP%]   .featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]::before, \n.loading[_ngcontent-%COMP%]   .new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  gap: 10px;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%], \n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: none;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%]:hover, \n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%]:hover, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%]:hover, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .quick-view-btn[_ngcontent-%COMP%]:hover {\n  background: #5a6fd8;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  background: #4ecdc4;\n  color: white;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:disabled, \n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn.btn-success[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:disabled, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn.btn-success[_ngcontent-%COMP%] {\n  background: #2ecc71;\n  cursor: default;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:disabled:hover, \n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn.btn-success[_ngcontent-%COMP%]:hover, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:disabled:hover, \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn.btn-success[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.btn-success), \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-overlay[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.btn-success) {\n  background: #45b7aa;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]:hover   .book-overlay[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]:hover   .book-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: white;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%]   .badge.bestseller[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%]   .badge.bestseller[_ngcontent-%COMP%] {\n  background: #ff6b6b;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%]   .badge.new[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%]   .badge.new[_ngcontent-%COMP%] {\n  background: #4ecdc4;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #333;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-author[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-author[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 12px;\n  font-style: italic;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: #ddd;\n  font-size: 1.2rem;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star.full[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star.full[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star.half[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star.half[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-price[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #667eea;\n}\n.featured-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%], \n.new-arrivals-section[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%]   .book-price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #999;\n  text-decoration: line-through;\n}\n.bestsellers-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: #f8f9fa;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .books-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  padding: 20px;\n  display: flex;\n  gap: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 5px;\n  color: #333;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .rating-price[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .rating-price[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1px;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .rating-price[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: #ddd;\n  font-size: 1rem;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .rating-price[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star.full[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .rating-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #667eea;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .add-to-cart-btn-small[_ngcontent-%COMP%] {\n  background: #4ecdc4;\n  color: white;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  justify-content: center;\n  min-width: 100px;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .add-to-cart-btn-small[_ngcontent-%COMP%]:hover {\n  background: #45b7aa;\n  transform: translateY(-1px);\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .add-to-cart-btn-small[_ngcontent-%COMP%]:disabled, \n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .add-to-cart-btn-small.btn-success[_ngcontent-%COMP%] {\n  background: #2ecc71;\n  cursor: default;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .add-to-cart-btn-small[_ngcontent-%COMP%]:disabled:hover, \n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .add-to-cart-btn-small.btn-success[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n.bestsellers-section[_ngcontent-%COMP%]   .book-card-small[_ngcontent-%COMP%]   .book-details[_ngcontent-%COMP%]   .add-to-cart-btn-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.newsletter-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 15px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 30px;\n  opacity: 0.9;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  background: rgba(255, 255, 255, 0.9);\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: white;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 50px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #333;\n  margin: 0;\n}\n.section-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.section-header[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-header[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a67d8;\n  transform: translateY(-2px);\n}\n.section-header[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.section-header[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.section-header[_ngcontent-%COMP%]   .view-more-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #667eea;\n  color: #667eea;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 0.9rem;\n}\n.section-header[_ngcontent-%COMP%]   .view-more-btn[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n  transform: translateX(5px);\n}\n.section-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0 20px;\n  border-top: 1px solid #eee;\n  margin-top: 40px;\n}\n.section-footer[_ngcontent-%COMP%]   .more-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 20px;\n  font-style: italic;\n}\n.section-footer[_ngcontent-%COMP%]   .explore-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 15px 30px;\n  border-radius: 25px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-block;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n}\n.section-footer[_ngcontent-%COMP%]   .explore-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.section-footer[_ngcontent-%COMP%]   .explore-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 60px 20px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n    padding-right: 0;\n    margin-bottom: 40px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n  .books-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n  .newsletter-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .section-header[_ngcontent-%COMP%]   .view-more-btn[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .section-footer[_ngcontent-%COMP%] {\n    padding: 30px 0 15px;\n  }\n  .section-footer[_ngcontent-%COMP%]   .more-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .section-footer[_ngcontent-%COMP%]   .explore-btn[_ngcontent-%COMP%] {\n    padding: 12px 25px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .books-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .book-card-small[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .book-card-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .section-header[_ngcontent-%COMP%]   .view-more-btn[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 8px 16px;\n  }\n}\n/*# sourceMappingURL=home.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterModule, PriceFormatPipe], template: `<!-- Hero Section -->\r
<section id="home" class="hero-section">\r
  <div class="hero-content">\r
    <h1>Welcome to Readify</h1>\r
    <p>Discover your next favorite book from our vast collection</p>\r
    <div class="hero-buttons">\r
      <button class="btn-primary" routerLink="/search">Browse Books</button>\r
      <button class="btn-secondary" routerLink="/login">Sign In</button>\r
    </div>\r
  </div>\r
  <div class="hero-image">\r
    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Books">\r
  </div>\r
  \r
  <!-- Scroll indicator -->\r
  <div class="scroll-indicator">\r
    <div class="scroll-arrow">\r
      <span>\u2193</span>\r
    </div>\r
    <p>Scroll to explore</p>\r
  </div>\r
</section>\r
\r
<!-- Categories Section -->\r
<section id="categories" class="categories-section">\r
  <div class="container">\r
    <div class="section-header">\r
      <h2>\r
        <i class="fas fa-tags me-2"></i>\r
        Browse by Category\r
      </h2>\r
      <p class="section-subtitle">Explore our diverse collection of books across different genres</p>\r
    </div>\r
    \r
    <div class="category-carousel">\r
      <button \r
        class="carousel-arrow carousel-arrow-left" \r
        (click)="scrollCategoriesLeft()"\r
        [disabled]="categoryScrollPosition <= 0"\r
      >\r
        <i class="fas fa-chevron-left"></i>\r
      </button>\r
      \r
      <div class="category-carousel-container">\r
        <div class="category-items">\r
          <div *ngFor="let category of categories" \r
               class="category-card clickable" \r
               [attr.data-category-id]="category.id"\r
               (click)="onCategoryClick(category)">\r
            <div class="category-icon">\r
              {{ category.icon || '\u{1F4DA}' }}\r
            </div>\r
            <h3>{{ category.displayName }}</h3>\r
            <p class="category-description">{{ category.description }}</p>\r
            <div class="category-overlay">\r
              <i class="fas" [class.fa-arrow-right]="category.id !== 'more'" [class.fa-th-large]="category.id === 'more'"></i>\r
              <span>{{ category.id === 'more' ? 'View All' : 'Explore' }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <button \r
        class="carousel-arrow carousel-arrow-right" \r
        (click)="scrollCategoriesRight()"\r
      >\r
        <i class="fas fa-chevron-right"></i>\r
      </button>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Featured Books Section -->\r
<section id="featured" class="featured-section">\r
  <div class="container">\r
    <div class="section-header">\r
      <h2>Featured Books</h2>\r
      <div class="header-actions">\r
        <button class="refresh-btn" (click)="loadBooks()" [disabled]="isLoading">\r
          <i class="fas fa-sync-alt" [class.fa-spin]="isLoading"></i> Refresh\r
        </button>\r
        <button class="view-more-btn" routerLink="/search">Show More \u2192</button>\r
      </div>\r
    </div>\r
    \r
    <!-- Loading State -->\r
    <div *ngIf="isLoading" class="loading-state">\r
      <div class="spinner"></div>\r
      <p>Loading featured books...</p>\r
    </div>\r
    \r
    <!-- Books Grid -->\r
    <div *ngIf="!isLoading" class="books-grid">\r
      <div *ngFor="let book of featuredBooks; trackBy: trackByBookId" class="book-card" [routerLink]="['/books', book.id]">\r
        <div class="book-cover">\r
          <div class="image-container">\r
            <img \r
              [src]="book.coverImage" \r
              [alt]="book.title" \r
              (error)="onImageError($event)"\r
              (load)="onImageLoad($event)"\r
              loading="lazy"\r
              class="book-image"\r
              [style.display]="'block'"\r
            />\r
            <div class="image-placeholder" *ngIf="!book.coverImage">\r
              <i class="fas fa-book fa-3x"></i>\r
              <p>{{ book.title }}</p>\r
            </div>\r
          </div>\r
          <div class="book-overlay">\r
            <button \r
              class="quick-view-btn"\r
              (click)="quickViewBook(book, $event)"\r
              title="View book details"\r
            >\r
              <i class="fas fa-eye"></i>\r
              Quick View\r
            </button>\r
            <button \r
              class="add-to-cart-btn"\r
              (click)="addToCart(book, $event)"\r
              [disabled]="book.id && isInCart(book.id)"\r
              [class.btn-success]="book.id && isInCart(book.id)"\r
              [title]="(book.id && isInCart(book.id)) ? 'Already in cart' : 'Add to cart'"\r
            >\r
              <i class="fas" [class.fa-shopping-cart]="!book.id || !isInCart(book.id)" [class.fa-check]="book.id && isInCart(book.id)"></i>\r
              {{ (book.id && isInCart(book.id)) ? 'In Cart' : 'Add to Cart' }}\r
            </button>\r
          </div>\r
          <div class="book-badges">\r
            <span *ngIf="book.isFeatured" class="badge featured">Featured</span>\r
            <span *ngIf="book.isBestseller" class="badge bestseller">Bestseller</span>\r
            <span *ngIf="book.isNew" class="badge new">New</span>\r
          </div>\r
        </div>\r
        <div class="book-info">\r
          <h3 class="book-title">{{ book.title }}</h3>\r
          <p class="book-author">by {{ book.author }}</p>\r
          <p class="book-category">{{ book.category }}</p>\r
          <div class="book-rating" *ngIf="book.rating > 0">\r
            <div class="stars">\r
              <span *ngFor="let star of getRatingStars(book.rating)" \r
                    class="star" \r
                    [class.full]="star === 'full'"\r
                    [class.half]="star === 'half'"\r
                    [class.empty]="star === 'empty'">\u2605</span>\r
            </div>\r
            <span class="rating-text">({{ book.rating }})</span>\r
          </div>\r
          <div class="book-price">\r
            <span class="current-price">{{ book.price | priceFormat }}</span>\r
            <span *ngIf="book.originalPrice && book.originalPrice > book.price" class="original-price">{{ book.originalPrice | priceFormat }}</span>\r
          </div>\r
          \r
          <!-- Add to Cart Button -->\r
          <div class="book-actions">\r
            <button \r
              class="btn btn-primary btn-sm"\r
              (click)="addToCart(book, $event)"\r
              [disabled]="book.id && isInCart(book.id)"\r
              [class.btn-success]="book.id && isInCart(book.id)"\r
            >\r
              <i class="fas" [class.fa-shopping-cart]="!book.id || !isInCart(book.id)" [class.fa-check]="book.id && isInCart(book.id)"></i>\r
              {{ (book.id && isInCart(book.id)) ? 'In Cart' : 'Add to Cart' }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="section-footer" *ngIf="!isLoading">\r
      <p class="more-text">Discover hundreds more books in our collection</p>\r
      <button class="explore-btn" routerLink="/search">Show All Featured Books</button>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Bestsellers Section -->\r
<section id="bestsellers" class="bestsellers-section">\r
  <div class="container">\r
    <div class="section-header">\r
      <h2>Bestsellers</h2>\r
      <button class="view-more-btn" routerLink="/books">Show More \u2192</button>\r
    </div>\r
    <div class="books-row">\r
      <div *ngFor="let book of bestsellerBooks" class="book-card-small" [routerLink]="['/books', book.id]">\r
        <!-- ...existing code... -->\r
        <img \r
          [src]="book.coverImage" \r
          [alt]="book.title" \r
          (error)="onImageError($event)"\r
          loading="lazy"\r
          style="min-height: 100px; background: #f8f9fa;"\r
        />\r
        <div class="book-details">\r
          <h4>{{ book.title }}</h4>\r
          <p>{{ book.author }}</p>\r
          <div class="rating-price">\r
            <div class="stars">\r
              <span *ngFor="let star of getRatingStars(book.rating)" \r
                    class="star" \r
                    [class.full]="star === 'full'"\r
                    [class.half]="star === 'half'"\r
                    [class.empty]="star === 'empty'">\u2605</span>\r
            </div>\r
            <span class="price">{{ book.price | priceFormat }}</span>\r
          </div>\r
          <button \r
            class="add-to-cart-btn-small"\r
            (click)="addToCart(book, $event)"\r
            [disabled]="book.id && isInCart(book.id)"\r
            [class.btn-success]="book.id && isInCart(book.id)"\r
            [title]="(book.id && isInCart(book.id)) ? 'Already in cart' : 'Add to cart'"\r
          >\r
            <i class="fas" [class.fa-shopping-cart]="!book.id || !isInCart(book.id)" [class.fa-check]="book.id && isInCart(book.id)"></i>\r
            {{ (book.id && isInCart(book.id)) ? 'In Cart' : 'Add to Cart' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="section-footer">\r
      <p class="more-text">\u{1F4C8} Top-selling books loved by readers worldwide</p>\r
      <button class="explore-btn" routerLink="/search">Show All Bestsellers</button>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- New Arrivals Section -->\r
<section id="new-arrivals" class="new-arrivals-section">\r
  <div class="container">\r
    <div class="section-header">\r
      <h2>New Arrivals</h2>\r
      <button class="view-more-btn" routerLink="/books">Show More \u2192</button>\r
    </div>\r
    <div class="books-grid">\r
      <div *ngFor="let book of newArrivals" class="book-card" [routerLink]="['/books', book.id]">\r
        <!-- ...existing code... -->\r
        <div class="book-cover">\r
          <img \r
            [src]="book.coverImage" \r
            [alt]="book.title" \r
            (error)="onImageError($event)"\r
            loading="lazy"\r
            style="min-height: 300px; background: #f8f9fa;"\r
          />\r
          <div class="book-overlay">\r
            <button \r
              class="quick-view-btn"\r
              (click)="quickViewBook(book, $event)"\r
              title="View book details"\r
            >\r
              <i class="fas fa-eye"></i>\r
              Quick View\r
            </button>\r
            <button \r
              class="add-to-cart-btn"\r
              (click)="addToCart(book, $event)"\r
              [disabled]="book.id && isInCart(book.id)"\r
              [class.btn-success]="book.id && isInCart(book.id)"\r
              [title]="(book.id && isInCart(book.id)) ? 'Already in cart' : 'Add to cart'"\r
            >\r
              <i class="fas" [class.fa-shopping-cart]="!book.id || !isInCart(book.id)" [class.fa-check]="book.id && isInCart(book.id)"></i>\r
              {{ (book.id && isInCart(book.id)) ? 'In Cart' : 'Add to Cart' }}\r
            </button>\r
          </div>\r
          <div class="book-badges">\r
            <span class="badge new">New Arrival</span>\r
          </div>\r
        </div>\r
        <div class="book-info">\r
          <h3 class="book-title">{{ book.title }}</h3>\r
          <p class="book-author">by {{ book.author }}</p>\r
          <div class="book-rating">\r
            <div class="stars">\r
              <span *ngFor="let star of getRatingStars(book.rating)" \r
                    class="star" \r
                    [class.full]="star === 'full'"\r
                    [class.half]="star === 'half'"\r
                    [class.empty]="star === 'empty'">\u2605</span>\r
            </div>\r
            <span class="rating-text">({{ book.rating }})</span>\r
          </div>\r
          <div class="book-price">\r
            <span class="current-price">{{ book.price | priceFormat }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="section-footer">\r
      <p class="more-text">\u2728 Fresh releases and latest additions to our library</p>\r
      <button class="explore-btn" routerLink="/search">Show All New Arrivals</button>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Newsletter Section -->\r
<section class="newsletter-section">\r
  <div class="container">\r
    <div class="newsletter-content">\r
      <h2>Stay Updated</h2>\r
      <p>Get the latest book recommendations and exclusive offers</p>\r
      <div class="newsletter-form">\r
        <input type="email" placeholder="Enter your email address">\r
        <button class="btn-primary">Subscribe</button>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/features/home/home.scss */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\nsection {\n  scroll-margin-top: 80px;\n}\n.hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 100px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1300px;\n  margin: 0 auto;\n  min-height: 80vh;\n  position: relative;\n}\n.hero-section .hero-content {\n  flex: 1;\n  padding-right: 50px;\n  padding-left: 80px;\n}\n.hero-section .hero-content h1 {\n  font-size: 3.5rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.hero-section .hero-content p {\n  font-size: 1.3rem;\n  margin-bottom: 30px;\n  opacity: 0.9;\n}\n.hero-section .hero-content .hero-buttons {\n  display: flex;\n  gap: 15px;\n}\n.hero-section .hero-content .hero-buttons .btn-primary,\n.hero-section .hero-content .hero-buttons .btn-secondary {\n  padding: 15px 30px;\n  border: none;\n  border-radius: 10px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-block;\n}\n.hero-section .hero-content .hero-buttons .btn-primary {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.hero-section .hero-content .hero-buttons .btn-primary:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n}\n.hero-section .hero-content .hero-buttons .btn-secondary {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n}\n.hero-section .hero-content .hero-buttons .btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: white;\n}\n.hero-section .hero-image {\n  flex: 1;\n  text-align: center;\n}\n.hero-section .hero-image img {\n  max-width: 100%;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n}\n.hero-section .scroll-indicator {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n}\n.hero-section .scroll-indicator .scroll-arrow {\n  margin-bottom: 10px;\n  animation: bounce 2s infinite;\n}\n.hero-section .scroll-indicator .scroll-arrow span {\n  font-size: 2rem;\n  display: block;\n}\n.hero-section .scroll-indicator p {\n  font-size: 0.9rem;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.categories-section {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n}\n.categories-section .section-header {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.categories-section .section-header h2 {\n  font-size: 2.5rem;\n  margin-bottom: 15px;\n  color: #2c3e50;\n  font-weight: 700;\n}\n.categories-section .section-header h2 i {\n  color: #667eea;\n}\n.categories-section .section-header .section-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n}\n.categories-section .category-carousel {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.categories-section .category-carousel .carousel-arrow {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n  z-index: 2;\n}\n.categories-section .category-carousel .carousel-arrow:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: scale(1.1);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.categories-section .category-carousel .carousel-arrow:disabled {\n  background: #e9ecef;\n  color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.categories-section .category-carousel .carousel-arrow i {\n  font-size: 1.1rem;\n}\n.categories-section .category-carousel .category-carousel-container {\n  flex: 1;\n  overflow-x: hidden;\n  position: relative;\n  border-radius: 15px;\n  padding: 10px;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.categories-section .category-carousel .category-carousel-container .category-items {\n  display: flex;\n  gap: 20px;\n  transition: transform 0.3s ease;\n  padding: 10px 0;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card {\n  background: white;\n  padding: 30px 25px;\n  border-radius: 15px;\n  text-align: center;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  flex-shrink: 0;\n  width: 220px;\n  position: relative;\n  overflow: hidden;\n  border: 2px solid transparent;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);\n  border-color: #667eea;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card:hover .category-overlay {\n  opacity: 1;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card:hover h3 {\n  color: #667eea;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card:hover .category-icon {\n  transform: scale(1.2);\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card:hover[data-category-id=more] h3 {\n  color: white;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card:hover[data-category-id=more] .category-icon {\n  color: white;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card.clickable {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card.clickable:active {\n  transform: translateY(-5px);\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card .category-icon {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 15px;\n  transition: transform 0.3s ease;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card h3 {\n  font-size: 1.3rem;\n  margin-bottom: 10px;\n  color: #2c3e50;\n  transition: color 0.3s ease;\n  font-weight: 600;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card .category-description {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n  height: 40px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card .category-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.9),\n      rgba(118, 75, 162, 0.9));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: white;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card .category-overlay i {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card .category-overlay span {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card[data-category-id=more] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-color: #667eea;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card[data-category-id=more] .category-icon {\n  color: white;\n  font-size: 2.5rem;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card[data-category-id=more] h3 {\n  color: white;\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card[data-category-id=more] .category-description {\n  color: rgba(255, 255, 255, 0.9);\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card[data-category-id=more] .category-overlay {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(90, 103, 216, 0.95),\n      rgba(85, 60, 154, 0.95));\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card[data-category-id=more]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: translateY(-8px) scale(1.05);\n}\n.categories-section .category-carousel .category-carousel-container .category-items .category-card[data-category-id=more]:hover .category-overlay {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(90, 103, 216, 0.95),\n      rgba(85, 60, 154, 0.95));\n}\n.categories-section .category-carousel .category-carousel-container::-webkit-scrollbar {\n  display: none;\n}\n@media (max-width: 768px) {\n  .categories-section {\n    padding: 60px 0;\n  }\n  .categories-section .section-header {\n    margin-bottom: 30px;\n  }\n  .categories-section .section-header h2 {\n    font-size: 2rem;\n  }\n  .categories-section .category-carousel {\n    gap: 15px;\n  }\n  .categories-section .category-carousel .carousel-arrow {\n    width: 45px;\n    height: 45px;\n  }\n  .categories-section .category-carousel .category-carousel-container .category-items {\n    gap: 15px;\n  }\n  .categories-section .category-carousel .category-carousel-container .category-items .category-card {\n    width: 180px;\n    padding: 25px 20px;\n  }\n  .categories-section .category-carousel .category-carousel-container .category-items .category-card .category-icon {\n    font-size: 2.5rem;\n  }\n  .categories-section .category-carousel .category-carousel-container .category-items .category-card h3 {\n    font-size: 1.1rem;\n  }\n  .categories-section .category-carousel .category-carousel-container .category-items .category-card .category-description {\n    font-size: 0.85rem;\n  }\n}\n.featured-section,\n.new-arrivals-section {\n  padding: 80px 0;\n}\n.featured-section .books-grid,\n.new-arrivals-section .books-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 30px;\n}\n.featured-section .book-card,\n.new-arrivals-section .book-card {\n  background: white;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n.featured-section .book-card:hover,\n.new-arrivals-section .book-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\n}\n.featured-section .book-card .book-cover,\n.new-arrivals-section .book-card .book-cover {\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n  background: #f8f9fa;\n}\n.featured-section .book-card .book-cover .image-container,\n.new-arrivals-section .book-card .book-cover .image-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.featured-section .book-card .book-cover .image-container .book-image,\n.new-arrivals-section .book-card .book-cover .image-container .book-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n  opacity: 0;\n}\n.featured-section .book-card .book-cover .image-container .book-image.loaded,\n.new-arrivals-section .book-card .book-cover .image-container .book-image.loaded {\n  opacity: 1;\n}\n.featured-section .book-card .book-cover .image-container .book-image.error,\n.new-arrivals-section .book-card .book-cover .image-container .book-image.error {\n  opacity: 1;\n  filter: grayscale(20%);\n}\n.featured-section .book-card .book-cover .image-container .image-placeholder,\n.new-arrivals-section .book-card .book-cover .image-container .image-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.featured-section .book-card .book-cover .image-container .image-placeholder i,\n.new-arrivals-section .book-card .book-cover .image-container .image-placeholder i {\n  margin-bottom: 15px;\n  opacity: 0.8;\n}\n.featured-section .book-card .book-cover .image-container .image-placeholder p,\n.new-arrivals-section .book-card .book-cover .image-container .image-placeholder p {\n  font-size: 0.9rem;\n  text-align: center;\n  padding: 0 15px;\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.3;\n  max-height: 60px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.featured-section .book-card .book-cover .image-container::before,\n.new-arrivals-section .book-card .book-cover .image-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  animation: shimmer 2s infinite;\n  z-index: 1;\n  opacity: 0;\n}\n.loading .featured-section .book-card .book-cover .image-container::before,\n.loading .new-arrivals-section .book-card .book-cover .image-container::before {\n  opacity: 1;\n}\n.featured-section .book-card .book-cover .book-overlay,\n.new-arrivals-section .book-card .book-cover .book-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  gap: 10px;\n}\n.featured-section .book-card .book-cover .book-overlay .quick-view-btn,\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn,\n.new-arrivals-section .book-card .book-cover .book-overlay .quick-view-btn,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn {\n  background: white;\n  border: none;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.featured-section .book-card .book-cover .book-overlay .quick-view-btn:hover,\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn:hover,\n.new-arrivals-section .book-card .book-cover .book-overlay .quick-view-btn:hover,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.featured-section .book-card .book-cover .book-overlay .quick-view-btn i,\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn i,\n.new-arrivals-section .book-card .book-cover .book-overlay .quick-view-btn i,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn i {\n  font-size: 0.9rem;\n}\n.featured-section .book-card .book-cover .book-overlay .quick-view-btn,\n.new-arrivals-section .book-card .book-cover .book-overlay .quick-view-btn {\n  background: #667eea;\n  color: white;\n}\n.featured-section .book-card .book-cover .book-overlay .quick-view-btn:hover,\n.new-arrivals-section .book-card .book-cover .book-overlay .quick-view-btn:hover {\n  background: #5a6fd8;\n}\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn {\n  background: #4ecdc4;\n  color: white;\n}\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn:disabled,\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn.btn-success,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn:disabled,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn.btn-success {\n  background: #2ecc71;\n  cursor: default;\n}\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn:disabled:hover,\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn.btn-success:hover,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn:disabled:hover,\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn.btn-success:hover {\n  transform: none;\n  box-shadow: none;\n}\n.featured-section .book-card .book-cover .book-overlay .add-to-cart-btn:hover:not(:disabled):not(.btn-success),\n.new-arrivals-section .book-card .book-cover .book-overlay .add-to-cart-btn:hover:not(:disabled):not(.btn-success) {\n  background: #45b7aa;\n}\n.featured-section .book-card .book-cover:hover .book-overlay,\n.new-arrivals-section .book-card .book-cover:hover .book-overlay {\n  opacity: 1;\n}\n.featured-section .book-card .book-cover:hover img,\n.new-arrivals-section .book-card .book-cover:hover img {\n  transform: scale(1.05);\n}\n.featured-section .book-card .book-cover .book-badges,\n.new-arrivals-section .book-card .book-cover .book-badges {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.featured-section .book-card .book-cover .book-badges .badge,\n.new-arrivals-section .book-card .book-cover .book-badges .badge {\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: white;\n}\n.featured-section .book-card .book-cover .book-badges .badge.bestseller,\n.new-arrivals-section .book-card .book-cover .book-badges .badge.bestseller {\n  background: #ff6b6b;\n}\n.featured-section .book-card .book-cover .book-badges .badge.new,\n.new-arrivals-section .book-card .book-cover .book-badges .badge.new {\n  background: #4ecdc4;\n}\n.featured-section .book-card .book-info,\n.new-arrivals-section .book-card .book-info {\n  padding: 20px;\n}\n.featured-section .book-card .book-info .book-title,\n.new-arrivals-section .book-card .book-info .book-title {\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #333;\n}\n.featured-section .book-card .book-info .book-author,\n.new-arrivals-section .book-card .book-info .book-author {\n  color: #666;\n  margin-bottom: 12px;\n  font-style: italic;\n}\n.featured-section .book-card .book-info .book-rating,\n.new-arrivals-section .book-card .book-info .book-rating {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n.featured-section .book-card .book-info .book-rating .stars,\n.new-arrivals-section .book-card .book-info .book-rating .stars {\n  display: flex;\n  gap: 2px;\n}\n.featured-section .book-card .book-info .book-rating .stars .star,\n.new-arrivals-section .book-card .book-info .book-rating .stars .star {\n  color: #ddd;\n  font-size: 1.2rem;\n}\n.featured-section .book-card .book-info .book-rating .stars .star.full,\n.new-arrivals-section .book-card .book-info .book-rating .stars .star.full {\n  color: #ffd700;\n}\n.featured-section .book-card .book-info .book-rating .stars .star.half,\n.new-arrivals-section .book-card .book-info .book-rating .stars .star.half {\n  color: #ffd700;\n}\n.featured-section .book-card .book-info .book-rating .rating-text,\n.new-arrivals-section .book-card .book-info .book-rating .rating-text {\n  font-size: 0.9rem;\n  color: #666;\n}\n.featured-section .book-card .book-info .book-price,\n.new-arrivals-section .book-card .book-info .book-price {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.featured-section .book-card .book-info .book-price .current-price,\n.new-arrivals-section .book-card .book-info .book-price .current-price {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #667eea;\n}\n.featured-section .book-card .book-info .book-price .original-price,\n.new-arrivals-section .book-card .book-info .book-price .original-price {\n  font-size: 1rem;\n  color: #999;\n  text-decoration: line-through;\n}\n.bestsellers-section {\n  padding: 80px 0;\n  background: #f8f9fa;\n}\n.bestsellers-section .books-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.bestsellers-section .book-card-small {\n  background: white;\n  border-radius: 15px;\n  padding: 20px;\n  display: flex;\n  gap: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n.bestsellers-section .book-card-small:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\n.bestsellers-section .book-card-small img {\n  width: 80px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.bestsellers-section .book-card-small .book-details {\n  flex: 1;\n}\n.bestsellers-section .book-card-small .book-details h4 {\n  font-size: 1.1rem;\n  margin-bottom: 5px;\n  color: #333;\n}\n.bestsellers-section .book-card-small .book-details p {\n  color: #666;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n}\n.bestsellers-section .book-card-small .book-details .rating-price {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.bestsellers-section .book-card-small .book-details .rating-price .stars {\n  display: flex;\n  gap: 1px;\n}\n.bestsellers-section .book-card-small .book-details .rating-price .stars .star {\n  color: #ddd;\n  font-size: 1rem;\n}\n.bestsellers-section .book-card-small .book-details .rating-price .stars .star.full {\n  color: #ffd700;\n}\n.bestsellers-section .book-card-small .book-details .rating-price .price {\n  font-weight: 700;\n  color: #667eea;\n}\n.bestsellers-section .book-card-small .book-details .add-to-cart-btn-small {\n  background: #4ecdc4;\n  color: white;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  justify-content: center;\n  min-width: 100px;\n}\n.bestsellers-section .book-card-small .book-details .add-to-cart-btn-small:hover {\n  background: #45b7aa;\n  transform: translateY(-1px);\n}\n.bestsellers-section .book-card-small .book-details .add-to-cart-btn-small:disabled,\n.bestsellers-section .book-card-small .book-details .add-to-cart-btn-small.btn-success {\n  background: #2ecc71;\n  cursor: default;\n}\n.bestsellers-section .book-card-small .book-details .add-to-cart-btn-small:disabled:hover,\n.bestsellers-section .book-card-small .book-details .add-to-cart-btn-small.btn-success:hover {\n  transform: none;\n}\n.bestsellers-section .book-card-small .book-details .add-to-cart-btn-small i {\n  font-size: 0.8rem;\n}\n.newsletter-section {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.newsletter-section .newsletter-content {\n  text-align: center;\n}\n.newsletter-section .newsletter-content h2 {\n  font-size: 2.5rem;\n  margin-bottom: 15px;\n}\n.newsletter-section .newsletter-content p {\n  font-size: 1.2rem;\n  margin-bottom: 30px;\n  opacity: 0.9;\n}\n.newsletter-section .newsletter-content .newsletter-form {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.newsletter-section .newsletter-content .newsletter-form input {\n  flex: 1;\n  padding: 15px 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 1rem;\n  background: rgba(255, 255, 255, 0.9);\n}\n.newsletter-section .newsletter-content .newsletter-form input:focus {\n  outline: none;\n  background: white;\n}\n.newsletter-section .newsletter-content .newsletter-form .btn-primary {\n  padding: 15px 30px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.newsletter-section .newsletter-content .newsletter-form .btn-primary:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 50px;\n}\n.section-header h2 {\n  font-size: 2.5rem;\n  color: #333;\n  margin: 0;\n}\n.section-header .header-actions {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.section-header .refresh-btn {\n  background: #667eea;\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-header .refresh-btn:hover:not(:disabled) {\n  background: #5a67d8;\n  transform: translateY(-2px);\n}\n.section-header .refresh-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.section-header .refresh-btn i {\n  font-size: 0.8rem;\n}\n.section-header .view-more-btn {\n  background: transparent;\n  border: 2px solid #667eea;\n  color: #667eea;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 0.9rem;\n}\n.section-header .view-more-btn:hover {\n  background: #667eea;\n  color: white;\n  transform: translateX(5px);\n}\n.section-footer {\n  text-align: center;\n  padding: 40px 0 20px;\n  border-top: 1px solid #eee;\n  margin-top: 40px;\n}\n.section-footer .more-text {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 20px;\n  font-style: italic;\n}\n.section-footer .explore-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 15px 30px;\n  border-radius: 25px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-block;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n}\n.section-footer .explore-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.section-footer .explore-btn:active {\n  transform: translateY(0);\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n.loading-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n.loading-state .spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.loading-state p {\n  font-size: 1.1rem;\n  margin: 0;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .hero-section {\n    flex-direction: column;\n    text-align: center;\n    padding: 60px 20px;\n  }\n  .hero-section .hero-content {\n    padding-right: 0;\n    margin-bottom: 40px;\n  }\n  .hero-section .hero-content h1 {\n    font-size: 2.5rem;\n  }\n  .hero-section .hero-content .hero-buttons {\n    justify-content: center;\n  }\n  .hero-section .hero-image img {\n    height: 250px;\n  }\n  .categories-grid {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n  .books-grid {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n  .newsletter-form {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .section-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n  }\n  .section-header h2 {\n    font-size: 2rem;\n  }\n  .section-header .view-more-btn {\n    align-self: center;\n  }\n  .section-footer {\n    padding: 30px 0 15px;\n  }\n  .section-footer .more-text {\n    font-size: 1rem;\n  }\n  .section-footer .explore-btn {\n    padding: 12px 25px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section .hero-content h1 {\n    font-size: 2rem;\n  }\n  .books-grid {\n    grid-template-columns: 1fr;\n  }\n  .book-card-small {\n    flex-direction: column;\n    text-align: center;\n  }\n  .book-card-small img {\n    align-self: center;\n  }\n  .section-header h2 {\n    font-size: 1.8rem;\n  }\n  .section-header .view-more-btn {\n    font-size: 0.8rem;\n    padding: 8px 16px;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], () => [{ type: BookService }, { type: CategoryService }, { type: Router }, { type: CartService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.ts", lineNumber: 16 });
})();

// src/app/features/login/login.ts
function LoginComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function LoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "label", 20);
    \u0275\u0275text(3, "Ad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_7_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.firstName, $event) || (ctx_r1.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "label", 22);
    \u0275\u0275text(7, "Soyad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_7_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.lastName, $event) || (ctx_r1.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.lastName);
  }
}
function LoginComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  router;
  email = "";
  password = "";
  firstName = "";
  lastName = "";
  isRegistering = false;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.email || !this.password) {
        this.errorMessage = "Please fill in all required fields.";
        return;
      }
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      try {
        if (this.isRegistering) {
          yield this.authService.register(this.email, this.password, this.firstName, this.lastName);
          this.successMessage = "Account created successfully! Welcome to Readify!";
          setTimeout(() => {
            this.router.navigate(["/"]);
          }, 2e3);
        } else {
          yield this.authService.signIn(this.email, this.password);
          this.successMessage = "Welcome back!";
          setTimeout(() => {
            this.router.navigate(["/"]);
          }, 1e3);
        }
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.isLoading = false;
      }
    });
  }
  toggleMode() {
    this.isRegistering = !this.isRegistering;
    this.errorMessage = "";
    this.successMessage = "";
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 22, vars: 12, consts: [["loginForm", "ngForm"], [1, "login-container"], [3, "ngSubmit"], ["class", "error-message", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["class", "name-fields", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "ornek@email.com", "required", "", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "\u015Eifrenizi girin", "required", "", 3, "ngModelChange", "ngModel", "minlength"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-footer"], ["type", "button", 1, "toggle-btn", 3, "click"], [1, "error-message"], [1, "error-icon"], [1, "success-message"], [1, "success-icon"], [1, "name-fields"], [1, "field-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "Ad\u0131n\u0131z", 3, "ngModelChange", "ngModel"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "Soyad\u0131n\u0131z", 3, "ngModelChange", "ngModel"], [1, "loading-spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "form", 2, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(3, "h2");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, LoginComponent_div_5_Template, 4, 1, "div", 3)(6, LoginComponent_div_6_Template, 4, 1, "div", 4)(7, LoginComponent_div_7_Template, 9, 2, "div", 5);
      \u0275\u0275elementStart(8, "label", 6);
      \u0275\u0275text(9, "E-posta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "label", 8);
      \u0275\u0275text(12, "\u015Eifre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275template(15, LoginComponent_span_15_Template, 2, 0, "span", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "p");
      \u0275\u0275text(19);
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleMode());
      });
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isRegistering ? "Hesap Olu\u015Ftur" : "Giri\u015F Yap");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isRegistering);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275property("minlength", 6);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "\u0130\u015Flem yap\u0131l\u0131yor..." : ctx.isRegistering ? "Hesap Olu\u015Ftur" : "Giri\u015F Yap", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isRegistering ? "Zaten hesab\u0131n\u0131z var m\u0131?" : "Hesab\u0131n\u0131z yok mu?", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isRegistering ? "Giri\u015F Yap" : "Hesap Olu\u015Ftur", " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 2.5rem;\n  font-weight: 300;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  padding: 40px;\n  border-radius: 15px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  width: 100%;\n  max-width: 450px;\n  transform: translateY(0);\n  transition: all 0.3s ease;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%], \n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  background: #fee;\n  color: #c53030;\n  border: 1px solid #feb2b2;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  color: #2d7d32;\n  border: 1px solid #9ae6b4;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name-fields[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #555;\n  font-weight: 500;\n  font-size: 0.95rem;\n  letter-spacing: 0.3px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 20px;\n  margin-bottom: 20px;\n  border: 2px solid #e1e5e9;\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: #f8f9fa;\n  box-sizing: border-box;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  transform: translateY(-1px);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border-color: #c6d0f5;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid {\n  border-color: #e53e3e;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8 0%,\n      #6b46c1 100%);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n  font-size: 0.95rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n  font-size: 0.95rem;\n  margin-left: 5px;\n  transition: color 0.3s ease;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #5a67d8;\n}\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 20px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n    max-width: 400px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n@media (max-width: 480px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInUp 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-container">\r
  <form (ngSubmit)="onSubmit()" #loginForm="ngForm">\r
    <h2>{{ isRegistering ? 'Hesap Olu\u015Ftur' : 'Giri\u015F Yap' }}</h2>\r
    \r
    <!-- Error Message -->\r
    <div *ngIf="errorMessage" class="error-message">\r
      <span class="error-icon">\u26A0\uFE0F</span>\r
      {{ errorMessage }}\r
    </div>\r
    \r
    <!-- Success Message -->\r
    <div *ngIf="successMessage" class="success-message">\r
      <span class="success-icon">\u2705</span>\r
      {{ successMessage }}\r
    </div>\r
\r
    <!-- Registration Fields -->\r
    <div *ngIf="isRegistering" class="name-fields">\r
      <div class="field-group">\r
        <label for="firstName">Ad</label>\r
        <input \r
          type="text" \r
          id="firstName" \r
          name="firstName" \r
          [(ngModel)]="firstName"\r
          placeholder="Ad\u0131n\u0131z" \r
        />\r
      </div>\r
      <div class="field-group">\r
        <label for="lastName">Soyad</label>\r
        <input \r
          type="text" \r
          id="lastName" \r
          name="lastName" \r
          [(ngModel)]="lastName"\r
          placeholder="Soyad\u0131n\u0131z" \r
        />\r
      </div>\r
    </div>\r
\r
    <!-- Email Field -->\r
    <label for="email">E-posta</label>\r
    <input \r
      type="email" \r
      id="email" \r
      name="email" \r
      [(ngModel)]="email"\r
      placeholder="ornek@email.com" \r
      required \r
    />\r
    \r
    <!-- Password Field -->\r
    <label for="password">\u015Eifre</label>\r
    <input \r
      type="password" \r
      id="password" \r
      name="password" \r
      [(ngModel)]="password"\r
      placeholder="\u015Eifrenizi girin" \r
      required \r
      [minlength]="6"\r
    />\r
\r
    <!-- Submit Button -->\r
    <button \r
      type="submit" \r
      [disabled]="isLoading"\r
      class="submit-btn"\r
    >\r
      <span *ngIf="isLoading" class="loading-spinner">\u23F3</span>\r
      {{ isLoading ? '\u0130\u015Flem yap\u0131l\u0131yor...' : (isRegistering ? 'Hesap Olu\u015Ftur' : 'Giri\u015F Yap') }}\r
    </button>\r
\r
    <!-- Toggle Mode -->\r
    <div class="form-footer">\r
      <p>\r
        {{ isRegistering ? 'Zaten hesab\u0131n\u0131z var m\u0131?' : 'Hesab\u0131n\u0131z yok mu?' }}\r
        <button type="button" class="toggle-btn" (click)="toggleMode()">\r
          {{ isRegistering ? 'Giri\u015F Yap' : 'Hesap Olu\u015Ftur' }}\r
        </button>\r
      </p>\r
    </div>\r
  </form>\r
</div>\r
`, styles: ["/* src/app/features/login/login.scss */\n.login-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.login-container h2 {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 2.5rem;\n  font-weight: 300;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.login-container form {\n  background: rgba(255, 255, 255, 0.95);\n  padding: 40px;\n  border-radius: 15px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  width: 100%;\n  max-width: 450px;\n  transform: translateY(0);\n  transition: all 0.3s ease;\n}\n.login-container form:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n.login-container form .error-message,\n.login-container form .success-message {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.login-container form .error-message {\n  background: #fee;\n  color: #c53030;\n  border: 1px solid #feb2b2;\n}\n.login-container form .success-message {\n  background: #f0fff4;\n  color: #2d7d32;\n  border: 1px solid #9ae6b4;\n}\n.login-container form .name-fields {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.login-container form .name-fields .field-group {\n  display: flex;\n  flex-direction: column;\n}\n.login-container form label {\n  display: block;\n  margin-bottom: 8px;\n  color: #555;\n  font-weight: 500;\n  font-size: 0.95rem;\n  letter-spacing: 0.3px;\n}\n.login-container form input {\n  width: 100%;\n  padding: 15px 20px;\n  margin-bottom: 20px;\n  border: 2px solid #e1e5e9;\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  background: #f8f9fa;\n  box-sizing: border-box;\n}\n.login-container form input:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  transform: translateY(-1px);\n}\n.login-container form input::placeholder {\n  color: #adb5bd;\n}\n.login-container form input:hover {\n  border-color: #c6d0f5;\n}\n.login-container form input:invalid {\n  border-color: #e53e3e;\n}\n.login-container form .submit-btn {\n  width: 100%;\n  padding: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login-container form .submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8 0%,\n      #6b46c1 100%);\n}\n.login-container form .submit-btn:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);\n}\n.login-container form .submit-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.login-container form .submit-btn .loading-spinner {\n  animation: spin 1s linear infinite;\n}\n.login-container form .form-footer {\n  text-align: center;\n  margin-top: 25px;\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n}\n.login-container form .form-footer p {\n  color: #666;\n  margin: 0;\n  font-size: 0.95rem;\n}\n.login-container form .form-footer .toggle-btn {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n  font-size: 0.95rem;\n  margin-left: 5px;\n  transition: color 0.3s ease;\n}\n.login-container form .form-footer .toggle-btn:hover {\n  color: #5a67d8;\n}\n@media (max-width: 768px) {\n  .login-container {\n    padding: 10px;\n  }\n  .login-container h2 {\n    font-size: 2rem;\n    margin-bottom: 20px;\n  }\n  .login-container form {\n    padding: 30px 25px;\n    max-width: 400px;\n  }\n  .login-container form .name-fields {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n@media (max-width: 480px) {\n  .login-container form {\n    padding: 25px 20px;\n  }\n  .login-container h2 {\n    font-size: 1.8rem;\n  }\n}\n.login-container form {\n  animation: slideInUp 0.6s ease-out;\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.ts", lineNumber: 14 });
})();

// src/app/features/cart/cart.ts
function CartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Start adding some books to your cart!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275element(7, "i", 9);
    \u0275\u0275text(8, " Browse Books ");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275element(2, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "h4", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "button", 30);
    \u0275\u0275listener("click", function CartComponent_div_8_div_2_Template_button_click_11_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(item_r3.book.id && ctx_r3.updateQuantity(item_r3.book.id, item_r3.quantity - 1));
    });
    \u0275\u0275element(12, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 33);
    \u0275\u0275listener("click", function CartComponent_div_8_div_2_Template_button_click_15_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(item_r3.book.id && ctx_r3.updateQuantity(item_r3.book.id, item_r3.quantity + 1));
    });
    \u0275\u0275element(16, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 36);
    \u0275\u0275listener("click", function CartComponent_div_8_div_2_Template_button_click_19_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(item_r3.book.id && ctx_r3.removeItem(item_r3.book.id));
    });
    \u0275\u0275element(20, "i", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r3.book.coverImage || "assets/images/no-book-cover.jpg", \u0275\u0275sanitizeUrl)("alt", item_r3.book.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.book.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.book.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatPrice(item_r3.book.price));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r3.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatPrice(item_r3.book.price * item_r3.quantity), " ");
  }
}
function CartComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275template(2, CartComponent_div_8_div_2_Template, 21, 8, "div", 12);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "span");
    \u0275\u0275text(7, "Total Items:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 15)(11, "span");
    \u0275\u0275text(12, "Total Price:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 17)(16, "button", 18);
    \u0275\u0275listener("click", function CartComponent_div_8_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearCart());
    });
    \u0275\u0275element(17, "i", 19);
    \u0275\u0275text(18, " Clear Cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 20);
    \u0275\u0275element(20, "i", 21);
    \u0275\u0275text(21, " Proceed to Checkout ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 3, ctx_r3.cartItems$));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.getTotalItems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.formatPrice(ctx_r3.getTotalPrice()));
  }
}
var CartComponent = class _CartComponent {
  cartService;
  cartItems$;
  constructor(cartService) {
    this.cartService = cartService;
    this.cartItems$ = this.cartService.cart$;
  }
  ngOnInit() {
  }
  // Remove item from cart
  removeItem(bookId) {
    return __async(this, null, function* () {
      yield this.cartService.removeFromCart(bookId);
    });
  }
  // Update quantity
  updateQuantity(bookId, quantity) {
    return __async(this, null, function* () {
      yield this.cartService.updateQuantity(bookId, quantity);
    });
  }
  // Clear entire cart
  clearCart() {
    return __async(this, null, function* () {
      if (confirm("Are you sure you want to clear your cart?")) {
        yield this.cartService.clearCart();
      }
    });
  }
  // Get total price
  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
  // Get total items
  getTotalItems() {
    return this.cartService.getTotalItems();
  }
  // Format price for display
  formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price);
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(CartService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 10, vars: 6, consts: [[1, "cart-container"], [1, "container"], [1, "cart-header"], [1, "fas", "fa-shopping-cart", "me-2"], ["class", "empty-cart", 4, "ngIf"], ["class", "cart-content", 4, "ngIf"], [1, "empty-cart"], [1, "fas", "fa-shopping-cart", "empty-icon"], ["routerLink", "/books", 1, "btn", "btn-primary"], [1, "fas", "fa-book", "me-2"], [1, "cart-content"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-summary"], [1, "summary-item"], [1, "summary-item", "total"], [1, "total-price"], [1, "cart-actions"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash", "me-2"], ["routerLink", "/checkout", 1, "btn", "btn-primary"], [1, "fas", "fa-credit-card", "me-2"], [1, "cart-item"], [1, "item-image"], [3, "src", "alt"], [1, "item-details"], [1, "item-title"], [1, "item-author"], [1, "item-price"], [1, "quantity-controls"], [1, "quantity-btn", 3, "click", "disabled"], [1, "fas", "fa-minus"], [1, "quantity"], [1, "quantity-btn", 3, "click"], [1, "fas", "fa-plus"], [1, "item-total"], ["title", "Remove from cart", 1, "remove-btn", 3, "click"], [1, "fas", "fa-trash"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, " Your Shopping Cart ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CartComponent_div_6_Template, 9, 0, "div", 4);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275template(8, CartComponent_div_8_Template, 22, 5, "div", 5);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ((tmp_0_0 = \u0275\u0275pipeBind1(7, 2, ctx.cartItems$)) == null ? null : tmp_0_0.length) === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_1_0 = \u0275\u0275pipeBind1(9, 4, ctx.cartItems$)) == null ? null : tmp_1_0.length) > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, RouterModule, RouterLink], styles: ["\n\n.cart-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n  min-height: 80vh;\n}\n.cart-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 10px;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  color: #dee2e6;\n  margin-bottom: 30px;\n}\n.cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #6c757d;\n  margin-bottom: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #8e9aaf;\n  margin-bottom: 30px;\n}\n.cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 30px;\n  font-size: 1.1rem;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  color: white;\n}\n.cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: translateY(-2px);\n}\n.cart-container[_ngcontent-%COMP%]   .cart-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 40px;\n}\n@media (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .cart-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 1fr 120px 100px 50px;\n  gap: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #f1f3f4;\n  align-items: center;\n  transition: all 0.3s ease;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n    grid-template-columns: 60px 1fr;\n    gap: 15px;\n  }\n  .cart-container[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%], \n   .cart-container[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%], \n   .cart-container[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-self: center;\n    margin-top: 10px;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n}\n.cart-container[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 5px;\n  line-height: 1.3;\n}\n.cart-container[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-author[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #667eea;\n  margin: 0;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 5px;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: white;\n  color: #667eea;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #667eea;\n  color: white;\n  transform: scale(1.1);\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.cart-container[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  min-width: 20px;\n  text-align: center;\n}\n.cart-container[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2c3e50;\n  text-align: right;\n}\n.cart-container[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: #fff5f5;\n  color: #e53e3e;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.cart-container[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover {\n  background: #e53e3e;\n  color: white;\n  transform: scale(1.1);\n}\n.cart-container[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  height: fit-content;\n  position: sticky;\n  top: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0;\n  border-bottom: 1px solid #f1f3f4;\n  font-size: 1rem;\n}\n.cart-container[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: 2px solid #667eea;\n  margin-bottom: 20px;\n}\n.cart-container[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n.cart-container[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 1.3rem;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-outline-danger[_ngcontent-%COMP%] {\n  background: white;\n  color: #e53e3e;\n  border: 2px solid #e53e3e;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: #e53e3e;\n  color: white;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.cart-container[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n}\n@media (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .cart-container[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%] {\n    padding: 60px 15px;\n  }\n  .cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n  .cart-container[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .cart-container[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 30px;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.cart-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n/*# sourceMappingURL=cart.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="cart-container">\r
  <div class="container">\r
    <div class="cart-header">\r
      <h2>\r
        <i class="fas fa-shopping-cart me-2"></i>\r
        Your Shopping Cart\r
      </h2>\r
    </div>\r
\r
    <!-- Empty Cart -->\r
    <div *ngIf="(cartItems$ | async)?.length === 0" class="empty-cart">\r
      <i class="fas fa-shopping-cart empty-icon"></i>\r
      <h3>Your cart is empty</h3>\r
      <p>Start adding some books to your cart!</p>\r
      <button class="btn btn-primary" routerLink="/books">\r
        <i class="fas fa-book me-2"></i>\r
        Browse Books\r
      </button>\r
    </div>\r
\r
    <!-- Cart Items -->\r
    <div *ngIf="(cartItems$ | async)?.length! > 0" class="cart-content">\r
      <div class="cart-items">\r
        <div *ngFor="let item of cartItems$ | async" class="cart-item">\r
          <!-- Book Image -->\r
          <div class="item-image">\r
            <img [src]="item.book.coverImage || 'assets/images/no-book-cover.jpg'" \r
                 [alt]="item.book.title">\r
          </div>\r
\r
          <!-- Book Details -->\r
          <div class="item-details">\r
            <h4 class="item-title">{{ item.book.title }}</h4>\r
            <p class="item-author">{{ item.book.author }}</p>\r
            <p class="item-price">{{ formatPrice(item.book.price) }}</p>\r
          </div>\r
\r
          <!-- Quantity Controls -->\r
          <div class="quantity-controls">\r
            <button \r
              class="quantity-btn" \r
              (click)="item.book.id && updateQuantity(item.book.id, item.quantity - 1)"\r
              [disabled]="item.quantity <= 1"\r
            >\r
              <i class="fas fa-minus"></i>\r
            </button>\r
            <span class="quantity">{{ item.quantity }}</span>\r
            <button \r
              class="quantity-btn" \r
              (click)="item.book.id && updateQuantity(item.book.id, item.quantity + 1)"\r
            >\r
              <i class="fas fa-plus"></i>\r
            </button>\r
          </div>\r
\r
          <!-- Item Total -->\r
          <div class="item-total">\r
            {{ formatPrice(item.book.price * item.quantity) }}\r
          </div>\r
\r
          <!-- Remove Button -->\r
          <button \r
            class="remove-btn"\r
            (click)="item.book.id && removeItem(item.book.id)"\r
            title="Remove from cart"\r
          >\r
            <i class="fas fa-trash"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Cart Summary -->\r
      <div class="cart-summary">\r
        <div class="summary-item">\r
          <span>Total Items:</span>\r
          <span>{{ getTotalItems() }}</span>\r
        </div>\r
        <div class="summary-item total">\r
          <span>Total Price:</span>\r
          <span class="total-price">{{ formatPrice(getTotalPrice()) }}</span>\r
        </div>\r
        \r
        <div class="cart-actions">\r
          <button class="btn btn-outline-danger" (click)="clearCart()">\r
            <i class="fas fa-trash me-2"></i>\r
            Clear Cart\r
          </button>\r
          <button class="btn btn-primary" routerLink="/checkout">\r
            <i class="fas fa-credit-card me-2"></i>\r
            Proceed to Checkout\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/cart/cart.scss */\n.cart-container {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n  min-height: 80vh;\n}\n.cart-container .container {\n  width: 100%;\n}\n.cart-container .cart-header {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.cart-container .cart-header h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 10px;\n}\n.cart-container .cart-header h2 i {\n  color: #667eea;\n}\n.cart-container .empty-cart {\n  text-align: center;\n  padding: 80px 20px;\n}\n.cart-container .empty-cart .empty-icon {\n  font-size: 5rem;\n  color: #dee2e6;\n  margin-bottom: 30px;\n}\n.cart-container .empty-cart h3 {\n  font-size: 1.8rem;\n  color: #6c757d;\n  margin-bottom: 15px;\n}\n.cart-container .empty-cart p {\n  font-size: 1.1rem;\n  color: #8e9aaf;\n  margin-bottom: 30px;\n}\n.cart-container .empty-cart .btn {\n  padding: 12px 30px;\n  font-size: 1.1rem;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.cart-container .empty-cart .btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  color: white;\n}\n.cart-container .empty-cart .btn.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: translateY(-2px);\n}\n.cart-container .cart-content {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 40px;\n}\n@media (max-width: 768px) {\n  .cart-container .cart-content {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n}\n.cart-container .cart-items {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.cart-container .cart-item {\n  display: grid;\n  grid-template-columns: 80px 1fr 120px 100px 50px;\n  gap: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #f1f3f4;\n  align-items: center;\n  transition: all 0.3s ease;\n}\n.cart-container .cart-item:last-child {\n  border-bottom: none;\n}\n.cart-container .cart-item:hover {\n  background: #f8f9fa;\n}\n@media (max-width: 768px) {\n  .cart-container .cart-item {\n    grid-template-columns: 60px 1fr;\n    gap: 15px;\n  }\n  .cart-container .cart-item .quantity-controls,\n  .cart-container .cart-item .item-total,\n  .cart-container .cart-item .remove-btn {\n    grid-column: 1/-1;\n    justify-self: center;\n    margin-top: 10px;\n  }\n}\n.cart-container .item-image img {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .cart-container .item-image img {\n    width: 60px;\n    height: 60px;\n  }\n}\n.cart-container .item-details .item-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 5px;\n  line-height: 1.3;\n}\n.cart-container .item-details .item-author {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 5px;\n}\n.cart-container .item-details .item-price {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #667eea;\n  margin: 0;\n}\n.cart-container .quantity-controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 5px;\n}\n.cart-container .quantity-controls .quantity-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: white;\n  color: #667eea;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.cart-container .quantity-controls .quantity-btn:hover:not(:disabled) {\n  background: #667eea;\n  color: white;\n  transform: scale(1.1);\n}\n.cart-container .quantity-controls .quantity-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.cart-container .quantity-controls .quantity {\n  font-weight: 600;\n  color: #2c3e50;\n  min-width: 20px;\n  text-align: center;\n}\n.cart-container .item-total {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2c3e50;\n  text-align: right;\n}\n.cart-container .remove-btn {\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: #fff5f5;\n  color: #e53e3e;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.cart-container .remove-btn:hover {\n  background: #e53e3e;\n  color: white;\n  transform: scale(1.1);\n}\n.cart-container .cart-summary {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  height: fit-content;\n  position: sticky;\n  top: 20px;\n}\n.cart-container .summary-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0;\n  border-bottom: 1px solid #f1f3f4;\n  font-size: 1rem;\n}\n.cart-container .summary-item:last-of-type {\n  border-bottom: 2px solid #667eea;\n  margin-bottom: 20px;\n}\n.cart-container .summary-item.total {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n.cart-container .summary-item.total .total-price {\n  color: #667eea;\n  font-size: 1.3rem;\n}\n.cart-container .cart-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.cart-container .cart-actions .btn {\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.cart-container .cart-actions .btn.btn-outline-danger {\n  background: white;\n  color: #e53e3e;\n  border: 2px solid #e53e3e;\n}\n.cart-container .cart-actions .btn.btn-outline-danger:hover {\n  background: #e53e3e;\n  color: white;\n}\n.cart-container .cart-actions .btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.cart-container .cart-actions .btn.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5a67d8,\n      #553c9a);\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n}\n@media (max-width: 768px) {\n  .cart-container {\n    padding: 15px;\n  }\n  .cart-container .cart-header h2 {\n    font-size: 2rem;\n  }\n  .cart-container .empty-cart {\n    padding: 60px 15px;\n  }\n  .cart-container .empty-cart .empty-icon {\n    font-size: 4rem;\n  }\n  .cart-container .empty-cart h3 {\n    font-size: 1.5rem;\n  }\n  .cart-container .cart-summary {\n    position: static;\n    margin-top: 30px;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.cart-item {\n  animation: slideIn 0.3s ease;\n}\n/*# sourceMappingURL=cart.css.map */\n"] }]
  }], () => [{ type: CartService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.ts", lineNumber: 14 });
})();

// src/app/features/admin/admin-layout.ts
var AdminLayoutComponent = class _AdminLayoutComponent {
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 55, vars: 0, consts: [[1, "admin-layout"], [1, "admin-sidebar"], [1, "sidebar-header"], [1, "logo-icon"], [1, "sidebar-menu"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active"], [1, "menu-icon"], ["routerLink", "/admin/books", "routerLinkActive", "active"], ["routerLink", "/admin/users", "routerLinkActive", "active"], ["routerLink", "/admin/analytics", "routerLinkActive", "active"], ["routerLink", "/admin/settings", "routerLinkActive", "active"], [1, "sidebar-footer"], ["href", "/", 1, "back-to-site"], [1, "admin-main"], [1, "admin-header"], [1, "header-content"], [1, "header-actions"], ["title", "Notifications", 1, "notification-btn"], [1, "notification-icon"], [1, "notification-badge"], [1, "admin-profile"], ["src", "https://via.placeholder.com/40x40", "alt", "Admin", 1, "profile-avatar"], [1, "profile-name"], [1, "admin-content"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "h2")(4, "span", 3);
      \u0275\u0275text(5, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Readify Admin ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5)(10, "span", 6);
      \u0275\u0275text(11, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Dashboard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 7)(15, "span", 6);
      \u0275\u0275text(16, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Book Management ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 8)(20, "span", 6);
      \u0275\u0275text(21, "\u{1F465}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " User Management ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 9)(25, "span", 6);
      \u0275\u0275text(26, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Analytics ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 10)(30, "span", 6);
      \u0275\u0275text(31, "\u2699\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Settings ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 11)(34, "a", 12)(35, "span", 6);
      \u0275\u0275text(36, "\u{1F3E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " Back to Site ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "main", 13)(39, "header", 14)(40, "div", 15)(41, "h1");
      \u0275\u0275text(42, "Admin Panel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 16)(44, "button", 17)(45, "span", 18);
      \u0275\u0275text(46, "\u{1F514}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 19);
      \u0275\u0275text(48, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 20);
      \u0275\u0275element(50, "img", 21);
      \u0275\u0275elementStart(51, "span", 22);
      \u0275\u0275text(52, "Admin User");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(53, "div", 23);
      \u0275\u0275element(54, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #f8fafc;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.sidebar-menu[_ngcontent-%COMP%] {\n  flex: 1;\n  list-style: none;\n  padding: 1rem 0;\n  margin: 0;\n}\n.sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.5rem;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: all 0.3s ease;\n  border-left: 3px solid transparent;\n}\n.sidebar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.sidebar-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.15);\n  color: white;\n  border-left-color: white;\n  font-weight: 500;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 20px;\n  text-align: center;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.back-to-site[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.back-to-site[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  display: flex;\n  flex-direction: column;\n}\n.admin-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  border-bottom: 1px solid #e2e8f0;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1a202c;\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.3s ease;\n}\n.notification-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f7fafc;\n}\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #e53e3e;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n.admin-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n}\n.admin-profile[_ngcontent-%COMP%]:hover {\n  background-color: #f7fafc;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2d3748;\n}\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0;\n}\n@media (max-width: 1024px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    margin-left: 220px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .admin-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=admin-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="admin-layout">
      <!-- Sidebar Navigation -->
      <nav class="admin-sidebar">
        <div class="sidebar-header">
          <h2>
            <span class="logo-icon">\u{1F4DA}</span>
            Readify Admin
          </h2>
        </div>
        
        <ul class="sidebar-menu">
          <li>
            <a routerLink="/admin/dashboard" routerLinkActive="active">
              <span class="menu-icon">\u{1F4CA}</span>
              Dashboard
            </a>
          </li>
          <li>
            <a routerLink="/admin/books" routerLinkActive="active">
              <span class="menu-icon">\u{1F4DA}</span>
              Book Management
            </a>
          </li>
          <li>
            <a routerLink="/admin/users" routerLinkActive="active">
              <span class="menu-icon">\u{1F465}</span>
              User Management
            </a>
          </li>
          <li>
            <a routerLink="/admin/analytics" routerLinkActive="active">
              <span class="menu-icon">\u{1F4C8}</span>
              Analytics
            </a>
          </li>
          <li>
            <a routerLink="/admin/settings" routerLinkActive="active">
              <span class="menu-icon">\u2699\uFE0F</span>
              Settings
            </a>
          </li>
        </ul>
        
        <div class="sidebar-footer">
          <a href="/" class="back-to-site">
            <span class="menu-icon">\u{1F3E0}</span>
            Back to Site
          </a>
        </div>
      </nav>

      <!-- Main Content Area -->
      <main class="admin-main">
        <!-- Header -->
        <header class="admin-header">
          <div class="header-content">
            <h1>Admin Panel</h1>
            <div class="header-actions">
              <button class="notification-btn" title="Notifications">
                <span class="notification-icon">\u{1F514}</span>
                <span class="notification-badge">3</span>
              </button>
              <div class="admin-profile">
                <img src="https://via.placeholder.com/40x40" alt="Admin" class="profile-avatar">
                <span class="profile-name">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Page Content -->
        <div class="admin-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `, styles: ["/* angular:styles/component:scss;bb09345b59ef15263baf9dd8cf349653caaa4079beb352e411bc78676ed73dcf;C:/Users/egeer/OneDrive/Masa\xFCst\xFC/ANGULAR/Readify/src/app/features/admin/admin-layout.ts */\n.admin-layout {\n  display: flex;\n  min-height: 100vh;\n  background-color: #f8fafc;\n}\n.admin-sidebar {\n  width: 260px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n}\n.sidebar-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebar-header h2 {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.logo-icon {\n  font-size: 1.8rem;\n}\n.sidebar-menu {\n  flex: 1;\n  list-style: none;\n  padding: 1rem 0;\n  margin: 0;\n}\n.sidebar-menu li {\n  margin: 0;\n}\n.sidebar-menu a {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.5rem;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: all 0.3s ease;\n  border-left: 3px solid transparent;\n}\n.sidebar-menu a:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n  border-left-color: rgba(255, 255, 255, 0.5);\n}\n.sidebar-menu a.active {\n  background-color: rgba(255, 255, 255, 0.15);\n  color: white;\n  border-left-color: white;\n  font-weight: 500;\n}\n.menu-icon {\n  font-size: 1.1rem;\n  width: 20px;\n  text-align: center;\n}\n.sidebar-footer {\n  padding: 1.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.back-to-site {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.back-to-site:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.admin-main {\n  flex: 1;\n  margin-left: 260px;\n  display: flex;\n  flex-direction: column;\n}\n.admin-header {\n  background: white;\n  padding: 1rem 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  border-bottom: 1px solid #e2e8f0;\n}\n.header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.admin-header h1 {\n  margin: 0;\n  color: #1a202c;\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.notification-btn {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.3s ease;\n}\n.notification-btn:hover {\n  background-color: #f7fafc;\n}\n.notification-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #e53e3e;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.125rem 0.375rem;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n}\n.admin-profile {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n}\n.admin-profile:hover {\n  background-color: #f7fafc;\n}\n.profile-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.profile-name {\n  font-weight: 500;\n  color: #2d3748;\n}\n.admin-content {\n  flex: 1;\n  padding: 0;\n}\n@media (max-width: 1024px) {\n  .admin-sidebar {\n    width: 220px;\n  }\n  .admin-main {\n    margin-left: 220px;\n  }\n}\n@media (max-width: 768px) {\n  .admin-sidebar {\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n  }\n  .admin-main {\n    margin-left: 0;\n  }\n  .admin-header {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=admin-layout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/features/admin/admin-layout.ts", lineNumber: 312 });
})();

// src/app/features/admin/dashboard/admin-dashboard.ts
function AdminDashboardComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "p", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getActivityIcon(activity_r1.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r1.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r1.item);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r1.time);
  }
}
function AdminDashboardComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38)(9, "div", 39);
    \u0275\u0275element(10, "div", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const book_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", book_r3.sales, " sales \u2022 $", book_r3.revenue);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", book_r3.sales / 200 * 100, "%");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  authService;
  bookService;
  stats = {
    totalBooks: 0,
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0
  };
  recentActivities = [];
  topBooks = [];
  constructor(authService, bookService) {
    this.authService = authService;
    this.bookService = bookService;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.stats = {
      totalBooks: 1247,
      totalUsers: 8950,
      totalOrders: 342,
      revenue: 15680
    };
    this.recentActivities = [
      { action: "New book added", item: "The Midnight Library", time: "2 hours ago", type: "book" },
      { action: "User registered", item: "john.doe@email.com", time: "3 hours ago", type: "user" },
      { action: "Order completed", item: "Order #12845", time: "5 hours ago", type: "order" },
      { action: "Book updated", item: "Dune - Frank Herbert", time: "1 day ago", type: "book" },
      { action: "New review", item: '5-star review for "1984"', time: "1 day ago", type: "review" }
    ];
    this.topBooks = [
      { title: "The Great Gatsby", sales: 156, revenue: 2184 },
      { title: "To Kill a Mockingbird", sales: 134, revenue: 1876 },
      { title: "1984", sales: 128, revenue: 1792 },
      { title: "Dune", sales: 98, revenue: 1568 },
      { title: "The Hobbit", sales: 87, revenue: 1044 }
    ];
  }
  getActivityIcon(type) {
    switch (type) {
      case "book":
        return "\u{1F4DA}";
      case "user":
        return "\u{1F464}";
      case "order":
        return "\u{1F6D2}";
      case "review":
        return "\u2B50";
      default:
        return "\u{1F4DD}";
    }
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BookService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 113, vars: 6, consts: [[1, "dashboard-content"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "books"], [1, "stat-info"], [1, "stat-trend", "positive"], [1, "stat-icon", "users"], [1, "stat-icon", "orders"], [1, "stat-icon", "revenue"], [1, "dashboard-grid"], [1, "dashboard-card"], [1, "card-header"], [1, "btn-link"], [1, "card-content"], [1, "activity-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "top-books-list"], ["class", "book-item", 4, "ngFor", "ngForOf"], [1, "quick-actions"], ["routerLink", "/admin/books", 1, "action-btn", "primary"], [1, "action-icon"], ["routerLink", "/admin/users", 1, "action-btn", "secondary"], ["routerLink", "/admin/analytics", 1, "action-btn", "accent"], [1, "action-btn", "warning"], [1, "status-list"], [1, "status-item"], [1, "status-indicator", "online"], [1, "status-value"], [1, "status-indicator", "warning"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-details"], [1, "activity-action"], [1, "activity-item-name"], [1, "activity-time"], [1, "book-item"], [1, "book-rank"], [1, "book-details"], [1, "book-progress"], [1, "progress-bar"], [1, "progress-fill"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "h3");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Total Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275text(11, "+12%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 2)(13, "div", 6);
      \u0275\u0275text(14, "\u{1F465}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 4)(16, "h3");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Total Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 5);
      \u0275\u0275text(21, "+8%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 2)(23, "div", 7);
      \u0275\u0275text(24, "\u{1F6D2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 4)(26, "h3");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Total Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 5);
      \u0275\u0275text(31, "+15%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 2)(33, "div", 8);
      \u0275\u0275text(34, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 4)(36, "h3");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "Revenue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 5);
      \u0275\u0275text(41, "+23%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 9)(43, "div", 10)(44, "div", 11)(45, "h3");
      \u0275\u0275text(46, "Recent Activities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 12);
      \u0275\u0275text(48, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 13)(50, "div", 14);
      \u0275\u0275template(51, AdminDashboardComponent_div_51_Template, 10, 4, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 10)(53, "div", 11)(54, "h3");
      \u0275\u0275text(55, "Top Selling Books");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 12);
      \u0275\u0275text(57, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 13)(59, "div", 16);
      \u0275\u0275template(60, AdminDashboardComponent_div_60_Template, 11, 6, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 10)(62, "div", 11)(63, "h3");
      \u0275\u0275text(64, "Quick Actions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 13)(66, "div", 18)(67, "button", 19)(68, "span", 20);
      \u0275\u0275text(69, "\u2795");
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, " Add New Book ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "button", 21)(72, "span", 20);
      \u0275\u0275text(73, "\u{1F464}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(74, " Manage Users ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 22)(76, "span", 20);
      \u0275\u0275text(77, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(78, " View Reports ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "button", 23)(80, "span", 20);
      \u0275\u0275text(81, "\u{1F514}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(82, " Send Newsletter ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 10)(84, "div", 11)(85, "h3");
      \u0275\u0275text(86, "System Status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 13)(88, "div", 24)(89, "div", 25);
      \u0275\u0275element(90, "div", 26);
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "Database Connection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 27);
      \u0275\u0275text(94, "Online");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 25);
      \u0275\u0275element(96, "div", 26);
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "Payment Gateway");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 27);
      \u0275\u0275text(100, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 25);
      \u0275\u0275element(102, "div", 28);
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104, "Email Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "span", 27);
      \u0275\u0275text(106, "Slow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 25);
      \u0275\u0275element(108, "div", 26);
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110, "CDN Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "span", 27);
      \u0275\u0275text(112, "Optimal");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.stats.totalBooks);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats.totalUsers);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats.totalOrders);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("$", ctx.stats.revenue);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.recentActivities);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.topBooks);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ["\n\n.dashboard-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n.stat-icon.books[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n}\n.stat-icon.users[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.stat-icon.orders[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n}\n.stat-icon.revenue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b,\n      #38f9d7);\n}\n.stat-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.stat-trend[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.stat-trend.positive[_ngcontent-%COMP%] {\n  color: #38a169;\n  background-color: #f0fff4;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n}\n.dashboard-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease;\n}\n.dashboard-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.activity-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n.activity-item[_ngcontent-%COMP%]:hover {\n  background-color: #f7fafc;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #edf2f7;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.activity-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.activity-action[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.activity-item-name[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #4a5568;\n  font-size: 0.875rem;\n}\n.activity-time[_ngcontent-%COMP%] {\n  color: #a0aec0;\n  font-size: 0.75rem;\n}\n.top-books-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.book-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n.book-item[_ngcontent-%COMP%]:hover {\n  background-color: #f7fafc;\n}\n.book-rank[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-radius: 50%;\n  font-weight: 700;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.book-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.book-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #2d3748;\n}\n.book-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.book-progress[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background-color: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 1rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.action-btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.action-btn.secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n  color: white;\n}\n.action-btn.accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: white;\n}\n.action-btn.warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7,\n      #fab1a0);\n  color: #2d3748;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.status-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.status-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n.status-item[_ngcontent-%COMP%]:hover {\n  background-color: #f7fafc;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-indicator.online[_ngcontent-%COMP%] {\n  background-color: #38a169;\n  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.2);\n}\n.status-indicator.warning[_ngcontent-%COMP%] {\n  background-color: #ed8936;\n  box-shadow: 0 0 0 3px rgba(237, 137, 54, 0.2);\n}\n.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  flex: 1;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.status-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  }\n}\n/*# sourceMappingURL=admin-dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: '<!-- Dashboard Content -->\r\n<div class="dashboard-content">\r\n  <!-- Stats Cards -->\r\n  <div class="stats-grid">\r\n    <div class="stat-card">\r\n      <div class="stat-icon books">\u{1F4DA}</div>\r\n      <div class="stat-info">\r\n        <h3>{{ stats.totalBooks }}</h3>\r\n        <p>Total Books</p>\r\n      </div>\r\n      <div class="stat-trend positive">+12%</div>\r\n    </div>\r\n    \r\n    <div class="stat-card">\r\n      <div class="stat-icon users">\u{1F465}</div>\r\n      <div class="stat-info">\r\n        <h3>{{ stats.totalUsers }}</h3>\r\n        <p>Total Users</p>\r\n      </div>\r\n      <div class="stat-trend positive">+8%</div>\r\n    </div>\r\n    \r\n    <div class="stat-card">\r\n      <div class="stat-icon orders">\u{1F6D2}</div>\r\n      <div class="stat-info">\r\n        <h3>{{ stats.totalOrders }}</h3>\r\n        <p>Total Orders</p>\r\n      </div>\r\n      <div class="stat-trend positive">+15%</div>\r\n    </div>\r\n    \r\n    <div class="stat-card">\r\n      <div class="stat-icon revenue">\u{1F4B0}</div>\r\n      <div class="stat-info">\r\n        <h3>${{ stats.revenue }}</h3>\r\n        <p>Revenue</p>\r\n      </div>\r\n      <div class="stat-trend positive">+23%</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Dashboard Grid -->\r\n  <div class="dashboard-grid">\r\n    <!-- Recent Activities -->\r\n    <div class="dashboard-card">\r\n      <div class="card-header">\r\n        <h3>Recent Activities</h3>\r\n        <button class="btn-link">View All</button>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="activity-list">\r\n          <div class="activity-item" *ngFor="let activity of recentActivities">\r\n            <div class="activity-icon">{{ getActivityIcon(activity.type) }}</div>\r\n            <div class="activity-details">\r\n              <p class="activity-action">{{ activity.action }}</p>\r\n              <p class="activity-item-name">{{ activity.item }}</p>\r\n              <span class="activity-time">{{ activity.time }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Top Selling Books -->\r\n    <div class="dashboard-card">\r\n      <div class="card-header">\r\n        <h3>Top Selling Books</h3>\r\n        <button class="btn-link">View All</button>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="top-books-list">\r\n          <div class="book-item" *ngFor="let book of topBooks; let i = index">\r\n            <div class="book-rank">{{ i + 1 }}</div>\r\n            <div class="book-details">\r\n              <h4>{{ book.title }}</h4>\r\n              <p>{{ book.sales }} sales \u2022 ${{ book.revenue }}</p>\r\n            </div>\r\n            <div class="book-progress">\r\n              <div class="progress-bar">\r\n                <div class="progress-fill" [style.width.%]="(book.sales / 200) * 100"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Quick Actions -->\r\n    <div class="dashboard-card">\r\n      <div class="card-header">\r\n        <h3>Quick Actions</h3>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="quick-actions">\r\n          <button class="action-btn primary" routerLink="/admin/books">\r\n            <span class="action-icon">\u2795</span>\r\n            Add New Book\r\n          </button>\r\n          <button class="action-btn secondary" routerLink="/admin/users">\r\n            <span class="action-icon">\u{1F464}</span>\r\n            Manage Users\r\n          </button>\r\n          <button class="action-btn accent" routerLink="/admin/analytics">\r\n            <span class="action-icon">\u{1F4CA}</span>\r\n            View Reports\r\n          </button>\r\n          <button class="action-btn warning">\r\n            <span class="action-icon">\u{1F514}</span>\r\n            Send Newsletter\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- System Status -->\r\n    <div class="dashboard-card">\r\n      <div class="card-header">\r\n        <h3>System Status</h3>\r\n      </div>\r\n      <div class="card-content">\r\n        <div class="status-list">\r\n          <div class="status-item">\r\n            <div class="status-indicator online"></div>\r\n            <span>Database Connection</span>\r\n            <span class="status-value">Online</span>\r\n          </div>\r\n          <div class="status-item">\r\n            <div class="status-indicator online"></div>\r\n            <span>Payment Gateway</span>\r\n            <span class="status-value">Active</span>\r\n          </div>\r\n          <div class="status-item">\r\n            <div class="status-indicator warning"></div>\r\n            <span>Email Service</span>\r\n            <span class="status-value">Slow</span>\r\n          </div>\r\n          <div class="status-item">\r\n            <div class="status-indicator online"></div>\r\n            <span>CDN Status</span>\r\n            <span class="status-value">Optimal</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/admin/dashboard/admin-dashboard.scss */\n.dashboard-content {\n  padding: 2rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.stat-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n.stat-icon.books {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n}\n.stat-icon.users {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.stat-icon.orders {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n}\n.stat-icon.revenue {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b,\n      #38f9d7);\n}\n.stat-info {\n  flex: 1;\n}\n.stat-info h3 {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.stat-info p {\n  margin: 0;\n  color: #718096;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.stat-trend {\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.stat-trend.positive {\n  color: #38a169;\n  background-color: #f0fff4;\n}\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n}\n.dashboard-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  transition: box-shadow 0.3s ease;\n}\n.dashboard-card:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.btn-link:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n}\n.card-content {\n  padding: 1.5rem;\n}\n.activity-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.activity-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n.activity-item:hover {\n  background-color: #f7fafc;\n}\n.activity-icon {\n  font-size: 1.25rem;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #edf2f7;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.activity-details {\n  flex: 1;\n}\n.activity-action {\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.activity-item-name {\n  margin: 0 0 0.25rem 0;\n  color: #4a5568;\n  font-size: 0.875rem;\n}\n.activity-time {\n  color: #a0aec0;\n  font-size: 0.75rem;\n}\n.top-books-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.book-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n.book-item:hover {\n  background-color: #f7fafc;\n}\n.book-rank {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-radius: 50%;\n  font-weight: 700;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.book-details {\n  flex: 1;\n}\n.book-details h4 {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #2d3748;\n}\n.book-details p {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.book-progress {\n  width: 80px;\n}\n.progress-bar {\n  width: 100%;\n  height: 6px;\n  background-color: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.quick-actions {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 1rem;\n}\n.action-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.action-btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.action-btn.secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n  color: white;\n}\n.action-btn.accent {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: white;\n}\n.action-btn.warning {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7,\n      #fab1a0);\n  color: #2d3748;\n}\n.action-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.action-icon {\n  font-size: 1.5rem;\n}\n.status-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.status-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 8px;\n  transition: background-color 0.3s ease;\n}\n.status-item:hover {\n  background-color: #f7fafc;\n}\n.status-indicator {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.status-indicator.online {\n  background-color: #38a169;\n  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.2);\n}\n.status-indicator.warning {\n  background-color: #ed8936;\n  box-shadow: 0 0 0 3px rgba(237, 137, 54, 0.2);\n}\n.status-item span:first-of-type {\n  flex: 1;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.status-value {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .dashboard-content {\n    padding: 1rem;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .quick-actions {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  }\n}\n/*# sourceMappingURL=admin-dashboard.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: BookService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/dashboard/admin-dashboard.ts", lineNumber: 14 });
})();

// src/app/features/admin/book-management/book-management.ts
function BookManagementComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function BookManagementComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showOpenLibrarySearch());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Search Open Library ");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function BookManagementComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideOpenLibrarySearch());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Hide Open Library Search ");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "app-open-library-search");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275property("value", category_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r4);
  }
}
function BookManagementComponent_div_35_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_div_35_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Bestseller");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_div_35_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "img", 34);
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275template(4, BookManagementComponent_div_35_div_1_span_4_Template, 2, 0, "span", 36)(5, BookManagementComponent_div_35_div_1_span_5_Template, 2, 0, "span", 37)(6, BookManagementComponent_div_35_div_1_span_6_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "h3", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 44)(17, "span", 45);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 46);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 47)(22, "button", 48);
    \u0275\u0275listener("click", function BookManagementComponent_div_35_div_1_Template_button_click_22_listener() {
      const book_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editBook(book_r6));
    });
    \u0275\u0275elementStart(23, "span", 6);
    \u0275\u0275text(24, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 49);
    \u0275\u0275listener("click", function BookManagementComponent_div_35_div_1_Template_button_click_26_listener() {
      const book_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteBook(book_r6));
    });
    \u0275\u0275elementStart(27, "span", 6);
    \u0275\u0275text(28, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Delete ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 50)(31, "label", 51)(32, "input", 52);
    \u0275\u0275listener("change", function BookManagementComponent_div_35_div_1_Template_input_change_32_listener() {
      const book_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBookStatus(book_r6, "isFeatured"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "span", 53);
    \u0275\u0275text(34, " Featured ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label", 51)(36, "input", 52);
    \u0275\u0275listener("change", function BookManagementComponent_div_35_div_1_Template_input_change_36_listener() {
      const book_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBookStatus(book_r6, "isBestseller"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "span", 53);
    \u0275\u0275text(38, " Bestseller ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 51)(40, "input", 52);
    \u0275\u0275listener("change", function BookManagementComponent_div_35_div_1_Template_input_change_40_listener() {
      const book_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBookStatus(book_r6, "isNew"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "span", 53);
    \u0275\u0275text(42, " New Arrival ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const book_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", book_r6.coverImage, \u0275\u0275sanitizeUrl)("alt", book_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", book_r6.isFeatured);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r6.isBestseller);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r6.isNew);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", book_r6.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r6.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ISBN: ", book_r6.isbn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", book_r6.price);
    \u0275\u0275advance();
    \u0275\u0275classProp("low-stock", (book_r6.stock || 0) < 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Stock: ", book_r6.stock || 0);
    \u0275\u0275advance(12);
    \u0275\u0275property("checked", book_r6.isFeatured);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", book_r6.isBestseller);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", book_r6.isNew);
  }
}
function BookManagementComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, BookManagementComponent_div_35_div_1_Template, 43, 16, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredBooks);
  }
}
function BookManagementComponent_div_36_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Try adjusting your filters or search terms.");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_div_36_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Start by adding your first book to the inventory.");
    \u0275\u0275elementEnd();
  }
}
function BookManagementComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Books Found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BookManagementComponent_div_36_p_5_Template, 2, 0, "p", 59)(6, BookManagementComponent_div_36_p_6_Template, 2, 0, "p", 59);
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function BookManagementComponent_div_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddBookForm());
    });
    \u0275\u0275text(8, "Add New Book");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm && !ctx_r1.selectedCategory);
  }
}
function BookManagementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "div", 61);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading books...");
    \u0275\u0275elementEnd()();
  }
}
function BookManagementComponent_div_38_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("title"));
  }
}
function BookManagementComponent_div_38_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("author"));
  }
}
function BookManagementComponent_div_38_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("isbn"));
  }
}
function BookManagementComponent_div_38_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("price"));
  }
}
function BookManagementComponent_div_38_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    \u0275\u0275property("value", category_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r9);
  }
}
function BookManagementComponent_div_38_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("category"));
  }
}
function BookManagementComponent_div_38_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("stock"));
  }
}
function BookManagementComponent_div_38_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("imageUrl"));
  }
}
function BookManagementComponent_div_38_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFormFieldError("description"));
  }
}
function BookManagementComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function BookManagementComponent_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275listener("click", function BookManagementComponent_div_38_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 64)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 65);
    \u0275\u0275listener("click", function BookManagementComponent_div_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 66);
    \u0275\u0275listener("ngSubmit", function BookManagementComponent_div_38_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(8, "div", 67)(9, "div", 68)(10, "label", 69);
    \u0275\u0275text(11, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 70);
    \u0275\u0275template(13, BookManagementComponent_div_38_span_13_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 68)(15, "label", 72);
    \u0275\u0275text(16, "Author *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 73);
    \u0275\u0275template(18, BookManagementComponent_div_38_span_18_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 68)(20, "label", 74);
    \u0275\u0275text(21, "ISBN *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 75);
    \u0275\u0275template(23, BookManagementComponent_div_38_span_23_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 68)(25, "label", 76);
    \u0275\u0275text(26, "Price *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 77);
    \u0275\u0275template(28, BookManagementComponent_div_38_span_28_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 68)(30, "label", 78);
    \u0275\u0275text(31, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 79)(33, "option", 14);
    \u0275\u0275text(34, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, BookManagementComponent_div_38_option_35_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, BookManagementComponent_div_38_span_36_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 68)(38, "label", 80);
    \u0275\u0275text(39, "Stock Quantity *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 81);
    \u0275\u0275template(41, BookManagementComponent_div_38_span_41_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 82)(43, "label", 83);
    \u0275\u0275text(44, "Image URL *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 84);
    \u0275\u0275template(46, BookManagementComponent_div_38_span_46_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 82)(48, "label", 85);
    \u0275\u0275text(49, "Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 86);
    \u0275\u0275template(51, BookManagementComponent_div_38_span_51_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 87)(53, "label", 88);
    \u0275\u0275element(54, "input", 89)(55, "span", 90);
    \u0275\u0275text(56, " Featured Book ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "label", 88);
    \u0275\u0275element(58, "input", 91)(59, "span", 90);
    \u0275\u0275text(60, " Bestseller ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "label", 88);
    \u0275\u0275element(62, "input", 92)(63, "span", 90);
    \u0275\u0275text(64, " New Arrival ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 93)(66, "button", 94);
    \u0275\u0275listener("click", function BookManagementComponent_div_38_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(67, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 95);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing ? "Edit Book" : "Add New Book");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.bookForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ((tmp_3_0 = ctx_r1.bookForm.get("title")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.bookForm.get("title")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("title"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx_r1.bookForm.get("author")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.bookForm.get("author")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("author"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_7_0 = ctx_r1.bookForm.get("isbn")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.bookForm.get("isbn")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("isbn"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_9_0 = ctx_r1.bookForm.get("price")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.bookForm.get("price")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("price"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_11_0 = ctx_r1.bookForm.get("category")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.bookForm.get("category")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("category"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_14_0 = ctx_r1.bookForm.get("stock")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.bookForm.get("stock")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("stock"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_16_0 = ctx_r1.bookForm.get("imageUrl")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.bookForm.get("imageUrl")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("imageUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_18_0 = ctx_r1.bookForm.get("description")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r1.bookForm.get("description")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormFieldError("description"));
    \u0275\u0275advance(17);
    \u0275\u0275property("disabled", ctx_r1.bookForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Update Book" : "Add Book", " ");
  }
}
var BookManagementComponent = class _BookManagementComponent {
  bookService;
  fb;
  books = [];
  filteredBooks = [];
  bookForm;
  isEditing = false;
  editingBookId = null;
  showAddForm = false;
  showGoogleSearch = false;
  searchTerm = "";
  selectedCategory = "";
  sortBy = "title";
  sortDirection = "asc";
  loading = false;
  categories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "History",
    "Self-Help",
    "Business",
    "Technology",
    "Health",
    "Travel",
    "Children",
    "Young Adult"
  ];
  constructor(bookService, fb) {
    this.bookService = bookService;
    this.fb = fb;
    this.bookForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      author: ["", [Validators.required, Validators.minLength(2)]],
      isbn: ["", [Validators.pattern(/^\d{10}(\d{3})?$/)]],
      // Made optional
      price: [0, [Validators.required, Validators.min(0)]],
      // Allow 0 for free books
      category: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(10)]],
      coverImage: ["", [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      isFeatured: [false],
      isBestseller: [false],
      isNew: [false],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.loadBooks();
  }
  loadBooks() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        yield this.bookService.loadBooks();
        this.bookService.books$.subscribe((books) => {
          this.books = books;
          this.filterBooks();
          this.loading = false;
        });
      } catch (error) {
        console.error("Error loading books:", error);
        this.loading = false;
      }
    });
  }
  filterBooks() {
    this.filteredBooks = this.books.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) || book.isbn && book.isbn.includes(this.searchTerm);
      const matchesCategory = !this.selectedCategory || book.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
    this.sortBooks();
  }
  sortBooks() {
    this.filteredBooks.sort((a, b) => {
      let aValue = a[this.sortBy];
      let bValue = b[this.sortBy];
      if (aValue === void 0)
        aValue = "";
      if (bValue === void 0)
        bValue = "";
      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      if (aValue < bValue)
        return this.sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue)
        return this.sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }
  onSearch() {
    this.filterBooks();
  }
  onCategoryFilter() {
    this.filterBooks();
  }
  onSort() {
    this.sortBooks();
  }
  toggleSortDirection() {
    this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    this.sortBooks();
  }
  showAddBookForm() {
    this.showAddForm = true;
    this.isEditing = false;
    this.editingBookId = null;
    this.bookForm.reset();
  }
  editBook(book) {
    this.showAddForm = true;
    this.isEditing = true;
    this.editingBookId = book.id || null;
    this.bookForm.patchValue(book);
  }
  deleteBook(book) {
    return __async(this, null, function* () {
      if (confirm(`Are you sure you want to delete "${book.title}"?`)) {
        try {
          yield this.bookService.deleteBook(book.id);
          console.log("Book deleted:", book.title);
        } catch (error) {
          console.error("Error deleting book:", error);
        }
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.bookForm.valid) {
        const bookData = this.bookForm.value;
        try {
          if (this.isEditing && this.editingBookId) {
            const bookToUpdate = __spreadProps(__spreadValues({}, bookData), { id: this.editingBookId });
            yield this.bookService.updateBook(bookToUpdate);
            console.log("Book updated");
          } else {
            const newBookId = yield this.bookService.addBook(bookData);
            console.log("Book added with ID:", newBookId);
          }
          this.cancelForm();
        } catch (error) {
          console.error("Error saving book:", error);
        }
      }
    });
  }
  cancelForm() {
    this.showAddForm = false;
    this.isEditing = false;
    this.editingBookId = null;
    this.bookForm.reset();
  }
  toggleBookStatus(book, status) {
    book[status] = !book[status];
    this.bookService.updateBook(book);
    console.log(`${book.title} ${status} status:`, book[status]);
  }
  getFormFieldError(fieldName) {
    const field = this.bookForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors["required"])
        return `${fieldName} is required`;
      if (field.errors["minlength"])
        return `${fieldName} is too short`;
      if (field.errors["min"])
        return `${fieldName} must be greater than 0`;
      if (field.errors["pattern"])
        return `Invalid ${fieldName} format`;
    }
    return "";
  }
  showOpenLibrarySearch() {
    this.showGoogleSearch = true;
  }
  hideOpenLibrarySearch() {
    this.showGoogleSearch = false;
  }
  static \u0275fac = function BookManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookManagementComponent)(\u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookManagementComponent, selectors: [["app-book-management"]], decls: 39, vars: 12, consts: [[1, "book-management"], [1, "page-header"], [1, "header-actions"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], ["class", "open-library-section", 4, "ngIf"], [1, "filters-section"], [1, "search-box"], ["type", "text", "placeholder", "Search books by title, author, or ISBN...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "search-icon"], [1, "filter-controls"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "title"], ["value", "author"], ["value", "price"], ["value", "stock"], ["value", "createdAt"], [1, "sort-direction-btn", 3, "click"], ["class", "books-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "open-library-section"], [3, "value"], [1, "books-grid"], ["class", "book-card", 4, "ngFor", "ngForOf"], [1, "book-card"], [1, "book-image"], ["onerror", "this.src='https://via.placeholder.com/200x300?text=No+Image'", 3, "src", "alt"], [1, "book-badges"], ["class", "badge featured", 4, "ngIf"], ["class", "badge bestseller", 4, "ngIf"], ["class", "badge new-arrival", 4, "ngIf"], [1, "book-info"], [1, "book-title"], [1, "book-author"], [1, "book-category"], [1, "book-isbn"], [1, "book-stats"], [1, "book-price"], [1, "book-stock"], [1, "book-actions"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "book-toggles"], [1, "toggle-label"], ["type", "checkbox", 3, "change", "checked"], [1, "toggle-slider"], [1, "badge", "featured"], [1, "badge", "bestseller"], [1, "badge", "new-arrival"], [1, "empty-state"], [1, "empty-icon"], [4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "book-form", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["for", "author"], ["type", "text", "id", "author", "formControlName", "author", 1, "form-input"], ["for", "isbn"], ["type", "text", "id", "isbn", "formControlName", "isbn", "placeholder", "e.g. 9780123456789", 1, "form-input"], ["for", "price"], ["type", "number", "id", "price", "formControlName", "price", "step", "0.01", "min", "0", 1, "form-input"], ["for", "category"], ["id", "category", "formControlName", "category", 1, "form-input"], ["for", "stock"], ["type", "number", "id", "stock", "formControlName", "stock", "min", "0", 1, "form-input"], [1, "form-group", "full-width"], ["for", "imageUrl"], ["type", "url", "id", "imageUrl", "formControlName", "imageUrl", "placeholder", "https://example.com/book-cover.jpg", 1, "form-input"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "4", "placeholder", "Enter book description...", 1, "form-textarea"], [1, "form-checkboxes"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "featured"], [1, "checkbox-slider"], ["type", "checkbox", "formControlName", "bestseller"], ["type", "checkbox", "formControlName", "newArrival"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-message"]], template: function BookManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Book Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275template(5, BookManagementComponent_button_5_Template, 4, 0, "button", 3)(6, BookManagementComponent_button_6_Template, 4, 0, "button", 4);
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function BookManagementComponent_Template_button_click_7_listener() {
        return ctx.showAddBookForm();
      });
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "\u2795");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Add New Book ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, BookManagementComponent_div_11_Template, 2, 0, "div", 7);
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function BookManagementComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function BookManagementComponent_Template_input_input_14_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 11);
      \u0275\u0275text(16, "\u{1F50D}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BookManagementComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BookManagementComponent_Template_select_change_18_listener() {
        return ctx.onCategoryFilter();
      });
      \u0275\u0275elementStart(19, "option", 14);
      \u0275\u0275text(20, "All Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, BookManagementComponent_option_21_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BookManagementComponent_Template_select_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BookManagementComponent_Template_select_change_22_listener() {
        return ctx.onSort();
      });
      \u0275\u0275elementStart(23, "option", 16);
      \u0275\u0275text(24, "Sort by Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 17);
      \u0275\u0275text(26, "Sort by Author");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 18);
      \u0275\u0275text(28, "Sort by Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 19);
      \u0275\u0275text(30, "Sort by Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 20);
      \u0275\u0275text(32, "Sort by Date Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 21);
      \u0275\u0275listener("click", function BookManagementComponent_Template_button_click_33_listener() {
        return ctx.toggleSortDirection();
      });
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, BookManagementComponent_div_35_Template, 2, 1, "div", 22)(36, BookManagementComponent_div_36_Template, 9, 2, "div", 23)(37, BookManagementComponent_div_37_Template, 4, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, BookManagementComponent_div_38_Template, 70, 29, "div", 25);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.showGoogleSearch);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showGoogleSearch);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.showGoogleSearch);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.sortDirection === "asc" ? "\u2191" : "\u2193", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredBooks.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredBooks.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, OpenLibrarySearchComponent], styles: ['@charset "UTF-8";\n\n\n\n.book-management[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f3f7;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin: 0;\n  font-size: 2rem;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 16px;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #007bff,\n      #0056b3);\n  color: white;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0056b3,\n      #004085);\n  transform: translateY(-2px);\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6c757d,\n      #495057);\n  color: white;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #495057,\n      #343a40);\n  transform: translateY(-2px);\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6c757d;\n  border: 2px solid #6c757d;\n}\n.book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n  transform: translateY(-2px);\n}\n.book-management[_ngcontent-%COMP%]   .open-library-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  border: 2px solid #e3f2fd;\n}\n.book-management[_ngcontent-%COMP%]   .open-library-section[_ngcontent-%COMP%]::before {\n  content: "\\1f4da  Google Books Integration";\n  display: block;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1976d2;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e3f2fd;\n}\n.book-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.book-management[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.book-management[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.book-management[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #a0aec0;\n  font-size: 1rem;\n}\n.book-management[_ngcontent-%COMP%]   .filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.book-management[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.book-management[_ngcontent-%COMP%]   .sort-direction-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .sort-direction-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background-color: #f7fafc;\n}\n.book-management[_ngcontent-%COMP%]   .books-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.book-management[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .book-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.book-management[_ngcontent-%COMP%]   .book-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.book-management[_ngcontent-%COMP%]   .book-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.book-management[_ngcontent-%COMP%]   .book-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.book-management[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: center;\n}\n.book-management[_ngcontent-%COMP%]   .badge.featured[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.book-management[_ngcontent-%COMP%]   .badge.bestseller[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n  color: white;\n}\n.book-management[_ngcontent-%COMP%]   .badge.new-arrival[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: white;\n}\n.book-management[_ngcontent-%COMP%]   .book-info[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.book-management[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n  line-height: 1.4;\n}\n.book-management[_ngcontent-%COMP%]   .book-author[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #4a5568;\n  font-style: italic;\n}\n.book-management[_ngcontent-%COMP%]   .book-category[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: #718096;\n  font-size: 0.875rem;\n}\n.book-management[_ngcontent-%COMP%]   .book-isbn[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  color: #a0aec0;\n  font-size: 0.8rem;\n  font-family: monospace;\n}\n.book-management[_ngcontent-%COMP%]   .book-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.book-management[_ngcontent-%COMP%]   .book-price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #38a169;\n}\n.book-management[_ngcontent-%COMP%]   .book-stock[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #4a5568;\n  padding: 0.25rem 0.5rem;\n  background-color: #f7fafc;\n  border-radius: 6px;\n}\n.book-management[_ngcontent-%COMP%]   .book-stock.low-stock[_ngcontent-%COMP%] {\n  background-color: #fed7d7;\n  color: #c53030;\n}\n.book-management[_ngcontent-%COMP%]   .book-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0 1rem 1rem 1rem;\n}\n.book-management[_ngcontent-%COMP%]   .book-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.book-management[_ngcontent-%COMP%]   .book-toggles[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #e2e8f0;\n  background-color: #f7fafc;\n}\n.book-management[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n  color: #4a5568;\n  cursor: pointer;\n}\n.book-management[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.book-management[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.book-management[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  background-color: #cbd5e0;\n  border-radius: 10px;\n  position: relative;\n  transition: background-color 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: white;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.book-management[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background-color: #667eea;\n}\n.book-management[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.book-management[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.book-management[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.book-management[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n}\n.book-management[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  color: #718096;\n}\n.book-management[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.book-management[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.book-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 1rem;\n}\n.book-management[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.book-management[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.book-management[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.book-management[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #a0aec0;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #718096;\n}\n.book-management[_ngcontent-%COMP%]   .book-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.book-management[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.book-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.book-management[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.book-management[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.book-management[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.book-management[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.book-management[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.book-management[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%], \n.book-management[_ngcontent-%COMP%]   .form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n}\n.book-management[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.book-management[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.book-management[_ngcontent-%COMP%]   .form-checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin: 1.5rem 0;\n  padding: 1rem;\n  background-color: #f7fafc;\n  border-radius: 8px;\n}\n.book-management[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #4a5568;\n  cursor: pointer;\n}\n.book-management[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.book-management[_ngcontent-%COMP%]   .checkbox-slider[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  background-color: #cbd5e0;\n  border-radius: 10px;\n  position: relative;\n  transition: background-color 0.3s ease;\n}\n.book-management[_ngcontent-%COMP%]   .checkbox-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: white;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.book-management[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-slider[_ngcontent-%COMP%] {\n  background-color: #667eea;\n}\n.book-management[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .checkbox-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.book-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n@media (max-width: 768px) {\n  .book-management[_ngcontent-%COMP%]   .book-management[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .book-management[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .book-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .book-management[_ngcontent-%COMP%]   .filter-controls[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .book-management[_ngcontent-%COMP%]   .books-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .book-management[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .book-management[_ngcontent-%COMP%]   .form-checkboxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .book-management[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .book-management[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=book-management.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookManagementComponent, [{
    type: Component,
    args: [{ selector: "app-book-management", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, OpenLibrarySearchComponent], template: `<div class="book-management">\r
  <div class="page-header">\r
    <h1>Book Management</h1>\r
    <div class="header-actions">\r
      <button class="btn btn-secondary" (click)="showOpenLibrarySearch()" *ngIf="!showGoogleSearch">\r
        <span class="btn-icon">\u{1F50D}</span>\r
        Search Open Library\r
      </button>\r
      <button class="btn btn-outline-secondary" (click)="hideOpenLibrarySearch()" *ngIf="showGoogleSearch">\r
        <span class="btn-icon">\u274C</span>\r
        Hide Open Library Search\r
      </button>\r
      <button class="btn btn-primary" (click)="showAddBookForm()">\r
        <span class="btn-icon">\u2795</span>\r
        Add New Book\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Google Books Search Component -->\r
  <div *ngIf="showGoogleSearch" class="open-library-section">\r
    <app-open-library-search></app-open-library-search>\r
  </div>\r
\r
  <!-- Filters and Search -->\r
  <div class="filters-section">\r
    <div class="search-box">\r
      <input \r
        type="text" \r
        placeholder="Search books by title, author, or ISBN..." \r
        [(ngModel)]="searchTerm"\r
        (input)="onSearch()"\r
        class="search-input">\r
      <span class="search-icon">\u{1F50D}</span>\r
    </div>\r
    \r
    <div class="filter-controls">\r
      <select [(ngModel)]="selectedCategory" (change)="onCategoryFilter()" class="filter-select">\r
        <option value="">All Categories</option>\r
        <option *ngFor="let category of categories" [value]="category">{{ category }}</option>\r
      </select>\r
      \r
      <select [(ngModel)]="sortBy" (change)="onSort()" class="filter-select">\r
        <option value="title">Sort by Title</option>\r
        <option value="author">Sort by Author</option>\r
        <option value="price">Sort by Price</option>\r
        <option value="stock">Sort by Stock</option>\r
        <option value="createdAt">Sort by Date Added</option>\r
      </select>\r
      \r
      <button class="sort-direction-btn" (click)="toggleSortDirection()">\r
        {{ sortDirection === 'asc' ? '\u2191' : '\u2193' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Books Grid -->\r
  <div class="books-grid" *ngIf="!loading && filteredBooks.length > 0">\r
    <div class="book-card" *ngFor="let book of filteredBooks">\r
      <div class="book-image">\r
        <img [src]="book.coverImage" [alt]="book.title" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">\r
        <div class="book-badges">\r
          <span class="badge featured" *ngIf="book.isFeatured">Featured</span>\r
          <span class="badge bestseller" *ngIf="book.isBestseller">Bestseller</span>\r
          <span class="badge new-arrival" *ngIf="book.isNew">New</span>\r
        </div>\r
      </div>\r
      \r
      <div class="book-info">\r
        <h3 class="book-title">{{ book.title }}</h3>\r
        <p class="book-author">by {{ book.author }}</p>\r
        <p class="book-category">{{ book.category }}</p>\r
        <p class="book-isbn">ISBN: {{ book.isbn }}</p>\r
        <div class="book-stats">\r
          <span class="book-price">\${{ book.price }}</span>\r
          <span class="book-stock" [class.low-stock]="(book.stock || 0) < 10">Stock: {{ book.stock || 0 }}</span>\r
        </div>\r
      </div>\r
      \r
      <div class="book-actions">\r
        <button class="btn btn-sm btn-secondary" (click)="editBook(book)">\r
          <span class="btn-icon">\u270F\uFE0F</span>\r
          Edit\r
        </button>\r
        <button class="btn btn-sm btn-danger" (click)="deleteBook(book)">\r
          <span class="btn-icon">\u{1F5D1}\uFE0F</span>\r
          Delete\r
        </button>\r
      </div>\r
      \r
      <div class="book-toggles">\r
        <label class="toggle-label">\r
          <input type="checkbox" [checked]="book.isFeatured" (change)="toggleBookStatus(book, 'isFeatured')">\r
          <span class="toggle-slider"></span>\r
          Featured\r
        </label>\r
        <label class="toggle-label">\r
          <input type="checkbox" [checked]="book.isBestseller" (change)="toggleBookStatus(book, 'isBestseller')">\r
          <span class="toggle-slider"></span>\r
          Bestseller\r
        </label>\r
        <label class="toggle-label">\r
          <input type="checkbox" [checked]="book.isNew" (change)="toggleBookStatus(book, 'isNew')">\r
          <span class="toggle-slider"></span>\r
          New Arrival\r
        </label>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!loading && filteredBooks.length === 0">\r
    <div class="empty-icon">\u{1F4DA}</div>\r
    <h3>No Books Found</h3>\r
    <p *ngIf="searchTerm || selectedCategory">Try adjusting your filters or search terms.</p>\r
    <p *ngIf="!searchTerm && !selectedCategory">Start by adding your first book to the inventory.</p>\r
    <button class="btn btn-primary" (click)="showAddBookForm()">Add New Book</button>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading">\r
    <div class="spinner"></div>\r
    <p>Loading books...</p>\r
  </div>\r
</div>\r
\r
<!-- Add/Edit Book Modal -->\r
<div class="modal-overlay" *ngIf="showAddForm" (click)="cancelForm()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>{{ isEditing ? 'Edit Book' : 'Add New Book' }}</h2>\r
      <button class="close-btn" (click)="cancelForm()">\u2715</button>\r
    </div>\r
    \r
    <form [formGroup]="bookForm" (ngSubmit)="onSubmit()" class="book-form">\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label for="title">Title *</label>\r
          <input \r
            type="text" \r
            id="title" \r
            formControlName="title" \r
            class="form-input"\r
            [class.error]="bookForm.get('title')?.invalid && bookForm.get('title')?.touched">\r
          <span class="error-message" *ngIf="getFormFieldError('title')">{{ getFormFieldError('title') }}</span>\r
        </div>\r
        \r
        <div class="form-group">\r
          <label for="author">Author *</label>\r
          <input \r
            type="text" \r
            id="author" \r
            formControlName="author" \r
            class="form-input"\r
            [class.error]="bookForm.get('author')?.invalid && bookForm.get('author')?.touched">\r
          <span class="error-message" *ngIf="getFormFieldError('author')">{{ getFormFieldError('author') }}</span>\r
        </div>\r
        \r
        <div class="form-group">\r
          <label for="isbn">ISBN *</label>\r
          <input \r
            type="text" \r
            id="isbn" \r
            formControlName="isbn" \r
            class="form-input"\r
            placeholder="e.g. 9780123456789"\r
            [class.error]="bookForm.get('isbn')?.invalid && bookForm.get('isbn')?.touched">\r
          <span class="error-message" *ngIf="getFormFieldError('isbn')">{{ getFormFieldError('isbn') }}</span>\r
        </div>\r
        \r
        <div class="form-group">\r
          <label for="price">Price *</label>\r
          <input \r
            type="number" \r
            id="price" \r
            formControlName="price" \r
            class="form-input"\r
            step="0.01"\r
            min="0"\r
            [class.error]="bookForm.get('price')?.invalid && bookForm.get('price')?.touched">\r
          <span class="error-message" *ngIf="getFormFieldError('price')">{{ getFormFieldError('price') }}</span>\r
        </div>\r
        \r
        <div class="form-group">\r
          <label for="category">Category *</label>\r
          <select \r
            id="category" \r
            formControlName="category" \r
            class="form-input"\r
            [class.error]="bookForm.get('category')?.invalid && bookForm.get('category')?.touched">\r
            <option value="">Select Category</option>\r
            <option *ngFor="let category of categories" [value]="category">{{ category }}</option>\r
          </select>\r
          <span class="error-message" *ngIf="getFormFieldError('category')">{{ getFormFieldError('category') }}</span>\r
        </div>\r
        \r
        <div class="form-group">\r
          <label for="stock">Stock Quantity *</label>\r
          <input \r
            type="number" \r
            id="stock" \r
            formControlName="stock" \r
            class="form-input"\r
            min="0"\r
            [class.error]="bookForm.get('stock')?.invalid && bookForm.get('stock')?.touched">\r
          <span class="error-message" *ngIf="getFormFieldError('stock')">{{ getFormFieldError('stock') }}</span>\r
        </div>\r
      </div>\r
      \r
      <div class="form-group full-width">\r
        <label for="imageUrl">Image URL *</label>\r
        <input \r
          type="url" \r
          id="imageUrl" \r
          formControlName="imageUrl" \r
          class="form-input"\r
          placeholder="https://example.com/book-cover.jpg"\r
          [class.error]="bookForm.get('imageUrl')?.invalid && bookForm.get('imageUrl')?.touched">\r
        <span class="error-message" *ngIf="getFormFieldError('imageUrl')">{{ getFormFieldError('imageUrl') }}</span>\r
      </div>\r
      \r
      <div class="form-group full-width">\r
        <label for="description">Description *</label>\r
        <textarea \r
          id="description" \r
          formControlName="description" \r
          class="form-textarea"\r
          rows="4"\r
          placeholder="Enter book description..."\r
          [class.error]="bookForm.get('description')?.invalid && bookForm.get('description')?.touched"></textarea>\r
        <span class="error-message" *ngIf="getFormFieldError('description')">{{ getFormFieldError('description') }}</span>\r
      </div>\r
      \r
      <div class="form-checkboxes">\r
        <label class="checkbox-label">\r
          <input type="checkbox" formControlName="featured">\r
          <span class="checkbox-slider"></span>\r
          Featured Book\r
        </label>\r
        <label class="checkbox-label">\r
          <input type="checkbox" formControlName="bestseller">\r
          <span class="checkbox-slider"></span>\r
          Bestseller\r
        </label>\r
        <label class="checkbox-label">\r
          <input type="checkbox" formControlName="newArrival">\r
          <span class="checkbox-slider"></span>\r
          New Arrival\r
        </label>\r
      </div>\r
      \r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="cancelForm()">Cancel</button>\r
        <button type="submit" class="btn btn-primary" [disabled]="bookForm.invalid">\r
          {{ isEditing ? 'Update Book' : 'Add Book' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/book-management/book-management.scss */\n.book-management {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.book-management .page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f3f7;\n}\n.book-management .page-header h1 {\n  color: #2c3e50;\n  font-weight: 600;\n  margin: 0;\n  font-size: 2rem;\n}\n.book-management .page-header .header-actions {\n  display: flex;\n  gap: 10px;\n}\n.book-management .page-header .header-actions .btn {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.book-management .page-header .header-actions .btn .btn-icon {\n  margin-right: 8px;\n  font-size: 16px;\n}\n.book-management .page-header .header-actions .btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #007bff,\n      #0056b3);\n  color: white;\n}\n.book-management .page-header .header-actions .btn.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0056b3,\n      #004085);\n  transform: translateY(-2px);\n}\n.book-management .page-header .header-actions .btn.btn-secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #6c757d,\n      #495057);\n  color: white;\n}\n.book-management .page-header .header-actions .btn.btn-secondary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #495057,\n      #343a40);\n  transform: translateY(-2px);\n}\n.book-management .page-header .header-actions .btn.btn-outline-secondary {\n  background: transparent;\n  color: #6c757d;\n  border: 2px solid #6c757d;\n}\n.book-management .page-header .header-actions .btn.btn-outline-secondary:hover {\n  background: #6c757d;\n  color: white;\n  transform: translateY(-2px);\n}\n.book-management .open-library-section {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  border: 2px solid #e3f2fd;\n}\n.book-management .open-library-section::before {\n  content: "\\1f4da  Google Books Integration";\n  display: block;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1976d2;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e3f2fd;\n}\n.book-management .filters-section {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.book-management .search-box {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.book-management .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.book-management .search-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.book-management .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #a0aec0;\n  font-size: 1rem;\n}\n.book-management .filter-controls {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.book-management .filter-select {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n.book-management .filter-select:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.book-management .sort-direction-btn {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s ease;\n}\n.book-management .sort-direction-btn:hover {\n  border-color: #667eea;\n  background-color: #f7fafc;\n}\n.book-management .books-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.book-management .book-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.book-management .book-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.book-management .book-image {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.book-management .book-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.book-management .book-badges {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.book-management .badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: center;\n}\n.book-management .badge.featured {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.book-management .badge.bestseller {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n  color: white;\n}\n.book-management .badge.new-arrival {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: white;\n}\n.book-management .book-info {\n  padding: 1rem;\n}\n.book-management .book-title {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n  line-height: 1.4;\n}\n.book-management .book-author {\n  margin: 0 0 0.25rem 0;\n  color: #4a5568;\n  font-style: italic;\n}\n.book-management .book-category {\n  margin: 0 0 0.25rem 0;\n  color: #718096;\n  font-size: 0.875rem;\n}\n.book-management .book-isbn {\n  margin: 0 0 0.75rem 0;\n  color: #a0aec0;\n  font-size: 0.8rem;\n  font-family: monospace;\n}\n.book-management .book-stats {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.book-management .book-price {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #38a169;\n}\n.book-management .book-stock {\n  font-size: 0.875rem;\n  color: #4a5568;\n  padding: 0.25rem 0.5rem;\n  background-color: #f7fafc;\n  border-radius: 6px;\n}\n.book-management .book-stock.low-stock {\n  background-color: #fed7d7;\n  color: #c53030;\n}\n.book-management .book-actions {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0 1rem 1rem 1rem;\n}\n.book-management .book-actions .btn {\n  flex: 1;\n}\n.book-management .book-toggles {\n  padding: 1rem;\n  border-top: 1px solid #e2e8f0;\n  background-color: #f7fafc;\n}\n.book-management .toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n  color: #4a5568;\n  cursor: pointer;\n}\n.book-management .toggle-label:last-child {\n  margin-bottom: 0;\n}\n.book-management .toggle-label input[type=checkbox] {\n  display: none;\n}\n.book-management .toggle-slider {\n  width: 36px;\n  height: 20px;\n  background-color: #cbd5e0;\n  border-radius: 10px;\n  position: relative;\n  transition: background-color 0.3s ease;\n}\n.book-management .toggle-slider::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: white;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.book-management .toggle-label input[type=checkbox]:checked + .toggle-slider {\n  background-color: #667eea;\n}\n.book-management .toggle-label input[type=checkbox]:checked + .toggle-slider::before {\n  transform: translateX(16px);\n}\n.book-management .empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.book-management .empty-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.book-management .empty-state h3 {\n  margin: 0 0 0.5rem 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n}\n.book-management .empty-state p {\n  margin: 0 0 1.5rem 0;\n  color: #718096;\n}\n.book-management .loading-state {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.book-management .spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.book-management .modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 1rem;\n}\n.book-management .modal-content {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.book-management .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.book-management .modal-header h2 {\n  margin: 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.book-management .close-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #a0aec0;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 0.3s ease;\n}\n.book-management .close-btn:hover {\n  color: #718096;\n}\n.book-management .book-form {\n  padding: 1.5rem;\n}\n.book-management .form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.book-management .form-group {\n  display: flex;\n  flex-direction: column;\n}\n.book-management .form-group.full-width {\n  grid-column: 1/-1;\n}\n.book-management .form-group label {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.book-management .form-input,\n.book-management .form-textarea {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.book-management .form-input:focus,\n.book-management .form-textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.book-management .form-input.error,\n.book-management .form-textarea.error {\n  border-color: #e53e3e;\n}\n.book-management .form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.book-management .error-message {\n  color: #e53e3e;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.book-management .form-checkboxes {\n  display: flex;\n  gap: 2rem;\n  margin: 1.5rem 0;\n  padding: 1rem;\n  background-color: #f7fafc;\n  border-radius: 8px;\n}\n.book-management .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: #4a5568;\n  cursor: pointer;\n}\n.book-management .checkbox-label input[type=checkbox] {\n  display: none;\n}\n.book-management .checkbox-slider {\n  width: 36px;\n  height: 20px;\n  background-color: #cbd5e0;\n  border-radius: 10px;\n  position: relative;\n  transition: background-color 0.3s ease;\n}\n.book-management .checkbox-slider::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: white;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.book-management .checkbox-label input[type=checkbox]:checked + .checkbox-slider {\n  background-color: #667eea;\n}\n.book-management .checkbox-label input[type=checkbox]:checked + .checkbox-slider::before {\n  transform: translateX(16px);\n}\n.book-management .form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n@media (max-width: 768px) {\n  .book-management .book-management {\n    padding: 1rem;\n  }\n  .book-management .page-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .book-management .filters-section {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .book-management .filter-controls {\n    flex-wrap: wrap;\n  }\n  .book-management .books-grid {\n    grid-template-columns: 1fr;\n  }\n  .book-management .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .book-management .form-checkboxes {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .book-management .form-actions {\n    flex-direction: column;\n  }\n  .book-management .modal-content {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=book-management.css.map */\n'] }]
  }], () => [{ type: BookService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookManagementComponent, { className: "BookManagementComponent", filePath: "src/app/features/admin/book-management/book-management.ts", lineNumber: 14 });
})();

// src/app/features/admin/user-management/user-management.ts
function UserManagementComponent_div_55_tr_23_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function UserManagementComponent_div_55_tr_23_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.promoteToAdmin(user_r2));
    });
    \u0275\u0275text(1, " \u{1F451} ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_55_tr_23_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_div_55_tr_23_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.demoteFromAdmin(user_r2));
    });
    \u0275\u0275text(1, " \u{1F464} ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_55_tr_23_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function UserManagementComponent_div_55_tr_23_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteUser(user_r2));
    });
    \u0275\u0275text(1, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_55_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32)(2, "img", 33);
    \u0275\u0275listener("error", function UserManagementComponent_div_55_tr_23_Template_img_error_2_listener($event) {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageError($event, user_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 39);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 40);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 41);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 41);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 42)(25, "div", 43)(26, "button", 44);
    \u0275\u0275listener("click", function UserManagementComponent_div_55_tr_23_Template_button_click_26_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewUserDetails(user_r2));
    });
    \u0275\u0275text(27, " \u{1F441}\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 45);
    \u0275\u0275listener("click", function UserManagementComponent_div_55_tr_23_Template_button_click_28_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleUserStatus(user_r2));
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, UserManagementComponent_div_55_tr_23_button_30_Template, 2, 0, "button", 46)(31, UserManagementComponent_div_55_tr_23_button_31_Template, 2, 0, "button", 47)(32, UserManagementComponent_div_55_tr_23_button_32_Template, 2, 0, "button", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", user_r2.photoURL || ctx_r2.getDefaultAvatar(user_r2.displayName), \u0275\u0275sanitizeUrl)("alt", user_r2.displayName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r2.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", user_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("role-" + user_r2.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getRoleDisplayName(user_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getUserStatusColor(user_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusDisplay(user_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.totalOrders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(user_r2.totalSpent));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(user_r2.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.lastLoginAt ? ctx_r2.formatDate(user_r2.lastLoginAt) : "Never", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.getStatusButtonClass(user_r2));
    \u0275\u0275property("title", ctx_r2.getStatusButtonTitle(user_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusIcon(user_r2), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isUserRole(user_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAdminRole(user_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isAdminRole(user_r2));
  }
}
function UserManagementComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "table", 29)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Total Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Join Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Last Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, UserManagementComponent_div_55_tr_23_Template, 33, 22, "tr", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r2.filteredUsers);
  }
}
function UserManagementComponent_div_56_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Try adjusting your filters or search terms.");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_56_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No users have registered yet.");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Users Found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UserManagementComponent_div_56_p_5_Template, 2, 0, "p", 54)(6, UserManagementComponent_div_56_p_6_Template, 2, 0, "p", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.hasActiveFilters());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasNoActiveFilters());
  }
}
function UserManagementComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading users...");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_div_58_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function UserManagementComponent_div_58_button_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.promoteToAdmin(ctx_r2.selectedUser));
    });
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275text(2, "\u{1F451}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Promote to Admin ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_58_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function UserManagementComponent_div_58_button_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.demoteFromAdmin(ctx_r2.selectedUser));
    });
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Demote from Admin ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_58_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function UserManagementComponent_div_58_button_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.deleteUser(ctx_r2.selectedUser);
      return \u0275\u0275resetView(ctx_r2.closeUserDetails());
    });
    \u0275\u0275elementStart(1, "span", 74);
    \u0275\u0275text(2, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delete User ");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function UserManagementComponent_div_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeUserDetails());
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function UserManagementComponent_div_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "h2");
    \u0275\u0275text(4, "User Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 60);
    \u0275\u0275listener("click", function UserManagementComponent_div_58_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeUserDetails());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 61)(8, "div", 62);
    \u0275\u0275element(9, "img", 63);
    \u0275\u0275elementStart(10, "div", 64)(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 65);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 66)(16, "span", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 38);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 67)(21, "div", 68)(22, "div", 69);
    \u0275\u0275text(23, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 70)(25, "h4");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28, "Total Orders");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 68)(30, "div", 69);
    \u0275\u0275text(31, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 70)(33, "h4");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36, "Total Spent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 68)(38, "div", 69);
    \u0275\u0275text(39, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 70)(41, "h4");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44, "Join Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 68)(46, "div", 69);
    \u0275\u0275text(47, "\u{1F552}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 70)(49, "h4");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p");
    \u0275\u0275text(52, "Last Login");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 71)(54, "h4");
    \u0275\u0275text(55, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 72)(57, "button", 73);
    \u0275\u0275listener("click", function UserManagementComponent_div_58_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleUserStatus(ctx_r2.selectedUser));
    });
    \u0275\u0275elementStart(58, "span", 74);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, UserManagementComponent_div_58_button_61_Template, 4, 0, "button", 75)(62, UserManagementComponent_div_58_button_62_Template, 4, 0, "button", 75)(63, UserManagementComponent_div_58_button_63_Template, 4, 0, "button", 76);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("src", ctx_r2.selectedUser.photoURL || ctx_r2.getDefaultAvatar(ctx_r2.selectedUser.displayName), \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedUser.displayName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.email);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("role-" + ctx_r2.selectedUser.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getRoleDisplayName(ctx_r2.selectedUser), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getUserStatusColor(ctx_r2.selectedUser));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusDisplay(ctx_r2.selectedUser), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.totalOrders);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.selectedUser.totalSpent));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.selectedUser.createdAt));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.lastLoginAt ? ctx_r2.formatDate(ctx_r2.selectedUser.lastLoginAt) : "Never");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r2.getModalStatusClass(ctx_r2.selectedUser));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatusIcon(ctx_r2.selectedUser));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusButtonText(ctx_r2.selectedUser), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isUserRole(ctx_r2.selectedUser));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAdminRole(ctx_r2.selectedUser));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isAdminRole(ctx_r2.selectedUser));
  }
}
var UserManagementComponent = class _UserManagementComponent {
  authService;
  users = [];
  filteredUsers = [];
  selectedUser = null;
  showUserDetails = false;
  searchTerm = "";
  selectedRole = "";
  selectedStatus = "";
  sortBy = "createdAt";
  sortDirection = "desc";
  loading = false;
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        this.users = [
          {
            id: "1",
            email: "john.doe@example.com",
            displayName: "John Doe",
            photoURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
            role: "user",
            isActive: true,
            createdAt: /* @__PURE__ */ new Date("2023-01-15"),
            lastLoginAt: /* @__PURE__ */ new Date("2024-01-20"),
            totalOrders: 12,
            totalSpent: 245.99
          },
          {
            id: "2",
            email: "jane.smith@example.com",
            displayName: "Jane Smith",
            photoURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            role: "user",
            isActive: true,
            createdAt: /* @__PURE__ */ new Date("2023-02-20"),
            lastLoginAt: /* @__PURE__ */ new Date("2024-01-19"),
            totalOrders: 8,
            totalSpent: 189.5
          },
          {
            id: "3",
            email: "admin@readify.com",
            displayName: "Admin User",
            photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            role: "admin",
            isActive: true,
            createdAt: /* @__PURE__ */ new Date("2022-12-01"),
            lastLoginAt: /* @__PURE__ */ new Date("2024-01-21"),
            totalOrders: 0,
            totalSpent: 0
          },
          {
            id: "4",
            email: "bob.wilson@example.com",
            displayName: "Bob Wilson",
            role: "user",
            isActive: false,
            createdAt: /* @__PURE__ */ new Date("2023-05-10"),
            lastLoginAt: /* @__PURE__ */ new Date("2023-11-15"),
            totalOrders: 3,
            totalSpent: 67.25
          },
          {
            id: "5",
            email: "alice.brown@example.com",
            displayName: "Alice Brown",
            photoURL: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
            role: "user",
            isActive: true,
            createdAt: /* @__PURE__ */ new Date("2023-03-08"),
            lastLoginAt: /* @__PURE__ */ new Date("2024-01-18"),
            totalOrders: 15,
            totalSpent: 312.75
          }
        ];
        this.filterUsers();
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  filterUsers() {
    this.filteredUsers = this.users.filter((user) => {
      const matchesSearch = user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.displayName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      const matchesStatus = !this.selectedStatus || this.selectedStatus === "active" && user.isActive || this.selectedStatus === "inactive" && !user.isActive;
      return matchesSearch && matchesRole && matchesStatus;
    });
    this.sortUsers();
  }
  sortUsers() {
    this.filteredUsers.sort((a, b) => {
      let aValue = a[this.sortBy];
      let bValue = b[this.sortBy];
      if (aValue === void 0)
        aValue = "";
      if (bValue === void 0)
        bValue = "";
      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      if (aValue < bValue)
        return this.sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue)
        return this.sortDirection === "asc" ? 1 : -1;
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
    this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    this.sortUsers();
  }
  viewUserDetails(user) {
    this.selectedUser = user;
    this.showUserDetails = true;
  }
  closeUserDetails() {
    this.selectedUser = null;
    this.showUserDetails = false;
  }
  toggleUserStatus(user) {
    return __async(this, null, function* () {
      if (confirm(`Are you sure you want to ${user.isActive ? "deactivate" : "activate"} ${user.displayName}?`)) {
        try {
          user.isActive = !user.isActive;
          console.log(`User ${user.displayName} ${user.isActive ? "activated" : "deactivated"}`);
        } catch (error) {
          console.error("Error updating user status:", error);
          user.isActive = !user.isActive;
        }
      }
    });
  }
  deleteUser(user) {
    return __async(this, null, function* () {
      if (user.role === "admin") {
        alert("Cannot delete admin users");
        return;
      }
      if (confirm(`Are you sure you want to delete ${user.displayName}? This action cannot be undone.`)) {
        try {
          this.users = this.users.filter((u) => u.id !== user.id);
          this.filterUsers();
          console.log(`User ${user.displayName} deleted`);
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      }
    });
  }
  promoteToAdmin(user) {
    return __async(this, null, function* () {
      if (confirm(`Are you sure you want to promote ${user.displayName} to admin?`)) {
        try {
          user.role = "admin";
          console.log(`User ${user.displayName} promoted to admin`);
        } catch (error) {
          console.error("Error promoting user:", error);
          user.role = "user";
        }
      }
    });
  }
  demoteFromAdmin(user) {
    return __async(this, null, function* () {
      if (confirm(`Are you sure you want to demote ${user.displayName} from admin?`)) {
        try {
          user.role = "user";
          console.log(`User ${user.displayName} demoted from admin`);
        } catch (error) {
          console.error("Error demoting user:", error);
          user.role = "admin";
        }
      }
    });
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  getUserStatusColor(user) {
    if (!user.isActive)
      return "status-inactive";
    if (user.role === "admin")
      return "status-admin";
    return "status-active";
  }
  getDefaultAvatar(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=100`;
  }
  // Statistics methods
  getTotalUsers() {
    return this.users.length;
  }
  getActiveUsers() {
    return this.users.filter((u) => u.isActive).length;
  }
  getAdminUsers() {
    return this.users.filter((u) => u.role === "admin").length;
  }
  // Image handling
  onImageError(event, user) {
    const target = event.target;
    if (target) {
      target.src = this.getDefaultAvatar(user.displayName);
    }
  }
  // Role helper methods
  isUserRole(user) {
    return user.role === "user";
  }
  isAdminRole(user) {
    return user.role === "admin";
  }
  getRoleDisplayName(user) {
    return user.role === "admin" ? "\u{1F451} Admin" : "\u{1F464} User";
  }
  // Status helper methods
  getStatusDisplay(user) {
    return user.isActive ? "Active" : "Inactive";
  }
  getStatusButtonClass(user) {
    return user.isActive ? "btn-warning" : "btn-success";
  }
  getStatusButtonTitle(user) {
    return user.isActive ? "Deactivate User" : "Activate User";
  }
  getStatusIcon(user) {
    return user.isActive ? "\u23F8\uFE0F" : "\u25B6\uFE0F";
  }
  getStatusButtonText(user) {
    return user.isActive ? "Deactivate User" : "Activate User";
  }
  getModalStatusClass(user) {
    return user.isActive ? "warning" : "success";
  }
  // Sorting helper methods
  getSortDirectionSymbol() {
    return this.sortDirection === "asc" ? "\u2191" : "\u2193";
  }
  // Filtering helper methods
  hasActiveFilters() {
    return !!(this.searchTerm || this.selectedRole || this.selectedStatus);
  }
  hasNoActiveFilters() {
    return !this.hasActiveFilters();
  }
  getEmptyStateMessage() {
    if (this.hasActiveFilters()) {
      return "Try adjusting your filters to see more results.";
    }
    return "No users found. This is unexpected!";
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 59, vars: 12, consts: [[1, "user-management"], [1, "page-header"], [1, "header-stats"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "filters-section"], [1, "search-box"], ["type", "text", "placeholder", "Search users by name or email...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "search-icon"], [1, "filter-controls"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "user"], ["value", "admin"], ["value", "active"], ["value", "inactive"], ["value", "createdAt"], ["value", "displayName"], ["value", "email"], ["value", "totalOrders"], ["value", "totalSpent"], ["value", "lastLoginAt"], [1, "sort-direction-btn", 3, "click"], ["class", "users-table-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "users-table-container"], [1, "users-table"], ["class", "user-row", 4, "ngFor", "ngForOf"], [1, "user-row"], [1, "user-info"], [1, "user-avatar", 3, "error", "src", "alt"], [1, "user-details"], [1, "user-id"], [1, "user-email"], [1, "role-badge"], [1, "status-badge"], [1, "user-orders"], [1, "user-spent"], [1, "user-date"], [1, "user-actions"], [1, "action-buttons"], ["title", "View Details", 1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "btn", "btn-sm", 3, "click", "title"], ["class", "btn btn-sm btn-secondary", "title", "Promote to Admin", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-secondary", "title", "Demote from Admin", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-danger", "title", "Delete User", 3, "click", 4, "ngIf"], ["title", "Promote to Admin", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["title", "Demote from Admin", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["title", "Delete User", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "empty-state"], [1, "empty-icon"], [4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "user-detail-content"], [1, "user-profile"], [1, "profile-avatar", 3, "src", "alt"], [1, "profile-info"], [1, "profile-email"], [1, "profile-badges"], [1, "user-stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "user-actions-section"], [1, "quick-actions"], [1, "action-btn", 3, "click"], [1, "action-icon"], ["class", "action-btn secondary", 3, "click", 4, "ngIf"], ["class", "action-btn danger", 3, "click", 4, "ngIf"], [1, "action-btn", "secondary", 3, "click"], [1, "action-btn", "danger", 3, "click"]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "Total Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 3)(11, "span", 4);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 5);
      \u0275\u0275text(14, "Active Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 3)(16, "span", 4);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 5);
      \u0275\u0275text(19, "Admins");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 6)(21, "div", 7)(22, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UserManagementComponent_Template_input_input_22_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 9);
      \u0275\u0275text(24, "\u{1F50D}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedRole, $event) || (ctx.selectedRole = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UserManagementComponent_Template_select_change_26_listener() {
        return ctx.onRoleFilter();
      });
      \u0275\u0275elementStart(27, "option", 12);
      \u0275\u0275text(28, "All Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 13);
      \u0275\u0275text(30, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 14);
      \u0275\u0275text(32, "Admins");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UserManagementComponent_Template_select_change_33_listener() {
        return ctx.onStatusFilter();
      });
      \u0275\u0275elementStart(34, "option", 12);
      \u0275\u0275text(35, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 15);
      \u0275\u0275text(37, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 16);
      \u0275\u0275text(39, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UserManagementComponent_Template_select_change_40_listener() {
        return ctx.onSort();
      });
      \u0275\u0275elementStart(41, "option", 17);
      \u0275\u0275text(42, "Sort by Join Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 18);
      \u0275\u0275text(44, "Sort by Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 19);
      \u0275\u0275text(46, "Sort by Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 20);
      \u0275\u0275text(48, "Sort by Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 21);
      \u0275\u0275text(50, "Sort by Spending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 22);
      \u0275\u0275text(52, "Sort by Last Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "button", 23);
      \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_53_listener() {
        return ctx.toggleSortDirection();
      });
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(55, UserManagementComponent_div_55_Template, 24, 1, "div", 24)(56, UserManagementComponent_div_56_Template, 7, 2, "div", 25)(57, UserManagementComponent_div_57_Template, 4, 0, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, UserManagementComponent_div_58_Template, 64, 21, "div", 27);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.getTotalUsers());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getActiveUsers());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getAdminUsers());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedRole);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate1(" ", ctx.getSortDirectionSymbol(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredUsers.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredUsers.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showUserDetails && ctx.selectedUser);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.user-management[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1a202c;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.header-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #667eea;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #718096;\n}\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #a0aec0;\n  font-size: 1rem;\n}\n.filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.sort-direction-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s ease;\n}\n.sort-direction-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background-color: #f7fafc;\n}\n.users-table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7fafc,\n      #edf2f7);\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.875rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.3s ease;\n}\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f7fafc;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.875rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e2e8f0;\n}\n.user-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-weight: 600;\n  color: #1a202c;\n}\n.user-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #a0aec0;\n  font-family: monospace;\n}\n.user-email[_ngcontent-%COMP%] {\n  color: #4a5568;\n  font-family: monospace;\n}\n.role-badge[_ngcontent-%COMP%], \n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n}\n.role-admin[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n  color: white;\n}\n.role-user[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.status-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #38a169,\n      #48bb78);\n  color: white;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e53e3e,\n      #fc8181);\n  color: white;\n}\n.status-admin[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d69e2e,\n      #f6ad55);\n  color: white;\n}\n.user-orders[_ngcontent-%COMP%], \n.user-spent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2d3748;\n}\n.user-date[_ngcontent-%COMP%] {\n  color: #718096;\n  font-size: 0.8rem;\n}\n.user-actions[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  min-width: 32px;\n  height: 32px;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.375rem;\n  font-size: 0.8rem;\n  min-width: 28px;\n  height: 28px;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #38a169,\n      #48bb78);\n  color: white;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d69e2e,\n      #f6ad55);\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e0;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e53e3e,\n      #fc8181);\n  color: white;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #a0aec0;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 0.3s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #718096;\n}\n.user-detail-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1rem;\n  background: #f7fafc;\n  border-radius: 8px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #e2e8f0;\n}\n.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #1a202c;\n  font-size: 1.25rem;\n}\n.profile-email[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  color: #4a5568;\n  font-family: monospace;\n}\n.profile-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.user-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  transition: box-shadow 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f7fafc;\n  border-radius: 8px;\n}\n.stat-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.user-actions-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 1.5rem;\n}\n.user-actions-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: #1a202c;\n  font-size: 1.125rem;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 0.75rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.action-btn.success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #38a169,\n      #48bb78);\n  color: white;\n}\n.action-btn.warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d69e2e,\n      #f6ad55);\n  color: white;\n}\n.action-btn.secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.action-btn.danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e53e3e,\n      #fc8181);\n  color: white;\n}\n.action-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 1024px) {\n  .users-table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n@media (max-width: 768px) {\n  .user-management[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .header-stats[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .filter-controls[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    font-size: 0.8rem;\n  }\n  .user-avatar[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .user-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=user-management.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-user-management", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="user-management">\r
  <div class="page-header">\r
    <h1>User Management</h1>\r
    <div class="header-stats">\r
      <div class="stat-item">\r
        <span class="stat-value">{{ getTotalUsers() }}</span>\r
        <span class="stat-label">Total Users</span>\r
      </div>\r
      <div class="stat-item">\r
        <span class="stat-value">{{ getActiveUsers() }}</span>\r
        <span class="stat-label">Active Users</span>\r
      </div>\r
      <div class="stat-item">\r
        <span class="stat-value">{{ getAdminUsers() }}</span>\r
        <span class="stat-label">Admins</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filters and Search -->\r
  <div class="filters-section">\r
    <div class="search-box">\r
      <input \r
        type="text" \r
        placeholder="Search users by name or email..." \r
        [(ngModel)]="searchTerm"\r
        (input)="onSearch()"\r
        class="search-input">\r
      <span class="search-icon">\u{1F50D}</span>\r
    </div>\r
    \r
    <div class="filter-controls">\r
      <select [(ngModel)]="selectedRole" (change)="onRoleFilter()" class="filter-select">\r
        <option value="">All Roles</option>\r
        <option value="user">Users</option>\r
        <option value="admin">Admins</option>\r
      </select>\r
      \r
      <select [(ngModel)]="selectedStatus" (change)="onStatusFilter()" class="filter-select">\r
        <option value="">All Status</option>\r
        <option value="active">Active</option>\r
        <option value="inactive">Inactive</option>\r
      </select>\r
      \r
      <select [(ngModel)]="sortBy" (change)="onSort()" class="filter-select">\r
        <option value="createdAt">Sort by Join Date</option>\r
        <option value="displayName">Sort by Name</option>\r
        <option value="email">Sort by Email</option>\r
        <option value="totalOrders">Sort by Orders</option>\r
        <option value="totalSpent">Sort by Spending</option>\r
        <option value="lastLoginAt">Sort by Last Login</option>\r
      </select>        <button class="sort-direction-btn" (click)="toggleSortDirection()">\r
          {{ getSortDirectionSymbol() }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Users Table -->    <div class="users-table-container" *ngIf="!loading && filteredUsers.length > 0">\r
    <table class="users-table">\r
      <thead>\r
        <tr>\r
          <th>User</th>\r
          <th>Email</th>\r
          <th>Role</th>\r
          <th>Status</th>\r
          <th>Orders</th>\r
          <th>Total Spent</th>\r
          <th>Join Date</th>\r
          <th>Last Login</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let user of filteredUsers" class="user-row">\r
          <td class="user-info">\r
            <img \r
              [src]="user.photoURL || getDefaultAvatar(user.displayName)" \r
              [alt]="user.displayName"\r
              class="user-avatar"\r
              (error)="onImageError($event, user)">\r
            <div class="user-details">\r
              <h4>{{ user.displayName }}</h4>\r
              <span class="user-id">ID: {{ user.id }}</span>\r
            </div>\r
          </td>\r
          <td class="user-email">{{ user.email }}</td>\r
          <td>\r
            <span class="role-badge" [class]="'role-' + user.role">\r
              {{ getRoleDisplayName(user) }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="status-badge" [class]="getUserStatusColor(user)">\r
              {{ getStatusDisplay(user) }}\r
            </span>\r
          </td>\r
          <td class="user-orders">{{ user.totalOrders }}</td>\r
          <td class="user-spent">{{ formatCurrency(user.totalSpent) }}</td>\r
          <td class="user-date">{{ formatDate(user.createdAt) }}</td>\r
          <td class="user-date">\r
            {{ user.lastLoginAt ? formatDate(user.lastLoginAt) : 'Never' }}\r
          </td>\r
          <td class="user-actions">\r
            <div class="action-buttons">\r
              <button \r
                class="btn btn-sm btn-info" \r
                (click)="viewUserDetails(user)"\r
                title="View Details">\r
                \u{1F441}\uFE0F\r
              </button>\r
              <button \r
                class="btn btn-sm" \r
                [class]="getStatusButtonClass(user)"\r
                (click)="toggleUserStatus(user)"\r
                [title]="getStatusButtonTitle(user)">\r
                {{ getStatusIcon(user) }}\r
              </button>\r
              <button \r
                *ngIf="isUserRole(user)"\r
                class="btn btn-sm btn-secondary" \r
                (click)="promoteToAdmin(user)"\r
                title="Promote to Admin">\r
                \u{1F451}\r
              </button>\r
              <button \r
                *ngIf="isAdminRole(user)"\r
                class="btn btn-sm btn-secondary" \r
                (click)="demoteFromAdmin(user)"\r
                title="Demote from Admin">\r
                \u{1F464}\r
              </button>\r
              <button \r
                *ngIf="!isAdminRole(user)"\r
                class="btn btn-sm btn-danger" \r
                (click)="deleteUser(user)"\r
                title="Delete User">\r
                \u{1F5D1}\uFE0F\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!loading && filteredUsers.length === 0">\r
    <div class="empty-icon">\u{1F465}</div>\r
    <h3>No Users Found</h3>\r
    <p *ngIf="hasActiveFilters()">Try adjusting your filters or search terms.</p>\r
    <p *ngIf="hasNoActiveFilters()">No users have registered yet.</p>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading">\r
    <div class="spinner"></div>\r
    <p>Loading users...</p>\r
  </div>\r
</div>\r
\r
<!-- User Details Modal -->  <div class="modal-overlay" *ngIf="showUserDetails && selectedUser" (click)="closeUserDetails()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>User Details</h2>\r
      <button class="close-btn" (click)="closeUserDetails()">\u2715</button>\r
    </div>\r
    \r
    <div class="user-detail-content">\r
      <div class="user-profile">\r
        <img \r
          [src]="selectedUser.photoURL || getDefaultAvatar(selectedUser.displayName)" \r
          [alt]="selectedUser.displayName"\r
          class="profile-avatar">\r
        <div class="profile-info">\r
          <h3>{{ selectedUser.displayName }}</h3>\r
          <p class="profile-email">{{ selectedUser.email }}</p>\r
          <div class="profile-badges">\r
            <span class="role-badge" [class]="'role-' + selectedUser.role">\r
              {{ getRoleDisplayName(selectedUser) }}\r
            </span>\r
            <span class="status-badge" [class]="getUserStatusColor(selectedUser)">\r
              {{ getStatusDisplay(selectedUser) }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="user-stats-grid">\r
        <div class="stat-card">\r
          <div class="stat-icon">\u{1F6D2}</div>\r
          <div class="stat-content">\r
            <h4>{{ selectedUser.totalOrders }}</h4>\r
            <p>Total Orders</p>\r
          </div>\r
        </div>\r
        \r
        <div class="stat-card">\r
          <div class="stat-icon">\u{1F4B0}</div>\r
          <div class="stat-content">\r
            <h4>{{ formatCurrency(selectedUser.totalSpent) }}</h4>\r
            <p>Total Spent</p>\r
          </div>\r
        </div>\r
        \r
        <div class="stat-card">\r
          <div class="stat-icon">\u{1F4C5}</div>\r
          <div class="stat-content">\r
            <h4>{{ formatDate(selectedUser.createdAt) }}</h4>\r
            <p>Join Date</p>\r
          </div>\r
        </div>\r
        \r
        <div class="stat-card">\r
          <div class="stat-icon">\u{1F552}</div>\r
          <div class="stat-content">\r
            <h4>{{ selectedUser.lastLoginAt ? formatDate(selectedUser.lastLoginAt) : 'Never' }}</h4>\r
            <p>Last Login</p>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="user-actions-section">\r
        <h4>Quick Actions</h4>\r
        <div class="quick-actions">\r
          <button \r
            class="action-btn" \r
            [class]="getModalStatusClass(selectedUser)"\r
            (click)="toggleUserStatus(selectedUser)">\r
            <span class="action-icon">{{ getStatusIcon(selectedUser) }}</span>\r
            {{ getStatusButtonText(selectedUser) }}\r
          </button>\r
          \r
          <button \r
            *ngIf="isUserRole(selectedUser)"\r
            class="action-btn secondary"\r
            (click)="promoteToAdmin(selectedUser)">\r
            <span class="action-icon">\u{1F451}</span>\r
            Promote to Admin\r
          </button>\r
          \r
          <button \r
            *ngIf="isAdminRole(selectedUser)"\r
            class="action-btn secondary"\r
            (click)="demoteFromAdmin(selectedUser)">\r
            <span class="action-icon">\u{1F464}</span>\r
            Demote from Admin\r
          </button>\r
          \r
          <button \r
            *ngIf="!isAdminRole(selectedUser)"\r
            class="action-btn danger"\r
            (click)="deleteUser(selectedUser); closeUserDetails()">\r
            <span class="action-icon">\u{1F5D1}\uFE0F</span>\r
            Delete User\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/admin/user-management/user-management.scss */\n.user-management {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.page-header h1 {\n  margin: 0;\n  color: #1a202c;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.header-stats {\n  display: flex;\n  gap: 2rem;\n}\n.stat-item {\n  text-align: center;\n}\n.stat-value {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #667eea;\n}\n.stat-label {\n  font-size: 0.875rem;\n  color: #718096;\n}\n.filters-section {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.search-box {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #a0aec0;\n  font-size: 1rem;\n}\n.filter-controls {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.filter-select {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.sort-direction-btn {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s ease;\n}\n.sort-direction-btn:hover {\n  border-color: #667eea;\n  background-color: #f7fafc;\n}\n.users-table-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.users-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table thead {\n  background:\n    linear-gradient(\n      135deg,\n      #f7fafc,\n      #edf2f7);\n}\n.users-table th {\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.875rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.users-table tbody tr {\n  transition: background-color 0.3s ease;\n}\n.users-table tbody tr:hover {\n  background-color: #f7fafc;\n}\n.users-table td {\n  padding: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 0.875rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e2e8f0;\n}\n.user-details h4 {\n  margin: 0 0 0.25rem 0;\n  font-weight: 600;\n  color: #1a202c;\n}\n.user-id {\n  font-size: 0.75rem;\n  color: #a0aec0;\n  font-family: monospace;\n}\n.user-email {\n  color: #4a5568;\n  font-family: monospace;\n}\n.role-badge,\n.status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: center;\n  white-space: nowrap;\n}\n.role-admin {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n  color: white;\n}\n.role-user {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.status-active {\n  background:\n    linear-gradient(\n      135deg,\n      #38a169,\n      #48bb78);\n  color: white;\n}\n.status-inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #e53e3e,\n      #fc8181);\n  color: white;\n}\n.status-admin {\n  background:\n    linear-gradient(\n      135deg,\n      #d69e2e,\n      #f6ad55);\n  color: white;\n}\n.user-orders,\n.user-spent {\n  font-weight: 600;\n  color: #2d3748;\n}\n.user-date {\n  color: #718096;\n  font-size: 0.8rem;\n}\n.user-actions {\n  min-width: 200px;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  min-width: 32px;\n  height: 32px;\n}\n.btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn-sm {\n  padding: 0.375rem;\n  font-size: 0.8rem;\n  min-width: 28px;\n  height: 28px;\n}\n.btn-info {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: white;\n}\n.btn-success {\n  background:\n    linear-gradient(\n      135deg,\n      #38a169,\n      #48bb78);\n  color: white;\n}\n.btn-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #d69e2e,\n      #f6ad55);\n  color: white;\n}\n.btn-secondary {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary:hover {\n  background: #cbd5e0;\n}\n.btn-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #e53e3e,\n      #fc8181);\n  color: white;\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.empty-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.empty-state h3 {\n  margin: 0 0 0.5rem 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n}\n.empty-state p {\n  margin: 0;\n  color: #718096;\n}\n.loading-state {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 1rem;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.modal-header h2 {\n  margin: 0;\n  color: #1a202c;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #a0aec0;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: color 0.3s ease;\n}\n.close-btn:hover {\n  color: #718096;\n}\n.user-detail-content {\n  padding: 1.5rem;\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1rem;\n  background: #f7fafc;\n  border-radius: 8px;\n}\n.profile-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #e2e8f0;\n}\n.profile-info h3 {\n  margin: 0 0 0.5rem 0;\n  color: #1a202c;\n  font-size: 1.25rem;\n}\n.profile-email {\n  margin: 0 0 0.75rem 0;\n  color: #4a5568;\n  font-family: monospace;\n}\n.profile-badges {\n  display: flex;\n  gap: 0.5rem;\n}\n.user-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  transition: box-shadow 0.3s ease;\n}\n.stat-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.stat-icon {\n  font-size: 1.5rem;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f7fafc;\n  border-radius: 8px;\n}\n.stat-content h4 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.stat-content p {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.user-actions-section {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 1.5rem;\n}\n.user-actions-section h4 {\n  margin: 0 0 1rem 0;\n  color: #1a202c;\n  font-size: 1.125rem;\n}\n.quick-actions {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 0.75rem;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.action-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.action-btn.success {\n  background:\n    linear-gradient(\n      135deg,\n      #38a169,\n      #48bb78);\n  color: white;\n}\n.action-btn.warning {\n  background:\n    linear-gradient(\n      135deg,\n      #d69e2e,\n      #f6ad55);\n  color: white;\n}\n.action-btn.secondary {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.action-btn.danger {\n  background:\n    linear-gradient(\n      135deg,\n      #e53e3e,\n      #fc8181);\n  color: white;\n}\n.action-icon {\n  font-size: 1rem;\n}\n@media (max-width: 1024px) {\n  .users-table-container {\n    overflow-x: auto;\n  }\n  .users-table {\n    min-width: 800px;\n  }\n}\n@media (max-width: 768px) {\n  .user-management {\n    padding: 1rem;\n  }\n  .page-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .header-stats {\n    justify-content: space-around;\n  }\n  .filters-section {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .filter-controls {\n    flex-wrap: wrap;\n  }\n  .users-table th,\n  .users-table td {\n    padding: 0.5rem;\n    font-size: 0.8rem;\n  }\n  .user-avatar {\n    width: 32px;\n    height: 32px;\n  }\n  .action-buttons {\n    justify-content: center;\n  }\n  .user-stats-grid {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  }\n  .quick-actions {\n    grid-template-columns: 1fr;\n  }\n  .modal-content {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n}\n/*# sourceMappingURL=user-management.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src/app/features/admin/user-management/user-management.ts", lineNumber: 26 });
})();

// src/app/features/admin/analytics/analytics.ts
function AnalyticsComponent_div_16_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", value_r1 / 4e3 * 100, "%");
    \u0275\u0275property("title", ctx_r2.revenueChartData.labels[i_r2] + ": " + ctx_r2.formatCurrency(value_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(value_r1));
  }
}
function AnalyticsComponent_div_16_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r4);
  }
}
function AnalyticsComponent_div_16_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", value_r5 / 350 * 100, "%");
    \u0275\u0275property("title", ctx_r2.salesChartData.labels[i_r6] + ": " + value_r5 + " books");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r5);
  }
}
function AnalyticsComponent_div_16_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r7);
  }
}
function AnalyticsComponent_div_16_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275element(2, "div", 51);
    \u0275\u0275elementStart(3, "div", 52)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 53)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 54);
    \u0275\u0275element(12, "div", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", category_r8.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", category_r8.sales, " sales");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", category_r8.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", category_r8.percentage, "%")("background-color", category_r8.color);
  }
}
function AnalyticsComponent_div_16_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 59)(9, "span", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const book_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", book_r9.sales, " sales \u2022 ", ctx_r2.formatCurrency(book_r9.revenue));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getTrendIcon(book_r9.trend));
  }
}
function AnalyticsComponent_div_16_div_91_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatCurrency(activity_r11.amount), " ");
  }
}
function AnalyticsComponent_div_16_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "p", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AnalyticsComponent_div_16_div_91_div_8_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getActivityIcon(activity_r11.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r11.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r11.time);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r11.amount > 0);
  }
}
function AnalyticsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14);
    \u0275\u0275text(4, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Monthly Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 14);
    \u0275\u0275text(14, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15)(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Monthly Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 18)(23, "div", 14);
    \u0275\u0275text(24, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15)(26, "h3");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "New Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 16);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 19)(33, "div", 14);
    \u0275\u0275text(34, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 15)(36, "h3");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "Monthly Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 16);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 20)(43, "div", 21)(44, "div", 22)(45, "h3");
    \u0275\u0275text(46, "Revenue Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 23);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 24)(50, "div", 25)(51, "div", 26);
    \u0275\u0275template(52, AnalyticsComponent_div_16_div_52_Template, 3, 4, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 28);
    \u0275\u0275template(54, AnalyticsComponent_div_16_span_54_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 21)(56, "div", 22)(57, "h3");
    \u0275\u0275text(58, "Sales Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 23);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 24)(62, "div", 25)(63, "div", 30);
    \u0275\u0275template(64, AnalyticsComponent_div_16_div_64_Template, 3, 4, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 28);
    \u0275\u0275template(66, AnalyticsComponent_div_16_span_66_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 31)(68, "div", 32)(69, "div", 33)(70, "h3");
    \u0275\u0275text(71, "Top Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 34);
    \u0275\u0275text(73, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 35);
    \u0275\u0275template(75, AnalyticsComponent_div_16_div_75_Template, 13, 9, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 32)(77, "div", 33)(78, "h3");
    \u0275\u0275text(79, "Top Selling Books");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 34);
    \u0275\u0275text(81, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 37);
    \u0275\u0275template(83, AnalyticsComponent_div_16_div_83_Template, 11, 5, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 32)(85, "div", 33)(86, "h3");
    \u0275\u0275text(87, "Recent Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 34);
    \u0275\u0275text(89, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 39);
    \u0275\u0275template(91, AnalyticsComponent_div_16_div_91_Template, 9, 4, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 41)(93, "div", 42)(94, "h3");
    \u0275\u0275text(95, "Performance Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 43)(97, "div", 44)(98, "span", 45);
    \u0275\u0275text(99, "Average Order Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 46);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 44)(103, "span", 45);
    \u0275\u0275text(104, "Books per Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 46);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 44)(108, "span", 45);
    \u0275\u0275text(109, "Customer Lifetime Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 46);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 44)(113, "span", 45);
    \u0275\u0275text(114, "Conversion Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "span", 46);
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.analyticsData.revenue.monthly));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getGrowthClass(ctx_r2.analyticsData.revenue.growth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatPercentage(ctx_r2.analyticsData.revenue.growth), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.analyticsData.sales.monthly);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getGrowthClass(ctx_r2.analyticsData.sales.growth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatPercentage(ctx_r2.analyticsData.sales.growth), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.analyticsData.users.monthly);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getGrowthClass(ctx_r2.analyticsData.users.growth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatPercentage(ctx_r2.analyticsData.users.growth), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.analyticsData.orders.monthly);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getGrowthClass(ctx_r2.analyticsData.orders.growth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatPercentage(ctx_r2.analyticsData.orders.growth), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Total: ", ctx_r2.formatCurrency(ctx_r2.analyticsData.revenue.total));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.revenueChartData.datasets[0].data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.revenueChartData.labels);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Total: ", ctx_r2.analyticsData.sales.total, " books");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.salesChartData.datasets[0].data);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.salesChartData.labels);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.topCategories);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.topBooks);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.recentActivity);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.analyticsData.revenue.total / ctx_r2.analyticsData.orders.total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.analyticsData.sales.total / ctx_r2.analyticsData.orders.total).toFixed(1));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.analyticsData.revenue.total / ctx_r2.analyticsData.users.total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (ctx_r2.analyticsData.orders.total / ctx_r2.analyticsData.users.total * 100).toFixed(1), "%");
  }
}
function AnalyticsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading analytics data...");
    \u0275\u0275elementEnd()();
  }
}
var AnalyticsComponent = class _AnalyticsComponent {
  analyticsData = {
    revenue: { total: 15680, monthly: 3420, growth: 12.5 },
    sales: { total: 1247, monthly: 287, growth: 8.3 },
    users: { total: 8950, monthly: 425, growth: 15.2 },
    orders: { total: 342, monthly: 89, growth: 18.7 }
  };
  revenueChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue",
      data: [2100, 2400, 2800, 3200, 3600, 3420],
      borderColor: "#667eea",
      backgroundColor: "rgba(102, 126, 234, 0.1)"
    }]
  };
  salesChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Sales",
      data: [180, 220, 240, 280, 310, 287],
      borderColor: "#f093fb",
      backgroundColor: "rgba(240, 147, 251, 0.1)"
    }]
  };
  topCategories = [
    { name: "Fiction", sales: 156, percentage: 35, color: "#667eea" },
    { name: "Non-Fiction", sales: 134, percentage: 30, color: "#f093fb" },
    { name: "Science Fiction", sales: 89, percentage: 20, color: "#4facfe" },
    { name: "Romance", sales: 67, percentage: 15, color: "#38a169" }
  ];
  topBooks = [
    { title: "The Great Gatsby", sales: 45, revenue: 675, trend: "up" },
    { title: "To Kill a Mockingbird", sales: 38, revenue: 532, trend: "up" },
    { title: "1984", sales: 34, revenue: 442, trend: "down" },
    { title: "Dune", sales: 29, revenue: 464, trend: "up" },
    { title: "The Hobbit", sales: 26, revenue: 312, trend: "stable" }
  ];
  recentActivity = [
    { type: "sale", message: "New order placed", amount: 45.99, time: "2 minutes ago" },
    { type: "user", message: "New user registered", amount: 0, time: "15 minutes ago" },
    { type: "sale", message: "Order completed", amount: 89.5, time: "23 minutes ago" },
    { type: "review", message: "New 5-star review", amount: 0, time: "1 hour ago" },
    { type: "sale", message: "Large order placed", amount: 234.75, time: "2 hours ago" }
  ];
  selectedPeriod = "monthly";
  loading = false;
  ngOnInit() {
    this.loadAnalytics();
  }
  loadAnalytics() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1e3);
  }
  onPeriodChange() {
    this.loadAnalytics();
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  }
  formatPercentage(value) {
    return `${value > 0 ? "+" : ""}${value}%`;
  }
  getTrendIcon(trend) {
    switch (trend) {
      case "up":
        return "\u{1F4C8}";
      case "down":
        return "\u{1F4C9}";
      case "stable":
        return "\u27A1\uFE0F";
      default:
        return "\u{1F4CA}";
    }
  }
  getActivityIcon(type) {
    switch (type) {
      case "sale":
        return "\u{1F4B0}";
      case "user":
        return "\u{1F464}";
      case "review":
        return "\u2B50";
      default:
        return "\u{1F4CA}";
    }
  }
  getGrowthClass(growth) {
    if (growth > 0)
      return "positive";
    if (growth < 0)
      return "negative";
    return "neutral";
  }
  static \u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], decls: 18, vars: 3, consts: [[1, "analytics"], [1, "page-header"], [1, "period-selector"], ["for", "period"], ["id", "period", 1, "period-select", 3, "ngModelChange", "change", "ngModel"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["value", "yearly"], ["class", "analytics-content", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "analytics-content"], [1, "metrics-grid"], [1, "metric-card", "revenue"], [1, "metric-icon"], [1, "metric-info"], [1, "metric-growth"], [1, "metric-card", "sales"], [1, "metric-card", "users"], [1, "metric-card", "orders"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-header"], [1, "chart-total"], [1, "chart-container"], [1, "simple-chart"], [1, "chart-bars"], ["class", "chart-bar", 3, "height", "title", 4, "ngFor", "ngForOf"], [1, "chart-labels"], [4, "ngFor", "ngForOf"], [1, "chart-bars", "sales-bars"], [1, "secondary-analytics"], [1, "analytics-card"], [1, "card-header"], [1, "view-all"], [1, "categories-list"], ["class", "category-item", 4, "ngFor", "ngForOf"], [1, "books-list"], ["class", "book-item", 4, "ngFor", "ngForOf"], [1, "activity-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "summary-section"], [1, "summary-card"], [1, "summary-stats"], [1, "summary-stat"], [1, "stat-label"], [1, "stat-value"], [1, "chart-bar", 3, "title"], [1, "bar-value"], [1, "category-item"], [1, "category-info"], [1, "category-color"], [1, "category-details"], [1, "category-percentage"], [1, "percentage-bar"], [1, "percentage-fill"], [1, "book-item"], [1, "book-rank"], [1, "book-details"], [1, "book-trend"], [1, "trend-icon"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-details"], [1, "activity-message"], [1, "activity-time"], ["class", "activity-amount", 4, "ngIf"], [1, "activity-amount"], [1, "loading-state"], [1, "spinner"]], template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Analytics Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "label", 3);
      \u0275\u0275text(6, "Period:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AnalyticsComponent_Template_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AnalyticsComponent_Template_select_change_7_listener() {
        return ctx.onPeriodChange();
      });
      \u0275\u0275elementStart(8, "option", 5);
      \u0275\u0275text(9, "Daily");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 6);
      \u0275\u0275text(11, "Weekly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Yearly");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, AnalyticsComponent_div_16_Template, 117, 29, "div", 9)(17, AnalyticsComponent_div_17_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.analytics[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1a202c;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.period-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.period-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #4a5568;\n}\n.period-select[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n.period-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.metric-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n}\n.metric-card.revenue[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n}\n.metric-card.sales[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f093fb,\n      #f5576c);\n}\n.metric-card.users[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #4facfe,\n      #00f2fe);\n}\n.metric-card.orders[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #43e97b,\n      #38f9d7);\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.metric-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  background: #f7fafc;\n}\n.metric-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.metric-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.metric-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #718096;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.metric-growth[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.metric-growth.positive[_ngcontent-%COMP%] {\n  color: #38a169;\n  background-color: #f0fff4;\n}\n.metric-growth.negative[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  background-color: #fed7d7;\n}\n.metric-growth.neutral[_ngcontent-%COMP%] {\n  color: #718096;\n  background-color: #f7fafc;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.chart-total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n.chart-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  height: 300px;\n}\n.simple-chart[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: end;\n  gap: 1rem;\n  padding-bottom: 1rem;\n}\n.chart-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea,\n      #764ba2);\n  border-radius: 4px 4px 0 0;\n  min-height: 20px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.sales-bars[_ngcontent-%COMP%]   .chart-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f093fb,\n      #f5576c);\n}\n.chart-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: scaleY(1.05);\n}\n.bar-value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.75rem;\n  color: #4a5568;\n  font-weight: 600;\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.chart-bar[_ngcontent-%COMP%]:hover   .bar-value[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.chart-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.chart-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n.secondary-analytics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.view-all[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.view-all[_ngcontent-%COMP%]:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n}\n.categories-list[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.category-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f7fafc;\n}\n.category-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.category-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.category-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.category-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.category-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.category-percentage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 80px;\n}\n.category-percentage[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #4a5568;\n}\n.percentage-bar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 6px;\n  background-color: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.percentage-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.books-list[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.book-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f7fafc;\n}\n.book-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.book-rank[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-radius: 50%;\n  font-weight: 700;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.book-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.book-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #2d3748;\n}\n.book-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.book-trend[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.trend-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.activity-list[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f7fafc;\n}\n.activity-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f7fafc;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.activity-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.activity-message[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.activity-time[_ngcontent-%COMP%] {\n  color: #a0aec0;\n  font-size: 0.75rem;\n}\n.activity-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #38a169;\n  font-size: 0.875rem;\n}\n.summary-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  color: #1a202c;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.summary-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n}\n.summary-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .secondary-analytics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .analytics[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .metric-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .metric-icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    font-size: 1.5rem;\n  }\n  .metric-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    height: 250px;\n    padding: 1rem;\n  }\n  .summary-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=analytics.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-analytics", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="analytics">\r
  <div class="page-header">\r
    <h1>Analytics Dashboard</h1>\r
    <div class="period-selector">\r
      <label for="period">Period:</label>\r
      <select id="period" [(ngModel)]="selectedPeriod" (change)="onPeriodChange()" class="period-select">\r
        <option value="daily">Daily</option>\r
        <option value="weekly">Weekly</option>\r
        <option value="monthly">Monthly</option>\r
        <option value="yearly">Yearly</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="analytics-content" *ngIf="!loading">\r
    <!-- Key Metrics -->\r
    <div class="metrics-grid">\r
      <div class="metric-card revenue">\r
        <div class="metric-icon">\u{1F4B0}</div>\r
        <div class="metric-info">\r
          <h3>{{ formatCurrency(analyticsData.revenue.monthly) }}</h3>\r
          <p>Monthly Revenue</p>\r
          <span class="metric-growth" [class]="getGrowthClass(analyticsData.revenue.growth)">\r
            {{ formatPercentage(analyticsData.revenue.growth) }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="metric-card sales">\r
        <div class="metric-icon">\u{1F4DA}</div>\r
        <div class="metric-info">\r
          <h3>{{ analyticsData.sales.monthly }}</h3>\r
          <p>Monthly Sales</p>\r
          <span class="metric-growth" [class]="getGrowthClass(analyticsData.sales.growth)">\r
            {{ formatPercentage(analyticsData.sales.growth) }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="metric-card users">\r
        <div class="metric-icon">\u{1F465}</div>\r
        <div class="metric-info">\r
          <h3>{{ analyticsData.users.monthly }}</h3>\r
          <p>New Users</p>\r
          <span class="metric-growth" [class]="getGrowthClass(analyticsData.users.growth)">\r
            {{ formatPercentage(analyticsData.users.growth) }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="metric-card orders">\r
        <div class="metric-icon">\u{1F6D2}</div>\r
        <div class="metric-info">\r
          <h3>{{ analyticsData.orders.monthly }}</h3>\r
          <p>Monthly Orders</p>\r
          <span class="metric-growth" [class]="getGrowthClass(analyticsData.orders.growth)">\r
            {{ formatPercentage(analyticsData.orders.growth) }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Charts Section -->\r
    <div class="charts-grid">\r
      <!-- Revenue Chart -->\r
      <div class="chart-card">\r
        <div class="chart-header">\r
          <h3>Revenue Trend</h3>\r
          <span class="chart-total">Total: {{ formatCurrency(analyticsData.revenue.total) }}</span>\r
        </div>\r
        <div class="chart-container">\r
          <div class="simple-chart">\r
            <div class="chart-bars">\r
              <div \r
                *ngFor="let value of revenueChartData.datasets[0].data; let i = index" \r
                class="chart-bar"\r
                [style.height.%]="(value / 4000) * 100"\r
                [title]="revenueChartData.labels[i] + ': ' + formatCurrency(value)">\r
                <span class="bar-value">{{ formatCurrency(value) }}</span>\r
              </div>\r
            </div>\r
            <div class="chart-labels">\r
              <span *ngFor="let label of revenueChartData.labels">{{ label }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Sales Chart -->\r
      <div class="chart-card">\r
        <div class="chart-header">\r
          <h3>Sales Trend</h3>\r
          <span class="chart-total">Total: {{ analyticsData.sales.total }} books</span>\r
        </div>\r
        <div class="chart-container">\r
          <div class="simple-chart">\r
            <div class="chart-bars sales-bars">\r
              <div \r
                *ngFor="let value of salesChartData.datasets[0].data; let i = index" \r
                class="chart-bar"\r
                [style.height.%]="(value / 350) * 100"\r
                [title]="salesChartData.labels[i] + ': ' + value + ' books'">\r
                <span class="bar-value">{{ value }}</span>\r
              </div>\r
            </div>\r
            <div class="chart-labels">\r
              <span *ngFor="let label of salesChartData.labels">{{ label }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Secondary Analytics -->\r
    <div class="secondary-analytics">\r
      <!-- Top Categories -->\r
      <div class="analytics-card">\r
        <div class="card-header">\r
          <h3>Top Categories</h3>\r
          <span class="view-all">View All</span>\r
        </div>\r
        <div class="categories-list">\r
          <div class="category-item" *ngFor="let category of topCategories">\r
            <div class="category-info">\r
              <div class="category-color" [style.background-color]="category.color"></div>\r
              <div class="category-details">\r
                <h4>{{ category.name }}</h4>\r
                <p>{{ category.sales }} sales</p>\r
              </div>\r
            </div>\r
            <div class="category-percentage">\r
              <span>{{ category.percentage }}%</span>\r
              <div class="percentage-bar">\r
                <div \r
                  class="percentage-fill" \r
                  [style.width.%]="category.percentage"\r
                  [style.background-color]="category.color">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Top Books -->\r
      <div class="analytics-card">\r
        <div class="card-header">\r
          <h3>Top Selling Books</h3>\r
          <span class="view-all">View All</span>\r
        </div>\r
        <div class="books-list">\r
          <div class="book-item" *ngFor="let book of topBooks; let i = index">\r
            <div class="book-rank">{{ i + 1 }}</div>\r
            <div class="book-details">\r
              <h4>{{ book.title }}</h4>\r
              <p>{{ book.sales }} sales \u2022 {{ formatCurrency(book.revenue) }}</p>\r
            </div>\r
            <div class="book-trend">\r
              <span class="trend-icon">{{ getTrendIcon(book.trend) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Recent Activity -->\r
      <div class="analytics-card">\r
        <div class="card-header">\r
          <h3>Recent Activity</h3>\r
          <span class="view-all">View All</span>\r
        </div>\r
        <div class="activity-list">\r
          <div class="activity-item" *ngFor="let activity of recentActivity">\r
            <div class="activity-icon">{{ getActivityIcon(activity.type) }}</div>\r
            <div class="activity-details">\r
              <p class="activity-message">{{ activity.message }}</p>\r
              <span class="activity-time">{{ activity.time }}</span>\r
            </div>\r
            <div class="activity-amount" *ngIf="activity.amount > 0">\r
              {{ formatCurrency(activity.amount) }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Summary Stats -->\r
    <div class="summary-section">\r
      <div class="summary-card">\r
        <h3>Performance Summary</h3>\r
        <div class="summary-stats">\r
          <div class="summary-stat">\r
            <span class="stat-label">Average Order Value</span>\r
            <span class="stat-value">{{ formatCurrency(analyticsData.revenue.total / analyticsData.orders.total) }}</span>\r
          </div>\r
          <div class="summary-stat">\r
            <span class="stat-label">Books per Order</span>\r
            <span class="stat-value">{{ (analyticsData.sales.total / analyticsData.orders.total).toFixed(1) }}</span>\r
          </div>\r
          <div class="summary-stat">\r
            <span class="stat-label">Customer Lifetime Value</span>\r
            <span class="stat-value">{{ formatCurrency(analyticsData.revenue.total / analyticsData.users.total) }}</span>\r
          </div>\r
          <div class="summary-stat">\r
            <span class="stat-label">Conversion Rate</span>\r
            <span class="stat-value">{{ ((analyticsData.orders.total / analyticsData.users.total) * 100).toFixed(1) }}%</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading">\r
    <div class="spinner"></div>\r
    <p>Loading analytics data...</p>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/admin/analytics/analytics.scss */\n.analytics {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.page-header h1 {\n  margin: 0;\n  color: #1a202c;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.period-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.period-selector label {\n  font-weight: 500;\n  color: #4a5568;\n}\n.period-select {\n  padding: 0.5rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.3s ease;\n}\n.period-select:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.metric-card {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.metric-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n}\n.metric-card.revenue::before {\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n}\n.metric-card.sales::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f093fb,\n      #f5576c);\n}\n.metric-card.users::before {\n  background:\n    linear-gradient(\n      90deg,\n      #4facfe,\n      #00f2fe);\n}\n.metric-card.orders::before {\n  background:\n    linear-gradient(\n      90deg,\n      #43e97b,\n      #38f9d7);\n}\n.metric-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.metric-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  background: #f7fafc;\n}\n.metric-info {\n  flex: 1;\n}\n.metric-info h3 {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.metric-info p {\n  margin: 0 0 0.5rem 0;\n  color: #718096;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.metric-growth {\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.metric-growth.positive {\n  color: #38a169;\n  background-color: #f0fff4;\n}\n.metric-growth.negative {\n  color: #e53e3e;\n  background-color: #fed7d7;\n}\n.metric-growth.neutral {\n  color: #718096;\n  background-color: #f7fafc;\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.chart-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.chart-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.chart-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.chart-total {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n.chart-container {\n  padding: 1.5rem;\n  height: 300px;\n}\n.simple-chart {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.chart-bars {\n  flex: 1;\n  display: flex;\n  align-items: end;\n  gap: 1rem;\n  padding-bottom: 1rem;\n}\n.chart-bar {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      #667eea,\n      #764ba2);\n  border-radius: 4px 4px 0 0;\n  min-height: 20px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.sales-bars .chart-bar {\n  background:\n    linear-gradient(\n      180deg,\n      #f093fb,\n      #f5576c);\n}\n.chart-bar:hover {\n  opacity: 0.8;\n  transform: scaleY(1.05);\n}\n.bar-value {\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.75rem;\n  color: #4a5568;\n  font-weight: 600;\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.chart-bar:hover .bar-value {\n  opacity: 1;\n}\n.chart-labels {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.chart-labels span {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n.secondary-analytics {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.analytics-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-header h3 {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.view-all {\n  color: #667eea;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.view-all:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n}\n.categories-list {\n  padding: 1.5rem;\n}\n.category-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f7fafc;\n}\n.category-item:last-child {\n  border-bottom: none;\n}\n.category-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.category-color {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.category-details h4 {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.category-details p {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.category-percentage {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 80px;\n}\n.category-percentage span {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #4a5568;\n}\n.percentage-bar {\n  width: 40px;\n  height: 6px;\n  background-color: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.percentage-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.books-list {\n  padding: 1.5rem;\n}\n.book-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f7fafc;\n}\n.book-item:last-child {\n  border-bottom: none;\n}\n.book-rank {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-radius: 50%;\n  font-weight: 700;\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.book-details {\n  flex: 1;\n}\n.book-details h4 {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #2d3748;\n}\n.book-details p {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.book-trend {\n  flex-shrink: 0;\n}\n.trend-icon {\n  font-size: 1.2rem;\n}\n.activity-list {\n  padding: 1.5rem;\n}\n.activity-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f7fafc;\n}\n.activity-item:last-child {\n  border-bottom: none;\n}\n.activity-icon {\n  font-size: 1.25rem;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f7fafc;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.activity-details {\n  flex: 1;\n}\n.activity-message {\n  margin: 0 0 0.25rem 0;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.activity-time {\n  color: #a0aec0;\n  font-size: 0.75rem;\n}\n.activity-amount {\n  font-weight: 600;\n  color: #38a169;\n  font-size: 0.875rem;\n}\n.summary-section {\n  margin-bottom: 2rem;\n}\n.summary-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.summary-card h3 {\n  margin: 0 0 1.5rem 0;\n  color: #1a202c;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.summary-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n}\n.summary-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.stat-label {\n  font-size: 0.875rem;\n  color: #718096;\n  font-weight: 500;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a202c;\n}\n.loading-state {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .charts-grid {\n    grid-template-columns: 1fr;\n  }\n  .secondary-analytics {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .analytics {\n    padding: 1rem;\n  }\n  .page-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .metrics-grid {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .metric-card {\n    padding: 1rem;\n  }\n  .metric-icon {\n    width: 48px;\n    height: 48px;\n    font-size: 1.5rem;\n  }\n  .metric-info h3 {\n    font-size: 1.5rem;\n  }\n  .chart-container {\n    height: 250px;\n    padding: 1rem;\n  }\n  .summary-stats {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=analytics.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/features/admin/analytics/analytics.ts", lineNumber: 45 });
})();

// src/app/features/admin/settings/settings.ts
function SettingsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("success", !ctx_r0.saveMessage.includes("Error"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saveMessage, " ");
  }
}
function SettingsComponent_div_33_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "siteName"), " ");
  }
}
function SettingsComponent_div_33_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "siteDescription"), " ");
  }
}
function SettingsComponent_div_33_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "contactEmail"), " ");
  }
}
function SettingsComponent_div_33_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "supportEmail"), " ");
  }
}
function SettingsComponent_div_33_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "phoneNumber"), " ");
  }
}
function SettingsComponent_div_33_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "businessHours"), " ");
  }
}
function SettingsComponent_div_33_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "address"), " ");
  }
}
function SettingsComponent_div_33_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "facebook"), " ");
  }
}
function SettingsComponent_div_33_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "twitter"), " ");
  }
}
function SettingsComponent_div_33_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "instagram"), " ");
  }
}
function SettingsComponent_div_33_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "linkedin"), " ");
  }
}
function SettingsComponent_div_33_option_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r3 = ctx.$implicit;
    \u0275\u0275property("value", currency_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", currency_r3.name, " (", currency_r3.symbol, ") ");
  }
}
function SettingsComponent_div_33_span_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "currency"), " ");
  }
}
function SettingsComponent_div_33_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "taxRate"), " ");
  }
}
function SettingsComponent_div_33_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "shippingCost"), " ");
  }
}
function SettingsComponent_div_33_span_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.generalForm, "freeShippingThreshold"), " ");
  }
}
function SettingsComponent_div_33_span_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_33_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u{1F4BE}");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "form", 15);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_33_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveGeneralSettings());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4, "Site Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "div", 18)(7, "label", 19);
    \u0275\u0275text(8, "Site Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 20);
    \u0275\u0275template(10, SettingsComponent_div_33_span_10_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "label", 23);
    \u0275\u0275text(13, "Site Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "textarea", 24);
    \u0275\u0275template(15, SettingsComponent_div_33_span_15_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 16)(17, "h3");
    \u0275\u0275text(18, "Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17)(20, "div", 18)(21, "label", 25);
    \u0275\u0275text(22, "Contact Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 26);
    \u0275\u0275template(24, SettingsComponent_div_33_span_24_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18)(26, "label", 27);
    \u0275\u0275text(27, "Support Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 28);
    \u0275\u0275template(29, SettingsComponent_div_33_span_29_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18)(31, "label", 29);
    \u0275\u0275text(32, "Phone Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 30);
    \u0275\u0275template(34, SettingsComponent_div_33_span_34_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 18)(36, "label", 31);
    \u0275\u0275text(37, "Business Hours *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 32);
    \u0275\u0275template(39, SettingsComponent_div_33_span_39_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 22)(41, "label", 33);
    \u0275\u0275text(42, "Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "textarea", 34);
    \u0275\u0275template(44, SettingsComponent_div_33_span_44_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 16)(46, "h3");
    \u0275\u0275text(47, "Social Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 17)(49, "div", 18)(50, "label", 35);
    \u0275\u0275text(51, "Facebook URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 36);
    \u0275\u0275template(53, SettingsComponent_div_33_span_53_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 18)(55, "label", 37);
    \u0275\u0275text(56, "Twitter URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 38);
    \u0275\u0275template(58, SettingsComponent_div_33_span_58_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 18)(60, "label", 39);
    \u0275\u0275text(61, "Instagram URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 40);
    \u0275\u0275template(63, SettingsComponent_div_33_span_63_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 18)(65, "label", 41);
    \u0275\u0275text(66, "LinkedIn URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 42);
    \u0275\u0275template(68, SettingsComponent_div_33_span_68_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 16)(70, "h3");
    \u0275\u0275text(71, "Commerce Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 17)(73, "div", 18)(74, "label", 43);
    \u0275\u0275text(75, "Currency *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "select", 44);
    \u0275\u0275template(77, SettingsComponent_div_33_option_77_Template, 2, 3, "option", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, SettingsComponent_div_33_span_78_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 18)(80, "label", 46);
    \u0275\u0275text(81, "Tax Rate (%) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 47);
    \u0275\u0275template(83, SettingsComponent_div_33_span_83_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 18)(85, "label", 48);
    \u0275\u0275text(86, "Shipping Cost *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(87, "input", 49);
    \u0275\u0275template(88, SettingsComponent_div_33_span_88_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 18)(90, "label", 50);
    \u0275\u0275text(91, "Free Shipping Threshold *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "input", 51);
    \u0275\u0275template(93, SettingsComponent_div_33_span_93_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 52)(95, "button", 53);
    \u0275\u0275listener("click", function SettingsComponent_div_33_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetToDefaults());
    });
    \u0275\u0275text(96, " Reset to Defaults ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "button", 54);
    \u0275\u0275template(98, SettingsComponent_div_33_span_98_Template, 2, 0, "span", 55)(99, SettingsComponent_div_33_span_99_Template, 2, 0, "span", 55);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_27_0;
    let tmp_29_0;
    let tmp_31_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.generalForm);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_2_0 = ctx_r0.generalForm.get("siteName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.generalForm.get("siteName")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "siteName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.generalForm.get("siteDescription")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.generalForm.get("siteDescription")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "siteDescription"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_6_0 = ctx_r0.generalForm.get("contactEmail")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.generalForm.get("contactEmail")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "contactEmail"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_8_0 = ctx_r0.generalForm.get("supportEmail")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.generalForm.get("supportEmail")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "supportEmail"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_10_0 = ctx_r0.generalForm.get("phoneNumber")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.generalForm.get("phoneNumber")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "phoneNumber"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_12_0 = ctx_r0.generalForm.get("businessHours")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.generalForm.get("businessHours")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "businessHours"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_14_0 = ctx_r0.generalForm.get("address")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.generalForm.get("address")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "address"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_16_0 = ctx_r0.generalForm.get("facebook")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.generalForm.get("facebook")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "facebook"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_18_0 = ctx_r0.generalForm.get("twitter")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r0.generalForm.get("twitter")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "twitter"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_20_0 = ctx_r0.generalForm.get("instagram")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx_r0.generalForm.get("instagram")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "instagram"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_22_0 = ctx_r0.generalForm.get("linkedin")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r0.generalForm.get("linkedin")) == null ? null : tmp_22_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "linkedin"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_24_0 = ctx_r0.generalForm.get("currency")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r0.generalForm.get("currency")) == null ? null : tmp_24_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.currencies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "currency"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_27_0 = ctx_r0.generalForm.get("taxRate")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx_r0.generalForm.get("taxRate")) == null ? null : tmp_27_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "taxRate"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_29_0 = ctx_r0.generalForm.get("shippingCost")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx_r0.generalForm.get("shippingCost")) == null ? null : tmp_29_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "shippingCost"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_31_0 = ctx_r0.generalForm.get("freeShippingThreshold")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx_r0.generalForm.get("freeShippingThreshold")) == null ? null : tmp_31_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.generalForm, "freeShippingThreshold"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.generalForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Saving..." : "Save General Settings", " ");
  }
}
function SettingsComponent_div_34_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_34_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u{1F4BE}");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "form", 15);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_34_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveNotificationSettings());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58)(6, "div", 59)(7, "div", 60)(8, "h4");
    \u0275\u0275text(9, "Email Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Enable email notifications for admin activities");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 61);
    \u0275\u0275element(13, "input", 62)(14, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 59)(16, "div", 60)(17, "h4");
    \u0275\u0275text(18, "Order Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "Receive notifications when new orders are placed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 61);
    \u0275\u0275element(22, "input", 64)(23, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 59)(25, "div", 60)(26, "h4");
    \u0275\u0275text(27, "User Registration Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Get notified when new users register");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 61);
    \u0275\u0275element(31, "input", 65)(32, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 59)(34, "div", 60)(35, "h4");
    \u0275\u0275text(36, "Low Stock Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, "Alert when book inventory is running low");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "label", 61);
    \u0275\u0275element(40, "input", 66)(41, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 59)(43, "div", 60)(44, "h4");
    \u0275\u0275text(45, "Review Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p");
    \u0275\u0275text(47, "Notifications for new book reviews");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "label", 61);
    \u0275\u0275element(49, "input", 67)(50, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 59)(52, "div", 60)(53, "h4");
    \u0275\u0275text(54, "Newsletter Enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, "Enable newsletter functionality for users");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "label", 61);
    \u0275\u0275element(58, "input", 68)(59, "span", 63);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 52)(61, "button", 53);
    \u0275\u0275listener("click", function SettingsComponent_div_34_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetToDefaults());
    });
    \u0275\u0275text(62, " Reset to Defaults ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 54);
    \u0275\u0275template(64, SettingsComponent_div_34_span_64_Template, 2, 0, "span", 55)(65, SettingsComponent_div_34_span_65_Template, 2, 0, "span", 55);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.notificationForm);
    \u0275\u0275advance(62);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Saving..." : "Save Notification Settings", " ");
  }
}
function SettingsComponent_div_35_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timeout_r6 = ctx.$implicit;
    \u0275\u0275property("value", timeout_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", timeout_r6.label, " ");
  }
}
function SettingsComponent_div_35_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.securityForm, "sessionTimeout"), " ");
  }
}
function SettingsComponent_div_35_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.securityForm, "passwordMinLength"), " ");
  }
}
function SettingsComponent_div_35_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.securityForm, "maxLoginAttempts"), " ");
  }
}
function SettingsComponent_div_35_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormFieldError(ctx_r0.securityForm, "accountLockoutDuration"), " ");
  }
}
function SettingsComponent_div_35_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_35_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u{1F4BE}");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "form", 15);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_35_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveSecuritySettings());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4, "Authentication Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 69)(6, "div", 70)(7, "div", 71)(8, "h4");
    \u0275\u0275text(9, "Two-Factor Authentication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Require 2FA for admin accounts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 61);
    \u0275\u0275element(13, "input", 72)(14, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "label", 73);
    \u0275\u0275text(17, "Session Timeout *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 74);
    \u0275\u0275template(19, SettingsComponent_div_35_option_19_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SettingsComponent_div_35_span_20_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 16)(22, "h3");
    \u0275\u0275text(23, "Password Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "label", 75);
    \u0275\u0275text(27, "Minimum Password Length *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 76);
    \u0275\u0275template(29, SettingsComponent_div_35_span_29_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 70)(31, "div", 71)(32, "h4");
    \u0275\u0275text(33, "Require Special Characters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Passwords must contain special characters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "label", 61);
    \u0275\u0275element(37, "input", 77)(38, "span", 63);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 16)(40, "h3");
    \u0275\u0275text(41, "Account Security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 17)(43, "div", 18)(44, "label", 78);
    \u0275\u0275text(45, "Max Login Attempts *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 79);
    \u0275\u0275template(47, SettingsComponent_div_35_span_47_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 18)(49, "label", 80);
    \u0275\u0275text(50, "Account Lockout Duration (minutes) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 81);
    \u0275\u0275template(52, SettingsComponent_div_35_span_52_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 52)(54, "button", 53);
    \u0275\u0275listener("click", function SettingsComponent_div_35_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetToDefaults());
    });
    \u0275\u0275text(55, " Reset to Defaults ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 54);
    \u0275\u0275template(57, SettingsComponent_div_35_span_57_Template, 2, 0, "span", 55)(58, SettingsComponent_div_35_span_58_Template, 2, 0, "span", 55);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.securityForm);
    \u0275\u0275advance(17);
    \u0275\u0275classProp("error", ((tmp_2_0 = ctx_r0.securityForm.get("sessionTimeout")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.securityForm.get("sessionTimeout")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sessionTimeouts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.securityForm, "sessionTimeout"));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx_r0.securityForm.get("passwordMinLength")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.securityForm.get("passwordMinLength")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.securityForm, "passwordMinLength"));
    \u0275\u0275advance(17);
    \u0275\u0275classProp("error", ((tmp_7_0 = ctx_r0.securityForm.get("maxLoginAttempts")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.securityForm.get("maxLoginAttempts")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.securityForm, "maxLoginAttempts"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_9_0 = ctx_r0.securityForm.get("accountLockoutDuration")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.securityForm.get("accountLockoutDuration")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFormFieldError(ctx_r0.securityForm, "accountLockoutDuration"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.securityForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Saving..." : "Save Security Settings", " ");
  }
}
function SettingsComponent_div_36_span_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u23F3");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_36_span_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "\u{1F4BE}");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "form", 15);
    \u0275\u0275listener("ngSubmit", function SettingsComponent_div_36_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePricingSettings());
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4, "\u{1F4DA} Base Prices by Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Set the base price for each book category (in USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18)(9, "label", 82);
    \u0275\u0275text(10, "Fiction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 83)(12, "span", 84);
    \u0275\u0275text(13, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "label", 86);
    \u0275\u0275text(17, "Programming");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 83)(19, "span", 84);
    \u0275\u0275text(20, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 18)(23, "label", 88);
    \u0275\u0275text(24, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 83)(26, "span", 84);
    \u0275\u0275text(27, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 18)(30, "label", 90);
    \u0275\u0275text(31, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 83)(33, "span", 84);
    \u0275\u0275text(34, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 18)(37, "label", 92);
    \u0275\u0275text(38, "Biography");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 83)(40, "span", 84);
    \u0275\u0275text(41, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 18)(44, "label", 94);
    \u0275\u0275text(45, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 83)(47, "span", 84);
    \u0275\u0275text(48, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 18)(51, "label", 96);
    \u0275\u0275text(52, "Philosophy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 83)(54, "span", 84);
    \u0275\u0275text(55, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 18)(58, "label", 98);
    \u0275\u0275text(59, "Psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 83)(61, "span", 84);
    \u0275\u0275text(62, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 18)(65, "label", 100);
    \u0275\u0275text(66, "Art");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 83)(68, "span", 84);
    \u0275\u0275text(69, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 18)(72, "label", 102);
    \u0275\u0275text(73, "Health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 83)(75, "span", 84);
    \u0275\u0275text(76, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 18)(79, "label", 104);
    \u0275\u0275text(80, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 83)(82, "span", 84);
    \u0275\u0275text(83, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 18)(86, "label", 106);
    \u0275\u0275text(87, "Religion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 83)(89, "span", 84);
    \u0275\u0275text(90, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 18)(93, "label", 108);
    \u0275\u0275text(94, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 83)(96, "span", 84);
    \u0275\u0275text(97, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 109);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(99, "div", 16)(100, "h3");
    \u0275\u0275text(101, "\u2B50 Price Modifiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p");
    \u0275\u0275text(103, "Multipliers applied to base prices (1.0 = no change, 1.5 = 50% increase, 0.8 = 20% decrease)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 17)(105, "div", 18)(106, "label", 110);
    \u0275\u0275text(107, "Bestseller Multiplier");
    \u0275\u0275elementEnd();
    \u0275\u0275element(108, "input", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 18)(110, "label", 112);
    \u0275\u0275text(111, "Featured Book Multiplier");
    \u0275\u0275elementEnd();
    \u0275\u0275element(112, "input", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 18)(114, "label", 114);
    \u0275\u0275text(115, "New Release Multiplier");
    \u0275\u0275elementEnd();
    \u0275\u0275element(116, "input", 115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(117, "div", 16)(118, "h3");
    \u0275\u0275text(119, "\u{1F4C4} Page Count Modifiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "p");
    \u0275\u0275text(121, "Price adjustments based on book length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 17)(123, "div", 18)(124, "label", 116);
    \u0275\u0275text(125, "Under 200 pages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(126, "input", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 18)(128, "label", 118);
    \u0275\u0275text(129, "200-400 pages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(130, "input", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 18)(132, "label", 120);
    \u0275\u0275text(133, "400-600 pages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(134, "input", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "div", 18)(136, "label", 122);
    \u0275\u0275text(137, "Over 600 pages");
    \u0275\u0275elementEnd();
    \u0275\u0275element(138, "input", 123);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(139, "div", 16)(140, "h3");
    \u0275\u0275text(141, "\u{1F4C5} Publication Date Modifiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "p");
    \u0275\u0275text(143, "Price adjustments based on when the book was published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "div", 17)(145, "div", 18)(146, "label", 124);
    \u0275\u0275text(147, "Current Year (2025)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(148, "input", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 18)(150, "label", 126);
    \u0275\u0275text(151, "Recent (Last 3 years)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(152, "input", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "div", 18)(154, "label", 128);
    \u0275\u0275text(155, "Older Books (3+ years)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(156, "input", 129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(157, "div", 16)(158, "h3");
    \u0275\u0275text(159, "\u{1F464} Author Popularity Modifiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "p");
    \u0275\u0275text(161, "Price adjustments based on author recognition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "div", 17)(163, "div", 18)(164, "label", 130);
    \u0275\u0275text(165, "Famous Authors");
    \u0275\u0275elementEnd();
    \u0275\u0275element(166, "input", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 18)(168, "label", 132);
    \u0275\u0275text(169, "Known Authors");
    \u0275\u0275elementEnd();
    \u0275\u0275element(170, "input", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "div", 18)(172, "label", 134);
    \u0275\u0275text(173, "Unknown Authors");
    \u0275\u0275elementEnd();
    \u0275\u0275element(174, "input", 135);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(175, "div", 52)(176, "button", 53);
    \u0275\u0275listener("click", function SettingsComponent_div_36_Template_button_click_176_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetToDefaults());
    });
    \u0275\u0275text(177, " Reset to Defaults ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "button", 54);
    \u0275\u0275template(179, SettingsComponent_div_36_span_179_Template, 2, 0, "span", 55)(180, SettingsComponent_div_36_span_180_Template, 2, 0, "span", 55);
    \u0275\u0275text(181);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.pricingForm);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("error", ((tmp_2_0 = ctx_r0.pricingForm.get("fiction")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.pricingForm.get("fiction")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_3_0 = ctx_r0.pricingForm.get("programming")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.pricingForm.get("programming")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.pricingForm.get("science")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.pricingForm.get("science")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx_r0.pricingForm.get("history")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.pricingForm.get("history")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_6_0 = ctx_r0.pricingForm.get("biography")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.pricingForm.get("biography")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_7_0 = ctx_r0.pricingForm.get("business")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.pricingForm.get("business")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_8_0 = ctx_r0.pricingForm.get("philosophy")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.pricingForm.get("philosophy")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_9_0 = ctx_r0.pricingForm.get("psychology")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.pricingForm.get("psychology")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_10_0 = ctx_r0.pricingForm.get("art")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.pricingForm.get("art")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_11_0 = ctx_r0.pricingForm.get("health")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r0.pricingForm.get("health")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_12_0 = ctx_r0.pricingForm.get("education")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.pricingForm.get("education")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_13_0 = ctx_r0.pricingForm.get("religion")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r0.pricingForm.get("religion")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("error", ((tmp_14_0 = ctx_r0.pricingForm.get("general")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.pricingForm.get("general")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ((tmp_15_0 = ctx_r0.pricingForm.get("bestsellerModifier")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r0.pricingForm.get("bestsellerModifier")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_16_0 = ctx_r0.pricingForm.get("featuredModifier")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.pricingForm.get("featuredModifier")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_17_0 = ctx_r0.pricingForm.get("newBookModifier")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r0.pricingForm.get("newBookModifier")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ((tmp_18_0 = ctx_r0.pricingForm.get("under200Pages")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r0.pricingForm.get("under200Pages")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_19_0 = ctx_r0.pricingForm.get("between200And400Pages")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r0.pricingForm.get("between200And400Pages")) == null ? null : tmp_19_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_20_0 = ctx_r0.pricingForm.get("between400And600Pages")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx_r0.pricingForm.get("between400And600Pages")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_21_0 = ctx_r0.pricingForm.get("over600Pages")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx_r0.pricingForm.get("over600Pages")) == null ? null : tmp_21_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ((tmp_22_0 = ctx_r0.pricingForm.get("currentYear")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r0.pricingForm.get("currentYear")) == null ? null : tmp_22_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_23_0 = ctx_r0.pricingForm.get("recentYears")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r0.pricingForm.get("recentYears")) == null ? null : tmp_23_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_24_0 = ctx_r0.pricingForm.get("olderBooks")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r0.pricingForm.get("olderBooks")) == null ? null : tmp_24_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("error", ((tmp_25_0 = ctx_r0.pricingForm.get("famousAuthor")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx_r0.pricingForm.get("famousAuthor")) == null ? null : tmp_25_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_26_0 = ctx_r0.pricingForm.get("knownAuthor")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = ctx_r0.pricingForm.get("knownAuthor")) == null ? null : tmp_26_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_27_0 = ctx_r0.pricingForm.get("unknownAuthor")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx_r0.pricingForm.get("unknownAuthor")) == null ? null : tmp_27_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.pricingForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Saving..." : "Save Pricing Settings", " ");
  }
}
var SettingsComponent = class _SettingsComponent {
  fb;
  pricingService;
  activeTab = "general";
  generalForm;
  notificationForm;
  securityForm;
  pricingForm;
  loading = false;
  saveMessage = "";
  pricingConfig;
  siteSettings = {
    siteName: "Readify",
    siteDescription: "Your premier destination for books of all genres",
    contactEmail: "contact@readify.com",
    supportEmail: "support@readify.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Book Street, Reading City, RC 12345",
    socialMedia: {
      facebook: "https://facebook.com/readify",
      twitter: "https://twitter.com/readify",
      instagram: "https://instagram.com/readify",
      linkedin: "https://linkedin.com/company/readify"
    },
    businessHours: "Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM",
    currency: "USD",
    taxRate: 8.5,
    shippingCost: 5.99,
    freeShippingThreshold: 50
  };
  notificationSettings = {
    emailNotifications: true,
    orderNotifications: true,
    userRegistrationNotifications: true,
    lowStockNotifications: true,
    reviewNotifications: false,
    newsletterEnabled: true
  };
  securitySettings = {
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordMinLength: 8,
    requireSpecialChars: true,
    maxLoginAttempts: 5,
    accountLockoutDuration: 15
  };
  currencies = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "\u20AC" },
    { code: "GBP", name: "British Pound", symbol: "\xA3" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$" }
  ];
  sessionTimeouts = [
    { value: 15, label: "15 minutes" },
    { value: 30, label: "30 minutes" },
    { value: 60, label: "1 hour" },
    { value: 120, label: "2 hours" },
    { value: 240, label: "4 hours" }
  ];
  constructor(fb, pricingService) {
    this.fb = fb;
    this.pricingService = pricingService;
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
      general: [this.pricingConfig.basePrices["general"], [Validators.required, Validators.min(0)]],
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
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    this.saveMessage = "";
  }
  saveGeneralSettings() {
    return __async(this, null, function* () {
      if (this.generalForm.valid) {
        this.loading = true;
        try {
          const formValue = this.generalForm.value;
          this.siteSettings = __spreadProps(__spreadValues({}, this.siteSettings), {
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
          });
          yield this.delay(1e3);
          this.saveMessage = "General settings saved successfully!";
          setTimeout(() => this.saveMessage = "", 3e3);
        } catch (error) {
          console.error("Error saving general settings:", error);
          this.saveMessage = "Error saving settings. Please try again.";
        } finally {
          this.loading = false;
        }
      }
    });
  }
  saveNotificationSettings() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        this.notificationSettings = __spreadValues({}, this.notificationForm.value);
        yield this.delay(1e3);
        this.saveMessage = "Notification settings saved successfully!";
        setTimeout(() => this.saveMessage = "", 3e3);
      } catch (error) {
        console.error("Error saving notification settings:", error);
        this.saveMessage = "Error saving settings. Please try again.";
      } finally {
        this.loading = false;
      }
    });
  }
  saveSecuritySettings() {
    return __async(this, null, function* () {
      if (this.securityForm.valid) {
        this.loading = true;
        try {
          this.securitySettings = __spreadValues({}, this.securityForm.value);
          yield this.delay(1e3);
          this.saveMessage = "Security settings saved successfully!";
          setTimeout(() => this.saveMessage = "", 3e3);
        } catch (error) {
          console.error("Error saving security settings:", error);
          this.saveMessage = "Error saving settings. Please try again.";
        } finally {
          this.loading = false;
        }
      }
    });
  }
  savePricingSettings() {
    return __async(this, null, function* () {
      if (this.pricingForm.valid) {
        this.loading = true;
        try {
          const formValue = this.pricingForm.value;
          const updatedConfig = {
            basePrices: __spreadProps(__spreadValues({}, this.pricingConfig.basePrices), {
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
            }),
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
          yield this.delay(1e3);
          this.saveMessage = "Pricing settings saved successfully! New books will use updated pricing.";
          setTimeout(() => this.saveMessage = "", 3e3);
        } catch (error) {
          console.error("Error saving pricing settings:", error);
          this.saveMessage = "Error saving pricing settings. Please try again.";
        } finally {
          this.loading = false;
        }
      } else {
        this.saveMessage = "Please correct the form errors before saving.";
        setTimeout(() => this.saveMessage = "", 3e3);
      }
    });
  }
  resetToDefaults() {
    if (confirm("Are you sure you want to reset all settings to default values? This action cannot be undone.")) {
      if (this.activeTab === "general") {
        this.generalForm.reset();
        this.generalForm.patchValue(this.siteSettings);
      } else if (this.activeTab === "notifications") {
        this.notificationForm.reset();
        this.notificationForm.patchValue(this.notificationSettings);
      } else if (this.activeTab === "security") {
        this.securityForm.reset();
        this.securityForm.patchValue(this.securitySettings);
      } else if (this.activeTab === "pricing") {
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
          general: this.pricingConfig.basePrices["general"],
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
      this.saveMessage = "Settings reset to defaults";
      setTimeout(() => this.saveMessage = "", 3e3);
    }
  }
  exportSettings() {
    const settings = {
      general: this.siteSettings,
      notifications: this.notificationSettings,
      security: this.securitySettings
    };
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "readify-settings.json";
    link.click();
    URL.revokeObjectURL(url);
    this.saveMessage = "Settings exported successfully!";
    setTimeout(() => this.saveMessage = "", 3e3);
  }
  importSettings(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const settings = JSON.parse(e.target?.result);
          if (settings.general) {
            this.siteSettings = settings.general;
            this.generalForm.patchValue(__spreadValues(__spreadValues({}, settings.general), settings.general.socialMedia));
          }
          if (settings.notifications) {
            this.notificationSettings = settings.notifications;
            this.notificationForm.patchValue(settings.notifications);
          }
          if (settings.security) {
            this.securitySettings = settings.security;
            this.securityForm.patchValue(settings.security);
          }
          this.saveMessage = "Settings imported successfully!";
          setTimeout(() => this.saveMessage = "", 3e3);
        } catch (error) {
          console.error("Error importing settings:", error);
          this.saveMessage = "Error importing settings. Please check the file format.";
        }
      };
      reader.readAsText(file);
    }
  }
  getFormFieldError(form, fieldName) {
    const field = form.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors["required"])
        return `${fieldName} is required`;
      if (field.errors["email"])
        return "Invalid email format";
      if (field.errors["minlength"])
        return `${fieldName} is too short`;
      if (field.errors["min"])
        return `Value must be greater than minimum`;
      if (field.errors["max"])
        return `Value exceeds maximum`;
      if (field.errors["pattern"])
        return `Invalid ${fieldName} format`;
    }
    return "";
  }
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PricingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 37, vars: 13, consts: [[1, "settings"], [1, "page-header"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary", "import-btn"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], ["class", "message-bar", 3, "success", 4, "ngIf"], [1, "settings-container"], [1, "settings-tabs"], [1, "tab-button", 3, "click"], [1, "tab-icon"], ["class", "tab-content", 4, "ngIf"], [1, "message-bar"], [1, "tab-content"], [1, "settings-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], ["for", "siteName"], ["type", "text", "id", "siteName", "formControlName", "siteName", 1, "form-input"], ["class", "error-message", 4, "ngIf"], [1, "form-group", "full-width"], ["for", "siteDescription"], ["id", "siteDescription", "formControlName", "siteDescription", "rows", "3", 1, "form-textarea"], ["for", "contactEmail"], ["type", "email", "id", "contactEmail", "formControlName", "contactEmail", 1, "form-input"], ["for", "supportEmail"], ["type", "email", "id", "supportEmail", "formControlName", "supportEmail", 1, "form-input"], ["for", "phoneNumber"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "form-input"], ["for", "businessHours"], ["type", "text", "id", "businessHours", "formControlName", "businessHours", "placeholder", "e.g., Mon-Fri: 9AM-6PM", 1, "form-input"], ["for", "address"], ["id", "address", "formControlName", "address", "rows", "2", 1, "form-textarea"], ["for", "facebook"], ["type", "url", "id", "facebook", "formControlName", "facebook", "placeholder", "https://facebook.com/yourpage", 1, "form-input"], ["for", "twitter"], ["type", "url", "id", "twitter", "formControlName", "twitter", "placeholder", "https://twitter.com/yourhandle", 1, "form-input"], ["for", "instagram"], ["type", "url", "id", "instagram", "formControlName", "instagram", "placeholder", "https://instagram.com/yourhandle", 1, "form-input"], ["for", "linkedin"], ["type", "url", "id", "linkedin", "formControlName", "linkedin", "placeholder", "https://linkedin.com/company/yourcompany", 1, "form-input"], ["for", "currency"], ["id", "currency", "formControlName", "currency", 1, "form-input"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "taxRate"], ["type", "number", "id", "taxRate", "formControlName", "taxRate", "step", "0.1", "min", "0", "max", "100", 1, "form-input"], ["for", "shippingCost"], ["type", "number", "id", "shippingCost", "formControlName", "shippingCost", "step", "0.01", "min", "0", 1, "form-input"], ["for", "freeShippingThreshold"], ["type", "number", "id", "freeShippingThreshold", "formControlName", "freeShippingThreshold", "step", "0.01", "min", "0", 1, "form-input"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "btn-icon", 4, "ngIf"], [1, "error-message"], [3, "value"], [1, "notification-settings"], [1, "notification-item"], [1, "notification-info"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "emailNotifications"], [1, "toggle-slider"], ["type", "checkbox", "formControlName", "orderNotifications"], ["type", "checkbox", "formControlName", "userRegistrationNotifications"], ["type", "checkbox", "formControlName", "lowStockNotifications"], ["type", "checkbox", "formControlName", "reviewNotifications"], ["type", "checkbox", "formControlName", "newsletterEnabled"], [1, "security-settings"], [1, "security-item"], [1, "security-info"], ["type", "checkbox", "formControlName", "twoFactorAuth"], ["for", "sessionTimeout"], ["id", "sessionTimeout", "formControlName", "sessionTimeout", 1, "form-input"], ["for", "passwordMinLength"], ["type", "number", "id", "passwordMinLength", "formControlName", "passwordMinLength", "min", "6", "max", "20", 1, "form-input"], ["type", "checkbox", "formControlName", "requireSpecialChars"], ["for", "maxLoginAttempts"], ["type", "number", "id", "maxLoginAttempts", "formControlName", "maxLoginAttempts", "min", "3", "max", "10", 1, "form-input"], ["for", "accountLockoutDuration"], ["type", "number", "id", "accountLockoutDuration", "formControlName", "accountLockoutDuration", "min", "5", "max", "60", 1, "form-input"], ["for", "fiction"], [1, "input-group"], [1, "input-prefix"], ["type", "number", "id", "fiction", "formControlName", "fiction", "step", "0.01", "min", "0"], ["for", "programming"], ["type", "number", "id", "programming", "formControlName", "programming", "step", "0.01", "min", "0"], ["for", "science"], ["type", "number", "id", "science", "formControlName", "science", "step", "0.01", "min", "0"], ["for", "history"], ["type", "number", "id", "history", "formControlName", "history", "step", "0.01", "min", "0"], ["for", "biography"], ["type", "number", "id", "biography", "formControlName", "biography", "step", "0.01", "min", "0"], ["for", "business"], ["type", "number", "id", "business", "formControlName", "business", "step", "0.01", "min", "0"], ["for", "philosophy"], ["type", "number", "id", "philosophy", "formControlName", "philosophy", "step", "0.01", "min", "0"], ["for", "psychology"], ["type", "number", "id", "psychology", "formControlName", "psychology", "step", "0.01", "min", "0"], ["for", "art"], ["type", "number", "id", "art", "formControlName", "art", "step", "0.01", "min", "0"], ["for", "health"], ["type", "number", "id", "health", "formControlName", "health", "step", "0.01", "min", "0"], ["for", "education"], ["type", "number", "id", "education", "formControlName", "education", "step", "0.01", "min", "0"], ["for", "religion"], ["type", "number", "id", "religion", "formControlName", "religion", "step", "0.01", "min", "0"], ["for", "general"], ["type", "number", "id", "general", "formControlName", "general", "step", "0.01", "min", "0"], ["for", "bestsellerModifier"], ["type", "number", "id", "bestsellerModifier", "formControlName", "bestsellerModifier", "step", "0.1", "min", "0.1", "max", "5"], ["for", "featuredModifier"], ["type", "number", "id", "featuredModifier", "formControlName", "featuredModifier", "step", "0.1", "min", "0.1", "max", "5"], ["for", "newBookModifier"], ["type", "number", "id", "newBookModifier", "formControlName", "newBookModifier", "step", "0.1", "min", "0.1", "max", "5"], ["for", "under200Pages"], ["type", "number", "id", "under200Pages", "formControlName", "under200Pages", "step", "0.1", "min", "0.1", "max", "5"], ["for", "between200And400Pages"], ["type", "number", "id", "between200And400Pages", "formControlName", "between200And400Pages", "step", "0.1", "min", "0.1", "max", "5"], ["for", "between400And600Pages"], ["type", "number", "id", "between400And600Pages", "formControlName", "between400And600Pages", "step", "0.1", "min", "0.1", "max", "5"], ["for", "over600Pages"], ["type", "number", "id", "over600Pages", "formControlName", "over600Pages", "step", "0.1", "min", "0.1", "max", "5"], ["for", "currentYear"], ["type", "number", "id", "currentYear", "formControlName", "currentYear", "step", "0.1", "min", "0.1", "max", "5"], ["for", "recentYears"], ["type", "number", "id", "recentYears", "formControlName", "recentYears", "step", "0.1", "min", "0.1", "max", "5"], ["for", "olderBooks"], ["type", "number", "id", "olderBooks", "formControlName", "olderBooks", "step", "0.1", "min", "0.1", "max", "5"], ["for", "famousAuthor"], ["type", "number", "id", "famousAuthor", "formControlName", "famousAuthor", "step", "0.1", "min", "0.1", "max", "5"], ["for", "knownAuthor"], ["type", "number", "id", "knownAuthor", "formControlName", "knownAuthor", "step", "0.1", "min", "0.1", "max", "5"], ["for", "unknownAuthor"], ["type", "number", "id", "unknownAuthor", "formControlName", "unknownAuthor", "step", "0.1", "min", "0.1", "max", "5"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_5_listener() {
        return ctx.exportSettings();
      });
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "\u{1F4E4}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Export Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 5)(10, "span", 4);
      \u0275\u0275text(11, "\u{1F4E5}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Import Settings ");
      \u0275\u0275elementStart(13, "input", 6);
      \u0275\u0275listener("change", function SettingsComponent_Template_input_change_13_listener($event) {
        return ctx.importSettings($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(14, SettingsComponent_div_14_Template, 2, 3, "div", 7);
      \u0275\u0275elementStart(15, "div", 8)(16, "nav", 9)(17, "button", 10);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_17_listener() {
        return ctx.setActiveTab("general");
      });
      \u0275\u0275elementStart(18, "span", 11);
      \u0275\u0275text(19, "\u2699\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " General ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 10);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_21_listener() {
        return ctx.setActiveTab("notifications");
      });
      \u0275\u0275elementStart(22, "span", 11);
      \u0275\u0275text(23, "\u{1F514}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Notifications ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 10);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_25_listener() {
        return ctx.setActiveTab("security");
      });
      \u0275\u0275elementStart(26, "span", 11);
      \u0275\u0275text(27, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Security ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 10);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_29_listener() {
        return ctx.setActiveTab("pricing");
      });
      \u0275\u0275elementStart(30, "span", 11);
      \u0275\u0275text(31, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Pricing ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, SettingsComponent_div_33_Template, 101, 51, "div", 12)(34, SettingsComponent_div_34_Template, 67, 5, "div", 12)(35, SettingsComponent_div_35_Template, 60, 18, "div", 12)(36, SettingsComponent_div_36_Template, 182, 57, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.saveMessage);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "general");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "notifications");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "security");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "pricing");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeTab === "general");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "notifications");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "security");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "pricing");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.settings[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1a202c;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.import-btn[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.message-bar[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  font-weight: 500;\n  background-color: #fed7d7;\n  color: #c53030;\n  border: 1px solid #fc8181;\n}\n.message-bar.success[_ngcontent-%COMP%] {\n  background-color: #f0fff4;\n  color: #38a169;\n  border-color: #68d391;\n}\n.settings-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.settings-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f7fafc;\n}\n.tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #718096;\n  transition: all 0.3s ease;\n  border-bottom: 3px solid transparent;\n}\n.tab-button[_ngcontent-%COMP%]:hover {\n  background-color: #edf2f7;\n  color: #4a5568;\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #667eea;\n  border-bottom-color: #667eea;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.settings-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  color: #1a202c;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e0;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 2rem;\n  border-top: 1px solid #e2e8f0;\n  margin-top: 2rem;\n}\n.notification-settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #f7fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.notification-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.notification-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.security-settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.security-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #f7fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.security-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.security-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n  cursor: pointer;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #cbd5e0;\n  border-radius: 24px;\n  transition: background-color 0.3s ease;\n}\n.toggle-slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background-color: #667eea;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(24px);\n}\n.toggle-switch[_ngcontent-%COMP%]:hover   .toggle-slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n@media (max-width: 1024px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .settings[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .settings-tabs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .tab-button[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0.75rem 1rem;\n  }\n  .settings-form[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .notification-item[_ngcontent-%COMP%], \n   .security-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    text-align: center;\n  }\n  .toggle-switch[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n}\n@media (max-width: 480px) {\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 1rem;\n    font-size: 0.8rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=settings.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="settings">\r
  <div class="page-header">\r
    <h1>Settings</h1>\r
    <div class="header-actions">\r
      <button class="btn btn-secondary" (click)="exportSettings()">\r
        <span class="btn-icon">\u{1F4E4}</span>\r
        Export Settings\r
      </button>\r
      <label class="btn btn-secondary import-btn">\r
        <span class="btn-icon">\u{1F4E5}</span>\r
        Import Settings\r
        <input type="file" accept=".json" (change)="importSettings($event)" hidden>\r
      </label>\r
    </div>\r
  </div>\r
\r
  <!-- Success/Error Message -->\r
  <div class="message-bar" *ngIf="saveMessage" [class.success]="!saveMessage.includes('Error')">\r
    {{ saveMessage }}\r
  </div>\r
\r
  <!-- Settings Tabs -->\r
  <div class="settings-container">\r
    <nav class="settings-tabs">\r
      <button \r
        class="tab-button" \r
        [class.active]="activeTab === 'general'"\r
        (click)="setActiveTab('general')">\r
        <span class="tab-icon">\u2699\uFE0F</span>\r
        General\r
      </button>\r
      <button \r
        class="tab-button" \r
        [class.active]="activeTab === 'notifications'"\r
        (click)="setActiveTab('notifications')">\r
        <span class="tab-icon">\u{1F514}</span>\r
        Notifications\r
      </button>\r
      <button \r
        class="tab-button" \r
        [class.active]="activeTab === 'security'"\r
        (click)="setActiveTab('security')">\r
        <span class="tab-icon">\u{1F512}</span>\r
        Security\r
      </button>\r
      <button \r
        class="tab-button" \r
        [class.active]="activeTab === 'pricing'"\r
        (click)="setActiveTab('pricing')">\r
        <span class="tab-icon">\u{1F4B0}</span>\r
        Pricing\r
      </button>\r
    </nav>\r
\r
    <!-- General Settings Tab -->\r
    <div class="tab-content" *ngIf="activeTab === 'general'">\r
      <form [formGroup]="generalForm" (ngSubmit)="saveGeneralSettings()" class="settings-form">\r
        <div class="form-section">\r
          <h3>Site Information</h3>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="siteName">Site Name *</label>\r
              <input \r
                type="text" \r
                id="siteName" \r
                formControlName="siteName" \r
                class="form-input"\r
                [class.error]="generalForm.get('siteName')?.invalid && generalForm.get('siteName')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'siteName')">\r
                {{ getFormFieldError(generalForm, 'siteName') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group full-width">\r
              <label for="siteDescription">Site Description *</label>\r
              <textarea \r
                id="siteDescription" \r
                formControlName="siteDescription" \r
                class="form-textarea"\r
                rows="3"\r
                [class.error]="generalForm.get('siteDescription')?.invalid && generalForm.get('siteDescription')?.touched"></textarea>\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'siteDescription')">\r
                {{ getFormFieldError(generalForm, 'siteDescription') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>Contact Information</h3>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="contactEmail">Contact Email *</label>\r
              <input \r
                type="email" \r
                id="contactEmail" \r
                formControlName="contactEmail" \r
                class="form-input"\r
                [class.error]="generalForm.get('contactEmail')?.invalid && generalForm.get('contactEmail')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'contactEmail')">\r
                {{ getFormFieldError(generalForm, 'contactEmail') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="supportEmail">Support Email *</label>\r
              <input \r
                type="email" \r
                id="supportEmail" \r
                formControlName="supportEmail" \r
                class="form-input"\r
                [class.error]="generalForm.get('supportEmail')?.invalid && generalForm.get('supportEmail')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'supportEmail')">\r
                {{ getFormFieldError(generalForm, 'supportEmail') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="phoneNumber">Phone Number *</label>\r
              <input \r
                type="tel" \r
                id="phoneNumber" \r
                formControlName="phoneNumber" \r
                class="form-input"\r
                [class.error]="generalForm.get('phoneNumber')?.invalid && generalForm.get('phoneNumber')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'phoneNumber')">\r
                {{ getFormFieldError(generalForm, 'phoneNumber') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="businessHours">Business Hours *</label>\r
              <input \r
                type="text" \r
                id="businessHours" \r
                formControlName="businessHours" \r
                class="form-input"\r
                placeholder="e.g., Mon-Fri: 9AM-6PM"\r
                [class.error]="generalForm.get('businessHours')?.invalid && generalForm.get('businessHours')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'businessHours')">\r
                {{ getFormFieldError(generalForm, 'businessHours') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group full-width">\r
              <label for="address">Address *</label>\r
              <textarea \r
                id="address" \r
                formControlName="address" \r
                class="form-textarea"\r
                rows="2"\r
                [class.error]="generalForm.get('address')?.invalid && generalForm.get('address')?.touched"></textarea>\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'address')">\r
                {{ getFormFieldError(generalForm, 'address') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>Social Media</h3>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="facebook">Facebook URL</label>\r
              <input \r
                type="url" \r
                id="facebook" \r
                formControlName="facebook" \r
                class="form-input"\r
                placeholder="https://facebook.com/yourpage"\r
                [class.error]="generalForm.get('facebook')?.invalid && generalForm.get('facebook')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'facebook')">\r
                {{ getFormFieldError(generalForm, 'facebook') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="twitter">Twitter URL</label>\r
              <input \r
                type="url" \r
                id="twitter" \r
                formControlName="twitter" \r
                class="form-input"\r
                placeholder="https://twitter.com/yourhandle"\r
                [class.error]="generalForm.get('twitter')?.invalid && generalForm.get('twitter')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'twitter')">\r
                {{ getFormFieldError(generalForm, 'twitter') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="instagram">Instagram URL</label>\r
              <input \r
                type="url" \r
                id="instagram" \r
                formControlName="instagram" \r
                class="form-input"\r
                placeholder="https://instagram.com/yourhandle"\r
                [class.error]="generalForm.get('instagram')?.invalid && generalForm.get('instagram')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'instagram')">\r
                {{ getFormFieldError(generalForm, 'instagram') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="linkedin">LinkedIn URL</label>\r
              <input \r
                type="url" \r
                id="linkedin" \r
                formControlName="linkedin" \r
                class="form-input"\r
                placeholder="https://linkedin.com/company/yourcompany"\r
                [class.error]="generalForm.get('linkedin')?.invalid && generalForm.get('linkedin')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'linkedin')">\r
                {{ getFormFieldError(generalForm, 'linkedin') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>Commerce Settings</h3>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="currency">Currency *</label>\r
              <select \r
                id="currency" \r
                formControlName="currency" \r
                class="form-input"\r
                [class.error]="generalForm.get('currency')?.invalid && generalForm.get('currency')?.touched">\r
                <option *ngFor="let currency of currencies" [value]="currency.code">\r
                  {{ currency.name }} ({{ currency.symbol }})\r
                </option>\r
              </select>\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'currency')">\r
                {{ getFormFieldError(generalForm, 'currency') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="taxRate">Tax Rate (%) *</label>\r
              <input \r
                type="number" \r
                id="taxRate" \r
                formControlName="taxRate" \r
                class="form-input"\r
                step="0.1"\r
                min="0"\r
                max="100"\r
                [class.error]="generalForm.get('taxRate')?.invalid && generalForm.get('taxRate')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'taxRate')">\r
                {{ getFormFieldError(generalForm, 'taxRate') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="shippingCost">Shipping Cost *</label>\r
              <input \r
                type="number" \r
                id="shippingCost" \r
                formControlName="shippingCost" \r
                class="form-input"\r
                step="0.01"\r
                min="0"\r
                [class.error]="generalForm.get('shippingCost')?.invalid && generalForm.get('shippingCost')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'shippingCost')">\r
                {{ getFormFieldError(generalForm, 'shippingCost') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="freeShippingThreshold">Free Shipping Threshold *</label>\r
              <input \r
                type="number" \r
                id="freeShippingThreshold" \r
                formControlName="freeShippingThreshold" \r
                class="form-input"\r
                step="0.01"\r
                min="0"\r
                [class.error]="generalForm.get('freeShippingThreshold')?.invalid && generalForm.get('freeShippingThreshold')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(generalForm, 'freeShippingThreshold')">\r
                {{ getFormFieldError(generalForm, 'freeShippingThreshold') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn btn-secondary" (click)="resetToDefaults()">\r
            Reset to Defaults\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="generalForm.invalid || loading">\r
            <span class="btn-icon" *ngIf="loading">\u23F3</span>\r
            <span class="btn-icon" *ngIf="!loading">\u{1F4BE}</span>\r
            {{ loading ? 'Saving...' : 'Save General Settings' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Notifications Settings Tab -->\r
    <div class="tab-content" *ngIf="activeTab === 'notifications'">\r
      <form [formGroup]="notificationForm" (ngSubmit)="saveNotificationSettings()" class="settings-form">\r
        <div class="form-section">\r
          <h3>Email Notifications</h3>\r
          <div class="notification-settings">\r
            <div class="notification-item">\r
              <div class="notification-info">\r
                <h4>Email Notifications</h4>\r
                <p>Enable email notifications for admin activities</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="emailNotifications">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
            \r
            <div class="notification-item">\r
              <div class="notification-info">\r
                <h4>Order Notifications</h4>\r
                <p>Receive notifications when new orders are placed</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="orderNotifications">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
            \r
            <div class="notification-item">\r
              <div class="notification-info">\r
                <h4>User Registration Notifications</h4>\r
                <p>Get notified when new users register</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="userRegistrationNotifications">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
            \r
            <div class="notification-item">\r
              <div class="notification-info">\r
                <h4>Low Stock Notifications</h4>\r
                <p>Alert when book inventory is running low</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="lowStockNotifications">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
            \r
            <div class="notification-item">\r
              <div class="notification-info">\r
                <h4>Review Notifications</h4>\r
                <p>Notifications for new book reviews</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="reviewNotifications">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
            \r
            <div class="notification-item">\r
              <div class="notification-info">\r
                <h4>Newsletter Enabled</h4>\r
                <p>Enable newsletter functionality for users</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="newsletterEnabled">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn btn-secondary" (click)="resetToDefaults()">\r
            Reset to Defaults\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="loading">\r
            <span class="btn-icon" *ngIf="loading">\u23F3</span>\r
            <span class="btn-icon" *ngIf="!loading">\u{1F4BE}</span>\r
            {{ loading ? 'Saving...' : 'Save Notification Settings' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Security Settings Tab -->\r
    <div class="tab-content" *ngIf="activeTab === 'security'">\r
      <form [formGroup]="securityForm" (ngSubmit)="saveSecuritySettings()" class="settings-form">\r
        <div class="form-section">\r
          <h3>Authentication Settings</h3>\r
          <div class="security-settings">\r
            <div class="security-item">\r
              <div class="security-info">\r
                <h4>Two-Factor Authentication</h4>\r
                <p>Require 2FA for admin accounts</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="twoFactorAuth">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="sessionTimeout">Session Timeout *</label>\r
              <select \r
                id="sessionTimeout" \r
                formControlName="sessionTimeout" \r
                class="form-input"\r
                [class.error]="securityForm.get('sessionTimeout')?.invalid && securityForm.get('sessionTimeout')?.touched">\r
                <option *ngFor="let timeout of sessionTimeouts" [value]="timeout.value">\r
                  {{ timeout.label }}\r
                </option>\r
              </select>\r
              <span class="error-message" *ngIf="getFormFieldError(securityForm, 'sessionTimeout')">\r
                {{ getFormFieldError(securityForm, 'sessionTimeout') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>Password Policy</h3>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="passwordMinLength">Minimum Password Length *</label>\r
              <input \r
                type="number" \r
                id="passwordMinLength" \r
                formControlName="passwordMinLength" \r
                class="form-input"\r
                min="6"\r
                max="20"\r
                [class.error]="securityForm.get('passwordMinLength')?.invalid && securityForm.get('passwordMinLength')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(securityForm, 'passwordMinLength')">\r
                {{ getFormFieldError(securityForm, 'passwordMinLength') }}\r
              </span>\r
            </div>\r
            \r
            <div class="security-item">\r
              <div class="security-info">\r
                <h4>Require Special Characters</h4>\r
                <p>Passwords must contain special characters</p>\r
              </div>\r
              <label class="toggle-switch">\r
                <input type="checkbox" formControlName="requireSpecialChars">\r
                <span class="toggle-slider"></span>\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>Account Security</h3>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="maxLoginAttempts">Max Login Attempts *</label>\r
              <input \r
                type="number" \r
                id="maxLoginAttempts" \r
                formControlName="maxLoginAttempts" \r
                class="form-input"\r
                min="3"\r
                max="10"\r
                [class.error]="securityForm.get('maxLoginAttempts')?.invalid && securityForm.get('maxLoginAttempts')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(securityForm, 'maxLoginAttempts')">\r
                {{ getFormFieldError(securityForm, 'maxLoginAttempts') }}\r
              </span>\r
            </div>\r
            \r
            <div class="form-group">\r
              <label for="accountLockoutDuration">Account Lockout Duration (minutes) *</label>\r
              <input \r
                type="number" \r
                id="accountLockoutDuration" \r
                formControlName="accountLockoutDuration" \r
                class="form-input"\r
                min="5"\r
                max="60"\r
                [class.error]="securityForm.get('accountLockoutDuration')?.invalid && securityForm.get('accountLockoutDuration')?.touched">\r
              <span class="error-message" *ngIf="getFormFieldError(securityForm, 'accountLockoutDuration')">\r
                {{ getFormFieldError(securityForm, 'accountLockoutDuration') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn btn-secondary" (click)="resetToDefaults()">\r
            Reset to Defaults\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="securityForm.invalid || loading">\r
            <span class="btn-icon" *ngIf="loading">\u23F3</span>\r
            <span class="btn-icon" *ngIf="!loading">\u{1F4BE}</span>\r
            {{ loading ? 'Saving...' : 'Save Security Settings' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Pricing Settings Tab -->\r
    <div class="tab-content" *ngIf="activeTab === 'pricing'">\r
      <form [formGroup]="pricingForm" (ngSubmit)="savePricingSettings()" class="settings-form">\r
        <div class="form-section">\r
          <h3>\u{1F4DA} Base Prices by Category</h3>\r
          <p>Set the base price for each book category (in USD)</p>\r
          \r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="fiction">Fiction</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="fiction" \r
                  formControlName="fiction"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('fiction')?.invalid && pricingForm.get('fiction')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="programming">Programming</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="programming" \r
                  formControlName="programming"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('programming')?.invalid && pricingForm.get('programming')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="science">Science</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="science" \r
                  formControlName="science"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('science')?.invalid && pricingForm.get('science')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="history">History</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="history" \r
                  formControlName="history"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('history')?.invalid && pricingForm.get('history')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="biography">Biography</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="biography" \r
                  formControlName="biography"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('biography')?.invalid && pricingForm.get('biography')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="business">Business</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="business" \r
                  formControlName="business"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('business')?.invalid && pricingForm.get('business')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="philosophy">Philosophy</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="philosophy" \r
                  formControlName="philosophy"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('philosophy')?.invalid && pricingForm.get('philosophy')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="psychology">Psychology</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="psychology" \r
                  formControlName="psychology"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('psychology')?.invalid && pricingForm.get('psychology')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="art">Art</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="art" \r
                  formControlName="art"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('art')?.invalid && pricingForm.get('art')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="health">Health</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="health" \r
                  formControlName="health"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('health')?.invalid && pricingForm.get('health')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="education">Education</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="education" \r
                  formControlName="education"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('education')?.invalid && pricingForm.get('education')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="religion">Religion</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="religion" \r
                  formControlName="religion"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('religion')?.invalid && pricingForm.get('religion')?.touched">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="general">General</label>\r
              <div class="input-group">\r
                <span class="input-prefix">$</span>\r
                <input \r
                  type="number" \r
                  id="general" \r
                  formControlName="general"\r
                  step="0.01"\r
                  min="0"\r
                  [class.error]="pricingForm.get('general')?.invalid && pricingForm.get('general')?.touched">\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>\u2B50 Price Modifiers</h3>\r
          <p>Multipliers applied to base prices (1.0 = no change, 1.5 = 50% increase, 0.8 = 20% decrease)</p>\r
          \r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="bestsellerModifier">Bestseller Multiplier</label>\r
              <input \r
                type="number" \r
                id="bestsellerModifier" \r
                formControlName="bestsellerModifier"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('bestsellerModifier')?.invalid && pricingForm.get('bestsellerModifier')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="featuredModifier">Featured Book Multiplier</label>\r
              <input \r
                type="number" \r
                id="featuredModifier" \r
                formControlName="featuredModifier"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('featuredModifier')?.invalid && pricingForm.get('featuredModifier')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="newBookModifier">New Release Multiplier</label>\r
              <input \r
                type="number" \r
                id="newBookModifier" \r
                formControlName="newBookModifier"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('newBookModifier')?.invalid && pricingForm.get('newBookModifier')?.touched">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>\u{1F4C4} Page Count Modifiers</h3>\r
          <p>Price adjustments based on book length</p>\r
          \r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="under200Pages">Under 200 pages</label>\r
              <input \r
                type="number" \r
                id="under200Pages" \r
                formControlName="under200Pages"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('under200Pages')?.invalid && pricingForm.get('under200Pages')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="between200And400Pages">200-400 pages</label>\r
              <input \r
                type="number" \r
                id="between200And400Pages" \r
                formControlName="between200And400Pages"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('between200And400Pages')?.invalid && pricingForm.get('between200And400Pages')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="between400And600Pages">400-600 pages</label>\r
              <input \r
                type="number" \r
                id="between400And600Pages" \r
                formControlName="between400And600Pages"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('between400And600Pages')?.invalid && pricingForm.get('between400And600Pages')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="over600Pages">Over 600 pages</label>\r
              <input \r
                type="number" \r
                id="over600Pages" \r
                formControlName="over600Pages"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('over600Pages')?.invalid && pricingForm.get('over600Pages')?.touched">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>\u{1F4C5} Publication Date Modifiers</h3>\r
          <p>Price adjustments based on when the book was published</p>\r
          \r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="currentYear">Current Year (2025)</label>\r
              <input \r
                type="number" \r
                id="currentYear" \r
                formControlName="currentYear"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('currentYear')?.invalid && pricingForm.get('currentYear')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="recentYears">Recent (Last 3 years)</label>\r
              <input \r
                type="number" \r
                id="recentYears" \r
                formControlName="recentYears"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('recentYears')?.invalid && pricingForm.get('recentYears')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="olderBooks">Older Books (3+ years)</label>\r
              <input \r
                type="number" \r
                id="olderBooks" \r
                formControlName="olderBooks"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('olderBooks')?.invalid && pricingForm.get('olderBooks')?.touched">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-section">\r
          <h3>\u{1F464} Author Popularity Modifiers</h3>\r
          <p>Price adjustments based on author recognition</p>\r
          \r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label for="famousAuthor">Famous Authors</label>\r
              <input \r
                type="number" \r
                id="famousAuthor" \r
                formControlName="famousAuthor"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('famousAuthor')?.invalid && pricingForm.get('famousAuthor')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="knownAuthor">Known Authors</label>\r
              <input \r
                type="number" \r
                id="knownAuthor" \r
                formControlName="knownAuthor"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('knownAuthor')?.invalid && pricingForm.get('knownAuthor')?.touched">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="unknownAuthor">Unknown Authors</label>\r
              <input \r
                type="number" \r
                id="unknownAuthor" \r
                formControlName="unknownAuthor"\r
                step="0.1"\r
                min="0.1"\r
                max="5"\r
                [class.error]="pricingForm.get('unknownAuthor')?.invalid && pricingForm.get('unknownAuthor')?.touched">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn btn-secondary" (click)="resetToDefaults()">\r
            Reset to Defaults\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="pricingForm.invalid || loading">\r
            <span class="btn-icon" *ngIf="loading">\u23F3</span>\r
            <span class="btn-icon" *ngIf="!loading">\u{1F4BE}</span>\r
            {{ loading ? 'Saving...' : 'Save Pricing Settings' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/admin/settings/settings.scss */\n.settings {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.page-header h1 {\n  margin: 0;\n  color: #1a202c;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.header-actions {\n  display: flex;\n  gap: 1rem;\n}\n.import-btn {\n  position: relative;\n  cursor: pointer;\n}\n.message-bar {\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  font-weight: 500;\n  background-color: #fed7d7;\n  color: #c53030;\n  border: 1px solid #fc8181;\n}\n.message-bar.success {\n  background-color: #f0fff4;\n  color: #38a169;\n  border-color: #68d391;\n}\n.settings-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.settings-tabs {\n  display: flex;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f7fafc;\n}\n.tab-button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #718096;\n  transition: all 0.3s ease;\n  border-bottom: 3px solid transparent;\n}\n.tab-button:hover {\n  background-color: #edf2f7;\n  color: #4a5568;\n}\n.tab-button.active {\n  background-color: white;\n  color: #667eea;\n  border-bottom-color: #667eea;\n}\n.tab-icon {\n  font-size: 1rem;\n}\n.tab-content {\n  padding: 0;\n}\n.settings-form {\n  padding: 2rem;\n}\n.form-section {\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.form-section:last-of-type {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.form-section h3 {\n  margin: 0 0 1.5rem 0;\n  color: #1a202c;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width {\n  grid-column: 1/-1;\n}\n.form-group label {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.875rem;\n}\n.form-input,\n.form-textarea {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.3s ease;\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-input.error,\n.form-textarea.error {\n  border-color: #e53e3e;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #e53e3e;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.btn-secondary {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.btn-secondary:hover {\n  background: #cbd5e0;\n}\n.btn-icon {\n  font-size: 1rem;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 2rem;\n  border-top: 1px solid #e2e8f0;\n  margin-top: 2rem;\n}\n.notification-settings {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.notification-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #f7fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.notification-info h4 {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.notification-info p {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.security-settings {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.security-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #f7fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.security-info h4 {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1a202c;\n}\n.security-info p {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #718096;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n  cursor: pointer;\n}\n.toggle-switch input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #cbd5e0;\n  border-radius: 24px;\n  transition: background-color 0.3s ease;\n}\n.toggle-slider:before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.toggle-switch input:checked + .toggle-slider {\n  background-color: #667eea;\n}\n.toggle-switch input:checked + .toggle-slider:before {\n  transform: translateX(24px);\n}\n.toggle-switch:hover .toggle-slider {\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n@media (max-width: 1024px) {\n  .form-grid {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .settings {\n    padding: 1rem;\n  }\n  .page-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .header-actions {\n    justify-content: center;\n  }\n  .settings-tabs {\n    flex-direction: column;\n  }\n  .tab-button {\n    justify-content: center;\n    padding: 0.75rem 1rem;\n  }\n  .settings-form {\n    padding: 1rem;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .notification-item,\n  .security-item {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    text-align: center;\n  }\n  .toggle-switch {\n    align-self: center;\n  }\n}\n@media (max-width: 480px) {\n  .page-header h1 {\n    font-size: 1.5rem;\n  }\n  .btn {\n    padding: 0.625rem 1rem;\n    font-size: 0.8rem;\n  }\n  .header-actions {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=settings.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: PricingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/admin/settings/settings.ts", lineNumber: 51 });
})();

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: AdminDashboardComponent
      },
      {
        path: "books",
        component: BookManagementComponent
      },
      {
        path: "users",
        component: UserManagementComponent
      },
      {
        path: "analytics",
        component: AnalyticsComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  }
];

// src/app/core/guards/admin.guard.ts
var AdminGuard = class _AdminGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    return this.authService.currentUserProfile$.pipe(take(1), map((profile) => {
      if (profile?.role === "admin") {
        return true;
      } else {
        this.router.navigate(["/"]);
        return false;
      }
    }));
  }
  static \u0275fac = function AdminGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminGuard, factory: _AdminGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/features/admin-setup/admin-setup.ts
function AdminSetupComponent_div_6_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AdminSetupComponent_div_6_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.promoteToAdmin());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Promoting..." : "Promote to Admin", " ");
  }
}
function AdminSetupComponent_div_6_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function AdminSetupComponent_div_6_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateToAdmin());
    });
    \u0275\u0275text(1, " Go to Admin Panel ");
    \u0275\u0275elementEnd();
  }
}
function AdminSetupComponent_div_6_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function AdminSetupComponent_div_6_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.demoteFromAdmin());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Demoting..." : "Demote from Admin", " ");
  }
}
function AdminSetupComponent_div_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.messageClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
  }
}
function AdminSetupComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p")(2, "strong");
    \u0275\u0275text(3, "Current User:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Current Role:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275template(10, AdminSetupComponent_div_6_button_10_Template, 2, 2, "button", 6)(11, AdminSetupComponent_div_6_button_11_Template, 2, 0, "button", 7)(12, AdminSetupComponent_div_6_button_12_Template, 2, 2, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminSetupComponent_div_6_div_13_Template, 2, 3, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentUser.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isAdmin ? "Admin" : "User");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.message);
  }
}
function AdminSetupComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Please log in first to use this utility.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 13);
    \u0275\u0275listener("click", function AdminSetupComponent_ng_template_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToLogin());
    });
    \u0275\u0275text(3, "Go to Login");
    \u0275\u0275elementEnd();
  }
}
var AdminSetupComponent = class _AdminSetupComponent {
  authService;
  router;
  currentUser = null;
  isAdmin = false;
  loading = false;
  message = "";
  messageClass = "";
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    this.authService.currentUserProfile$.subscribe((profile) => {
      this.isAdmin = profile?.role === "admin";
    });
  }
  promoteToAdmin() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      this.loading = true;
      this.message = "";
      try {
        yield this.authService.promoteToAdmin(this.currentUser.uid);
        this.message = "Successfully promoted to admin!";
        this.messageClass = "success-message";
      } catch (error) {
        this.message = "Failed to promote to admin. Please try again.";
        this.messageClass = "error-message";
        console.error("Promotion error:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  demoteFromAdmin() {
    return __async(this, null, function* () {
      if (!this.currentUser)
        return;
      this.loading = true;
      this.message = "";
      try {
        yield this.authService.demoteFromAdmin(this.currentUser.uid);
        this.message = "Successfully demoted from admin.";
        this.messageClass = "success-message";
      } catch (error) {
        this.message = "Failed to demote from admin. Please try again.";
        this.messageClass = "error-message";
        console.error("Demotion error:", error);
      } finally {
        this.loading = false;
      }
    });
  }
  navigateToAdmin() {
    this.router.navigate(["/admin"]);
  }
  navigateToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function AdminSetupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSetupComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSetupComponent, selectors: [["app-admin-setup"]], decls: 14, vars: 2, consts: [["notLoggedIn", ""], [1, "admin-setup-container"], [1, "admin-setup-card"], [4, "ngIf", "ngIfElse"], [1, "warning"], [1, "actions"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-warning", 3, "disabled", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-warning", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click"]], template: function AdminSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
      \u0275\u0275text(3, "\u{1F527} Admin Setup (Development Only)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "This is a development utility to promote users to admin role.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, AdminSetupComponent_div_6_Template, 14, 6, "div", 3)(7, AdminSetupComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275text(10, " \u26A0\uFE0F ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "Warning:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " This component should only be used in development. Remove it before production deployment. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const notLoggedIn_r6 = \u0275\u0275reference(8);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.currentUser)("ngIfElse", notLoggedIn_r6);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.admin-setup-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.admin-setup-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n  width: 100%;\n  text-align: center;\n}\nh2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\np[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 1rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 2rem 0;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  display: inline-block;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a67d8;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #48bb78;\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #38a169;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #ed8936;\n  color: white;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dd6b20;\n}\n.warning[_ngcontent-%COMP%] {\n  background: #fed7d7;\n  border: 1px solid #feb2b2;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-top: 2rem;\n  color: #c53030;\n  font-size: 0.9rem;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #c6f6d5;\n  border: 1px solid #9ae6b4;\n  color: #276749;\n  padding: 0.75rem;\n  border-radius: 6px;\n  margin-top: 1rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fed7d7;\n  border: 1px solid #feb2b2;\n  color: #c53030;\n  padding: 0.75rem;\n  border-radius: 6px;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=admin-setup.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSetupComponent, [{
    type: Component,
    args: [{ selector: "app-admin-setup", standalone: true, imports: [CommonModule], template: `
    <div class="admin-setup-container">
      <div class="admin-setup-card">
        <h2>\u{1F527} Admin Setup (Development Only)</h2>
        <p>This is a development utility to promote users to admin role.</p>
        
        <div *ngIf="currentUser; else notLoggedIn">
          <p><strong>Current User:</strong> {{ currentUser.email }}</p>
          <p><strong>Current Role:</strong> {{ isAdmin ? 'Admin' : 'User' }}</p>
          
          <div class="actions">
            <button 
              *ngIf="!isAdmin" 
              (click)="promoteToAdmin()" 
              [disabled]="loading"
              class="btn btn-primary">
              {{ loading ? 'Promoting...' : 'Promote to Admin' }}
            </button>
            
            <button 
              *ngIf="isAdmin" 
              (click)="navigateToAdmin()"
              class="btn btn-success">
              Go to Admin Panel
            </button>
            
            <button 
              *ngIf="isAdmin" 
              (click)="demoteFromAdmin()" 
              [disabled]="loading"
              class="btn btn-warning">
              {{ loading ? 'Demoting...' : 'Demote from Admin' }}
            </button>
          </div>
          
          <div *ngIf="message" [class]="messageClass">
            {{ message }}
          </div>
        </div>
        
        <ng-template #notLoggedIn>
          <p>Please log in first to use this utility.</p>
          <button (click)="navigateToLogin()" class="btn btn-primary">Go to Login</button>
        </ng-template>
        
        <div class="warning">
          \u26A0\uFE0F <strong>Warning:</strong> This component should only be used in development. 
          Remove it before production deployment.
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;993d799ec147e1bee14d1ddeb2d2692424cfefb786fd85cbefdbf44fa354ea9f;C:/Users/egeer/OneDrive/Masa\xFCst\xFC/ANGULAR/Readify/src/app/features/admin-setup/admin-setup.ts */\n.admin-setup-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.admin-setup-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n  width: 100%;\n  text-align: center;\n}\nh2 {\n  color: #333;\n  margin-bottom: 1rem;\n}\np {\n  color: #666;\n  margin-bottom: 1rem;\n}\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 2rem 0;\n}\n.btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  display: inline-block;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #667eea;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #5a67d8;\n}\n.btn-success {\n  background: #48bb78;\n  color: white;\n}\n.btn-success:hover {\n  background: #38a169;\n}\n.btn-warning {\n  background: #ed8936;\n  color: white;\n}\n.btn-warning:hover:not(:disabled) {\n  background: #dd6b20;\n}\n.warning {\n  background: #fed7d7;\n  border: 1px solid #feb2b2;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-top: 2rem;\n  color: #c53030;\n  font-size: 0.9rem;\n}\n.success-message {\n  background: #c6f6d5;\n  border: 1px solid #9ae6b4;\n  color: #276749;\n  padding: 0.75rem;\n  border-radius: 6px;\n  margin-top: 1rem;\n}\n.error-message {\n  background: #fed7d7;\n  border: 1px solid #feb2b2;\n  color: #c53030;\n  padding: 0.75rem;\n  border-radius: 6px;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=admin-setup.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSetupComponent, { className: "AdminSetupComponent", filePath: "src/app/features/admin-setup/admin-setup.ts", lineNumber: 171 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  { path: "books/:id", loadComponent: () => import("./chunk-X2UCRHSP.js").then((m) => m.BookDetailComponent) },
  { path: "search", loadComponent: () => import("./chunk-7VWWHCPN.js").then((m) => m.OpenLibrarySearchComponent) },
  { path: "admin-setup", component: AdminSetupComponent },
  // Development only - remove in production
  {
    path: "admin",
    children: adminRoutes,
    canActivate: [AdminGuard]
  },
  { path: "**", redirectTo: "" }
  // Wildcard route for 404 page
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
};

// src/app/shared/currency-selector/currency-selector.ts
function CurrencySelectorComponent_div_9_button_1_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function CurrencySelectorComponent_div_9_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function CurrencySelectorComponent_div_9_button_1_Template_button_click_0_listener() {
      const currency_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCurrency(currency_r2.code));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11)(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, CurrencySelectorComponent_div_9_button_1_i_8_Template, 1, 0, "i", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", currency_r2.code === ctx_r2.currentCurrency.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currency_r2.symbol);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(currency_r2.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currency_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", currency_r2.code === ctx_r2.currentCurrency.code);
  }
}
function CurrencySelectorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, CurrencySelectorComponent_div_9_button_1_Template, 9, 6, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.currencies);
  }
}
var CurrencySelectorComponent = class _CurrencySelectorComponent {
  pricingService;
  currencies = [];
  currentCurrency = { code: "USD", symbol: "$", name: "US Dollar", rate: 1 };
  isOpen = false;
  subscription = new Subscription();
  constructor(pricingService) {
    this.pricingService = pricingService;
  }
  ngOnInit() {
    this.currencies = this.pricingService.getCurrencies();
    this.subscription.add(this.pricingService.currency$.subscribe((currency) => {
      this.currentCurrency = currency;
    }));
    document.addEventListener("click", this.closeDropdown.bind(this));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    document.removeEventListener("click", this.closeDropdown.bind(this));
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  selectCurrency(currencyCode) {
    this.pricingService.setCurrency(currencyCode);
    this.isOpen = false;
  }
  closeDropdown(event) {
    const target = event.target;
    if (!target.closest(".currency-selector")) {
      this.isOpen = false;
    }
  }
  static \u0275fac = function CurrencySelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencySelectorComponent)(\u0275\u0275directiveInject(PricingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencySelectorComponent, selectors: [["app-currency-selector"]], decls: 10, vars: 7, consts: [[1, "currency-selector"], [1, "currency-dropdown"], [1, "currency-toggle", 3, "click"], [1, "fas", "fa-coins", 2, "color", "#ffd700", "margin-right", "4px"], [1, "currency-symbol"], [1, "currency-code"], [1, "fas", "fa-chevron-down"], ["class", "currency-options", 4, "ngIf"], [1, "currency-options"], ["class", "currency-option", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "currency-option", 3, "click"], [1, "currency-info"], [1, "currency-name"], ["class", "fas fa-check", 4, "ngIf"], [1, "fas", "fa-check"]], template: function CurrencySelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function CurrencySelectorComponent_Template_button_click_2_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, CurrencySelectorComponent_div_9_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentCurrency.symbol);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentCurrency.code);
      \u0275\u0275advance();
      \u0275\u0275classProp("rotated", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.currency-selector[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1000;\n}\n.currency-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.currency-toggle[_ngcontent-%COMP%] {\n  background: #667eea;\n  border: 1px solid #5a67d8;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.currency-toggle[_ngcontent-%COMP%]:hover {\n  background: #5a67d8;\n  border-color: #4c51bf;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.currency-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.currency-toggle[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: #ffd700;\n}\n.currency-toggle[_ngcontent-%COMP%]   .currency-code[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.95;\n}\n.currency-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  transition: transform 0.3s ease;\n}\n.currency-toggle[_ngcontent-%COMP%]   i.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.currency-options[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  overflow: hidden;\n  margin-top: 8px;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease;\n  z-index: 1001;\n}\n.currency-option[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: background-color 0.2s ease;\n  color: #333;\n}\n.currency-option[_ngcontent-%COMP%]:hover {\n  background: #f7fafc;\n  color: #667eea;\n}\n.currency-option.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n}\n.currency-option.active[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.currency-option.active[_ngcontent-%COMP%]   .currency-code[_ngcontent-%COMP%], \n.currency-option.active[_ngcontent-%COMP%]   .currency-name[_ngcontent-%COMP%] {\n  color: white;\n}\n.currency-option[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n  width: 20px;\n  text-align: center;\n}\n.currency-option[_ngcontent-%COMP%]   .currency-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n}\n.currency-option[_ngcontent-%COMP%]   .currency-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.currency-option[_ngcontent-%COMP%]   .currency-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n}\n.currency-option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 0.9rem;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.header[_nghost-%COMP%]   .currency-toggle[_ngcontent-%COMP%], .header   [_nghost-%COMP%]   .currency-toggle[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #333;\n}\n.header[_nghost-%COMP%]   .currency-toggle[_ngcontent-%COMP%]:hover, .header   [_nghost-%COMP%]   .currency-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=currency-selector.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencySelectorComponent, [{
    type: Component,
    args: [{ selector: "app-currency-selector", standalone: true, imports: [CommonModule], template: `
    <div class="currency-selector">
      <div class="currency-dropdown" [class.open]="isOpen">
        <button class="currency-toggle" (click)="toggleDropdown()">
          <i class="fas fa-coins" style="color: #ffd700; margin-right: 4px;"></i>
          <span class="currency-symbol">{{ currentCurrency.symbol }}</span>
          <span class="currency-code">{{ currentCurrency.code }}</span>
          <i class="fas fa-chevron-down" [class.rotated]="isOpen"></i>
        </button>
        
        <div class="currency-options" *ngIf="isOpen">
          <button 
            *ngFor="let currency of currencies" 
            class="currency-option"
            [class.active]="currency.code === currentCurrency.code"
            (click)="selectCurrency(currency.code)"
          >
            <span class="currency-symbol">{{ currency.symbol }}</span>
            <span class="currency-info">
              <span class="currency-code">{{ currency.code }}</span>
              <span class="currency-name">{{ currency.name }}</span>
            </span>
            <i *ngIf="currency.code === currentCurrency.code" class="fas fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;a33fa3eb8b03371a078b0d70ff12090e12c4ccdd1976d54d572b82ebc8bfca3d;C:/Users/egeer/OneDrive/Masa\xFCst\xFC/ANGULAR/Readify/src/app/shared/currency-selector/currency-selector.ts */\n.currency-selector {\n  position: relative;\n  z-index: 1000;\n}\n.currency-dropdown {\n  position: relative;\n}\n.currency-toggle {\n  background: #667eea;\n  border: 1px solid #5a67d8;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.currency-toggle:hover {\n  background: #5a67d8;\n  border-color: #4c51bf;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.currency-toggle:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.currency-toggle .currency-symbol {\n  font-weight: 600;\n  font-size: 1rem;\n  color: #ffd700;\n}\n.currency-toggle .currency-code {\n  font-size: 0.8rem;\n  opacity: 0.95;\n}\n.currency-toggle i {\n  font-size: 0.7rem;\n  transition: transform 0.3s ease;\n}\n.currency-toggle i.rotated {\n  transform: rotate(180deg);\n}\n.currency-options {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  overflow: hidden;\n  margin-top: 8px;\n  animation: slideDown 0.2s ease;\n  z-index: 1001;\n}\n.currency-option {\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: background-color 0.2s ease;\n  color: #333;\n}\n.currency-option:hover {\n  background: #f7fafc;\n  color: #667eea;\n}\n.currency-option.active {\n  background: #667eea;\n  color: white;\n}\n.currency-option.active .currency-symbol {\n  color: #ffd700;\n}\n.currency-option.active .currency-code,\n.currency-option.active .currency-name {\n  color: white;\n}\n.currency-option .currency-symbol {\n  font-weight: 600;\n  font-size: 1.1rem;\n  width: 20px;\n  text-align: center;\n}\n.currency-option .currency-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n}\n.currency-option .currency-code {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.currency-option .currency-name {\n  font-size: 0.8rem;\n  color: #666;\n}\n.currency-option i {\n  color: #4caf50;\n  font-size: 0.9rem;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n:host-context(.header) .currency-toggle {\n  background: rgba(0, 0, 0, 0.1);\n  border-color: rgba(0, 0, 0, 0.2);\n  color: #333;\n}\n:host-context(.header) .currency-toggle:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=currency-selector.css.map */\n"] }]
  }], () => [{ type: PricingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencySelectorComponent, { className: "CurrencySelectorComponent", filePath: "src/app/shared/currency-selector/currency-selector.ts", lineNumber: 194 });
})();

// src/app/shared/header/header.ts
function Header_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.cartItemCount$));
  }
}
function Header_div_36_button_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275text(1, " \u{1F527} Admin Panel ");
    \u0275\u0275elementEnd();
  }
}
function Header_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "button", 26);
    \u0275\u0275text(6, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275text(8, "My Books");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 26);
    \u0275\u0275text(10, "Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, Header_div_36_button_11_Template, 2, 0, "button", 27);
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275listener("click", function Header_div_36_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signOut());
    });
    \u0275\u0275text(13, "Sign Out");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F464} ", ctx_r1.currentUser.displayName || ctx_r1.currentUser.email);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin());
  }
}
function Header_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
var Header = class _Header {
  router;
  authService;
  cartService;
  platformId;
  isMenuOpen = false;
  activeSection = "home";
  currentUser = null;
  currentUserProfile = null;
  cartItemCount$;
  routerSubscription;
  authSubscription;
  profileSubscription;
  constructor(router, authService, cartService, platformId) {
    this.router = router;
    this.authService = authService;
    this.cartService = cartService;
    this.platformId = platformId;
    this.cartItemCount$ = this.cartService.cart$.pipe(
      filter(() => isPlatformBrowser(this.platformId)),
      // Convert cart items to total count
      map((cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0))
    );
  }
  ngOnInit() {
    this.routerSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.checkCurrentRoute();
    });
    this.authSubscription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    this.profileSubscription = this.authService.currentUserProfile$.subscribe((profile) => {
      this.currentUserProfile = profile;
    });
    this.checkCurrentRoute();
  }
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId) || this.router.url !== "/") {
      return;
    }
    const sections = ["home", "categories", "featured", "bestsellers", "new-arrivals"];
    const scrollPosition = window.pageYOffset + 100;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection = sections[i];
        break;
      }
    }
  }
  checkCurrentRoute() {
    if (this.router.url === "/") {
      setTimeout(() => {
        this.onWindowScroll();
      }, 100);
    } else {
      this.activeSection = "";
    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  scrollToSection(sectionId, event) {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (this.router.url !== "/") {
      this.router.navigate(["/"]).then(() => {
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 100);
      });
    } else {
      this.performScroll(sectionId);
    }
    this.isMenuOpen = false;
  }
  signOut() {
    return __async(this, null, function* () {
      try {
        yield this.authService.signOut();
        this.router.navigate(["/"]);
      } catch (error) {
        console.error("Sign out error:", error);
      }
    });
  }
  isAdmin() {
    return this.currentUserProfile?.role === "admin";
  }
  performScroll(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      this.activeSection = sectionId;
    }
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], hostBindings: function Header_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function Header_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 43, vars: 23, consts: [["loginButton", ""], [1, "main-header"], [1, "container"], [1, "header-content"], [1, "logo"], ["routerLink", "/"], [1, "main-nav"], ["href", "#home", 3, "click"], ["href", "#categories", 3, "click"], ["href", "#featured", 3, "click"], ["href", "#bestsellers", 3, "click"], ["href", "#new-arrivals", 3, "click"], [1, "user-actions"], ["routerLink", "/search", 1, "search-btn"], [1, "search-icon"], ["routerLink", "/cart", 1, "cart-btn"], [1, "cart-icon"], ["class", "cart-count", 4, "ngIf"], [1, "sync-indicator", 3, "title"], ["class", "user-menu", 4, "ngIf", "ngIfElse"], [1, "mobile-menu-toggle", 3, "click"], [1, "cart-count"], [1, "user-menu"], [1, "user-info"], [1, "user-name"], [1, "user-dropdown"], [1, "dropdown-item"], ["class", "dropdown-item admin-link", "routerLink", "/admin", 4, "ngIf"], [1, "dropdown-item", "logout-btn", 3, "click"], ["routerLink", "/admin", 1, "dropdown-item", "admin-link"], ["routerLink", "/login", 1, "login-btn"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "header", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5)(5, "h1");
      \u0275\u0275text(6, "\u{1F4DA} Readify");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "nav", 6)(8, "ul")(9, "li")(10, "a", 7);
      \u0275\u0275listener("click", function Header_Template_a_click_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToSection("home", $event));
      });
      \u0275\u0275text(11, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 8);
      \u0275\u0275listener("click", function Header_Template_a_click_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToSection("categories", $event));
      });
      \u0275\u0275text(14, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 9);
      \u0275\u0275listener("click", function Header_Template_a_click_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToSection("featured", $event));
      });
      \u0275\u0275text(17, "Featured");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 10);
      \u0275\u0275listener("click", function Header_Template_a_click_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToSection("bestsellers", $event));
      });
      \u0275\u0275text(20, "Bestsellers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 11);
      \u0275\u0275listener("click", function Header_Template_a_click_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToSection("new-arrivals", $event));
      });
      \u0275\u0275text(23, "New Arrivals");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 12);
      \u0275\u0275element(25, "app-currency-selector");
      \u0275\u0275elementStart(26, "button", 13)(27, "span", 14);
      \u0275\u0275text(28, "\u{1F50D}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 15)(30, "span", 16);
      \u0275\u0275text(31, "\u{1F6D2}");
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, Header_span_32_Template, 3, 3, "span", 17);
      \u0275\u0275pipe(33, "async");
      \u0275\u0275elementStart(34, "span", 18);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, Header_div_36_Template, 14, 2, "div", 19)(37, Header_ng_template_37_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 20);
      \u0275\u0275listener("click", function Header_Template_button_click_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleMenu());
      });
      \u0275\u0275element(40, "span")(41, "span")(42, "span");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const loginButton_r4 = \u0275\u0275reference(38);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.isMenuOpen);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeSection === "home");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeSection === "categories");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeSection === "featured");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeSection === "bestsellers");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeSection === "new-arrivals");
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(33, 21, ctx.cartItemCount$) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("synced", ctx.currentUser)("local", !ctx.currentUser);
      \u0275\u0275property("title", ctx.currentUser ? "Cart synced with your account" : "Cart saved locally only");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.currentUser ? "\u2601\uFE0F" : "\u{1F4BE}", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentUser)("ngIfElse", loginButton_r4);
    }
  }, dependencies: [CommonModule, NgIf, AsyncPipe, RouterModule, RouterLink, CurrencySelectorComponent], styles: ['\n\n.main-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.main-header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  position: relative;\n}\n.main-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.main-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n}\n.main-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #667eea;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 30px;\n}\n.main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  font-weight: 500;\n  font-size: 1rem;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  position: relative;\n  white-space: nowrap;\n}\n.main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.1);\n}\n.main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.15);\n  font-weight: 600;\n}\n.main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20px;\n  height: 2px;\n  background: #667eea;\n  border-radius: 1px;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  min-width: 200px;\n  justify-content: flex-end;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   app-currency-selector[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%], \n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover, \n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%]   .cart-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b,\n      #e74c3c);\n  color: white;\n  border-radius: 50%;\n  min-width: 20px;\n  height: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%]   .sync-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  left: -3px;\n  font-size: 0.6rem;\n  background: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%]   .sync-indicator.synced[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4ecdc4,\n      #44a08d);\n  color: white;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%]   .sync-indicator.local[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd93d,\n      #ff6b6b);\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  min-width: 80px;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 120px;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px 15px;\n  border-radius: 25px;\n  background: rgba(102, 126, 234, 0.1);\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  text-align: center;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.2);\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  padding: 10px 0;\n  min-width: 150px;\n  opacity: 0;\n  transform: translateY(-10px);\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  font-size: 0.9rem;\n  color: #333;\n  white-space: nowrap;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.logout-btn[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  border-top: 1px solid #eee;\n  margin-top: 5px;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.admin-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 5px;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.admin-link[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  color: #5a67d8;\n}\n.main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:hover   .user-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  visibility: visible;\n}\n.main-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  gap: 4px;\n}\n.main-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 3px;\n  background: #333;\n  transition: all 0.3s ease;\n  border-radius: 2px;\n}\n.main-header[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(45deg) translate(6px, 6px);\n}\n.main-header[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.main-header[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(-45deg) translate(7px, -6px);\n}\nbody[_nghost-%COMP%], body   [_nghost-%COMP%] {\n  padding-top: 80px;\n}\n@media (max-width: 768px) {\n  .main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n    transform: translateY(-100%);\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s ease;\n    justify-content: flex-start;\n  }\n  .main-header[_ngcontent-%COMP%]   .main-nav.active[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible;\n  }\n  .main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 20px;\n    gap: 15px;\n  }\n  .main-header[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 12px 16px;\n    text-align: center;\n    border-radius: 8px;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n    min-width: auto;\n    flex-shrink: 0;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.9rem;\n    min-width: auto;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    max-width: 100px;\n  }\n  .main-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 480px) {\n  .main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    padding: 12px 0;\n  }\n  .main-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%], \n   .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%] {\n    padding: 8px;\n    font-size: 1rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n  }\n  .main-header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    max-width: 80px;\n  }\n}\n/*# sourceMappingURL=header.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterModule, CurrencySelectorComponent], template: `<header class="main-header">\r
  <div class="container">\r
    <div class="header-content">\r
      <!-- Logo -->\r
      <div class="logo">\r
        <a routerLink="/">\r
          <h1>\u{1F4DA} Readify</h1>\r
        </a>\r
      </div>\r
\r
      <!-- Navigation -->\r
      <nav class="main-nav" [class.active]="isMenuOpen">\r
        <ul>\r
          <li><a href="#home" (click)="scrollToSection('home', $event)" [class.active]="activeSection === 'home'">Home</a></li>\r
          <li><a href="#categories" (click)="scrollToSection('categories', $event)" [class.active]="activeSection === 'categories'">Categories</a></li>\r
          <li><a href="#featured" (click)="scrollToSection('featured', $event)" [class.active]="activeSection === 'featured'">Featured</a></li>\r
          <li><a href="#bestsellers" (click)="scrollToSection('bestsellers', $event)" [class.active]="activeSection === 'bestsellers'">Bestsellers</a></li>\r
          <li><a href="#new-arrivals" (click)="scrollToSection('new-arrivals', $event)" [class.active]="activeSection === 'new-arrivals'">New Arrivals</a></li>\r
        </ul>\r
      </nav>\r
\r
      <!-- User Actions -->\r
      <div class="user-actions">\r
        <app-currency-selector></app-currency-selector>\r
        <button class="search-btn" routerLink="/search">\r
          <span class="search-icon">\u{1F50D}</span>\r
        </button>\r
        <button class="cart-btn" routerLink="/cart">\r
          <span class="cart-icon">\u{1F6D2}</span>\r
          <span class="cart-count" *ngIf="(cartItemCount$ | async)! > 0">{{ cartItemCount$ | async }}</span>\r
          <span class="sync-indicator" \r
                [class.synced]="currentUser" \r
                [class.local]="!currentUser"\r
                [title]="currentUser ? 'Cart synced with your account' : 'Cart saved locally only'">\r
            {{ currentUser ? '\u2601\uFE0F' : '\u{1F4BE}' }}\r
          </span>\r
        </button>\r
        \r
        <!-- Authentication Status -->\r
        <div *ngIf="currentUser; else loginButton" class="user-menu">\r
          <div class="user-info">\r
            <span class="user-name">\u{1F464} {{ currentUser.displayName || currentUser.email }}</span>\r
            <div class="user-dropdown">\r
              <button class="dropdown-item">Profile</button>\r
              <button class="dropdown-item">My Books</button>\r
              <button class="dropdown-item">Settings</button>\r
              <button *ngIf="isAdmin()" class="dropdown-item admin-link" routerLink="/admin">\r
                \u{1F527} Admin Panel\r
              </button>\r
              <button class="dropdown-item logout-btn" (click)="signOut()">Sign Out</button>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <ng-template #loginButton>\r
          <a routerLink="/login" class="login-btn">Sign In</a>\r
        </ng-template>\r
      </div>\r
\r
      <!-- Mobile Menu Toggle -->\r
      <button class="mobile-menu-toggle" (click)="toggleMenu()">\r
        <span></span>\r
        <span></span>\r
        <span></span>\r
      </button>\r
    </div>\r
  </div>\r
</header>\r
`, styles: ['/* src/app/shared/header/header.scss */\n.main-header {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.main-header .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.main-header .header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  position: relative;\n}\n.main-header .logo {\n  flex: 0 0 auto;\n}\n.main-header .logo a {\n  text-decoration: none;\n  color: #333;\n}\n.main-header .logo a h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #667eea;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.main-header .main-nav {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.main-header .main-nav ul {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 30px;\n}\n.main-header .main-nav ul li a {\n  text-decoration: none;\n  color: #333;\n  font-weight: 500;\n  font-size: 1rem;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  position: relative;\n  white-space: nowrap;\n}\n.main-header .main-nav ul li a:hover {\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.1);\n}\n.main-header .main-nav ul li a.active {\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.15);\n  font-weight: 600;\n}\n.main-header .main-nav ul li a.active::after {\n  content: "";\n  position: absolute;\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20px;\n  height: 2px;\n  background: #667eea;\n  border-radius: 1px;\n}\n.main-header .user-actions {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  min-width: 200px;\n  justify-content: flex-end;\n}\n.main-header .user-actions app-currency-selector {\n  flex-shrink: 0;\n}\n.main-header .user-actions .search-btn,\n.main-header .user-actions .cart-btn {\n  background: none;\n  border: none;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.main-header .user-actions .search-btn:hover,\n.main-header .user-actions .cart-btn:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n.main-header .user-actions .cart-btn .cart-count {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b,\n      #e74c3c);\n  color: white;\n  border-radius: 50%;\n  min-width: 20px;\n  height: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  animation: pulse 2s infinite;\n}\n.main-header .user-actions .cart-btn .sync-indicator {\n  position: absolute;\n  bottom: -3px;\n  left: -3px;\n  font-size: 0.6rem;\n  background: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.main-header .user-actions .cart-btn .sync-indicator.synced {\n  background:\n    linear-gradient(\n      135deg,\n      #4ecdc4,\n      #44a08d);\n  color: white;\n}\n.main-header .user-actions .cart-btn .sync-indicator.local {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd93d,\n      #ff6b6b);\n  color: white;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.main-header .user-actions .login-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  min-width: 80px;\n}\n.main-header .user-actions .login-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n}\n.main-header .user-actions .user-menu {\n  position: relative;\n  min-width: 120px;\n}\n.main-header .user-actions .user-menu .user-info {\n  cursor: pointer;\n  padding: 10px 15px;\n  border-radius: 25px;\n  background: rgba(102, 126, 234, 0.1);\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  text-align: center;\n}\n.main-header .user-actions .user-menu .user-info:hover {\n  background: rgba(102, 126, 234, 0.2);\n}\n.main-header .user-actions .user-menu .user-info .user-name {\n  color: #667eea;\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.main-header .user-actions .user-menu .user-info .user-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  padding: 10px 0;\n  min-width: 150px;\n  opacity: 0;\n  transform: translateY(-10px);\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.main-header .user-actions .user-menu .user-info .user-dropdown .dropdown-item {\n  width: 100%;\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  font-size: 0.9rem;\n  color: #333;\n  white-space: nowrap;\n}\n.main-header .user-actions .user-menu .user-info .user-dropdown .dropdown-item:hover {\n  background: #f8f9fa;\n}\n.main-header .user-actions .user-menu .user-info .user-dropdown .dropdown-item.logout-btn {\n  color: #e53e3e;\n  border-top: 1px solid #eee;\n  margin-top: 5px;\n}\n.main-header .user-actions .user-menu .user-info .user-dropdown .dropdown-item.admin-link {\n  color: #667eea;\n  font-weight: 600;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 5px;\n}\n.main-header .user-actions .user-menu .user-info .user-dropdown .dropdown-item.admin-link:hover {\n  background: #f0f4ff;\n  color: #5a67d8;\n}\n.main-header .user-actions .user-menu .user-info:hover .user-dropdown {\n  opacity: 1;\n  transform: translateY(0);\n  visibility: visible;\n}\n.main-header .mobile-menu-toggle {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  gap: 4px;\n}\n.main-header .mobile-menu-toggle span {\n  width: 25px;\n  height: 3px;\n  background: #333;\n  transition: all 0.3s ease;\n  border-radius: 2px;\n}\n.main-header .mobile-menu-toggle.active span:nth-child(1) {\n  transform: rotate(45deg) translate(6px, 6px);\n}\n.main-header .mobile-menu-toggle.active span:nth-child(2) {\n  opacity: 0;\n}\n.main-header .mobile-menu-toggle.active span:nth-child(3) {\n  transform: rotate(-45deg) translate(7px, -6px);\n}\n:host-context(body) {\n  padding-top: 80px;\n}\n@media (max-width: 768px) {\n  .main-header .header-content {\n    position: relative;\n  }\n  .main-header .main-nav {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n    transform: translateY(-100%);\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s ease;\n    justify-content: flex-start;\n  }\n  .main-header .main-nav.active {\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible;\n  }\n  .main-header .main-nav ul {\n    flex-direction: column;\n    padding: 20px;\n    gap: 15px;\n  }\n  .main-header .main-nav ul li a {\n    display: block;\n    padding: 12px 16px;\n    text-align: center;\n    border-radius: 8px;\n  }\n  .main-header .user-actions {\n    gap: 10px;\n    min-width: auto;\n    flex-shrink: 0;\n  }\n  .main-header .user-actions .login-btn {\n    padding: 8px 16px;\n    font-size: 0.9rem;\n    min-width: auto;\n  }\n  .main-header .user-actions .user-menu {\n    min-width: auto;\n  }\n  .main-header .user-actions .user-menu .user-info {\n    padding: 8px 12px;\n  }\n  .main-header .user-actions .user-menu .user-info .user-name {\n    font-size: 0.8rem;\n    max-width: 100px;\n  }\n  .main-header .mobile-menu-toggle {\n    display: flex;\n  }\n}\n@media (max-width: 480px) {\n  .main-header .header-content {\n    padding: 12px 0;\n  }\n  .main-header .logo h1 {\n    font-size: 1.5rem;\n  }\n  .main-header .user-actions {\n    gap: 8px;\n  }\n  .main-header .user-actions .search-btn,\n  .main-header .user-actions .cart-btn {\n    padding: 8px;\n    font-size: 1rem;\n  }\n  .main-header .user-actions .login-btn {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  .main-header .user-actions .user-menu .user-info {\n    padding: 6px 10px;\n  }\n  .main-header .user-actions .user-menu .user-info .user-name {\n    font-size: 0.75rem;\n    max-width: 80px;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n'] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: CartService }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/header/header.ts", lineNumber: 18 });
})();

// src/app/shared/footer/footer.ts
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 53, vars: 0, consts: [[1, "main-footer"], [1, "container"], [1, "footer-content"], [1, "footer-section"], ["href", "#home"], ["href", "#books"], ["href", "#categories"], ["href", "#about"], ["href", "#fiction"], ["href", "#non-fiction"], ["href", "#mystery"], ["href", "#romance"], [1, "footer-bottom"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "\u{1F4DA} Readify");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Your one-stop destination for all your favorite books. Discover, read, and share the love of reading.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "h4");
      \u0275\u0275text(10, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "a", 4);
      \u0275\u0275text(14, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 5);
      \u0275\u0275text(17, "Books");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 6);
      \u0275\u0275text(20, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 7);
      \u0275\u0275text(23, "About Us");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 3)(25, "h4");
      \u0275\u0275text(26, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "ul")(28, "li")(29, "a", 8);
      \u0275\u0275text(30, "Fiction");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 9);
      \u0275\u0275text(33, "Non-Fiction");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 10);
      \u0275\u0275text(36, "Mystery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 11);
      \u0275\u0275text(39, "Romance");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 3)(41, "h4");
      \u0275\u0275text(42, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ul")(44, "li");
      \u0275\u0275text(45, "\u{1F4E7} info@readify.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "li");
      \u0275\u0275text(47, "\u{1F4DE} (0212) 321 00 00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "li");
      \u0275\u0275text(49, "\u{1F4CD} G\xFCzeltepe, Osmanpa\u015Fa Cd. No:7, 34060 Ey\xFCpsultan/\u0130stanbul");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 12)(51, "p");
      \u0275\u0275text(52, "\xA9 2025 Readify. All rights reserved.");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.main-footer[_ngcontent-%COMP%] {\n  background: #2c3e50;\n  color: white;\n  padding: 50px 0 20px;\n  margin-top: 80px;\n}\n.main-footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 40px;\n  margin-bottom: 40px;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  color: #667eea;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 15px;\n  color: #ecf0f1;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #bdc3c7;\n  margin-bottom: 15px;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #bdc3c7;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #bdc3c7;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #34495e;\n  padding-top: 20px;\n  text-align: center;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #bdc3c7;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .main-footer[_ngcontent-%COMP%] {\n    padding: 40px 0 20px;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 30px;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .main-footer[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .main-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n}\n/*# sourceMappingURL=footer.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule], template: '<footer class="main-footer">\r\n  <div class="container">\r\n    <div class="footer-content">\r\n      <div class="footer-section">\r\n        <h3>\u{1F4DA} Readify</h3>\r\n        <p>Your one-stop destination for all your favorite books. Discover, read, and share the love of reading.</p>\r\n      </div>\r\n      \r\n      <div class="footer-section">\r\n        <h4>Quick Links</h4>\r\n        <ul>\r\n          <li><a href="#home">Home</a></li>\r\n          <li><a href="#books">Books</a></li>\r\n          <li><a href="#categories">Categories</a></li>\r\n          <li><a href="#about">About Us</a></li>\r\n        </ul>\r\n      </div>\r\n      \r\n      <div class="footer-section">\r\n        <h4>Categories</h4>\r\n        <ul>\r\n          <li><a href="#fiction">Fiction</a></li>\r\n          <li><a href="#non-fiction">Non-Fiction</a></li>\r\n          <li><a href="#mystery">Mystery</a></li>\r\n          <li><a href="#romance">Romance</a></li>\r\n        </ul>\r\n      </div>\r\n      \r\n      <div class="footer-section">\r\n        <h4>Contact</h4>\r\n        <ul>\r\n          <li>\u{1F4E7} info&#64;readify.com</li>\r\n          <li>\u{1F4DE} (0212) 321 00 00</li>\r\n          <li>\u{1F4CD} G\xFCzeltepe, Osmanpa\u015Fa Cd. No:7, 34060 Ey\xFCpsultan/\u0130stanbul</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class="footer-bottom">\r\n      <p>&copy; 2025 Readify. All rights reserved.</p>\r\n    </div>\r\n  </div>\r\n</footer>\r\n', styles: ["/* src/app/shared/footer/footer.scss */\n.main-footer {\n  background: #2c3e50;\n  color: white;\n  padding: 50px 0 20px;\n  margin-top: 80px;\n}\n.main-footer .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.main-footer .footer-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 40px;\n  margin-bottom: 40px;\n}\n.main-footer .footer-section h3 {\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  color: #667eea;\n}\n.main-footer .footer-section h4 {\n  font-size: 1.2rem;\n  margin-bottom: 15px;\n  color: #ecf0f1;\n}\n.main-footer .footer-section p {\n  line-height: 1.6;\n  color: #bdc3c7;\n  margin-bottom: 15px;\n}\n.main-footer .footer-section ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.main-footer .footer-section ul li {\n  margin-bottom: 10px;\n  color: #bdc3c7;\n}\n.main-footer .footer-section ul li a {\n  color: #bdc3c7;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.main-footer .footer-section ul li a:hover {\n  color: #667eea;\n}\n.main-footer .footer-bottom {\n  border-top: 1px solid #34495e;\n  padding-top: 20px;\n  text-align: center;\n}\n.main-footer .footer-bottom p {\n  margin: 0;\n  color: #bdc3c7;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .main-footer {\n    padding: 40px 0 20px;\n  }\n  .main-footer .footer-content {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 30px;\n  }\n  .main-footer .footer-section {\n    text-align: center;\n  }\n  .main-footer .footer-section h3 {\n    font-size: 1.3rem;\n  }\n  .main-footer .footer-section h4 {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .main-footer .footer-content {\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n}\n/*# sourceMappingURL=footer.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/shared/footer/footer.ts", lineNumber: 11 });
})();

// src/app/shared/notifications/notifications.ts
function NotificationsComponent_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, NotificationsComponent_div_1_span_2_Template, 2, 0, "span", 4)(3, NotificationsComponent_div_1_span_3_Template, 2, 0, "span", 4)(4, NotificationsComponent_div_1_span_4_Template, 2, 0, "span", 4)(5, NotificationsComponent_div_1_span_5_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "h4", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("click", function NotificationsComponent_div_1_Template_button_click_11_listener() {
      const notification_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNotification(notification_r2.id));
    });
    \u0275\u0275text(12, " \xD7 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    \u0275\u0275classProp("success", notification_r2.type === "success")("info", notification_r2.type === "info")("warning", notification_r2.type === "warning")("error", notification_r2.type === "error");
    \u0275\u0275property("@slideIn", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", notification_r2.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r2.type === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r2.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r2.type === "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r2.message);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  notificationService;
  notifications = [];
  subscription;
  constructor(notificationService) {
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.subscription = this.notificationService.notifications$.subscribe((notifications) => this.notifications = notifications);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  closeNotification(id) {
    this.notificationService.hide(id);
  }
  trackByNotification(index, notification) {
    return notification.id;
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)(\u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 2, vars: 2, consts: [[1, "notifications-container"], ["class", "notification", 3, "success", "info", "warning", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notification"], [1, "notification-icon"], [4, "ngIf"], [1, "notification-content"], [1, "notification-title"], [1, "notification-message"], ["aria-label", "Close notification", 1, "notification-close", 3, "click"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, NotificationsComponent_div_1_Template, 13, 15, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackByNotification);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.notifications-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 100px;\n  right: 20px;\n  z-index: 2000;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 350px;\n}\n.notification[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  border-left: 4px solid;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.notification.success[_ngcontent-%COMP%] {\n  border-left-color: #2ecc71;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fff8 100%);\n}\n.notification.info[_ngcontent-%COMP%] {\n  border-left-color: #3498db;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fcff 100%);\n}\n.notification.warning[_ngcontent-%COMP%] {\n  border-left-color: #f39c12;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fffdf8 100%);\n}\n.notification.error[_ngcontent-%COMP%] {\n  border-left-color: #e74c3c;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fff8f8 100%);\n}\n.notification[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.notification-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n  color: #333;\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  color: #666;\n  line-height: 1.4;\n}\n.notification-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #999;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.notification-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n  color: #333;\n}\n@media (max-width: 768px) {\n  .notifications-container[_ngcontent-%COMP%] {\n    left: 20px;\n    right: 20px;\n    top: 80px;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=notifications.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, imports: [CommonModule], template: `
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
          <span *ngIf="notification.type === 'success'">\u2705</span>
          <span *ngIf="notification.type === 'info'">\u2139\uFE0F</span>
          <span *ngIf="notification.type === 'warning'">\u26A0\uFE0F</span>
          <span *ngIf="notification.type === 'error'">\u274C</span>
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
          \xD7
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;6ffef458ddc5503d44f8ffd26ab0bd701b6c598ddd1dc6cef972eaacac499591;C:/Users/egeer/OneDrive/Masa\xFCst\xFC/ANGULAR/Readify/src/app/shared/notifications/notifications.ts */\n.notifications-container {\n  position: fixed;\n  top: 100px;\n  right: 20px;\n  z-index: 2000;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 350px;\n}\n.notification {\n  background: white;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  border-left: 4px solid;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  transition: all 0.3s ease;\n  animation: slideIn 0.3s ease-out;\n}\n.notification.success {\n  border-left-color: #2ecc71;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fff8 100%);\n}\n.notification.info {\n  border-left-color: #3498db;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fcff 100%);\n}\n.notification.warning {\n  border-left-color: #f39c12;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fffdf8 100%);\n}\n.notification.error {\n  border-left-color: #e74c3c;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fff8f8 100%);\n}\n.notification:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.notification-icon {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.notification-content {\n  flex: 1;\n}\n.notification-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n  color: #333;\n}\n.notification-message {\n  font-size: 0.8rem;\n  margin: 0;\n  color: #666;\n  line-height: 1.4;\n}\n.notification-close {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #999;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.notification-close:hover {\n  background: rgba(0, 0, 0, 0.1);\n  color: #333;\n}\n@media (max-width: 768px) {\n  .notifications-container {\n    left: 20px;\n    right: 20px;\n    top: 80px;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=notifications.css.map */\n"] }]
  }], () => [{ type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/shared/notifications/notifications.ts", lineNumber: 158 });
})();

// src/app/app.ts
var App = class _App {
  title = "readify";
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 5, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main");
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer")(4, "app-notifications");
    }
  }, dependencies: [RouterOutlet, Header, Footer, NotificationsComponent], styles: ['\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  line-height: 1.6;\n  color: #333;\n}\nmain[_ngcontent-%COMP%] {\n  padding-top: 80px;\n  min-height: calc(100vh - 80px);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #667eea;\n  border: 2px solid #667eea;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n}\n/*# sourceMappingURL=app.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Header, Footer, NotificationsComponent], template: "<app-header></app-header>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<app-footer></app-footer>\r\n<app-notifications></app-notifications>", styles: ['/* src/app/app.scss */\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  line-height: 1.6;\n  color: #333;\n}\nmain {\n  padding-top: 80px;\n  min-height: calc(100vh - 80px);\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\nbutton {\n  font-family: inherit;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.text-center {\n  text-align: center;\n}\n.btn {\n  display: inline-block;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n}\n.btn.btn-secondary {\n  background: transparent;\n  color: #667eea;\n  border: 2px solid #667eea;\n}\n.btn.btn-secondary:hover {\n  background: #667eea;\n  color: white;\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 13 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
