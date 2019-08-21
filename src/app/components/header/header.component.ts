import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sideBarToggle = new EventEmitter();
  @Output() loginEvent = new EventEmitter();
  @Output() langEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();

  constructor(private userService: UserService) { }

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
    this.langEvent.emit(lang);
  }
}
