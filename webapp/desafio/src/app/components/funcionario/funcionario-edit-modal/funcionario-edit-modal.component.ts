import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Funcionario} from "../../../models/Funcionario";
import {FuncionarioHttpService} from "../../../services/http/funcionario-http.service";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
    selector: 'app-funcionario-edit-modal',
    templateUrl: './funcionario-edit-modal.component.html',
    styleUrls: ['./funcionario-edit-modal.component.css']
})
export class FuncionarioEditModalComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    _funcionarioId: number;

    funcionario: Funcionario = {
        nome: ''
    };

    constructor(private funcionarioHttp: FuncionarioHttpService) {
    }

    ngOnInit() {
    }

    @Input()
    set funcionarioId(value: number) {
        this._funcionarioId = value;

        if (!this._funcionarioId) {
            return;
        }
        this.blockUI.start('Carregando');
        this.funcionarioHttp
            .get(value)
            .subscribe(funcionario => {
                this.funcionario = funcionario;
                this.blockUI.stop();
            })
    }

    showModal() {
        this.modal.show();
    }

    submit() {
        this.blockUI.start('Carregando');
        this.funcionarioHttp
            .update(this._funcionarioId, this.funcionario)
            .subscribe(funcionario => {
                this.modal.hide();
                this.onSuccess.emit(funcionario);
                this.blockUI.stop();
            }, error => {
                this.onError.emit(error);
                this.blockUI.stop();
            })
    }
}
