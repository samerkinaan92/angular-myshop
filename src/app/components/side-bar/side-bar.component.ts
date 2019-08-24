import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  @Output() btnClicked = new EventEmitter();
  @Input() curLang: string;

  constructor(private cartService: CartService, private userService: UserService) { }

  btnClick(btn) {
    this.btnClicked.emit(btn);
  }

}
