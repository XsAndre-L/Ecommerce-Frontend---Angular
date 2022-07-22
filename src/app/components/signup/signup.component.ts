import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  passMatchError: boolean = false;
  authError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl<string | null>('', [
        Validators.email,
        Validators.required,
      ]),
      firstName: new FormControl<string | null>('', Validators.required),
      lastName: new FormControl<string | null>('', Validators.required),
      password: new FormControl<string | null>('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      password2: new FormControl<string | null>('', [
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

      const newUser: User = {
        id: -1,
        email: this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        password: this.form.value.password,
      };
      console.log('Creating Account');

      // const observer = {
      //   next: (result: any)=>{
      //     this.userService._token = result;
      //     this.userService.validUser = true;
      //     this.router.navigate(['/']);},
      //   error: (error: any)=>{console.log('ERROR: ' + error)},
      //   complete: ()=>{}
      // }
      this.userService
        .createAccount(newUser)
        .pipe(
          catchError((e) => {
            console.log(e);
            this.authError = true;
            return of(e);
          })
        )
        .subscribe();
    } else {
      this.passMatchError = true;
      console.log('Passwords Do not Match');
    }
  }
}
