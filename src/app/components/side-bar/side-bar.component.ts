import { Component, OnInit, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  cartCount: number;
  userName: string;
  hasPerm: boolean;
  cartCountSub: Subscription;
  userNameSub: Subscription;
  permissionSub: Subscription;

  constructor(private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {
    this.cartCountSub = this.cartService.getItemsCountSubject().subscribe(count => {
      this.cartCount = count;
    });

    this.userNameSub = this.userService.getCurUserSubject().subscribe(name => {
      this.userName = name;
    });

    this.permissionSub = this.userService.hasPermissionSub().subscribe((has) =>{
      this.hasPerm = has;
    });
  }

  ngOnDestroy(): void {
    this.cartCountSub.unsubscribe();
    this.userNameSub.unsubscribe();
    this.permissionSub.unsubscribe();
  }
}
