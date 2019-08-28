import {FuncionarioDependente} from "./FuncionarioDependente";

export class Funcionario {
    funcionario_id?: number;
    nome: string;
    created_at?: string
    dependentes?: FuncionarioDependente[]
}