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
  cartMessage: [string, boolean] = ['', true];

  get cartCount(): number {
    // console.log('Getting Total Cart Items');
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
      total += element.product.price * element.amount;
    }

    return total;
  }

  updateProductAmount(productId: number, amount: number) {
    this.addCartMessage('Item Updated!');
    return this.http.put(
      'http://localhost:3000/cart',
      {
        product_id: productId,
        productAmount: amount,
      },
      {
        headers: new HttpHeaders({
          Authorization: '' + this.userService.token,
        }),
      }
    );
  }

  addToCart(newCartItem: { product: Product; amount: number }) {
    this.addCartMessage('Item Added!');
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

  removeFromCart(productId: number) {
    this.addCartMessage('Item Removed!', false);
    return this.http.delete(
      'http://localhost:3000/cart',

      {
        headers: new HttpHeaders({
          Authorization: '' + this.userService.token,
          body: '' + productId,
        }),
      }
    );
  }

  checkOutCart() {}

  updateCartFrontEnd() {
    const observer = {
      next: (items: any) => {
        this.cartItems = items;
      },
      complete: () => {
        return this.cartItems.length;
      },
    };
    this.getPendingOrder().subscribe(observer);
  }

  addCartMessage(message: string, isGreen: boolean = true) {
    if (isGreen) {
      this.cartMessage[1] = true;
    } else {
      this.cartMessage[1] = false;
    }

    this.cartMessage[0] = message;

    setTimeout(() => {
      this.cartMessage[0] = '';
    }, 1000);
  }
}
