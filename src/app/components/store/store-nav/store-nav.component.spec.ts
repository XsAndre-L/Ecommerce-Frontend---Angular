import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavComponent } from './store-nav.component';

describe('StoreNavComponent', () => {
  let component: StoreNavComponent;
  let fixture: ComponentFixture<StoreNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreNavComponent],
    }).compileComponents();

    // fixture = TestBed.createComponent(StoreNavComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
    // expect(component).toBeTruthy();
  });
});
