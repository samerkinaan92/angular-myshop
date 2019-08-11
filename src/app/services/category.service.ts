import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {id: "1",
    title: "Computers"},
    {id: "2",
    title: "Hardwares"},
    {id: "3",
    title: "Monitors"}
  ];

  constructor() { }

  getCategories(){
    return this.categories;
  }
}
