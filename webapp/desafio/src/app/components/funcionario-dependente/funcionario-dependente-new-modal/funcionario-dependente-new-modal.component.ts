import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FuncionarioDependente} from "../../../models/FuncionarioDependente";
import {FuncionarioDependenteHttpService} from "../../../services/http/funcionario-dependente-http.service";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
    selector: 'app-funcionario-dependente-new-modal',
    templateUrl: './funcionario-dependente-new-modal.component.html',
    styleUrls: ['./funcionario-dependente-new-modal.component.css']
})
export class FuncionarioDependenteNewModalComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    _funcionarioId: number;

    funcionarioDependente: FuncionarioDependente = {
        nome: ''
    };

    constructor(private funcionarioDependenteHttp: FuncionarioDependenteHttpService) {
    }

    ngOnInit() {
    }

    @Input()
    set funcionarioId(value: number) {
        this._funcionarioId = value;
    }

    showModal() {
        this.modal.show();
    }

    submit() {
        this.blockUI.start('Carregando');
        this.funcionarioDependenteHttp
            .create(this._funcionarioId, this.funcionarioDependente)
            .subscribe(funcionario => {
                this.modal.hide();
                this.onSuccess.emit(funcionario);
                this.blockUI.stop();
            }, error => {
                this.onError.emit(error);
                this.blockUI.stop();
            });
    }
}
