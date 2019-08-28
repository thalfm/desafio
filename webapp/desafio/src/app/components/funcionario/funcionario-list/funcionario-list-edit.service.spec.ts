import { TestBed } from '@angular/core/testing';

import { FuncionarioListEditService } from './funcionario-list-edit.service';

describe('FuncionarioListEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioListEditService = TestBed.get(FuncionarioListEditService);
    expect(service).toBeTruthy();
  });
});
