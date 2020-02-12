import { FormBuilder } from '@angular/forms';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarComponent } from 'src/app/layout/cadastrar/cadastrar.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ListarComponent } from 'src/app/layout/listar/listar.component';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/layout/modelo/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastrarServico {
  API_URL = 'https://reqres.in';
  public usuarios: Usuario [];

  constructor(private http: HttpClient) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.usuarios = [];
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }
  public cadastrar(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(this.API_URL + '/api/users',
     JSON.stringify(usuario), { headers: this.headers });

  }

  public editar(usuario: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(this.API_URL + '/api/users/{ID}',
    JSON.stringify(usuario), { headers: this.headers });
  }

  public deletar(usuario: Usuario): Observable<Usuario[]> {
    return this.http.delete<Usuario[]>(this.API_URL + '/api/users/{ID}');
  }
  public obterTodosUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL + '/api/users');
  }
}
