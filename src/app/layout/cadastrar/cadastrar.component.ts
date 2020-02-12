import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder } from '@angular/forms';
import { CadastrarServico } from 'src/app/servicos/cadastrar/cadastrar.servico';
import { Usuario } from 'src/app/layout/modelo/usuario';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { error } from 'util';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss', './cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {
  public usuario: Usuario;

  constructor(private router: Router, private activatedRouter: ActivatedRoute,
               private cadastrarServico: CadastrarServico ) { }




  ngOnInit() {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    this.cadastrarServico.cadastrar(this.usuario)
    .subscribe(
      usuarioJsaon => {
        console.log(usuarioJsaon);
      },
      e => {
        console.log(e.error );
      }
    );
  }

}
