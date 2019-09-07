import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

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
export class ProductItemComponent implements OnInit, OnDestroy {

  product: Product;
  @Input() productId: number;
  curUser: string;
  userSub: Subscription;

  constructor(private dataService: DataService, private cartService: CartService, private userService: UserService) { }

  ngOnInit() {
    this.product = this.dataService.getProduct(this.productId);
    this.userSub = this.userService.getCurUserSubject().subscribe((name) => {
      this.curUser = name;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  addToCart() {
    this.cartService.addItem(this.productId);
  }
}