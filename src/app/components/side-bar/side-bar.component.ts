import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() btnClicked = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  btnClick(btn){
    this.btnClicked.emit(btn);
    console.log(this.cartService.getItemsCount());
  }

}
