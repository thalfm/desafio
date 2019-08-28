import {Injectable, ViewChild} from '@angular/core';
import {FuncionarioDependenteListComponent} from "./funcionario-dependente-list.component";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../services/notify/notify-message.service";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDependenteListEditService {

  @ViewChild(FuncionarioDependenteListComponent)
  _funcionarioDependenteListComponent: FuncionarioDependenteListComponent;
  constructor(private notifyMessage: NotifyMessageService) { }

  set funcionarioDependenteListComponent(value: FuncionarioDependenteListComponent) {
    this._funcionarioDependenteListComponent = value;
  }

  showModalEdit(funcionario_id: number, funcionario_dependentes_id: number) {
    this._funcionarioDependenteListComponent.funcionarioId = funcionario_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteEditModalComponent.funcionarioId = funcionario_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteEditModalComponent.funcionarioDependenteId = funcionario_dependentes_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteEditModalComponent.showModal();
  }

  onSuccesEdit() {
    this.notifyMessage.success('Dependente atualizado com sucesso.');
    this._funcionarioDependenteListComponent.all();
  }

  onErrorEdit($event: HttpErrorResponse) {
    console.log($event);
    this.notifyMessage.error('Ocorreu um erro ao atualizar o dependente!');
  }
}
