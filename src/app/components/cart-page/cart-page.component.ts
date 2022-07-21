import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { UserService } from 'src/app/services/user.service';
import { CartProduct, CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/models/product';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartOrder: Order = {
    id: 1,
    user_id: this.userService.userDetails.id!,
    status: 'pending',
  };
  canCheckOut: boolean = false;

  constructor(
    public cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {}

  // Runtime Methods
  ngOnInit(): void {
    console.log('In Cart Page');

    // this.cartService.getPendingOrder().subscribe(observer);
    this.cartService.updateCartFrontEnd();
    this.canCheckOut = this.cartService.cartItems.length > 0;

    // this.allCartItems;
  }

  // DOM Actions
  checkOut() {
    if (!this.canCheckOut) {
      return;
    }

    if (this.userService.validUser) {
      console.log('Continue Checkout Journey!');
      this.orderService.submitOrder(this.cartOrder);
      this.cartService.cartItems = [];
      this.canCheckOut = false;
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnTo: ['/cart'] },
      });
    }
  }

  deleteCurrItem(e: any) {
    this.cartService.removeFromCart(e).subscribe((result) => {
      console.log(result);
      this.canCheckOut = this.cartService.cartItems.length > 1; // could be done beter because remove from cart could fail and in this case the button would still be disabled
      this.cartService.updateCartFrontEnd();
    });
  }
}
