import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoConsultasComponent } from './catalogo-consultas.component';

describe('CatalogoConsultasComponent', () => {
  let component: CatalogoConsultasComponent;
  let fixture: ComponentFixture<CatalogoConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
