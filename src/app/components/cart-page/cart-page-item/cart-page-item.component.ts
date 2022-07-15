import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { CartProduct, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page-item',
  templateUrl: './cart-page-item.component.html',
  styleUrls: ['./cart-page-item.component.scss'],
})
export class CartPageItemComponent implements OnInit {
  @Input() product: CartProduct = {
    product: {
      name: 'default',
      description: 'product description',
      price: 0,
      category: '',
      imgPath: '',
    },
    amount: 1,
  };

  form: FormGroup = new FormGroup({
    numInput: new FormControl(this.product.amount),
  });

  @Output() deleteProduct: EventEmitter<CartProduct> = new EventEmitter();

  constructor(private cartService: CartService) {}

  change(e: any) {
    let cartItem = this.cartService.cartItems.find(
      (item) => item.product.name === this.product.product.name
    );

    cartItem!.amount = this.form.value.numInput;
    console.log(this.form.value.numInput);
  }

  ngOnInit(): void {
    this.form.controls['numInput'].setValue(this.product.amount);
  }

  deleteCartItem() {
    this.deleteProduct.emit(this.product);
  }
}
