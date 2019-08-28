import { TestBed } from '@angular/core/testing';

import { FuncionarioHttpService } from './funcionario-http.service';

describe('FuncionarioHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioHttpService = TestBed.get(FuncionarioHttpService);
    expect(service).toBeTruthy();
  });
});
