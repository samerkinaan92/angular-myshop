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

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.username, this.password)
      .then(res => {
        if(res){
          alert('Logged in succesfuly');
        }else{
          alert('Wrong username or password');
        }
      });
  }

}
