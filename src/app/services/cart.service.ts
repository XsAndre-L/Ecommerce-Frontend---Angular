import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderInfo } from '../models/orderInfo';
import { Product } from '../models/product';
import { ProductService } from './product.service';
import { UserService } from './user.service';

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
    private productService: ProductService,
    private userService: UserService
  ) {}

  getPendingOrder(): Observable<CartProduct[]> {
    return this.http
      .get<OrderInfo[]>('http://localhost:3000/cart', {
        headers: new HttpHeaders({
          Authorization: '' + this.userService.token,
        }),
      })
      .pipe<CartProduct[]>(
        map((orderInfo: OrderInfo[]) => {
          let cartProducts: CartProduct[] = [];

          for (let index = 0; index < orderInfo.length; index++) {
            const element = orderInfo[index];

            this.productService
              .getProductDetails(element.product_id)
              .subscribe((item) => {
                // return item
                cartProducts.push({
                  product: item,
                  amount: element.amount,
                });
              });
          }
          return cartProducts;
        })
      );
  }

  getTotalPrice(): number {
    let total: number = 0;

    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];

      // element.product.subscribe((currProduct) => {
      //   total += currProduct.price * element.amount;
      // });
      total += element.product.price * element.amount;
      // total += element.product.price * element.amount;
    }

    return total;
  }

  addToCart(newCartItem: { product: Product; amount: number }) {
    return this.http.post(
      'http://localhost:3000/cart',
      {
        product_id: newCartItem.product.id,
        product_amount: newCartItem.amount,
      },
      {
        headers: new HttpHeaders({
          Authorization: '' + this.userService.token,
        }),
      }
    );
  }

  removeFromCart() {}

  checkOutCart() {}
}
