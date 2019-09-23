import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  @Input() categoryId: string;
  products: Product[];
  curUser: string;
  userSub: Subscription;

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.dataService.getProducts().then(products => {
      this.products = products;
    })
    .catch(err => {
      console.log(err);
    });
    this.userSub = this.userService.getCurUserSubject().subscribe((name) => {
      this.curUser = name;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
