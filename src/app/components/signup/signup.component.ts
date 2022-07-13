import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
    });
  }

  signupUser(): void {}
}
