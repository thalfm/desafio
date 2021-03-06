import {Component, OnInit, ViewChild} from '@angular/core';
import {FuncionarioNewModalComponent} from "../funcionario-new-modal/funcionario-new-modal.component";
import {FuncionarioListInsertService} from "./funcionario-list-insert.service";
import {FuncionarioListEditService} from "./funcionario-list-edit.service";
import {FuncionarioListDeleteService} from "./funcionario-list-delete.service";
import {FuncionarioEditModalComponent} from "../funcionario-edit-modal/funcionario-edit-modal.component";
import {FuncionarioDeleteModalComponent} from "../funcionario-delete-modal/funcionario-delete-modal.component";
import {Funcionario} from "../../../models/Funcionario";
import {FuncionarioHttpService} from "../../../services/http/funcionario-http.service";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
    selector: 'app-funcionario-list',
    templateUrl: './funcionario-list.component.html',
    styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;

    funcionarios: Array<Funcionario> = [];

    @ViewChild(FuncionarioNewModalComponent)
    funcionarioNewModel: FuncionarioNewModalComponent;
    @ViewChild(FuncionarioEditModalComponent)
    funcionarioEditModel: FuncionarioEditModalComponent;
    @ViewChild(FuncionarioDeleteModalComponent)
    funcionarioDeleteModel: FuncionarioDeleteModalComponent;

    funcionarioId: number;

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 10
    };

    constructor(
        private funcionarioHttp: FuncionarioHttpService,
        public funcionarioListInsertService: FuncionarioListInsertService,
        public funcionarioListEditService: FuncionarioListEditService,
        public funcionarioListDeleteService: FuncionarioListDeleteService
    ) {
        this.funcionarioListInsertService.funcionarioListComponent = this;
        this.funcionarioListEditService.funcionarioListComponent = this;
        this.funcionarioListDeleteService.funcionarioListComponent = this;
    }

    ngOnInit() {
        this.all()
    }

    all() {
        this.blockUI.start('Carregando');
        this.funcionarioHttp.list(this.pagination.page)
            .subscribe(response => {
                this.funcionarios = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
                this.blockUI.stop();
            })
    }

    pageChanged(page: number) {
        this.pagination.page = page;
        this.all();
    }
}
