import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  id: number;
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
