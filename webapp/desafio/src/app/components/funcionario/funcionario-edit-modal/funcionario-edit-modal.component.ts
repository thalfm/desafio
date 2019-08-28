import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {Funcionario} from "../../../models/Funcionario";
import {FuncionarioHttpService} from "../../../services/http/funcionario-http.service";

@Component({
    selector: 'app-funcionario-edit-modal',
    templateUrl: './funcionario-edit-modal.component.html',
    styleUrls: ['./funcionario-edit-modal.component.css']
})
export class FuncionarioEditModalComponent implements OnInit {

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

        this.funcionarioHttp
            .get(value)
            .subscribe(funcionario => this.funcionario = funcionario)
    }

    showModal() {
        this.modal.show();
    }

    submit() {
        this.funcionarioHttp
            .update(this._funcionarioId, this.funcionario)
            .subscribe(funcionario => {
                this.modal.hide();
                this.onSuccess.emit(funcionario);
            }, error => this.onError.emit(error))
    }
}
