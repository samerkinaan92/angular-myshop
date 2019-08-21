import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts: Cart[] = [];

  constructor(private dataService: DataService, private userService: UserService) { }

  addItem(productId: number) {
    let userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          cart.products.push(this.dataService.getProduct(productId));
        }
      }
      this.carts.push({user: userName, products: [this.dataService.getProduct(productId)]});
    }
  }

  removeItem(index: number) {
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
          return cart.products;
        }
      }
      return [];
    }
    return null;
  }

  getItemsCount(): number {
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