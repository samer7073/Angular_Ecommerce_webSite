import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichierProduitAdminComponent } from './affichier-produit-admin.component';

describe('AffichierProduitAdminComponent', () => {
  let component: AffichierProduitAdminComponent;
  let fixture: ComponentFixture<AffichierProduitAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichierProduitAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichierProduitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
