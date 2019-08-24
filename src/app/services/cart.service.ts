import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts: Cart[] = [];

  constructor(private dataService: DataService, private userService: UserService) { }

  addItem(productId: number):void {
    let userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          cart.products.push(productId);
        }
      }
      this.carts.push({user: userName, products: [productId]});
    }
  }

  removeItem(index: number):void {
    let userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          cart.products.splice(index, 1);
        }
      }
    }
  }

  getItems(): Product[] {
    let userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          let products: Product[] = [];
          for (const id of cart.products) {
            products.push(this.dataService.getProduct(id));
          }
          return products;
        }
      }
      return [];
    }
    return null;
  }

  getItemsCount(): number {
    console.log("cart");
    
    let userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          return cart.products.length;
        }
      }
    }
    return 0;
  }
}