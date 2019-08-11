import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];
  categoryId: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  showProducts(id){
    this.categoryId = id;
  }

}
