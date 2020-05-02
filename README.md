# AulaServico

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Exerc�cio Angular 3 - Prof. Ramon Pereira - Desenvolvimento Mobile - UniBH
2020/1 - Servi�os

1) Crie um novo projeto no Angular
2) Crie um componente chamado pessoas
3) Crie um componente chamado pessoas-detalhe
4) Limpe todo o conte�do do template do app componente e deixe neste componente
somente a chamada para o componente pessoas
5) Crie uma interface pessoas que dever� conter as seguintes propriedades:
"id": integer
"name": string
"idade": integer
"corOlhos": string
"sexo": string
"email": string
** Utilize um arquivo pessoas.model ** e importe essa interface ao componente
pessoas.
6) No componente pessoas:
a) declare uma propriedade pessoas que ser� um array de pessoas. ** let
pessoasArray: pessoas[] = [ARRAY DE PESSOAS AQUI]; **
b) um booleano chamado detalhePessoa que dever� ser inicializado como
falso.
c) um objeto do tipo pessoa.
d) uma fun��o para receber como output os dados de uma pessoa (id,nome) e
alterar o nome da pessoa no array de pessoas.
7) Crie um servi�o Pessoas com injectable e provideIn: root ( ** pode utilizar o ng
generate service pessoas ** ) Caso tenha problemas, adicione no providers do
app.module o servi�o Pessoas.
8) Importe a interface Pessoas no servi�o de Pessoas e crie o array de pessoas do
JSON adicionado na tarefa.
9) No servi�o Pessoas:
a) declare uma propriedade pessoas que ser� um array de pessoas. ** let
pessoasArray: pessoas[] = [ARRAY DE PESSOAS AQUI]; **
b) crie um m�todo getPessoas que dever� retornar um array de Pessoas
listagem de todas as pessoas.
c) crie um m�todo getPessoa(id) que dever� retornar os dados espec�ficos de
uma pessoa. Este m�todo dever� percorrer seu array de Pessoas e
encontrar a pessoa pelo id e retornar apenas os dados desta pessoa.
d) Crie um m�todo atualizarPessoa(id) que dever� exibir no console.log o id
recebido como par�metro para atualizar a pessoa.
10) Coloque no construtor do componente pessoas a inje��o de depend�ncia do servi�o
pessoas.
11) Crie no m�todo ngOnInit do componente pessoas a chamada da fun��o getPessoas
do servi�o pessoas salvando o resultado no array de pessoas criado no
componente.
12) Template Componente pessoas:
a) Coloque no template do componente pessoas uma tabela que ir� conter 4
colunas: id, nome, e-mail, detalhe.
b) Fa�a um ngFor para cada linha dessa tabela exibir estes dados das pessoas
que foram salvas no array de pessoas. Na coluna detalhe, adicione um bot�o
com o t�tulo �Detalhe� observe a fun��o de clique chamando uma fun��o
detalhe que ir� receber o id da pessoa como par�metro
c) Adicione uma div ap�s a tabela com um h1 contendo o t�tulo Detalhe da
Pessoa.
d) Adicione um ngIf para essa div ser ativada somente se o booleano do detalhe
da pessoa estiver como true
e) Nessa div, inclua o componente pessoas-detalhe passando atrav�s de input
os dados do objeto pessoa declarado no componente Pessoas e criando o
output para receber dados atualizados referentes a essa pessoa.
13) A fun��o detalhe dever�:
a) ativar o booleano detalhe
b) chamar o m�todo getPessoaId do servi�o passando o id clicado como
par�metro
c) salvar o resultado no objeto pessoa definido.
14) No componente/template pessoa-detalhe:
a) Instanciar o servi�o Pessoas com inje��o de depend�ncia (n�o esquecer de
Importar o servi�o)
b) receber como input os dados de uma pessoa
c) exibir esses dados no template em uma div e par�grafos para todos os dados
de uma pessoa.
d) Adicionar um bot�o alterar dados no fim deste template com uma fun��o de
click para atualizar os dados de uma pessoa.
15) A fun��o criada para atualizar os dados dever�:
a) mapear a altera��o do nome desta pessoa, passando um objeto que conter�
o id da pessoa e o novo nome atualizado (pode inserir um nome
manualmente, diretamente no Javascript) via output para o componente
pessoas e atualizar o nome da referida pessoa na tabela para o nome
recebido como par�metro.
b) chamar a fun��o atualizarPessoa do servi�o de pessoas.
