import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curPage: string = 'home';
  changePage(page){
    this.curPage = page;
  }
}
