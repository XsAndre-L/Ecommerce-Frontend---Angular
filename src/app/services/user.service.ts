import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // authEvent: EventEmitter = new EventEmitter();
  userDetails: User = {
    id: -1,
    email: '',
    firstName: 'placeholder',
    lastName: 'placeholder',
    password: '',
  };
  validUser: boolean = false;

  _token: string | undefined;

  get token(): string | undefined {
    return this._token;
  }
  set token(token: string | undefined) {
    this.token = token;
  }

  constructor(private http: HttpClient) {}

  authorize(userInfo: User): Observable<string> {
    // this.userDetails = {
    //   ...this.userDetails,
    //   email: email,
    //   password: password,
    // };

    console.log(userInfo);
    console.log('Attempting Login');
    return this.http.post<string>('http://localhost:3000/user/login', userInfo);

    // TK.subscribe((token) => {
    //   this._token = token;

    //   if (this.token) {
    //     this.validUser = true;
    //   }
    //   return this.validUser;
    // });
  }

  signout() {
    console.log('Sign Out');
    this.validUser = false;
  }

  // User Section

  getUsers() {}

  getUserDetails(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/user', {
      headers: new HttpHeaders({ Authorization: '' + this.token }),
    });
  }

  createAccount(newUser: User): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3000/user/signup',
      newUser,
      {}
    );
  }

  authenticateUser() {}

  updateUserDetails() {}
}
