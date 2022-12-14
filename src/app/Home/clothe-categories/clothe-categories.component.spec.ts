import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheCategoriesComponent } from './clothe-categories.component';

describe('ClotheCategoriesComponent', () => {
  let component: ClotheCategoriesComponent;
  let fixture: ComponentFixture<ClotheCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClotheCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClotheCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
