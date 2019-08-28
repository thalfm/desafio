import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuncionarioListComponent} from "./components/funcionario/funcionario-list/funcionario-list.component";
import {FuncionarioDependenteListComponent} from "./components/funcionario-dependente/funcionario-dependente-list/funcionario-dependente-list.component";

const routes: Routes = [
  {
    path: '', component: FuncionarioListComponent
  },
  {
    path: 'funcionario/:funcionario_id/dependente', component: FuncionarioDependenteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
