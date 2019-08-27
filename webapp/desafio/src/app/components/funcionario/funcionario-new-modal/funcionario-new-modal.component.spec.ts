import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioNewModalComponent } from './funcionario-new-modal.component';

describe('FuncionarioNewModalComponent', () => {
  let component: FuncionarioNewModalComponent;
  let fixture: ComponentFixture<FuncionarioNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
