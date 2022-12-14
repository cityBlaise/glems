import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBottomMenuComponent } from './mobile-bottom-menu.component';

describe('MobileBottomMenuComponent', () => {
  let component: MobileBottomMenuComponent;
  let fixture: ComponentFixture<MobileBottomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBottomMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBottomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
