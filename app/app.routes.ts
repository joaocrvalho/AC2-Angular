import { Routes } from '@angular/router';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListarEmprestimos } from './listar-emprestimos/listar-emprestimos';

export const routes: Routes = [
    {
        path:"",
        component: CadastrarEmprestimo
    },
    {
        path:"listar-emprestimos",
        component: ListarEmprestimos
    }
];
