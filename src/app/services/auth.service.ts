import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // authEvent: EventEmitter = new EventEmitter();

  validUser: boolean = false;

  _token: string | undefined;

  get token(): string | undefined {
    return this._token;
  }
  set token(token: string | undefined) {
    this.token = token;
  }

  constructor() { }

  authorize(email: string, password: string) {

    // Authenticate User
    //this.token = "hdhfhd";
    console.log("WORKING")
    this.validUser = true;

  }

  signout() {
    console.log("Sign Out")
    this.validUser = false;
  }
}
