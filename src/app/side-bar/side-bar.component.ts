import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() btnClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnClick(btn){
    this.btnClicked.emit(btn);
  }

}
