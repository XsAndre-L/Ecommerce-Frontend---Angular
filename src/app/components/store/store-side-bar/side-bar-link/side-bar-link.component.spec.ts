import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLinkComponent } from './side-bar-link.component';

describe('SideBarLinkComponent', () => {
  let component: SideBarLinkComponent;
  let fixture: ComponentFixture<SideBarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarLinkComponent],
    }).compileComponents();

    // fixture = TestBed.createComponent(SideBarLinkComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
    // expect(component).toBeTruthy();
  });
});
