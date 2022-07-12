import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    console.log('www')
    const login = this.auth.authorize(this.email, this.password);

    if (login) {
      this.router.navigate(['/'])
    }
  }


}
