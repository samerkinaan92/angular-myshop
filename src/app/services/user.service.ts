import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, UserType } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{ type: 0, username: 'admin', password: 'admin' }, { type: 1, username: 'user', password: 'user' }];
  private curUser: User = null;
  private userSub = new BehaviorSubject<string>(null);
  private permissionSub = new BehaviorSubject<boolean>(false);
  constructor() { }

  getCurUser(): string {
    if (this.curUser == null) {
      return null;
    } else {
      return this.curUser.username;
    }
  }

  getCurUserSubject(): BehaviorSubject<string> {
    this.userSub.next(this.getCurUser());
    return this.userSub;
  }

  hasPermission(): boolean {
    if (this.curUser != null && this.curUser.type === 0) {
      return true;
    } else {
      return false;
    }
  }

  hasPermissionSub(): BehaviorSubject<boolean> {
    this.permissionSub.next(this.hasPermission());
    return this.permissionSub;
  }

  login(username: string, password: string): boolean {
    for (const user of this.users) {
      if (user.username === username) {
        if (user.password === password) {
          this.curUser = user;
          this.userSub.next(user.username);
          if(user.type === UserType.admin){
            this.permissionSub.next(true);
          }else{
            this.permissionSub.next(false);
          }
          return true;
        }
      }
    }
    return false;
  }

  logout(): void {
    this.curUser = null;
    this.userSub.next(null);
    this.permissionSub.next(false);
  }
}
