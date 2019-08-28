import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FuncionarioDependente} from "../../../models/FuncionarioDependente";
import {FuncionarioDependenteHttpService} from "../../../services/http/funcionario-dependente-http.service";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
  selector: 'app-funcionario-dependente-edit-modal',
  templateUrl: './funcionario-dependente-edit-modal.component.html',
  styleUrls: ['./funcionario-dependente-edit-modal.component.css']
})
export class FuncionarioDependenteEditModalComponent {
  @BlockUI() blockUI: NgBlockUI;

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
    this.blockUI.start('Carregando');
    this.funcionarioDependenteHttp
        .get(this._funcionarioId, value)
        .subscribe(dependente => {
          this.dependente = dependente;
          this.blockUI.stop();
        })
  }

  showModal() {
    this.modal.show();
  }

  submit() {
    this.blockUI.start('Carregando');
    this.funcionarioDependenteHttp
        .update(this._funcionarioId, this._funcionarioDependenteId, this.dependente)
        .subscribe(dependente => {
          this.modal.hide();
          this.onSuccess.emit(dependente);
          this.blockUI.stop();
        }, error => {
          this.onError.emit(error);
          this.blockUI.stop();
        })
  }
}
