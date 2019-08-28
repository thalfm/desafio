import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {BaseHttpService} from "./base-http.service";
import {FuncionarioDependente} from "../../models/FuncionarioDependente";
import {Funcionario} from "../../models/Funcionario";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDependenteHttpService{

  private base_path = 'http://localhost:8000/v1/funcionario';

  constructor(private http: HttpClient) {
  }

  create(funcionario_id:number, data: FuncionarioDependente): Observable<FuncionarioDependente> {
    return this.http
        .post<{ data: FuncionarioDependente }>(`${this.base_path}/${funcionario_id}/dependente`, data)
        .pipe(
            map(response => response.data)
        );
  }

  destroy(funcionario_id: number, funcionario_dependentes_id:number): Observable<any> {
    return this.http
        .delete(`${this.base_path}/${funcionario_id}/dependente/${funcionario_dependentes_id}`)
  }

  get(funcionario_id: number, funcionario_dependentes_id:number): Observable<FuncionarioDependente> {
    return this.http
        .get<{ data: FuncionarioDependente }>(`${this.base_path}/${funcionario_id}/dependente/${funcionario_dependentes_id}`)
        .pipe(
            map(response => response.data)
        );
  }

  list(funcionario_id: number): Observable<{ data: Funcionario }> {

    return this.http
        .get<{ data: Funcionario }>(`${this.base_path}/${funcionario_id}/dependente`);
  }

  update(funcionario_id: number,funcionario_dependentes_id:number, data: FuncionarioDependente): Observable<FuncionarioDependente> {
    return this.http
        .put<{ data: FuncionarioDependente }>(`${this.base_path}/${funcionario_id}/dependente/${funcionario_dependentes_id}`, data)
        .pipe(
            map(response => response.data)
        );
  }
}
