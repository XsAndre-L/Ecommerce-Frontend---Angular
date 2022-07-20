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
  allCartItems: { product: Product; amount: number }[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    for (let index = 0; index < this.cartService.cartItems.length; index++) {
      const element = this.cartService.cartItems[index];
      //let currProduct: { product: Product, amount: number };

      let currProduct = { product: element.product, amount: element.amount };
      this.allCartItems.push(currProduct);

      // console.log('Length OFF' + this.allCartItems.length);

      // currProduct.product =

      // element.product.subscribe((p) => {
      //   currProduct.product = p;
      //   currProduct.amount = element.amount;
      //   this.allCartItems.push(currProduct);
      // });
    }

    // this.cartService.cartItems.push({ id: 1, name: 'name', description: "hhdkhk", price: 5, category: "", imgPath: 'photo.url' });
    // this.cartService.cartItems.push({ id: 1, name: 'name', description: "hhdkhk", price: 5, category: "", imgPath: 'photo.url' });
    // this.cartService.cartItems.push({ id: 1, name: 'name', description: "hhdkhk", price: 5, category: "", imgPath: 'photo.url' });
  }
}
