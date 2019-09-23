import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalVariable } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cartItems: Product[] = [];
  private userName: string;
  private subjectItemCount = new BehaviorSubject<number>(0);

  constructor(private userService: UserService, private http: HttpClient) {
    this.userService.getCurUserSubject().subscribe(value => {
      this.userName = value;
      this.loadCartItems();
    });
  }

  addItem(product: Product, quantity: number): Promise<boolean> {
    if (this.userName) {
      this.http.post(`${GlobalVariable.BASE_API_URL}/api/carts/${this.userName}`, { productId: product._id, quantity })
        .toPromise()
        .then(res => {
          this.cartItems.push(product);
          this.subjectItemCount.next(this.cartItems.length);
          return true;
        })
        .catch(err => {
          console.log(err);
          return false;
        });
    } else {
      return new Promise((resolve, reject) => {
        resolve(false);
      })
    }
  }

  removeItem(productId: string, i: number): void {
    if (this.userName) {
      this.http.delete(`${GlobalVariable.BASE_API_URL}/api/carts/${this.userName}.${productId}`)
        .toPromise()
        .then(res => {
          this.cartItems.splice(i, 1);
          this.subjectItemCount.next(this.cartItems.length);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  getItems(): Product[] {
    return this.cartItems;
  }

  loadCartItems(): void {
    if (this.userName) {
      this.http.get(`${GlobalVariable.BASE_API_URL}/api/carts/${this.userName}`)
        .pipe(map(json => json as Product[]))
        .toPromise()
        .then(res => {
          this.cartItems = res;
          this.subjectItemCount.next(this.cartItems.length);
        });
    } else {
      this.cartItems = [];
      this.subjectItemCount.next(0);
    }
  }

  getItemsCount(): number {
    if (this.userName) {
      return this.cartItems.length;
    }
    return 0;
  }

  getItemsCountSubject(): Subject<number> {
    const num = this.getItemsCount();
    this.subjectItemCount.next(num);
    return this.subjectItemCount;
  }
}