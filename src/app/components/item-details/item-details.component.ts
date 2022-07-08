import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  product$ = this.route.params.pipe(
    map((params: Params) => params['id']),
    switchMap((productId) => {

      if (!productId) return of(null);

      return this.productService.getProduct2(Number(productId))

    })
  );


  // product$: Observable<Product> | undefined;


  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.route.snapshot

    // console.log(this.route.snapshot.paramMap.get('id'));
    // let id: string | null = this.route.snapshot.paramMap.get('id');

    // if (!id) return;


    // this.product$ = this.productService.getProduct2(Number(id))







    // if (id != null) {

    // this.product = this.productService.getProduct(parseInt(id));
    // console.log(this.productService.getProduct(parseInt(id)))
    // }
  }

}
