import {Injectable} from '@angular/core';
import {BaseHttpService} from "./base-http.service";
import {Funcionario} from "../../models/funcionario";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class FuncionarioHttpService implements BaseHttpService<Funcionario> {

    private base_path = 'http://localhost:8000/v1/funcionario';

    constructor(private http: HttpClient) {
    }

    create(data: Funcionario): Observable<Funcionario> {
        return this.http
            .post<{ data: Funcionario }>(this.base_path, data)
            .pipe(
                map(response => response.data)
            );
    }

    destroy(id: number): Observable<any> {
        return this.http
            .delete(`${this.base_path}/${id}`)
    }

    get(id: number): Observable<Funcionario> {
        return this.http
            .get<{ data: Funcionario }>(`${this.base_path}/${id}`)
            .pipe(
                map(response => response.data)
            );
    }

    list(page: number): Observable<{ data: Array<Funcionario>; meta: any }> {
        const params = new HttpParams({
            fromObject: {
                page: page + ""
            }
        });
        return this.http.get<{ data: Array<Funcionario>, meta: any }>(this.base_path, {
            params: params
        });
    }

    update(id: number, data: Funcionario): Observable<Funcionario> {
        return this.http
            .put<{ data: Funcionario }>(`${this.base_path}/${id}`, data)
            .pipe(
                map(response => response.data)
            );
    }
}
