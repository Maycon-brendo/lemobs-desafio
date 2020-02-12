import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarServico } from 'src/app/servicos/cadastrar/cadastrar.servico';
import { Router, Routes, RouterModule } from '@angular/router';
import { ListarComponent } from '../listar/listar.component';

const routes: Routes = [
  { path: '', component: ListarComponent},
  { path: 'editar:/id', component: CadastrarComponent}
];

@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CadastrarModule { }
