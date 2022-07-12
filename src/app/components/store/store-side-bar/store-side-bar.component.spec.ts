import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSideBarComponent } from './store-side-bar.component';

describe('StoreSideBarComponent', () => {
  let component: StoreSideBarComponent;
  let fixture: ComponentFixture<StoreSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
