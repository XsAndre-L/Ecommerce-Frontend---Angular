import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  passMatchError: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl<string | null>(null, [
        Validators.email,
        Validators.required,
      ]),
      firstName: new FormControl<string | null>(null, Validators.required),
      lastName: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, [
        Validators.minLength(8),
        Validators.required,
      ]),
      password2: new FormControl<string | null>(null, [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  signupUser(): void {
    if (!this.form.valid) {
      return;
    }

    if (this.form.value.password == this.form.value.password2) {
      this.passMatchError = false;
      console.log('Equal');
      console.log(this.form.value);
    } else {
      this.passMatchError = true;
      console.log('Passwords Do not Match');
    }
  }
}
