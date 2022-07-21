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
      id: null,
      name: '',
      description: '',
      price: 0,
      category: '',
      imgPath: '',
    };
  }

  ngOnInit(): void {
    this.product.imgPath = 'https://via.placeholder.com/150';
    this.product.description = 'Random words too fill the description space';
  }

  addToCart(product: Product): void {
    this.cartService
      .addToCart({ product: product, amount: 1 })
      .subscribe((result) => {
        console.log(result);
        this.cartService.updateCartFrontEnd();
      });
  }
}
