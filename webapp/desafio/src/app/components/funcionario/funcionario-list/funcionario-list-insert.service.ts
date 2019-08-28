import { Injectable } from '@angular/core';
import {FuncionarioListComponent} from "./funcionario-list.component";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../services/notify/notify-message.service";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioListInsertService {

  private _funcionarioListComponent: FuncionarioListComponent;

  constructor(private notifyMessage: NotifyMessageService){}

  set funcionarioListComponent(value: FuncionarioListComponent) {
    this._funcionarioListComponent = value;
  }

  showModalInsert() {
    this._funcionarioListComponent.funcionarioNewModel.showModal();
  }

  onSuccesInsert() {
    this.notifyMessage.success('Funcionário inserido com sucesso.');
    this._funcionarioListComponent.all();
  }

  onErrorInsert($event: HttpErrorResponse) {
    console.log($event);
    this.notifyMessage.error('Ocorreu um erro ao inserir o funcionário!');
  }
}
