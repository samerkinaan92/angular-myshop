import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [
    {id: "1",
    title: "Computers"},
    {id: "2",
    title: "Hardwares"},
    {id: "3",
    title: "Monitors"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
