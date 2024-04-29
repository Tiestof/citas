import { TestBed } from '@angular/core/testing';

import { ConsultaCitasService } from './consulta-citas.service';

describe('ConsultaCitasService', () => {
  let service: ConsultaCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
