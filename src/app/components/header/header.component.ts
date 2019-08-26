import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LocalizeService } from 'src/app/services/localize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sideBarToggle = new EventEmitter();
  @Output() loginEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  langs: string[];

  constructor(private userService: UserService, private localizeService: LocalizeService) { 
    this.langs = localizeService.getLangs();
  }

  ToggleSideBar(){
    this.sideBarToggle.emit();
  }

  login(){
    this.loginEvent.emit();
  }

  logout(){
    this.userService.logout();
    this.logoutEvent.emit();
  }

  onLangChange(lang: string){
    this.localizeService.setLang(lang);
  }
}
