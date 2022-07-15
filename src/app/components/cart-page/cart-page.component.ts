import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  constructor(
    private auth: AuthService,
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteCurrItem(e: any) {
    this.cartService.cartItems = this.cartService.cartItems.filter(
      (p) => p.product.name !== e.product.name
    );
  }

  checkOut() {
    if (this.auth.validUser) {
      console.log('Continue Checkout Journey!');
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnTo: ['/cart'] },
      });
    }
  }
}
