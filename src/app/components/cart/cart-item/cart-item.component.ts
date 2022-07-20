import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: null,
      name: 'default',
      description: 'product description',
      price: 0,
      category: '',
      imgPath: '',
    };
  }

  ngOnInit(): void {}
}
