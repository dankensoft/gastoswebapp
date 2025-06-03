import { TestBed } from '@angular/core/testing';

import { FondoMonetarioService } from './fondo-monetario.service';

describe('FondoMonetarioService', () => {
  let service: FondoMonetarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondoMonetarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
