import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDependenteListComponent } from './funcionario-dependente-list.component';

describe('FuncionarioDependenteListComponent', () => {
  let component: FuncionarioDependenteListComponent;
  let fixture: ComponentFixture<FuncionarioDependenteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioDependenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDependenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
