import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartProduct, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page-item',
  templateUrl: './cart-page-item.component.html',
  styleUrls: ['./cart-page-item.component.scss'],
})
export class CartPageItemComponent implements OnInit {
  // Inputs from parent
  @Input() product: { product: Product; amount: number } = {
    product: {
      id: null,
      name: 'default',
      description: 'product description',
      price: 0,
      category: '',
      imgPath: '',
    },
    amount: 1,
  };

  @Output() deleteProduct: EventEmitter<number> = new EventEmitter();

  form: FormGroup = new FormGroup({
    numInput: new FormControl(1),
  });

  constructor(private cartService: CartService) {}

  //
  ngOnInit(): void {
    this.form.controls['numInput'].setValue(this.product.amount);
  }

  // DOM Actions
  onChange(event: any) {
    let cartItem: { product: Product; amount: number };
    // let cartItem: Product;

    for (let index = 0; index < this.cartService.cartItems.length; index++) {
      const element = this.cartService.cartItems[index];
      element.product.subscribe((p) => {
        if (p.name === this.product.product.name) {
          cartItem = { product: p, amount: element.amount };
        }
      });
    }
    // this.cartService.cartItems.find()
    // let cartItem = this.cartService.cartItems.find(
    //   (item) => item.product.name
    //    === this.product.product.name

    // );

    cartItem!.amount = this.form.value.numInput;
    console.log(this.form.value.numInput);
  }

  deleteCartItem() {
    if (this.product.product.id) {
      this.deleteProduct.emit(this.product.product.id);
    }
  }
}
