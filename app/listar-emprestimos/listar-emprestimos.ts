import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../emprestimo-service';
import { emprestimo } from '../emprestimo';

@Component({
  selector: 'app-listar-emprestimos',
  imports: [RouterLink],
  templateUrl: './listar-emprestimos.html',
  styleUrl: './listar-emprestimos.css',
})
export class ListarEmprestimos {
  emprestimos: emprestimo[] = [];

  constructor(private emprestimoService: EmprestimoService) {
    this.emprestimos = this.emprestimoService.listar();
  }

  remover(){
    this.emprestimoService.remover();
  }
}
