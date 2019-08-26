import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './guards/auth.guard';
import { UnsavedDataGuard } from './guards/unsaved-data.guard';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartPageComponent, canActivate: [AuthGuard], children: [{
    path: 'product/:id',
    component: ProductDetailsComponent
  }]},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'add-product', component: ProductFormComponent, data: {new: true}, canDeactivate: [UnsavedDataGuard], canActivate: [AuthGuard]},
  {path: 'edit-product/:id', component: ProductFormComponent, data: {new: false}, canDeactivate: [UnsavedDataGuard], canActivate: [AuthGuard]},
  {path: 'login', component: LoginFormComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
