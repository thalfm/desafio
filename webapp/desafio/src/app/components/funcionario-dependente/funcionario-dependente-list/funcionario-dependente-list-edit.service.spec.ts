import { TestBed } from '@angular/core/testing';

import { FuncionarioDependenteListEditService } from './funcionario-dependente-list-edit.service';

describe('FuncionarioDependenteListEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioDependenteListEditService = TestBed.get(FuncionarioDependenteListEditService);
    expect(service).toBeTruthy();
  });
});
