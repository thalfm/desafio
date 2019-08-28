import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FuncionarioDependente} from "../../../models/FuncionarioDependente";
import {FuncionarioDependenteHttpService} from "../../../services/http/funcionario-dependente-http.service";

@Component({
  selector: 'app-funcionario-dependente-edit-modal',
  templateUrl: './funcionario-dependente-edit-modal.component.html',
  styleUrls: ['./funcionario-dependente-edit-modal.component.css']
})
export class FuncionarioDependenteEditModalComponent {

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();

  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  _funcionarioId: number;

  _funcionarioDependenteId: number;

  funcionarioDependente: FuncionarioDependente = {
    nome: ''
  };

  dependente: FuncionarioDependente = {
    nome: ''
  };

  constructor(private funcionarioDependenteHttp: FuncionarioDependenteHttpService) { }

  @Input()
  set funcionarioId(value: number) {
    this._funcionarioId = value;
  }

  @Input()
  set funcionarioDependenteId(value: number) {
    this._funcionarioDependenteId = value;

    if (!this._funcionarioDependenteId) {
      return;
    }

    this.funcionarioDependenteHttp
        .get(this._funcionarioId, value)
        .subscribe(dependente => this.dependente = dependente)
  }

  showModal() {
    this.modal.show();
  }

  submit() {
    this.funcionarioDependenteHttp
        .update(this._funcionarioId, this._funcionarioDependenteId, this.dependente)
        .subscribe(dependente => {
          this.modal.hide();
          this.onSuccess.emit(dependente);
        }, error => this.onError.emit(error))
  }
}
