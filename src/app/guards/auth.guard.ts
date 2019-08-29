import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (state.url === '/add-product' || state.url.includes('/edit-product')) {
      if (this.userService.hasPermission()) {
        return true;
      } else {
        alert('User does not permission! Plaese login to admin');
        const tree: UrlTree = this.router.parseUrl('/login');
        return tree;
      }
    } else {
      if (this.userService.getCurUser() != null) {
        return true;
      } else {
        alert('User is not logged in');
        const tree: UrlTree = this.router.parseUrl('/login');
        return tree;
      }
    }
  }
}
