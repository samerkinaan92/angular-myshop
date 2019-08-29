import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pcUrl = '../../assets/img/pc.jpg';
  private gpuUrl = '../../assets/img/gpu.jpg';
  private monUrl = '../../assets/img/monitor.jpg';
  private products: Product[] = [
    {
      id: 0,
      categoryId: '1',
      imgUrl: this.pcUrl,
      title: 'PC1',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 1,
      categoryId: '1',
      imgUrl: this.pcUrl,
      title: 'PC1',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 2,
      categoryId: '1',
      imgUrl: this.pcUrl,
      title: 'PC1',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 3,
      categoryId: '2',
      imgUrl: this.gpuUrl,
      title: 'GPU',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 4,
      categoryId: '2',
      imgUrl: this.gpuUrl,
      title: 'GPU',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 5,
      categoryId: '2',
      imgUrl: this.gpuUrl,
      title: 'GPU',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 6,
      categoryId: '3',
      imgUrl: this.monUrl,
      title: 'monitor',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 7,
      categoryId: '3',
      imgUrl: this.monUrl,
      title: 'monitor',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 8,
      categoryId: '3',
      imgUrl: this.monUrl,
      title: 'monitor',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 9,
      categoryId: '3',
      imgUrl: this.monUrl,
      title: 'monitor',
      price: 200,
      description: 'i7 8GB'
    },
    {
      id: 10,
      categoryId: '3',
      imgUrl: this.monUrl,
      title: 'monitor',
      price: 200,
      description: 'i7 8GB'
    }
  ];

  private categories: Category[] = [
    { id: '1', title: 'Computers' },
    { id: '2', title: 'Hardwares' },
    { id: '3', title: 'Monitors' }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getCategories():Category[] {
    return this.categories;
  }

  getProduct(id: number): Product{
    return this.products[id];
  }

  addProduct(product: Product): void{
    this.products.push(product);
  }

  editProduct(product: Product, id: number): void{
    this.products[id] = product;
  }
}
