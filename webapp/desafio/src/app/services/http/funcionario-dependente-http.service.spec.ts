import { TestBed } from '@angular/core/testing';

import { FuncionarioDependenteHttpService } from './funcionario-dependente-http.service';

describe('FuncionarioDependenteHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioDependenteHttpService = TestBed.get(FuncionarioDependenteHttpService);
    expect(service).toBeTruthy();
  });
});
