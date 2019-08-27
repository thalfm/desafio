import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDependenteEditModalComponent } from './funcionario-dependente-edit-modal.component';

describe('FuncionarioDependenteEditModalComponent', () => {
  let component: FuncionarioDependenteEditModalComponent;
  let fixture: ComponentFixture<FuncionarioDependenteEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioDependenteEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDependenteEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
