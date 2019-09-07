import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LocalizeService } from 'src/app/services/localize.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sideBarToggle = new EventEmitter();
  langs: string[];
  userName: string;
  userNameSubject: Subscription;

  constructor(private userService: UserService, private localizeService: LocalizeService, private router: Router) {
    this.langs = localizeService.getLangs();
  }

  ngOnInit(): void {
    this.userNameSubject = this.userService.getCurUserSubject().subscribe(value => {
      this.userName = value;
    })
  }

  ngOnDestroy(): void {
    this.userNameSubject.unsubscribe();
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
