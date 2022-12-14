import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCheckComponent } from './command-check.component';

describe('CommandCheckComponent', () => {
  let component: CommandCheckComponent;
  let fixture: ComponentFixture<CommandCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
