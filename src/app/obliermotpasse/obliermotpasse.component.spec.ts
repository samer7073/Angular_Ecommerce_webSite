import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliermotpasseComponent } from './obliermotpasse.component';

describe('ObliermotpasseComponent', () => {
  let component: ObliermotpasseComponent;
  let fixture: ComponentFixture<ObliermotpasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObliermotpasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObliermotpasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
