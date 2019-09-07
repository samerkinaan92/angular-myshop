import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products: Product[];

  private categories: Category[];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData(): void {
    this.http.get('../../assets/data/products.json')
      .pipe(
        map(json => json as Product[])
      )
      .toPromise()
      .then(products => this.products = products)
      .catch();

    this.http.get('../../assets/data/categories.json')
      .pipe(
        map(json => json as Category[])
      )
      .toPromise()
      .then(categories => this.categories = categories)
      .catch();
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getProduct(id: number): Product {
    return this.products[id];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  editProduct(product: Product, id: number): void {
    this.products[id] = product;
  }
}
