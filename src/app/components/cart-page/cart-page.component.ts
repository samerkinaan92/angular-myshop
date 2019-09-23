import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  items: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeItem(id: string, i: number): void {
    this.cartService.removeItem(id, i);
  }

}
