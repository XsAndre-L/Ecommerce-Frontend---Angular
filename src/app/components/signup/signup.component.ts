import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  signupUser(): void {

  }
}
