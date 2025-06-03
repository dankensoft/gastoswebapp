import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGastoComponent } from './tipo-gasto.component';

describe('TipoGastoComponent', () => {
  let component: TipoGastoComponent;
  let fixture: ComponentFixture<TipoGastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoGastoComponent]
    });
    fixture = TestBed.createComponent(TipoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
