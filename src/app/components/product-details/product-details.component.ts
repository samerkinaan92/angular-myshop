import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product: Product;
  productId: string;
  showBtns: boolean;
  curUser: string;
  hasPermission: boolean = false;
  routeSub: Subscription;
  userSub: Subscription;
  permissionSub: Subscription;

  constructor(private dataService: DataService, private cartService: CartService, private userService: UserService, private route: ActivatedRoute, private readonly location: Location) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((p) => { this.loadProduct(p.get('id')) });
    this.userSub = this.userService.getCurUserSubject().subscribe((userName) => {
      this.curUser = userName;
    });

    this.permissionSub = this.userService.hasPermissionSub().subscribe((permission => {
      this.hasPermission = permission;
    }));
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.userSub.unsubscribe();
    this.permissionSub.unsubscribe();
  }

  loadProduct(id: string): void {
    this.dataService.getProduct(id).then(product => {
      this.product = product;
    });
    this.showBtns = this.route.snapshot.data.showBtns;
  }

  addToCart() {
    this.cartService.addItem(this.productId);
  }
}
