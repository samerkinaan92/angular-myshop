import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url = "../../assets/img/pc.jpg";

  private cart: Product[] = [{
    categoryId: "1",
    imgUrl: this.url,
    title: "PC1",
    price: 200,
    description: "i7 8GB"
  }, {
    categoryId: "2",
    imgUrl: this.url,
    title: "GPU",
    price: 200,
    description: "i7 8GB"
  }, {
    categoryId: "3",
    imgUrl: this.url,
    title: "monitor",
    price: 200,
    description: "i7 8GB"
  }];

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
