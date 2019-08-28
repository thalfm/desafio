import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FuncionarioDependente} from "../../../models/FuncionarioDependente";
import {FuncionarioDependenteHttpService} from "../../../services/http/funcionario-dependente-http.service";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
  selector: 'app-funcionario-dependente-delete-modal',
  templateUrl: './funcionario-dependente-delete-modal.component.html',
  styleUrls: ['./funcionario-dependente-delete-modal.component.css']
})
export class FuncionarioDependenteDeleteModalComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();

  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  _funcionarioDependenteId: number;

  _funcionarioId: number;

  funcionarioDependente: FuncionarioDependente = null;

  constructor(private funcionarioDependenteHttp: FuncionarioDependenteHttpService) { }

  ngOnInit() {
  }

  @Input()
  set funcionarioId(value: number) {
    this._funcionarioId = value;

    if (!this._funcionarioId) {
      return;
    }
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
        .subscribe(funcionarioDependente => {
          this.funcionarioDependente = funcionarioDependente;
          this.blockUI.stop();
        })
  }

  showModal() {
    this.modal.show();
  }

  destroy() {
    this.blockUI.start('Carregando');
    this.funcionarioDependenteHttp
        .destroy(this._funcionarioId, this._funcionarioDependenteId)
        .subscribe(funcionarioDependente => {
          this.modal.hide();
          this.onSuccess.emit(funcionarioDependente);
          this.blockUI.stop();
        }, error => {
          this.onError.emit(error)
          this.blockUI.stop();
        });
  }

}
