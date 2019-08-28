import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Funcionario} from "../../../models/Funcionario";
import {FuncionarioHttpService} from "../../../services/http/funcionario-http.service";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
    selector: 'app-funcionario-new-modal',
    templateUrl: './funcionario-new-modal.component.html',
    styleUrls: ['./funcionario-new-modal.component.css']
})
export class FuncionarioNewModalComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()

    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    funcionario: Funcionario = {
        nome: ''
    };

    constructor(private funcionarioHttp: FuncionarioHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        this.blockUI.start('Carregando');
        this.funcionarioHttp
            .create(this.funcionario)
            .subscribe(funcionario => {
                this.modal.hide();
                this.onSuccess.emit(funcionario);
                this.blockUI.stop();
            }, error => {
                this.onError.emit(error);
                this.blockUI.stop();
            })
    }

    showModal() {
        this.modal.show();
    }

}
