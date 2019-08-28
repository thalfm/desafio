import {Injectable, ViewChild} from '@angular/core';
import {FuncionarioDependenteListComponent} from "./funcionario-dependente-list.component";
import {NotifyMessageService} from "../../../services/notify/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDependenteListDeleteService {

  @ViewChild(FuncionarioDependenteListComponent)
  _funcionarioDependenteListComponent: FuncionarioDependenteListComponent;
  constructor(private notifyMessage: NotifyMessageService) { }

  set funcionarioDependenteListComponent(value: FuncionarioDependenteListComponent) {
    this._funcionarioDependenteListComponent = value;
  }

  showModalDelete(funcionario_id: number, funcionario_dependentes_id: number) {
    this._funcionarioDependenteListComponent.funcionarioId = funcionario_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteDeleteModalComponent.funcionarioId = funcionario_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteDeleteModalComponent.funcionarioDependenteId = funcionario_dependentes_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteDeleteModalComponent.showModal();
  }

  onSuccesDelete() {
    this.notifyMessage.success('Dependente excluído com sucesso.');
    this._funcionarioDependenteListComponent.all();
  }

  onErrorDelete($event: HttpErrorResponse) {
    console.log($event);
    this.notifyMessage.error('Ocorreu um erro ao excluir o dependente!');
  }
}
