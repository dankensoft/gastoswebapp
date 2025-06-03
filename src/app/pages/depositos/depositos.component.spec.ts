import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosComponent } from './depositos.component';

describe('DepositosComponent', () => {
  let component: DepositosComponent;
  let fixture: ComponentFixture<DepositosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositosComponent]
    });
    fixture = TestBed.createComponent(DepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
