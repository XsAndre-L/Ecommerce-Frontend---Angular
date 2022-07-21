import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

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
    console.log('Changing Amount');

    this.cartService
      .updateProductAmount(this.product.product.id!, this.form.value.numInput)
      .subscribe((amount: any) => {
        this.cartService.updateCartFrontEnd();
      });
  }

  deleteCartItem() {
    if (this.product.product.id) {
      this.deleteProduct.emit(this.product.product.id);
    }
  }
}
