import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() categoryId: string;
  products: Product[];
  @Output() openProductDetails = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

  openProduct(productId: number){
    this.openProductDetails.emit(productId);
  }

}
