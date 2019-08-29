import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

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
    this.categories = this.dataService.getCategories();
  }

  categoryClicked(id) {
    this.openCategory.emit(id);
  }

}
