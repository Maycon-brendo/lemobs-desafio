import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarServico } from 'src/app/servicos/cadastrar/cadastrar.servico';

@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CadastrarModule { }
