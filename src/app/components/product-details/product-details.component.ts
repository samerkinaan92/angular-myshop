import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productId: number;
  showBtns: boolean;

  constructor(private dataService: DataService, private cartService: CartService, private userService: UserService, private route: ActivatedRoute, private readonly location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((p) => { this.loadProduct(+p.get('id')) });
  }

  loadProduct(id: number): void {
    this.product = this.dataService.getProduct(id);
    this.showBtns = this.route.snapshot.data.showBtns;
  }

  onBackClick() {
    this.location.back();
  }

  addToCart() {
    this.cartService.addItem(this.productId);
  }
}
