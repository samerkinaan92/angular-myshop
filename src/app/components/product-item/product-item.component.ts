import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  animations: [
    trigger('onInit', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('0.5s 0.2s',
          style({
            opacity: 1,
          }))
      ]),
    ])]
})
export class ProductItemComponent implements OnInit {

  product: Product;
  @Input() productId: number;

  constructor(private dataService: DataService, private cartService: CartService, private userService: UserService) { }

  ngOnInit() {
    this.product = this.dataService.getProduct(this.productId);
  }

  addToCart(){
    this.cartService.addItem(this.productId);
  }

  

}