import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // cartItems: string[] = [];

  constructor(public cartService: CartService) {

  }

  ngOnInit(): void {

    // this.cartService.cartItems.push({ id: 1, name: 'name', description: "hhdkhk", price: 5, category: "", imgPath: 'photo.url' });
    // this.cartService.cartItems.push({ id: 1, name: 'name', description: "hhdkhk", price: 5, category: "", imgPath: 'photo.url' });
    // this.cartService.cartItems.push({ id: 1, name: 'name', description: "hhdkhk", price: 5, category: "", imgPath: 'photo.url' });

  }

}
