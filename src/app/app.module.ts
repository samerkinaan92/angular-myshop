import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LocalizePipe } from './pipes/localize.pipe';
import { ConfirmDirective } from './directives/app-confirm.directive';
import { logInterceptor } from './interceptors/log-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    ProductsPageComponent,
    CategoriesListComponent,
    ProductItemComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    SideBarComponent,
    SocialLinksComponent,
    CartPageComponent,
    LoginFormComponent,
    ContactFormComponent,
    ProductFormComponent,
    LocalizePipe,
    ConfirmDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: logInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
