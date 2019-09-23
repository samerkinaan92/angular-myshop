import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { GlobalVariable } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(GlobalVariable.BASE_API_URL + '/api/products')
      .pipe(
        map(json => json as Product[])
      )
      .toPromise();
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(GlobalVariable.BASE_API_URL + '/api/categories')
      .pipe(
        map(json => json as Category[])
      )
      .toPromise();
  }

  getProduct(id: string): Promise<Product> {
    return this.http.get(`${GlobalVariable.BASE_API_URL}/api/products/${id}`)
      .pipe(
        map(json => json as Product),
      )
      .toPromise();
  }

  addProduct(product: Product): Promise<any> {
    return this.http.post(GlobalVariable.BASE_API_URL + '/api/products', product)
      .toPromise();
  }

  editProduct(product: Product, id: string): Promise<any> {
    return this.http.put(`${GlobalVariable.BASE_API_URL}/api/products/${id}`, product)
      .toPromise();
  }
}
