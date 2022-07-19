import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  canCheckOut: boolean = false;

  cartOrder: Order = {
    id: 1,
    user_id: this.userService.userDetails.id!,
    status: 'pending',
  };

  constructor(
    private userService: UserService,
    public cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.canCheckOut = this.cartService.cartItems.length > 0;
  }

  deleteCurrItem(e: any) {
    this.cartService.cartItems = this.cartService.cartItems.filter(
      (p) => p.product.name !== e.product.name
    );
  }

  checkOut() {
    if (!this.canCheckOut) {
      return;
    }

    if (this.userService.validUser) {
      console.log('Continue Checkout Journey!');
      this.orderService.submitOrder(this.cartOrder);
      this.cartService.cartItems = [];
      this.canCheckOut = false;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnTo: ['/cart'] },
      });
    }
  }
}
