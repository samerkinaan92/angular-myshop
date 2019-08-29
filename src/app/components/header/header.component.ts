import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LocalizeService } from 'src/app/services/localize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sideBarToggle = new EventEmitter();
  langs: string[];

  constructor(private userService: UserService, private localizeService: LocalizeService, private router: Router) {
    this.langs = localizeService.getLangs();
  }

  ToggleSideBar() {
    this.sideBarToggle.emit();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }

  onLangChange(lang: string) {
    this.localizeService.setLang(lang);
  }
}
