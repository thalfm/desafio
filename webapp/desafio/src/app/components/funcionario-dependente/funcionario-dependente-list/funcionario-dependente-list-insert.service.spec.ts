import { TestBed } from '@angular/core/testing';

import { FuncionarioDependenteListInsertService } from './funcionario-dependente-list-insert.service';

describe('FuncionarioDependenteListInsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioDependenteListInsertService = TestBed.get(FuncionarioDependenteListInsertService);
    expect(service).toBeTruthy();
  });
});
