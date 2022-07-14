import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageItemComponent } from './cart-page-item.component';

describe('CartPageItemComponent', () => {
  let component: CartPageItemComponent;
  let fixture: ComponentFixture<CartPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
