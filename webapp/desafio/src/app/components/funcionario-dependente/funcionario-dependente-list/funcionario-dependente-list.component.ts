import {Component, OnInit, ViewChild} from '@angular/core';
import {FuncionarioDependenteHttpService} from "../../../services/http/funcionario-dependente-http.service";
import {ActivatedRoute} from "@angular/router";
import {Funcionario} from "../../../models/Funcionario";
import {FuncionarioDependenteListInsertService} from "./funcionario-dependente-list-insert.service";
import {FuncionarioDependenteListDeleteService} from "./funcionario-dependente-list-delete.service";
import {FuncionarioDependenteListEditService} from "./funcionario-dependente-list-edit.service";
import {FuncionarioDependenteNewModalComponent} from "../funcionario-dependente-new-modal/funcionario-dependente-new-modal.component";
import {FuncionarioDependenteEditModalComponent} from "../funcionario-dependente-edit-modal/funcionario-dependente-edit-modal.component";
import {FuncionarioDependenteDeleteModalComponent} from "../funcionario-dependente-delete-modal/funcionario-dependente-delete-modal.component";

@Component({
    selector: 'app-funcionario-dependente-list',
    templateUrl: './funcionario-dependente-list.component.html',
    styleUrls: ['./funcionario-dependente-list.component.css']
})
export class FuncionarioDependenteListComponent implements OnInit {

    funcionarios: Funcionario = {
        nome: '',
        dependentes: []
    };
    funcionarioId: number;
    @ViewChild(FuncionarioDependenteNewModalComponent)
    funcionarioDependenteNewModalComponent: FuncionarioDependenteNewModalComponent;
    @ViewChild(FuncionarioDependenteEditModalComponent)
    funcionarioDependenteEditModalComponent: FuncionarioDependenteEditModalComponent;
    @ViewChild(FuncionarioDependenteDeleteModalComponent)
    funcionarioDependenteDeleteModalComponent: FuncionarioDependenteDeleteModalComponent;

    constructor(
        private route: ActivatedRoute,
        private funcionarioDependenteHtpp: FuncionarioDependenteHttpService,
        private funcionarioDependenteListDeleteService: FuncionarioDependenteListDeleteService,
        private funcionarioDependenteListEditService: FuncionarioDependenteListEditService,
        private funcionarioDependenteListInsertService: FuncionarioDependenteListInsertService
    ) {
        funcionarioDependenteListDeleteService.funcionarioDependenteListComponent = this;
        funcionarioDependenteListEditService.funcionarioDependenteListComponent = this;
        funcionarioDependenteListInsertService.funcionarioDependenteListComponent = this;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.funcionarioId = params.funcionario_id;
            this.all();
        });

    }

    all() {
        this.funcionarioDependenteHtpp.list(this.funcionarioId)
            .subscribe(response => {
                this.funcionarios = response.data;
            })
    }

}
