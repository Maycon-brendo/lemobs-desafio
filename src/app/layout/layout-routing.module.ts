import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from 'src/app/layout/cadastrar/cadastrar.component';
import { ListarComponent } from 'src/app/layout/listar/listar.component';
import { LayoutComponent } from './layout.component';
import { CadastrarServico} from 'src/app/servicos/cadastrar/cadastrar.servico';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'cadastrar',
                component: CadastrarComponent
            },
            {
                path: 'listar',
                component: ListarComponent
            },
            {   path: 'usuario',
                component: CadastrarServico
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
