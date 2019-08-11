import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  url = '../../assets/img/pc.jpg';
  products: Product[] = [
    {
      categoryId: "1",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "1",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "1",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "2",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "2",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "2",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB",
    },
    {
      categoryId: "3",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB",
    },
    {
      categoryId: "3",
      image: this.url,
      title: "PC1",
      price: 200,
      description: "i7 8GB",
    }
  ];

  constructor() {}

  getProducts(){
    return this.products;
  }
}
