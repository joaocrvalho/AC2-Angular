import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { emprestimo } from '../emprestimo';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css',
})
export class CadastrarEmprestimo {

  tituloLivro: string = '';
  nomePessoa: string = ''
  dataPrevista: Date = new Date();

  constructor(private emprestimoService: EmprestimoService) {} 

  add(){
    const novoEmprestimo: emprestimo = {
      id: Math.random(), 
      tituloLivro: this.tituloLivro,
      nomePessoa: this.nomePessoa, 
      dataPrevista: this.dataPrevista, 
      devolucao: false
      } 
      this.emprestimoService.adicionar(novoEmprestimo); 

      this.tituloLivro = '';
      this.nomePessoa = '';
      this.dataPrevista = new Date();
    }
}
