import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '15%'
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
  lang: string;
  curPage: string = 'home';
  
  changePage(page){
    this.curPage = page;
  }

  toggleSideBar(){
    this.isOpen = !this.isOpen;
  }

  login(){
    this.curPage = 'login';
  }

  langEvent(lang: string){
    this.lang = lang;
  }
}
