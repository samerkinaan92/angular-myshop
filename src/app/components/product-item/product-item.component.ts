import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

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
export class ProductItemComponent {

  @Input() product: Product;
  @Input() curUser: string;

  constructor(private cartService: CartService) { }


  addToCart() {
    this.cartService.addItem(this.product, 1);
  }
}