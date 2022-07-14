import { Injectable } from '@angular/core';
import { Product } from '../models/product';
export type CartProduct = {
  product: Product;
  amount: number;
};
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartProduct[] = [];

  constructor() {}

  getTotalPrice(): number {
    let total: number = 0;

    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.product.price * element.amount;
    }

    return total;
  }
}
