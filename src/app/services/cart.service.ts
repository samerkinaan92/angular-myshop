import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  constructor(private dataService: DataService) { }

  addItem(productId: number) {
    this.cart.push(this.dataService.getProduct(productId));
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  getItems(): Product[] {
    return this.cart;
  }

  getItemsCount(): number {
    return this.cart.length;
  }
}
