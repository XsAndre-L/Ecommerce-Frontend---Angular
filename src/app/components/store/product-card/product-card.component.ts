import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService) {
    this.product = {
      name: "",
      description: "",
      price: 0,
      category: "",
      imgPath: ""
    }
  }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {

    this.cartService.cartItems.push(product);

  }

}
