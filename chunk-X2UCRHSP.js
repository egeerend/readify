import {
  ActivatedRoute,
  BookService,
  CartService,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  OpenLibraryService,
  Router,
  RouterLink,
  RouterModule,
  __async,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GNTFI3NV.js";

// src/app/features/book-detail/book-detail.ts
var _c0 = () => [1, 2, 3, 4, 5];
function BookDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5, "Loading book details...");
    \u0275\u0275elementEnd()();
  }
}
function BookDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275element(3, "i", 11);
    \u0275\u0275elementStart(4, "div")(5, "h4", 12);
    \u0275\u0275text(6, "Book Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "hr");
    \u0275\u0275elementStart(10, "div", 14)(11, "button", 15);
    \u0275\u0275listener("click", function BookDetailComponent_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(12, "i", 16);
    \u0275\u0275text(13, "Go Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 17);
    \u0275\u0275element(15, "i", 18);
    \u0275\u0275text(16, "Back to Home ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function BookDetailComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", (ctx_r1.generatePrice() * 1.2).toFixed(2), " ");
  }
}
function BookDetailComponent_div_3_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCartQuantity(), " ");
  }
}
function BookDetailComponent_div_3_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.book.author);
  }
}
function BookDetailComponent_div_3_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getAuthorsString(ctx_r1.openLibraryBook == null ? null : ctx_r1.openLibraryBook.author_name));
  }
}
function BookDetailComponent_div_3_div_33_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 64);
  }
  if (rf & 2) {
    const star_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("text-warning", star_r4 <= ctx_r1.getRating())("text-muted", star_r4 > ctx_r1.getRating());
  }
}
function BookDetailComponent_div_3_div_33_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.getRatingCount(), " reviews) ");
  }
}
function BookDetailComponent_div_3_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 10)(2, "div", 60);
    \u0275\u0275template(3, BookDetailComponent_div_3_div_33_i_3_Template, 1, 4, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275template(6, BookDetailComponent_div_3_div_33_span_6_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRating().toFixed(1), "/5 ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRatingCount() > 0);
  }
}
function BookDetailComponent_div_3_div_34_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r5, " ");
  }
}
function BookDetailComponent_div_3_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "h6", 67);
    \u0275\u0275text(2, "Categories:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275template(4, BookDetailComponent_div_3_div_34_span_4_Template, 2, 1, "span", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getCategories());
  }
}
function BookDetailComponent_div_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "ISBN:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getISBN());
  }
}
function BookDetailComponent_div_3_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Publisher:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getPublisher());
  }
}
function BookDetailComponent_div_3_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Published:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getPublishedYear());
  }
}
function BookDetailComponent_div_3_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Pages/Editions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getPageCount());
  }
}
function BookDetailComponent_div_3_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Language:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getLanguage());
  }
}
function BookDetailComponent_div_3_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Format:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.book.format);
  }
}
function BookDetailComponent_div_3_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", ctx_r1.book.stock > 10)("bg-warning", ctx_r1.book.stock <= 10 && ctx_r1.book.stock > 0)("bg-danger", ctx_r1.book.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.book.stock === 0 ? "Out of Stock" : ctx_r1.book.stock + " available", " ");
  }
}
function BookDetailComponent_div_3_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "strong");
    \u0275\u0275text(2, "Source:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4, "Open Library");
    \u0275\u0275elementEnd()();
  }
}
function BookDetailComponent_div_3_div_57_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "small", 65);
    \u0275\u0275text(2, "Available Editions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.openLibraryBook.edition_count, " editions");
  }
}
function BookDetailComponent_div_3_div_57_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "small", 65);
    \u0275\u0275text(2, "Full Text Available:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275text(5, " Yes");
    \u0275\u0275elementEnd()();
  }
}
function BookDetailComponent_div_3_div_57_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "small", 65);
    \u0275\u0275text(2, "Want to Read:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.openLibraryBook.want_to_read_count, " users");
  }
}
function BookDetailComponent_div_3_div_57_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "small", 65);
    \u0275\u0275text(2, "Currently Reading:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.openLibraryBook.currently_reading_count, " users");
  }
}
function BookDetailComponent_div_3_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "div", 76)(3, "h6", 13);
    \u0275\u0275element(4, "i", 77);
    \u0275\u0275text(5, " Additional Information ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78)(7, "div", 22);
    \u0275\u0275template(8, BookDetailComponent_div_3_div_57_div_8_Template, 5, 1, "div", 79)(9, BookDetailComponent_div_3_div_57_div_9_Template, 6, 0, "div", 79)(10, BookDetailComponent_div_3_div_57_div_10_Template, 5, 1, "div", 79)(11, BookDetailComponent_div_3_div_57_div_11_Template, 5, 1, "div", 79);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.openLibraryBook.edition_count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.openLibraryBook.has_fulltext);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.openLibraryBook.want_to_read_count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.openLibraryBook.currently_reading_count);
  }
}
function BookDetailComponent_div_3_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCartQuantity(), " ");
  }
}
function BookDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "button", 21);
    \u0275\u0275listener("click", function BookDetailComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(3, "i", 16);
    \u0275\u0275text(4, "Back ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 23)(7, "div", 24)(8, "div", 25)(9, "img", 26);
    \u0275\u0275listener("error", function BookDetailComponent_div_3_Template_img_error_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 27)(11, "div", 28)(12, "div", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, BookDetailComponent_div_3_div_14_Template, 2, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 31)(16, "button", 32);
    \u0275\u0275listener("click", function BookDetailComponent_div_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275element(17, "i", 33);
    \u0275\u0275elementStart(18, "span", 34);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, BookDetailComponent_div_3_span_20_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 36);
    \u0275\u0275element(22, "i", 37);
    \u0275\u0275text(23, "View Cart ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "div", 38)(25, "div", 39)(26, "div", 40)(27, "h1", 41);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 42);
    \u0275\u0275element(30, "i", 43);
    \u0275\u0275template(31, BookDetailComponent_div_3_span_31_Template, 2, 1, "span", 44)(32, BookDetailComponent_div_3_span_32_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, BookDetailComponent_div_3_div_33_Template, 7, 4, "div", 45)(34, BookDetailComponent_div_3_div_34_Template, 5, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 47)(36, "h5", 48);
    \u0275\u0275text(37, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 49)(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 50)(42, "h5", 48);
    \u0275\u0275text(43, "Book Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 22)(45, "div", 51)(46, "div", 52);
    \u0275\u0275template(47, BookDetailComponent_div_3_div_47_Template, 5, 1, "div", 53)(48, BookDetailComponent_div_3_div_48_Template, 5, 1, "div", 53)(49, BookDetailComponent_div_3_div_49_Template, 5, 1, "div", 53)(50, BookDetailComponent_div_3_div_50_Template, 5, 1, "div", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 51)(52, "div", 52);
    \u0275\u0275template(53, BookDetailComponent_div_3_div_53_Template, 5, 1, "div", 53)(54, BookDetailComponent_div_3_div_54_Template, 5, 1, "div", 53)(55, BookDetailComponent_div_3_div_55_Template, 5, 7, "div", 53)(56, BookDetailComponent_div_3_div_56_Template, 5, 0, "div", 53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(57, BookDetailComponent_div_3_div_57_Template, 12, 4, "div", 54);
    \u0275\u0275elementStart(58, "div", 55)(59, "div", 56)(60, "button", 32);
    \u0275\u0275listener("click", function BookDetailComponent_div_3_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275element(61, "i", 33);
    \u0275\u0275elementStart(62, "span", 34);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, BookDetailComponent_div_3_span_64_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("src", ctx_r1.getCoverImage(), \u0275\u0275sanitizeUrl)("alt", (ctx_r1.book == null ? null : ctx_r1.book.title) || (ctx_r1.openLibraryBook == null ? null : ctx_r1.openLibraryBook.title) || "Book cover");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" $", ctx_r1.generatePrice().toFixed(2), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.generatePrice() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-success", !ctx_r1.isInCart())("btn-secondary", ctx_r1.isInCart());
    \u0275\u0275property("disabled", ctx_r1.isInCart());
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-shopping-cart", !ctx_r1.isInCart())("fa-check", ctx_r1.isInCart());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isInCart() ? "In Cart" : "Add to Cart", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getCartQuantity() > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.book == null ? null : ctx_r1.book.title) || (ctx_r1.openLibraryBook == null ? null : ctx_r1.openLibraryBook.title) || "Unknown Title", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.book);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOpenLibraryBook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRating() > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasCategories());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getDescription());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.getISBN() !== "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPublisher() !== "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPublishedYear() !== "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPageCount() !== "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hasLanguage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.book == null ? null : ctx_r1.book.format);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.book == null ? null : ctx_r1.book.stock) !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOpenLibraryBook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOpenLibraryBook && ctx_r1.openLibraryBook);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("btn-success", !ctx_r1.isInCart())("btn-secondary", ctx_r1.isInCart());
    \u0275\u0275property("disabled", ctx_r1.isInCart());
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-shopping-cart", !ctx_r1.isInCart())("fa-check", ctx_r1.isInCart());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isInCart() ? "In Cart" : "Add to Cart", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getCartQuantity() > 0);
  }
}
var BookDetailComponent = class _BookDetailComponent {
  route;
  router;
  bookService;
  openLibraryService;
  cartService;
  book = null;
  openLibraryBook = null;
  isLoading = true;
  error = "";
  isOpenLibraryBook = false;
  bookId = "";
  constructor(route, router, bookService, openLibraryService, cartService) {
    this.route = route;
    this.router = router;
    this.bookService = bookService;
    this.openLibraryService = openLibraryService;
    this.cartService = cartService;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.params.subscribe((params) => __async(this, null, function* () {
        this.bookId = params["id"];
        yield this.loadBookDetails();
      }));
    });
  }
  loadBookDetails() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.error = "";
      try {
        if (this.bookId.startsWith("ol-")) {
          this.isOpenLibraryBook = true;
          yield this.loadOpenLibraryBook();
        } else {
          this.isOpenLibraryBook = false;
          yield this.loadLocalBook();
        }
      } catch (error) {
        console.error("Error loading book details:", error);
        this.error = "Failed to load book details";
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadLocalBook() {
    return __async(this, null, function* () {
      try {
        this.bookService.getAllBooks().subscribe((books) => {
          this.book = books.find((b) => b.id === this.bookId) || null;
          if (!this.book) {
            this.error = "Book not found";
          }
        });
      } catch (error) {
        console.error("Error loading local book:", error);
        this.error = "Failed to load book details";
      }
    });
  }
  loadOpenLibraryBook() {
    return __async(this, null, function* () {
      try {
        const parts = this.bookId.replace("ol-", "").split("-");
        const title = parts[0];
        const author = parts[1];
        if (title && title !== "unknown") {
          const searchResults = yield this.openLibraryService.searchBooks(title).toPromise();
          if (searchResults && searchResults.docs && searchResults.docs.length > 0) {
            const matchedBook = searchResults.docs.find((book) => this.generateBookId(book) === this.bookId) || searchResults.docs[0];
            this.openLibraryBook = matchedBook;
          } else {
            this.error = "Book not found in Open Library";
          }
        } else {
          this.error = "Invalid book ID";
        }
      } catch (error) {
        console.error("Error loading Open Library book:", error);
        this.error = "Failed to load book details from Open Library";
      }
    });
  }
  // Generate book ID for Open Library books (same as in search component)
  generateBookId(book) {
    if (book.key) {
      return book.key.replace("/works/", "ol-work-");
    }
    const title = book.title?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().slice(0, 20) || "unknown";
    const author = book.author_name?.[0]?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().slice(0, 15) || "unknown";
    return `ol-${title}-${author}`;
  }
  getCoverImage() {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      if (this.openLibraryBook.cover_i) {
        return `https://covers.openlibrary.org/b/id/${this.openLibraryBook.cover_i}-L.jpg`;
      }
      if (this.openLibraryBook.isbn && this.openLibraryBook.isbn.length > 0) {
        return `https://covers.openlibrary.org/b/isbn/${this.openLibraryBook.isbn[0]}-L.jpg`;
      }
    } else if (this.book) {
      return this.book.coverImage;
    }
    return "/assets/images/no-book-cover.jpg";
  }
  onImageError(event) {
    const img = event.target;
    img.src = "/assets/images/no-book-cover.jpg";
  }
  getAuthorsString(authors) {
    if (!authors || authors.length === 0)
      return "Unknown Author";
    return authors.slice(0, 3).join(", ");
  }
  getISBN() {
    if (this.isOpenLibraryBook && this.openLibraryBook?.isbn && this.openLibraryBook.isbn.length > 0) {
      return this.openLibraryBook.isbn[0];
    } else if (this.book?.isbn) {
      return this.book.isbn;
    }
    return "N/A";
  }
  getPublisher() {
    if (this.isOpenLibraryBook && this.openLibraryBook?.publisher && this.openLibraryBook.publisher.length > 0) {
      return this.openLibraryBook.publisher[0];
    } else if (this.book?.publisher) {
      return this.book.publisher;
    }
    return "N/A";
  }
  getPublishedYear() {
    if (this.isOpenLibraryBook && this.openLibraryBook?.first_publish_year) {
      return this.openLibraryBook.first_publish_year.toString();
    } else if (this.book?.publishedDate) {
      return new Date(this.book.publishedDate).getFullYear().toString();
    }
    return "N/A";
  }
  getPageCount() {
    if (this.isOpenLibraryBook && this.openLibraryBook?.edition_count) {
      return `${this.openLibraryBook.edition_count} editions`;
    } else if (this.book?.pageCount) {
      return `${this.book.pageCount} pages`;
    }
    return "N/A";
  }
  generatePrice() {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      const basePrice = 15;
      let price = basePrice;
      if (this.openLibraryBook.ratings_average && this.openLibraryBook.ratings_average > 4) {
        price += 5;
      }
      if (this.openLibraryBook.first_publish_year && this.openLibraryBook.first_publish_year > 2010) {
        price += 3;
      }
      if (this.openLibraryBook.subject && this.openLibraryBook.subject.length > 5) {
        price += 2;
      }
      return Math.round(price * 100) / 100;
    } else if (this.book) {
      return this.book.price;
    }
    return 0;
  }
  getRating() {
    if (this.isOpenLibraryBook && this.openLibraryBook?.ratings_average) {
      return this.openLibraryBook.ratings_average;
    } else if (this.book?.rating) {
      return this.book.rating;
    }
    return 0;
  }
  getRatingCount() {
    if (this.isOpenLibraryBook && this.openLibraryBook?.ratings_count) {
      return this.openLibraryBook.ratings_count;
    } else if (this.book?.reviewCount) {
      return this.book.reviewCount;
    }
    return 0;
  }
  getDescription() {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      const parts = [];
      if (this.openLibraryBook.subject && this.openLibraryBook.subject.length > 0) {
        parts.push(`Categories: ${this.openLibraryBook.subject.slice(0, 3).join(", ")}`);
      }
      if (this.openLibraryBook.edition_count) {
        parts.push(`Available in ${this.openLibraryBook.edition_count} editions`);
      }
      return parts.length > 0 ? parts.join(". ") : "No description available.";
    } else if (this.book?.description) {
      return this.book.description;
    }
    return "No description available.";
  }
  addToCart() {
    return __async(this, null, function* () {
      try {
        if (this.isOpenLibraryBook && this.openLibraryBook) {
          const cartBook = {
            id: this.bookId,
            title: this.openLibraryBook.title,
            author: this.getAuthorsString(this.openLibraryBook.author_name),
            description: this.getDescription(),
            price: this.generatePrice(),
            category: this.openLibraryBook.subject?.[0] || "General",
            coverImage: this.getCoverImage(),
            rating: this.getRating(),
            reviewCount: this.getRatingCount(),
            isFeatured: false,
            isBestseller: false,
            isNew: false,
            publishedDate: this.openLibraryBook.first_publish_year?.toString() || "",
            createdAt: /* @__PURE__ */ new Date(),
            updatedAt: /* @__PURE__ */ new Date(),
            isbn: this.getISBN(),
            publisher: this.getPublisher(),
            pageCount: this.openLibraryBook.edition_count || 0,
            openLibraryId: this.openLibraryBook.key
          };
          yield this.cartService.addToCart(cartBook, 1);
        } else if (this.book) {
          yield this.cartService.addToCart(this.book, 1);
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    });
  }
  isInCart() {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      return this.cartService.isInCart(this.bookId);
    } else if (this.book) {
      return this.cartService.isInCart(this.book.id);
    }
    return false;
  }
  getCartQuantity() {
    if (this.isOpenLibraryBook && this.openLibraryBook) {
      return this.cartService.getBookQuantity(this.bookId);
    } else if (this.book) {
      return this.cartService.getBookQuantity(this.book.id);
    }
    return 0;
  }
  goBack() {
    window.history.back();
  }
  // Helper methods for template
  hasCategories() {
    return !!(this.book?.category || this.isOpenLibraryBook && this.openLibraryBook?.subject && this.openLibraryBook.subject.length > 0);
  }
  getCategories() {
    if (this.book?.category) {
      return [this.book.category];
    }
    if (this.isOpenLibraryBook && this.openLibraryBook?.subject) {
      return this.openLibraryBook.subject.slice(0, 5);
    }
    return [];
  }
  hasLanguage() {
    return !!(this.book?.language || this.isOpenLibraryBook && this.openLibraryBook?.language && this.openLibraryBook.language.length > 0);
  }
  getLanguage() {
    if (this.book?.language) {
      return this.book.language;
    }
    if (this.isOpenLibraryBook && this.openLibraryBook?.language && this.openLibraryBook.language.length > 0) {
      return this.openLibraryBook.language[0];
    }
    return "English";
  }
  static \u0275fac = function BookDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(OpenLibraryService), \u0275\u0275directiveInject(CartService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookDetailComponent, selectors: [["app-book-detail"]], decls: 4, vars: 3, consts: [[1, "book-detail-container"], ["class", "loading-container text-center py-5", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "book-detail", 4, "ngIf"], [1, "loading-container", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "error-container"], ["role", "alert", 1, "alert", "alert-danger"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-exclamation-triangle", "me-3", "fa-2x"], [1, "alert-heading"], [1, "mb-0"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-arrow-left", "me-2"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "fas", "fa-home", "me-2"], [1, "book-detail"], [1, "back-navigation", "mb-4"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "row"], [1, "col-lg-4", "col-md-5", "mb-4"], [1, "book-cover-section"], [1, "book-cover-container"], [1, "book-cover-large", 3, "error", "src", "alt"], [1, "quick-actions", "mt-4"], [1, "price-section", "mb-3"], [1, "current-price", "h3", "text-primary", "mb-1"], ["class", "original-price text-muted text-decoration-line-through", 4, "ngIf"], [1, "action-buttons", "d-grid", "gap-2"], [1, "btn", "btn-lg", 3, "click", "disabled"], [1, "fas"], [1, "ms-2"], ["class", "badge bg-light text-dark ms-2", 4, "ngIf"], ["routerLink", "/cart", 1, "btn", "btn-outline-primary"], [1, "fas", "fa-shopping-cart", "me-2"], [1, "col-lg-8", "col-md-7"], [1, "book-info-section"], [1, "book-header", "mb-4"], [1, "book-title"], [1, "book-author", "h5", "text-muted", "mb-3"], [1, "fas", "fa-user", "me-2"], [4, "ngIf"], ["class", "book-rating mb-3", 4, "ngIf"], ["class", "book-categories mb-4", 4, "ngIf"], [1, "book-description", "mb-4"], [1, "mb-3"], [1, "description-text"], [1, "book-metadata"], [1, "col-md-6"], [1, "metadata-list"], ["class", "metadata-item", 4, "ngIf"], ["class", "open-library-info mt-4", 4, "ngIf"], [1, "bottom-actions", "d-lg-none", "mt-4"], [1, "d-grid", "gap-2"], [1, "original-price", "text-muted", "text-decoration-line-through"], [1, "badge", "bg-light", "text-dark", "ms-2"], [1, "book-rating", "mb-3"], [1, "stars", "me-3"], ["class", "fas fa-star", 3, "text-warning", "text-muted", 4, "ngFor", "ngForOf"], [1, "rating-text"], ["class", "text-muted", 4, "ngIf"], [1, "fas", "fa-star"], [1, "text-muted"], [1, "book-categories", "mb-4"], [1, "mb-2"], [1, "categories-list"], ["class", "badge bg-light text-dark me-1", 4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark", "me-1"], [1, "metadata-item"], [1, "badge"], [1, "badge", "bg-info"], [1, "open-library-info", "mt-4"], [1, "card"], [1, "card-header"], [1, "fas", "fa-info-circle", "me-2"], [1, "card-body"], ["class", "col-md-6", 4, "ngIf"], [1, "fas", "fa-check", "text-success"]], template: function BookDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, BookDetailComponent_div_1_Template, 6, 0, "div", 1)(2, BookDetailComponent_div_2_Template, 17, 1, "div", 2)(3, BookDetailComponent_div_3_Template, 65, 41, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error && (ctx.book || ctx.openLibraryBook));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.book-detail-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.book-detail-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n.book-detail-container[_ngcontent-%COMP%]   .back-navigation[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .book-cover-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .book-cover-container[_ngcontent-%COMP%]   .book-cover-large[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 350px;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s ease;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .book-cover-container[_ngcontent-%COMP%]   .book-cover-large[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .price-section[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .price-section[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n  border-radius: 8px;\n  padding: 12px 20px;\n  transition: all 0.3s ease;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-header[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 15px;\n  color: #2c3e50;\n}\n@media (max-width: 768px) {\n  .book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-header[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-header[_ngcontent-%COMP%]   .book-author[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-header[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .fa-star[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-right: 2px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-header[_ngcontent-%COMP%]   .book-rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-header[_ngcontent-%COMP%]   .book-categories[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 6px 12px;\n  border-radius: 20px;\n  border: 1px solid #dee2e6;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-description[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #495057;\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #007bff;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-metadata[_ngcontent-%COMP%]   .metadata-list[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #e9ecef;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-metadata[_ngcontent-%COMP%]   .metadata-list[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-metadata[_ngcontent-%COMP%]   .metadata-list[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  min-width: 120px;\n  text-align: left;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-metadata[_ngcontent-%COMP%]   .metadata-list[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c757d;\n  text-align: right;\n  flex: 1;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-metadata[_ngcontent-%COMP%]   .metadata-list[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 4px 8px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 8px 8px 0 0;\n  border: none;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-top: 5px;\n  color: #495057;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .open-library-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.book-detail-container[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .bottom-actions[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border-top: 1px solid #e9ecef;\n  margin-top: 30px;\n}\n@media (max-width: 768px) {\n  .book-detail-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .book-detail-container[_ngcontent-%COMP%]   .book-detail[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .book-detail-container[_ngcontent-%COMP%]   .book-detail[_ngcontent-%COMP%]   .book-cover-section[_ngcontent-%COMP%]   .book-cover-container[_ngcontent-%COMP%] {\n    display: inline-block;\n    max-width: 250px;\n  }\n  .book-detail-container[_ngcontent-%COMP%]   .book-detail[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .book-detail-container[_ngcontent-%COMP%]   .book-detail[_ngcontent-%COMP%]   .book-info-section[_ngcontent-%COMP%]   .book-metadata[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]:first-child {\n    margin-bottom: 20px;\n  }\n}\n@media print {\n  .book-detail-container[_ngcontent-%COMP%]   .back-navigation[_ngcontent-%COMP%], \n   .book-detail-container[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%], \n   .book-detail-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%], \n   .book-detail-container[_ngcontent-%COMP%]   .bottom-actions[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .book-detail-container[_ngcontent-%COMP%]   .book-detail[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=book-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookDetailComponent, [{
    type: Component,
    args: [{ selector: "app-book-detail", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="book-detail-container">\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="loading-container text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
    <p class="mt-3 text-muted">Loading book details...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !isLoading" class="error-container">\r
    <div class="alert alert-danger" role="alert">\r
      <div class="d-flex align-items-center">\r
        <i class="fas fa-exclamation-triangle me-3 fa-2x"></i>\r
        <div>\r
          <h4 class="alert-heading">Book Not Found</h4>\r
          <p class="mb-0">{{ error }}</p>\r
        </div>\r
      </div>\r
      <hr>\r
      <div class="d-flex justify-content-between">\r
        <button class="btn btn-outline-secondary" (click)="goBack()">\r
          <i class="fas fa-arrow-left me-2"></i>Go Back\r
        </button>\r
        <a routerLink="/" class="btn btn-primary">\r
          <i class="fas fa-home me-2"></i>Back to Home\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Book Details -->\r
  <div *ngIf="!isLoading && !error && (book || openLibraryBook)" class="book-detail">\r
    <!-- Back Navigation -->\r
    <div class="back-navigation mb-4">\r
      <button class="btn btn-outline-secondary btn-sm" (click)="goBack()">\r
        <i class="fas fa-arrow-left me-2"></i>Back\r
      </button>\r
    </div>\r
\r
    <div class="row">\r
      <!-- Book Cover Column -->\r
      <div class="col-lg-4 col-md-5 mb-4">\r
        <div class="book-cover-section">\r
          <div class="book-cover-container">\r
            <img \r
              [src]="getCoverImage()" \r
              [alt]="(book?.title || openLibraryBook?.title || 'Book cover')"\r
              class="book-cover-large"\r
              (error)="onImageError($event)"\r
            >\r
          </div>\r
\r
          <!-- Quick Actions -->\r
          <div class="quick-actions mt-4">\r
            <div class="price-section mb-3">\r
              <div class="current-price h3 text-primary mb-1">\r
                \${{ generatePrice().toFixed(2) }}\r
              </div>\r
              <div class="original-price text-muted text-decoration-line-through" *ngIf="generatePrice() > 0">\r
                \${{ (generatePrice() * 1.2).toFixed(2) }}\r
              </div>\r
            </div>\r
\r
            <div class="action-buttons d-grid gap-2">\r
              <button \r
                class="btn btn-lg" \r
                [class.btn-success]="!isInCart()"\r
                [class.btn-secondary]="isInCart()"\r
                [disabled]="isInCart()"\r
                (click)="addToCart()"\r
              >\r
                <i class="fas" [class.fa-shopping-cart]="!isInCart()" [class.fa-check]="isInCart()"></i>\r
                <span class="ms-2">\r
                  {{ isInCart() ? 'In Cart' : 'Add to Cart' }}\r
                </span>\r
                <span *ngIf="getCartQuantity() > 0" class="badge bg-light text-dark ms-2">\r
                  {{ getCartQuantity() }}\r
                </span>\r
              </button>\r
\r
              <a routerLink="/cart" class="btn btn-outline-primary">\r
                <i class="fas fa-shopping-cart me-2"></i>View Cart\r
              </a>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Book Information Column -->\r
      <div class="col-lg-8 col-md-7">\r
        <div class="book-info-section">\r
          <!-- Title and Author -->\r
          <div class="book-header mb-4">\r
            <h1 class="book-title">\r
              {{ book?.title || openLibraryBook?.title || 'Unknown Title' }}\r
            </h1>\r
            <p class="book-author h5 text-muted mb-3">\r
              <i class="fas fa-user me-2"></i>\r
              <span *ngIf="book">{{ book.author }}</span>\r
              <span *ngIf="isOpenLibraryBook">{{ getAuthorsString(openLibraryBook?.author_name) }}</span>\r
            </p>\r
\r
            <!-- Rating -->\r
            <div class="book-rating mb-3" *ngIf="getRating() > 0">\r
              <div class="d-flex align-items-center">\r
                <div class="stars me-3">\r
                  <i *ngFor="let star of [1,2,3,4,5]" \r
                    class="fas fa-star"\r
                    [class.text-warning]="star <= getRating()"\r
                    [class.text-muted]="star > getRating()">\r
                  </i>\r
                </div>\r
                <span class="rating-text">\r
                  {{ getRating().toFixed(1) }}/5\r
                  <span *ngIf="getRatingCount() > 0" class="text-muted">\r
                    ({{ getRatingCount() }} reviews)\r
                  </span>\r
                </span>\r
              </div>\r
            </div>\r
\r
            <!-- Categories/Tags -->\r
            <div class="book-categories mb-4" *ngIf="hasCategories()">\r
              <h6 class="mb-2">Categories:</h6>\r
              <div class="categories-list">\r
                <span *ngFor="let category of getCategories()" \r
                      class="badge bg-light text-dark me-1">\r
                  {{ category }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Book Description -->\r
          <div class="book-description mb-4">\r
            <h5 class="mb-3">Description</h5>\r
            <div class="description-text">\r
              <p>{{ getDescription() }}</p>\r
            </div>\r
          </div>\r
\r
          <!-- Book Details -->\r
          <div class="book-metadata">\r
            <h5 class="mb-3">Book Details</h5>\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="metadata-list">\r
                  <div class="metadata-item" *ngIf="getISBN() !== 'N/A'">\r
                    <strong>ISBN:</strong>\r
                    <span>{{ getISBN() }}</span>\r
                  </div>\r
                  \r
                  <div class="metadata-item" *ngIf="getPublisher() !== 'N/A'">\r
                    <strong>Publisher:</strong>\r
                    <span>{{ getPublisher() }}</span>\r
                  </div>\r
\r
                  <div class="metadata-item" *ngIf="getPublishedYear() !== 'N/A'">\r
                    <strong>Published:</strong>\r
                    <span>{{ getPublishedYear() }}</span>\r
                  </div>\r
\r
                  <div class="metadata-item" *ngIf="getPageCount() !== 'N/A'">\r
                    <strong>Pages/Editions:</strong>\r
                    <span>{{ getPageCount() }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="col-md-6">\r
                <div class="metadata-list">\r
                  <div class="metadata-item" *ngIf="hasLanguage()">\r
                    <strong>Language:</strong>\r
                    <span>{{ getLanguage() }}</span>\r
                  </div>\r
\r
                  <div class="metadata-item" *ngIf="book?.format">\r
                    <strong>Format:</strong>\r
                    <span>{{ book!.format }}</span>\r
                  </div>\r
\r
                  <div class="metadata-item" *ngIf="book?.stock !== undefined">\r
                    <strong>Stock:</strong>\r
                    <span class="badge" \r
                          [class.bg-success]="book!.stock! > 10" \r
                          [class.bg-warning]="book!.stock! <= 10 && book!.stock! > 0" \r
                          [class.bg-danger]="book!.stock! === 0">\r
                      {{ book!.stock === 0 ? 'Out of Stock' : book!.stock + ' available' }}\r
                    </span>\r
                  </div>\r
\r
                  <div class="metadata-item" *ngIf="isOpenLibraryBook">\r
                    <strong>Source:</strong>\r
                    <span class="badge bg-info">Open Library</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Additional Info for Open Library Books -->\r
          <div *ngIf="isOpenLibraryBook && openLibraryBook" class="open-library-info mt-4">\r
            <div class="card">\r
              <div class="card-header">\r
                <h6 class="mb-0">\r
                  <i class="fas fa-info-circle me-2"></i>\r
                  Additional Information\r
                </h6>\r
              </div>\r
              <div class="card-body">\r
                <div class="row">\r
                  <div class="col-md-6" *ngIf="openLibraryBook.edition_count">\r
                    <small class="text-muted">Available Editions:</small>\r
                    <div>{{ openLibraryBook.edition_count }} editions</div>\r
                  </div>\r
                  <div class="col-md-6" *ngIf="openLibraryBook.has_fulltext">\r
                    <small class="text-muted">Full Text Available:</small>\r
                    <div><i class="fas fa-check text-success"></i> Yes</div>\r
                  </div>\r
                  <div class="col-md-6" *ngIf="openLibraryBook.want_to_read_count">\r
                    <small class="text-muted">Want to Read:</small>\r
                    <div>{{ openLibraryBook.want_to_read_count }} users</div>\r
                  </div>\r
                  <div class="col-md-6" *ngIf="openLibraryBook.currently_reading_count">\r
                    <small class="text-muted">Currently Reading:</small>\r
                    <div>{{ openLibraryBook.currently_reading_count }} users</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Bottom Actions (Mobile) -->\r
          <div class="bottom-actions d-lg-none mt-4">\r
            <div class="d-grid gap-2">\r
              <button \r
                class="btn btn-lg" \r
                [class.btn-success]="!isInCart()"\r
                [class.btn-secondary]="isInCart()"\r
                [disabled]="isInCart()"\r
                (click)="addToCart()"\r
              >\r
                <i class="fas" [class.fa-shopping-cart]="!isInCart()" [class.fa-check]="isInCart()"></i>\r
                <span class="ms-2">\r
                  {{ isInCart() ? 'In Cart' : 'Add to Cart' }}\r
                </span>\r
                <span *ngIf="getCartQuantity() > 0" class="badge bg-light text-dark ms-2">\r
                  {{ getCartQuantity() }}\r
                </span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/book-detail/book-detail.scss */\n.book-detail-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.book-detail-container .loading-container {\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.book-detail-container .error-container {\n  margin: 40px 0;\n}\n.book-detail-container .back-navigation {\n  margin-bottom: 20px;\n}\n.book-detail-container .book-cover-section .book-cover-container {\n  position: relative;\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.book-detail-container .book-cover-section .book-cover-container .book-cover-large {\n  width: 100%;\n  max-width: 350px;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s ease;\n}\n.book-detail-container .book-cover-section .book-cover-container .book-cover-large:hover {\n  transform: scale(1.02);\n}\n.book-detail-container .book-cover-section .quick-actions .price-section .current-price {\n  font-weight: 600;\n}\n.book-detail-container .book-cover-section .quick-actions .price-section .original-price {\n  font-size: 0.9rem;\n}\n.book-detail-container .book-cover-section .quick-actions .action-buttons .btn {\n  font-weight: 500;\n  border-radius: 8px;\n  padding: 12px 20px;\n  transition: all 0.3s ease;\n}\n.book-detail-container .book-cover-section .quick-actions .action-buttons .btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.book-detail-container .book-cover-section .quick-actions .action-buttons .btn .badge {\n  font-size: 0.75rem;\n}\n.book-detail-container .book-info-section .book-header .book-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 15px;\n  color: #2c3e50;\n}\n@media (max-width: 768px) {\n  .book-detail-container .book-info-section .book-header .book-title {\n    font-size: 2rem;\n  }\n}\n.book-detail-container .book-info-section .book-header .book-author {\n  color: #6c757d;\n  font-weight: 500;\n}\n.book-detail-container .book-info-section .book-header .book-rating .stars .fa-star {\n  font-size: 1.1rem;\n  margin-right: 2px;\n}\n.book-detail-container .book-info-section .book-header .book-rating .rating-text {\n  font-weight: 500;\n  color: #495057;\n}\n.book-detail-container .book-info-section .book-header .book-categories .categories-list .badge {\n  font-size: 0.85rem;\n  padding: 6px 12px;\n  border-radius: 20px;\n  border: 1px solid #dee2e6;\n}\n.book-detail-container .book-info-section .book-description .description-text {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #495057;\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #007bff;\n}\n.book-detail-container .book-info-section .book-metadata .metadata-list .metadata-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #e9ecef;\n}\n.book-detail-container .book-info-section .book-metadata .metadata-list .metadata-item:last-child {\n  border-bottom: none;\n}\n.book-detail-container .book-info-section .book-metadata .metadata-list .metadata-item strong {\n  color: #495057;\n  min-width: 120px;\n  text-align: left;\n}\n.book-detail-container .book-info-section .book-metadata .metadata-list .metadata-item span {\n  color: #6c757d;\n  text-align: right;\n  flex: 1;\n}\n.book-detail-container .book-info-section .book-metadata .metadata-list .metadata-item .badge {\n  font-size: 0.8rem;\n  padding: 4px 8px;\n}\n.book-detail-container .book-info-section .open-library-info .card {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n}\n.book-detail-container .book-info-section .open-library-info .card .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 8px 8px 0 0;\n  border: none;\n}\n.book-detail-container .book-info-section .open-library-info .card .card-header h6 {\n  margin: 0;\n}\n.book-detail-container .book-info-section .open-library-info .card .card-body {\n  padding: 20px;\n}\n.book-detail-container .book-info-section .open-library-info .card .card-body .col-md-6 {\n  margin-bottom: 15px;\n}\n.book-detail-container .book-info-section .open-library-info .card .card-body .col-md-6 small {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.book-detail-container .book-info-section .open-library-info .card .card-body .col-md-6 div {\n  font-size: 1.1rem;\n  margin-top: 5px;\n  color: #495057;\n}\n.book-detail-container .book-info-section .open-library-info .card .card-body .col-md-6 div .fa-check {\n  margin-right: 5px;\n}\n.book-detail-container .book-info-section .bottom-actions {\n  padding: 20px 0;\n  border-top: 1px solid #e9ecef;\n  margin-top: 30px;\n}\n@media (max-width: 768px) {\n  .book-detail-container {\n    padding: 15px;\n  }\n  .book-detail-container .book-detail .book-cover-section {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .book-detail-container .book-detail .book-cover-section .book-cover-container {\n    display: inline-block;\n    max-width: 250px;\n  }\n  .book-detail-container .book-detail .book-info-section .book-header {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .book-detail-container .book-detail .book-info-section .book-metadata .row .col-md-6:first-child {\n    margin-bottom: 20px;\n  }\n}\n@media print {\n  .book-detail-container .back-navigation,\n  .book-detail-container .quick-actions,\n  .book-detail-container .action-buttons,\n  .book-detail-container .bottom-actions {\n    display: none !important;\n  }\n  .book-detail-container .book-detail {\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=book-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: BookService }, { type: OpenLibraryService }, { type: CartService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookDetailComponent, { className: "BookDetailComponent", filePath: "src/app/features/book-detail/book-detail.ts", lineNumber: 15 });
})();
export {
  BookDetailComponent
};
//# sourceMappingURL=chunk-X2UCRHSP.js.map
