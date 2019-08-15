import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '8%'
      })),
      state('closed', style({
        width: '0%'
      })),
      transition('open <=> closed', [animate('0.5s')])
    ])
  ]
})
export class AppComponent {

  isOpen: boolean = false;

  curPage: string = 'home';
  changePage(page){
    this.curPage = page;
  }

  toggleSideBar(){
    this.isOpen = !this.isOpen;
  }
}
