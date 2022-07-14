// import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  // static refreshProducts() {
  //   throw new Error('Method not implemented.');
  // }
  products: Product[] = [];
  // productSub: Observable<Product[]> | undefined;

  currCategory: string | undefined;

  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activeRoute.queryParams.subscribe((params) => {
    //   const category = params['category'];
    // console.log('catt' + category);
    // this.currCategory = category;
    // });
    // this.products = this.productService.getProductList(this.currCategory);
  }

  selectProduct(product: Product): void {
    // this.cartService.cartItems.push(product);
  }

  ngOnDestroy() {}

  changeCat(e: any) {
    this.currCategory = e;

    if (this.currCategory == 'all') {
      this.productService.getProductList().subscribe((res) => {
        this.products = res;
      });
    } else {
      console.log('NEW CATEGORY');
      this.productService.getProductList().subscribe((res) => {
        this.products = res.filter((p) => p.category === this.currCategory);
      });
    }
  }
}
