import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts: Cart[] = [];
  private subjectItemCount = new BehaviorSubject<number>(0);

  constructor(private dataService: DataService, private userService: UserService) {
    userService.getCurUserSubject().subscribe(value => {
      const num = this.getItemsCount();
      this.subjectItemCount.next(num);
    });
  }

  addItem(productId: number): void {
    const userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          cart.products.push(productId);
          this.subjectItemCount.next(cart.products.length);

          break;
        }
      }
      this.carts.push({ user: userName, products: [productId] });
    }
  }

  removeItem(index: number): void {
    console.log('removeItem()');
    const userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          cart.products.splice(index, 1);
          this.subjectItemCount.next(cart.products.length);
          break;
        }
      }
    }
  }

  getItems(): Product[] {
    const userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          const products: Product[] = [];
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
    const userName = this.userService.getCurUser();
    if (userName != null) {
      for (const cart of this.carts) {
        if (cart.user === userName) {
          return cart.products.length;
        }
      }
    }
    return 0;
  }

  getItemsCountSubject(): Subject<number> {
    const num = this.getItemsCount();
    this.subjectItemCount.next(num);
    return this.subjectItemCount;
  }
}