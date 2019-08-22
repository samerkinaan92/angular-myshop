import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{ type: 0, username: 'admin', password: 'admin' }, { type: 1, username: 'user', password: 'user' }];
  private curUser: User = null;
  constructor() { }

  getCurUser() {
    if (this.curUser == null) {
      return null;
    } else {
      return this.curUser.username;
    }
  }

  hasPermission() {
    if (this.curUser != null && this.curUser.type === 0) {
      return true;
    } else {
      return false;
    }
  }

  login(username: string, password: string) {
    for (const user of this.users) {
      if (user.username === username) {
        if (user.password === password) {
          this.curUser = user;
          return true;
        }
      }
    }
    return false;
  }

  logout() {
    this.curUser = null;
  }
}
