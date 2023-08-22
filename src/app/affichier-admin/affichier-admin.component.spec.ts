import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichierAdminComponent } from './affichier-admin.component';

describe('AffichierAdminComponent', () => {
  let component: AffichierAdminComponent;
  let fixture: ComponentFixture<AffichierAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichierAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichierAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
