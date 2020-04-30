import { Pessoas } from './../pessoas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

constructor() { }

ngOnInit(): void {

}

pessoasArray: Pessoas[] = [];

detalhePessoa: boolean = false;

pessoas: Pessoas;

receberDados(_pessoas) {
  this.pessoasArray.forEach( pessoas => {
    if (pessoas.id == _pessoas.id){
      pessoas.name = _pessoas.name;
    }
});

}
}
