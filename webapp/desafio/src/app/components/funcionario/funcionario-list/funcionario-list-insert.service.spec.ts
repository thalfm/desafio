import { TestBed } from '@angular/core/testing';

import { FuncionarioListInsertService } from './funcionario-list-insert.service';

describe('FuncionarioListInsertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioListInsertService = TestBed.get(FuncionarioListInsertService);
    expect(service).toBeTruthy();
  });
});
