import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // cartItems: string[] = [];
  // allCartItems: { product: Product; amount: number }[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    console.log('IN CART');

    // const observer = {
    //   next: (pendingOrder: any) => {
    //     this.cartService.cartItems = pendingOrder;
    //   },
    //   error: (error: any) => {},
    //   complete: () => {},
    // };
    // this.cartService.getPendingOrder().subscribe(observer);

    this.cartService.updateCartFrontEnd();
  }
}
