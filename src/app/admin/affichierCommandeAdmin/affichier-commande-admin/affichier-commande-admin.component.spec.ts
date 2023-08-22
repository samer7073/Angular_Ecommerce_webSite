import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichierCommandeAdminComponent } from './affichier-commande-admin.component';

describe('AffichierCommandeAdminComponent', () => {
  let component: AffichierCommandeAdminComponent;
  let fixture: ComponentFixture<AffichierCommandeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichierCommandeAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichierCommandeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
