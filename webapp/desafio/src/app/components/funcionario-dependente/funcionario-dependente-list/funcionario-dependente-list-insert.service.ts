import {Injectable, ViewChild} from '@angular/core';
import {FuncionarioDependenteListComponent} from "./funcionario-dependente-list.component";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../services/notify/notify-message.service";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDependenteListInsertService {

  @ViewChild(FuncionarioDependenteListComponent)
  _funcionarioDependenteListComponent: FuncionarioDependenteListComponent;
  constructor(private notifyMessage: NotifyMessageService) { }

  showModalInsert(funcionario_id: number){
    this._funcionarioDependenteListComponent.funcionarioId = funcionario_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteNewModalComponent.funcionarioId = funcionario_id;
    this._funcionarioDependenteListComponent.funcionarioDependenteNewModalComponent.showModal();
  }

  set funcionarioDependenteListComponent(value: FuncionarioDependenteListComponent) {
    this._funcionarioDependenteListComponent = value;
  }

  onSuccesInsert() {
    this.notifyMessage.success('Dependente inserido com sucesso.');
    this._funcionarioDependenteListComponent.all();
  }

  onErrorInsert($event: HttpErrorResponse) {
    console.log($event);
    this.notifyMessage.error('Ocorreu um erro ao inserir o dependente!');
  }
}
