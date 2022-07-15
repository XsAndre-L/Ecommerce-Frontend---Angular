import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // authEvent: EventEmitter = new EventEmitter();
  userDetails: User = {
    id: 0,
    email: '',
    firstName: 'placeholder',
    lastName: 'placeholder',
  };
  validUser: boolean = false;

  _token: string | undefined;

  get token(): string | undefined {
    return this._token;
  }
  set token(token: string | undefined) {
    this.token = token;
  }

  constructor() {}

  authorize(email: string, password: string): boolean {
    // Authenticate User
    //this.token = "hdhfhd";
    this.userDetails = {
      ...this.userDetails,
      email: email,
    };

    // console.log("WORKING")
    this.validUser = true;
    return this.validUser;
  }

  signout() {
    console.log('Sign Out');
    this.validUser = false;
  }
}
