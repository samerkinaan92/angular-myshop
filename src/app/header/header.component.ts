import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() btnClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnClick(btn){
    this.btnClicked.emit(btn);
  }
}
