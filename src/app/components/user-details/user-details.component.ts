import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userDetails?: User;

  constructor(public userService: UserService) {}

  // Lifecycle Hooks
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((details) => {
      this.userDetails = details;
      this.userDetails = {
        ...this.userDetails,
        email: details.email,
        firstName: details.firstname!,
        lastName: details.lastname!,
        password: details.password,
      };
    });
  }

  // DOM Actions
  logoutUser(): void {
    this.userService.signout();
  }
}
