import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDependenteNewModalComponent } from './funcionario-dependente-new-modal.component';

describe('FuncionarioDependenteNewModalComponent', () => {
  let component: FuncionarioDependenteNewModalComponent;
  let fixture: ComponentFixture<FuncionarioDependenteNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioDependenteNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDependenteNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
