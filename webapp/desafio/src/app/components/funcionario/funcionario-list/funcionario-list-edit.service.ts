import {Injectable} from '@angular/core';
import {FuncionarioListComponent} from "./funcionario-list.component";
import {NotifyMessageService} from "../../../services/notify/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FuncionarioListEditService {
    private _funcionarioListComponent: FuncionarioListComponent;

    constructor(private notifyMessage: NotifyMessageService){}

    set funcionarioListComponent(value: FuncionarioListComponent) {
        this._funcionarioListComponent = value;
    }

    showModalEdit(id: number) {
        this._funcionarioListComponent.funcionarioId = id;
        this._funcionarioListComponent.funcionarioEditModel.showModal();
    }

    onSuccesEdit() {
        this.notifyMessage.success('Funcionario editado com sucesso.');
        this._funcionarioListComponent.all();
    }

    onErrorEdit($event: HttpErrorResponse) {
        this.notifyMessage.error('Ocorreu um erro ao editar o funcionário');
    }
}
