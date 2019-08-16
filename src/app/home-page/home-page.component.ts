import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('onInit', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.9)'
        }),
        animate('0.5s',
          style({
            opacity: 1,
            transform: 'scale(1)'
          }))
      ]),
    ])]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
