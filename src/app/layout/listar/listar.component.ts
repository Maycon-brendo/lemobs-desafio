import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder } from '@angular/forms';
import { Observable, empty, of, Subject, EMPTY } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { CadastrarServico } from 'src/app/servicos/cadastrar/cadastrar.servico';
import { Usuario } from 'src/app/layout/modelo/usuario';
import { ActivatedRoute, Router, } from '@angular/router';
import { error } from 'util';
import { CadastrarComponent } from 'src/app/layout/cadastrar/cadastrar.component' ;

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  preserveWhitespaces: true
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[];
  usuario$: Observable<Usuario[]>;
  error$ = new Subject<boolean>();

  usuarioSelecionado: Usuario;

  constructor(
    private service: CadastrarServico,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.service.list().subscribe(dados => this.service = dados);
  }

  onEdit(id) {
    this.router.navigate(['editar/:id', id], { relativeTo: this.route });
  }

  onDelete(usuario) {
    this.usuarioSelecionado = usuario;


    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(Usuario.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover usuario. Tente novamente mais tarde.');
      }
    );
  }

  onConfirmDelete() {
    this.service.remove(this.usuarioSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
      },
      erro => {
        this.alertService.showAlertDanger('Erro ao remover usuario. Tente novamente mais tarde.');
      }
    );
  }

  onDeclineDelete() {
  }
}

}
