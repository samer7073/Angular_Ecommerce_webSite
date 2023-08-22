import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerClientAdminComponent } from './editer-client-admin.component';

describe('EditerClientAdminComponent', () => {
  let component: EditerClientAdminComponent;
  let fixture: ComponentFixture<EditerClientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerClientAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditerClientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
