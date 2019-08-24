import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  email: string;
  subject: string;
  msg: string;
  isSent: boolean = false;

  constructor() { }

  send(){
    console.log("Email:", this.email, ",Subject:", this.subject, ",msg:", this.msg);
    this.isSent = true;
  }

}
