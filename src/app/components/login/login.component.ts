import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  validFields: boolean = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private routeParams: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnChanges(c: SimpleChange) {
    console.log(c);
  }

  loginUser(): void {
    let currEmail = this.form.value.email;
    let currPassword = this.form.value.password;

    let login;

    if (this.form.valid) {
      login = this.auth.authorize(currEmail, currPassword);

      if (login) {
        // Return to Cart
        this.routeParams.queryParams.subscribe((params) => {
          console.log(params);

          const returnTo = params['returnTo'];
          if (returnTo) {
            this.router.navigate([returnTo]);
          } else {
            this.router.navigate(['/']);
          }
          console.log(returnTo);
        });
      }
    }
  }
}
