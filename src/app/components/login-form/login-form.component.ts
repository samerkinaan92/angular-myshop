import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  username: string;
  password: string;
  loginMsg = ''

  constructor(private userService: UserService) { }

  login() {
    if (this.userService.login(this.username, this.password)) {
      this.loginMsg = 'Logged in succesfully';
    } else {
      this.loginMsg = 'username or password are wrong';
    }
  }

}
