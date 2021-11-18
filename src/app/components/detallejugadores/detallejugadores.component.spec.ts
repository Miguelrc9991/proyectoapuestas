import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallejugadoresComponent } from './detallejugadores.component';

describe('DetallejugadoresComponent', () => {
  let component: DetallejugadoresComponent;
  let fixture: ComponentFixture<DetallejugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallejugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallejugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
