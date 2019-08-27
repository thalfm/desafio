import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDependenteDeleteModalComponent } from './funcionario-dependente-delete-modal.component';

describe('FuncionarioDependenteDeleteModalComponent', () => {
  let component: FuncionarioDependenteDeleteModalComponent;
  let fixture: ComponentFixture<FuncionarioDependenteDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioDependenteDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDependenteDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
