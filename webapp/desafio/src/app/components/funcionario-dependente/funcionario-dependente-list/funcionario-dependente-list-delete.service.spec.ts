import { TestBed } from '@angular/core/testing';

import { FuncionarioDependenteListDeleteService } from './funcionario-dependente-list-delete.service';

describe('FuncionarioDependenteListDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioDependenteListDeleteService = TestBed.get(FuncionarioDependenteListDeleteService);
    expect(service).toBeTruthy();
  });
});
