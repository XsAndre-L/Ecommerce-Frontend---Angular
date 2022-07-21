import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  validFields: boolean = true;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private router: Router,
    private routeParams: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnChanges(c: SimpleChange) {
    console.log(c);
  }

  loginUser(): void {
    const loginUser: User = {
      id: -1,
      email: this.form.value.email,
      firstName: '',
      lastName: '',
      password: this.form.value.password,
    };

    let login;

    if (this.form.valid) {
      login = this.userService
        .authorize(loginUser) //this.form.value.email, this.form.value.password
        .subscribe((result) => {
          console.log(result);
          if (result) {
            this.userService._token = result;
            this.userService.validUser = true;

            this.cartService.updateCartFrontEnd();

            // Return to Cart
            const snap = this.routeParams.snapshot.queryParams;

            if (snap['returnTo'] !== undefined) {
              const returnTo: string | undefined = snap['returnTo'][0];
              this.router.navigate([returnTo]);
            } else {
              this.router.navigate(['/']);
            }
          }
        });
    } else {
      return;
    }
  }
}
