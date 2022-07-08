// import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: Product[] = [];

  constructor(private auth: AuthService, private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProductList();
  }

  selectProduct(product: Product): void {
    console.log(product.name);

  }

}
