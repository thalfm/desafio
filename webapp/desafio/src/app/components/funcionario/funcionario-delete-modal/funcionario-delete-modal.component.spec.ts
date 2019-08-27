import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDeleteModalComponent } from './funcionario-delete-modal.component';

describe('FuncionarioDeleteModalComponent', () => {
  let component: FuncionarioDeleteModalComponent;
  let fixture: ComponentFixture<FuncionarioDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
