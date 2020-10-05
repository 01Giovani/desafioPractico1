import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoServiciosComponent } from './catalogo-servicios.component';

describe('CatalogoServiciosComponent', () => {
  let component: CatalogoServiciosComponent;
  let fixture: ComponentFixture<CatalogoServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
