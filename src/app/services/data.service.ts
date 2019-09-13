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
  private baseUrl: string = 'https://my-angular-shop.herokuapp.com';

  constructor(private http: HttpClient) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.baseUrl + '/api/products')
      .pipe(
        map(json => json as Product[])
      )
      .toPromise();
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.baseUrl + '/api/categories')
      .pipe(
        map(json => json as Category[])
      )
      .toPromise();
  }

  getProduct(id: string): Promise<Product> {
    return this.http.get(`${this.baseUrl}/api/products/${id}`)
      .pipe(
        map(json => json as Product),
      )
      .toPromise();
  }

  addProduct(product: Product): void {
    this.http.post(this.baseUrl + '/api/products', product)
      .toPromise()
      .then();
  }

  editProduct(product: Product, id: string): void {
    this.http.put(`${this.baseUrl}/api/products/${id}`, product)
      .toPromise()
      .then();;
  }
}
