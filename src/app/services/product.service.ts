import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Globals } from '../global/global';
import { Product } from '../models/product';
import { UserService } from './user.service';

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [];
  product!: Product;
  photo: Photo | undefined;

  private photos!: Subscription;

  constructor(private http: HttpClient, private userService: UserService) {}

  // Get all products from database
  getProducts(category: string): Observable<Product[]> {
    let count = 0;
    console.log('GETTING PRODUCTS');
    this.productList = [];

    //----------------OLD CODE----------------------
    // return this.http
    //   .get<Photo[]>(
    //     'https://jsonplaceholder.typicode.com/photos?_limit=50'
    //     // ,
    //     // {
    //     //   headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.auth.token })
    //     // }
    //   )
    //   .pipe(
    //     map((photos: Photo[]) => {
    //       let products: Product[] = [];

    //       const categories = ['fruit', 'vegetables', 'cars'];
    //       for (let index = 0; index < photos.length; index++) {
    //         const cat = (): string => {
    //           const count = Math.floor(Math.random() * 3);
    //           return categories[count];
    //         };
    //         const photo = photos[index];
    //         products.push({
    //           id: count++,
    //           name: `${photo.title.substring(0, 16)}`,
    //           description: String(
    //             `ldfflkdhfohdhfdohfoiekfaaggg ggggggggggggggggggggggggggggfhiifddkkk`
    //           ).substring(0, 44),
    //           price: 5,
    //           category: cat(),
    //           imgPath: `${photo.thumbnailUrl}`,
    //         });
    //       }

    //       return products;
    //     })
    //   );
    // .subscribe((res) => {
    //   // this.productList = res;
    //   console.log(this.productList);
    //   // return res;
    // });
    //----------------OLD CODE----------------------

    if (category !== 'all') {
      return this.http.get<Product[]>(
        `${Globals.endPoint}/product/?category=${category}`,
        {}
      );
    } else {
      return this.http.get<Product[]>(`${Globals.endPoint}/product`, {});
    }

    // console.log(this.productList);
  }

  // Product Details
  getProductDetails(product_id: number): Observable<Product> {
    //----------------OLD CODE----------------------
    // return this.http
    //   .get<Photo>(
    //     `https://jsonplaceholder.typicode.com/photos/${product_id + 1}`
    //   )
    //   .pipe(
    //     map((photo: Photo) => {
    //       return {
    //         id: product_id,
    //         name: photo.title,
    //         description: 'hhdkhk',
    //         price: 5,
    //         category: '',
    //         imgPath: photo.url,
    //       };
    //     })
    //   );
    //----------------OLD CODE----------------------

    return this.http.get<Product>(
      `${Globals.endPoint}/product/${product_id}`,
      {}
    );
  }

  // Create Product
  createProduct(product: Product) {
    this.http.post('/', product, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.userService.token,
      }),
    });
  }

  // Update Product
  updateProduct() {}

  // Delete Product
  deleteProduct() {}

  ngOnDestroy() {
    console.log('Unsubbing');
    this.photos.unsubscribe();
  }
}
