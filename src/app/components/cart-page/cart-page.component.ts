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
    let observer = {
      next: (pendingOrder: CartProduct[]) => {
        this.cartService.cartItems = pendingOrder;
        console.log(pendingOrder.length);
      },
      error: (error: any) => {},
      complete: () => {
        // TODO
        console.log(this.cartService.cartCount);
        this.canCheckOut = this.cartService.cartCount > 0;
      },
    };

    this.cartService.getPendingOrder().subscribe(observer);

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
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnTo: ['/cart'] },
      });
    }
  }

  deleteCurrItem(e: any) {
    // this.cartService.cartItems = this.cartService.cartItems.filter(
    //   (p) => p.product.name !== e.product.name
    // );

    this.cartService.removeFromCart();
  }
}
