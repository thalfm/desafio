import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioNewModalComponent } from './components/funcionario/funcionario-new-modal/funcionario-new-modal.component';
import { FuncionarioEditModalComponent } from './components/funcionario/funcionario-edit-modal/funcionario-edit-modal.component';
import { FuncionarioDeleteModalComponent } from './components/funcionario/funcionario-delete-modal/funcionario-delete-modal.component';
import { FuncionarioDependenteListComponent } from './components/funcionario-dependente/funcionario-dependente-list/funcionario-dependente-list.component';
import { FuncionarioDependenteNewModalComponent } from './components/funcionario-dependente/funcionario-dependente-new-modal/funcionario-dependente-new-modal.component';
import { FuncionarioDependenteEditModalComponent } from './components/funcionario-dependente/funcionario-dependente-edit-modal/funcionario-dependente-edit-modal.component';
import { FuncionarioDependenteDeleteModalComponent } from './components/funcionario-dependente/funcionario-dependente-delete-modal/funcionario-dependente-delete-modal.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListComponent,
    FuncionarioNewModalComponent,
    FuncionarioEditModalComponent,
    FuncionarioDeleteModalComponent,
    FuncionarioDependenteListComponent,
    FuncionarioDependenteNewModalComponent,
    FuncionarioDependenteEditModalComponent,
    FuncionarioDependenteDeleteModalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
