import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from '../global/global';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  // User Section
  authorize(userInfo: User): Observable<string> {
    console.log(userInfo);
    console.log('Attempting Login');
    return this.http.post<string>(`${Globals.endPoint}/user/login`, userInfo);
  }

  signout() {
    console.log('Sign Out');
    this._token = '';
    this.validUser = false;
  }

  getUserDetails(): Observable<User> {
    return this.http.get<User>(`${Globals.endPoint}/user`, {
      headers: new HttpHeaders({ Authorization: '' + this.token }),
    });
  }

  createAccount(newUser: User): Observable<string> {
    return this.http.post<string>(
      `${Globals.endPoint}/user/signup`,
      newUser,
      {}
    );
  }

  updateUserDetails() {}

  // Admin Section
  getUsers() {}
}
