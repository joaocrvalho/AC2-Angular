import { Injectable } from '@angular/core';
import { emprestimo } from './emprestimo';

@Injectable({
  providedIn: 'root',
})
export class EmprestimoService {

  listaEmprestimos: emprestimo[] = [];

  listar(): emprestimo[] {
    return this.listaEmprestimos;
  }

  adicionar(emprestimo: emprestimo): void {
    this.listaEmprestimos.push(emprestimo);
  }

  remover(): void {
    this.listaEmprestimos.pop();
  }
 
}
