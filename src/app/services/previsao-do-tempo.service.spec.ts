import { TestBed } from '@angular/core/testing';

import { PrevisaoDoTempoService } from './previsao-do-tempo.service';

describe('PrevisaoDoTempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrevisaoDoTempoService = TestBed.get(PrevisaoDoTempoService);
    expect(service).toBeTruthy();
  });
});
