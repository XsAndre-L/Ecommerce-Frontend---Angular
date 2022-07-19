import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { orderInfo } from '../models/orderInfo';
import { Product } from '../models/product';
import { ProductService } from './product.service';
export type CartProduct = {
  product: Product;
  amount: number;
};
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartProduct[] = [];

  get cartCount(): number {
    return this.cartItems.reduce((acc, currItem) => {
      return acc + currItem.amount;
    }, 0);
  }

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  // getPendingOrder(): Observable<CartProduct[] | undefined> {

  //   return this.http.get<CartProduct[]>('',{}).pipe(map((products: orderInfo[])=>{
  //     let cartProducts[] = [];
  //     for (let index = 0; index < products.length; index++) {
  //       const element = products[index];

  //       cartProducts.push({product: this.productService.getProductDetails(element.product_id).subscribe(), element.amount})
  //     }
  //     return cartProducts;
  //   }))
  // }

  getTotalPrice(): number {
    let total: number = 0;

    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.product.price * element.amount;
    }

    return total;
  }

  addToCart() {}

  removeFromCart() {}

  checkOutCart() {}
}
