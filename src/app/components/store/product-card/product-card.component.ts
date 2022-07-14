import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService) {
    this.product = {
      name: '',
      description: '',
      price: 0,
      category: '',
      imgPath: '',
    };
  }

  ngOnInit(): void {}

  addToCart(product: Product): void {
    let contains = false;
    let productIndex = 0;

    for (let index = 0; index < this.cartService.cartItems.length; index++) {
      const element = this.cartService.cartItems[index];

      if (element.product == product) {
        contains = true;
        productIndex = index;
        break;
      }
    }

    if (contains) {
      this.cartService.cartItems[productIndex].amount++;
    } else {
      this.cartService.cartItems.push({ product: product, amount: 1 });
    }
  }
}
