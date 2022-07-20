import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/models/product';
import { switchMap } from 'rxjs';

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

  allCartItems: { product: Product; amount: number }[] = [];

  constructor(
    public cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {}

  // Runtime Methods
  ngOnInit(): void {
    this.canCheckOut = this.cartService.cartItems.length > 0;
    this.cartService.getPendingOrder().subscribe((pendingOrder) => {
      this.cartService.cartItems = pendingOrder;
      for (let index = 0; index < pendingOrder.length; index++) {
        const element = pendingOrder[index];
        let currProduct: { product: Product; amount: number };

        element.product.subscribe((p) => {
          currProduct.product = p;
          currProduct.amount = element.amount;
          this.allCartItems.push(currProduct);
          console.log(this.allCartItems);
        });
      }
    });

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
