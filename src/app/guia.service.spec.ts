import { TestBed, inject } from '@angular/core/testing';

import { GuiaService } from './guia.service';

describe('GuiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuiaService]
    });
  });

  it('should be created', inject([GuiaService], (service: GuiaService) => {
    expect(service).toBeTruthy();
  }));
});
