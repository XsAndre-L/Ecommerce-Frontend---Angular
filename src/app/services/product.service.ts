import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Product } from '../models/product';

// import { AuthService } from './auth.service';

type Photo = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [];
  product!: Product;
  photo: Photo | undefined;

  private photos!: Subscription;

  constructor(private http: HttpClient) { }


  getProduct2(product_id: number): Observable<Product> {
    return this.http.get<Photo>(
      `https://jsonplaceholder.typicode.com/photos/${product_id + 1}`
    ).pipe(
      map((photo: Photo) => {
        return { id: product_id, name: photo.title, description: "hhdkhk", price: 5, category: "", imgPath: photo.url };
      })
    )
  }


  getProductList(): Product[] {
    let count = 0;

    this.photos = this.http.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos?_limit=50'
      // ,
      // {
      //   headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token })
      // }
    ).subscribe(
      res => {
        for (let index = 0; index < res.length; index++) {
          const photo = res[index];
          this.productList.push({ id: count++, name: `${photo.title.substring(0, 16)}`, description: String(`ldfflkdhfohdhfdohfoiekfaaggg ggggggggggggggggggggggggggggfhiifddkkk`).substring(0, 44), price: 5, category: "random", imgPath: `${photo.thumbnailUrl}` })
        }
      }
    );

    return this.productList;

  }

  ngOnDestroy() {
    console.log('Unsubbing')
    this.photos.unsubscribe();
  }

}
