import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
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

  allCartItems: { product: Product; amount: number }[] = [];

  constructor(
    public cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {}

  // Runtime Methods
  ngOnInit(): void {
    // this.cartService
    //   .getPendingOrder()
    //   .pipe(
    //     map((item) => {
    //       return item;
    //     })
    //   )
    //   .subscribe((result) => {
    //     console.log(result);
    //   });

    this.cartService.getPendingOrder().subscribe(
      (pendingOrder: any) => {
        this.cartService.cartItems = pendingOrder;
      },
      (error: any) => {},
      () => {
        console.log('Complete Running For');
        for (
          let index = 0;
          index < this.cartService.cartItems.length;
          index++
        ) {
          const element = this.cartService.cartItems[index];
          let currProduct = {
            product: element.product,
            amount: element.amount,
          };

          // console.log('Setting Product');
          // currProduct.product = element.product;
          // currProduct.amount = element.amount;

          this.allCartItems.push(currProduct);
          console.log(this.allCartItems);

          // element.product.subscribe((p) => {
          // });
        }
      }
    );

    // TODO
    this.canCheckOut = this.cartService.cartItems.length > 0;

    // this.cartService.getPendingOrder().subscribe(
    //   (x: any) => {}, // On Emit
    //   (error: any) => {}, // On Error
    //   () => {} // On Complete
    // );

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
