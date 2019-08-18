import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}