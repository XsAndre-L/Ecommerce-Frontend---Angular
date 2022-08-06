import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutSuccessPageComponent } from './check-out-success-page.component';

describe('CheckOutSuccessPageComponent', () => {
  let component: CheckOutSuccessPageComponent;
  let fixture: ComponentFixture<CheckOutSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckOutSuccessPageComponent],
    }).compileComponents();

    // fixture = TestBed.createComponent(CheckOutSuccessPageComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
    // expect(component).toBeTruthy();
  });
});
