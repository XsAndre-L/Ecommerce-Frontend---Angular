// import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
// import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  currCategory: string | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  selectProduct(product: Product): void {}

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
