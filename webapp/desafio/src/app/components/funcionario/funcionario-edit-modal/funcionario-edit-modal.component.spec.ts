import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioEditModalComponent } from './funcionario-edit-modal.component';

describe('FuncionarioEditModalComponent', () => {
  let component: FuncionarioEditModalComponent;
  let fixture: ComponentFixture<FuncionarioEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
