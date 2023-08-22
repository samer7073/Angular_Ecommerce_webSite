import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerProduitComponent } from './editer-produit.component';

describe('EditerProduitComponent', () => {
  let component: EditerProduitComponent;
  let fixture: ComponentFixture<EditerProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditerProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
