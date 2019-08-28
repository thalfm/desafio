import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Funcionario} from "../../../models/funcionario";
import {FuncionarioHttpService} from "../../../services/http/funcionario-http.service";

@Component({
    selector: 'app-funcionario-new-modal',
    templateUrl: './funcionario-new-modal.component.html',
    styleUrls: ['./funcionario-new-modal.component.css']
})
export class FuncionarioNewModalComponent implements OnInit {

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
        this.funcionarioHttp
            .create(this.funcionario)
            .subscribe(funcionario => {
                this.modal.hide();
                this.onSuccess.emit(funcionario);
            }, error => this.onError.emit(error))
    }

    showModal() {
        this.modal.show();
    }

}
