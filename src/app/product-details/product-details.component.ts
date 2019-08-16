import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product: Product;
  @Input() productId;
  @Output() back = new EventEmitter();
 
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.product = this.dataService.getProduct(this.productId);
  }

  onBackClick(){
    this.back.emit();
  }

}
