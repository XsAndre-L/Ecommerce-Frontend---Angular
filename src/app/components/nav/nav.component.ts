import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  cartContents: number = 0;

  constructor(
    public userService: UserService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    // const observer = {
    //   next: (pendingOrder: any) => {
    //     this.cartService.cartItems = pendingOrder;
    //     this.cartContents = this.cartService.cartItems.length;
    //   },
    //   error: (error: any) => {},
    //   complete: () => {},
    // };
    // this.cartService.getPendingOrder().subscribe(observer);
  }
}
