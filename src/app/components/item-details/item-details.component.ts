import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  // product$ = this.route.params.pipe(
  //   map((params: Params) => params['id']),
  //   switchMap((productId) => {
  //     if (!productId) return of(null);

  //     return this.productService.getProductDetails(Number(productId));
  //   })
  // );

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    console.log(params);

    this.productService
      .getProductDetails(Number(params['id']))
      .subscribe((item) => {
        this.product = item;
        this.product.imgPath = 'https://via.placeholder.com/600';
      });
  }
}
