// import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: Product[] = [];

  constructor(private auth: AuthService, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProductList();
  }

  selectProduct(product: Product): void {
    // this.cartService.cartItems.push(product);

  }

  addToCart(product: Product): void {

    this.cartService.cartItems.push(product);

  }

}
