import { PessoasService } from './../pessoas.service';
import { Pessoas } from './../pessoas.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  PessoasArray: Pessoas[] = [];
  detalhePessoa = false;
  pessoa: Pessoas;


  constructor(private pessoaServico: PessoasService) { }

  ngOnInit(): void {
  // para mostrar no template
    this.PessoasArray = this.pessoaServico.getPessoas();
  }

  detalhe(id){
    console.log(id);
    this.detalhePessoa = true;
    this.PessoasArray.forEach(i => {
      if (i.id === id){
        this.pessoa = i;
      }
    });
  }
  receberAtualizacao(event) {
    this.PessoasArray.forEach( e => {
      // tslint:disable-next-line: triple-equals
      if (e.id == event.id){
        e.name = event.name;
        e.idade = event.idade;
        e.corOlhos = event.corOlhos;
        e.sexo = event.sexo;
        e.email = event.email;
      }
    });
 }

}
