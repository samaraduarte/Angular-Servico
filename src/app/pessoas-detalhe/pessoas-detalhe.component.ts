import { Pessoas } from './../pessoas.model';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PessoasService } from './../pessoas.service';
@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {

  @Input() Pessoa;
  @Output() atualizar = new EventEmitter();

  atualizarPessoa() {
    const id = 4;
    const name = 'Samara Duarte';
    const idade = 21;
    const corOlhos = 'preto';
    const sexo = 'feminino';
    const email = 'samara@samara.com';
    this.atualizar.emit({id, name, idade, corOlhos, sexo, email});
  }
  constructor(private pessoaServico: PessoasService) { }

  ngOnInit(): void {
  }
}
