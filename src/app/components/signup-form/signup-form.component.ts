import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  username: string;
  password: string;
  confirmPassword: string;

  constructor(private userService: UserService) { }

  signup() {
    if (this.password === this.confirmPassword) {
      // call signup from user service
      this.userService.signup(this.username, this.password, this.confirmPassword)
        .then(res => {
          alert('Signed Up successfully');
        }).catch(err => {
          alert('ERROR, could not sign up');
        });
    } else {
      alert('Password must match');
    }
  }

}
