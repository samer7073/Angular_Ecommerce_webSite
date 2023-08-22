import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichierProduitComponent } from './affichier-produit.component';

describe('AffichierProduitComponent', () => {
  let component: AffichierProduitComponent;
  let fixture: ComponentFixture<AffichierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichierProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
