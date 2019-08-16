import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product: Product;
  @Input() productId;
 
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.product = this.dataService.getProduct(this.productId);
  }

}
