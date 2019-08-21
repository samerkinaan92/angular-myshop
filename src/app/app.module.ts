import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
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
    LocalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
