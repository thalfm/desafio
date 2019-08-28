import { TestBed } from '@angular/core/testing';

import { FuncionarioListDeleteService } from './funcionario-list-delete.service';

describe('FuncionarioListDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionarioListDeleteService = TestBed.get(FuncionarioListDeleteService);
    expect(service).toBeTruthy();
  });
});
