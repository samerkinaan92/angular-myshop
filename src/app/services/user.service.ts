import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, UserType } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private curUser: User = null;
  private curUserSub = new BehaviorSubject<string>(null);
  private permissionSub = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) {
    this.loadLocalUserStorage();
  }


  getCurUser(): User {
    return this.curUser;
  }

  getCurUserSubject(): BehaviorSubject<string> {
    this.curUserSub.next((this.curUser) ? this.curUser.username : null);
    return this.curUserSub;
  }

  hasPermission(): boolean {
    if (this.curUser != null && this.curUser.type === UserType.admin) {
      return true;
    } else {
      return false;
    }
  }

  hasPermissionSub(): BehaviorSubject<boolean> {
    this.permissionSub.next(this.hasPermission());
    return this.permissionSub;
  }

  login(username: string, password: string): Promise<boolean> {
    return this.http.post(GlobalVariable.BASE_API_URL + '/users/login', { username, password }, { observe: 'response' })
      .toPromise()
      .then(res => {
        if (res.status === 200) {
          const type: UserType = (((res.body as any).type === 'admin') ? UserType.admin : UserType.user);
          this.curUser = {
            type,
            token: (res.body as any).token,
            username
          };
          this.curUserSub.next(username);
          this.permissionSub.next(this.hasPermission());
          this.setLocalUserStorage();
          return true;
        }
        return false;
      })
      .catch(err => {
        return false;
      });
  }

  signup(username: string, password: string, repeat_password: string): Promise<boolean> {
    console.log(GlobalVariable.BASE_API_URL);
    return this.http.post(GlobalVariable.BASE_API_URL + '/users/signup', { username, password, repeat_password })
      .toPromise()
      .then(res => {
        return true;
      })
      .catch(err => {
        console.error(err);
        return err;
      });
  }

  logout(): void {
    this.curUser = null;
    this.curUserSub.next(null);
    this.permissionSub.next(false);
    this.setLocalUserStorage();
  }

  private loadLocalUserStorage(): void {
    const json = localStorage.getItem('curUserShopApp');
    if (json) {
      this.curUser = JSON.parse(json);
      if (this.curUser) {
        this.curUserSub.next(this.curUser.username);
        this.permissionSub.next(this.hasPermission());
      }
    }
  }

  private setLocalUserStorage(): void {
    const json = JSON.stringify(this.curUser);
    localStorage.setItem('curUserShopApp', json);
  }
}
