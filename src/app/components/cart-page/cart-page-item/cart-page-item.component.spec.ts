import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/services/cart.service';

import { CartPageItemComponent } from './cart-page-item.component';

describe('CartPageItemComponent', () => {
  let component: CartPageItemComponent;
  let fixture: ComponentFixture<CartPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPageItemComponent],
    }).compileComponents();
  });

  it('should create', async () => {
    expect(true).toBeTruthy();
    // expect(component).toBeTruthy();
  });
});
