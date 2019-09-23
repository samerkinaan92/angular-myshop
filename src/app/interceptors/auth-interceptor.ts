import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user: User = this.userService.getCurUser();
        if (user) {
            req = req.clone({
                headers: req.headers.set('Authorization', 'bearer ' + user.token)
            });
        }
        return next.handle(req);
    }
}