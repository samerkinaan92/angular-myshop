import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private url = "../../assets/img/pc.jpg";
  private products: Product[] = [
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
      title: "GPU",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "2",
      image: this.url,
      title: "GPU",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "2",
      image: this.url,
      title: "GPU",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "monitor",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "monitor",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "monitor",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "monitor",
      price: 200,
      description: "i7 8GB"
    },
    {
      categoryId: "3",
      image: this.url,
      title: "monitor",
      price: 200,
      description: "i7 8GB"
    }
  ];

  private categories: Category[] = [
    { id: "1", title: "Computers" },
    { id: "2", title: "Hardwares" },
    { id: "3", title: "Monitors" },
    { id: "0", title: "All" }
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getCategories() {
    return this.categories;
  }

  getProduct(id: number){
    return this.products[id];
  }
}
