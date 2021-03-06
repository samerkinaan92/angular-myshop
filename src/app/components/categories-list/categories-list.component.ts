import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  @Output() openCategory = new EventEmitter();

  categories: Category[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCategories().then(categories => {
      this.categories = categories;
    });
  }

  categoryClicked(id) {
    this.openCategory.emit(id);
  }

}
