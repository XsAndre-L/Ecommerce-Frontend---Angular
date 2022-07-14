import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { CartProduct, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page-item',
  templateUrl: './cart-page-item.component.html',
  styleUrls: ['./cart-page-item.component.scss'],
})
export class CartPageItemComponent implements OnInit {
  @Input() product: CartProduct;

  // productAmount: FormControl = new FormControl(1);

  constructor(private cartService: CartService) {
    this.product = {
      product: {
        name: 'default',
        description: 'product description',
        price: 0,
        category: '',
        imgPath: '',
      },
      amount: 0,
    };
  }

  ngOnInit(): void {}
}
