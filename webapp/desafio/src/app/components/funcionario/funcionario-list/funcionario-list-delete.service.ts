import { Injectable } from '@angular/core';
import {FuncionarioListComponent} from "./funcionario-list.component";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../services/notify/notify-message.service";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioListDeleteService {
    private _funcionarioListComponent: FuncionarioListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set funcionarioListComponent(value: FuncionarioListComponent) {
        this._funcionarioListComponent = value;
    }

    showModalDelete(id: number) {
        this._funcionarioListComponent.funcionarioId = id;
        this._funcionarioListComponent.funcionarioDeleteModel.showModal();
    }

    onSuccesDelete() {
        this.notifyMessage.success('Funcionário exluído com sucesso.');
        this._funcionarioListComponent.all();
    }

    onErrorDelete($event: HttpErrorResponse) {
        this.notifyMessage.error(`Ocorreu um erro ao tentar excluir um funcionario.`);
    }
}
