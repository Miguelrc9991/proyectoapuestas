import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleequipoComponent } from './detalleequipo.component';

describe('DetalleequipoComponent', () => {
  let component: DetalleequipoComponent;
  let fixture: ComponentFixture<DetalleequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
