import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() categoryId: string;
  products: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }
}
