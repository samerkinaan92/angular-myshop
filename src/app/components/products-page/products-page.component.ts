import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  animations: [
    trigger('onInit', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('0.5s',
          style({
            opacity: 1,
          }))
      ]),
    ])]
})
export class ProductsPageComponent implements OnInit {

  isProducts: boolean = true;
  products: Product[];
  categoryId: string;
  productId: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
    this.categoryId = "0";
  }

  showProducts(id){
    this.categoryId = id;
  }

  openProductDetails(productId){
    this.isProducts = false;
    this.productId = productId;
    console.log(this.productId);
  }

  closeDetails(){
    this.isProducts = true;
  }
}
