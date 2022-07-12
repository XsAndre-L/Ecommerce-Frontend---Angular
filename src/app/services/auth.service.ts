import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // authEvent: EventEmitter = new EventEmitter();
  userDetails: User;
  validUser: boolean = false;

  _token: string | undefined;

  get token(): string | undefined {
    return this._token;
  }
  set token(token: string | undefined) {
    this.token = token;
  }

  constructor() {
    this.userDetails = {
      id: 0,
      email: "",
      firstName: "",
      lastName: "",
    }
  }

  authorize(email: string, password: string): boolean {

    // Authenticate User
    //this.token = "hdhfhd";
    this.userDetails.email = email;
    console.log(email);
    this.userDetails.firstName = "placeholder";
    this.userDetails.lastName = "placeholder";

    // console.log("WORKING")
    this.validUser = true;
    return this.validUser;

  }

  signout() {
    console.log("Sign Out")
    this.validUser = false;
  }
}
