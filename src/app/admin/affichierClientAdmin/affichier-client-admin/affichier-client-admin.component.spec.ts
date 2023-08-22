import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichierClientAdminComponent } from './affichier-client-admin.component';

describe('AffichierClientAdminComponent', () => {
  let component: AffichierClientAdminComponent;
  let fixture: ComponentFixture<AffichierClientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichierClientAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichierClientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
