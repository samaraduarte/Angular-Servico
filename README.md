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

## Exercício Angular 3 - Prof. Ramon Pereira - Desenvolvimento Mobile - UniBH
2020/1 - Serviços

1) Crie um novo projeto no Angular
2) Crie um componente chamado pessoas
3) Crie um componente chamado pessoas-detalhe
4) Limpe todo o conteúdo do template do app componente e deixe neste componente
somente a chamada para o componente pessoas
5) Crie uma interface pessoas que deverá conter as seguintes propriedades:
"id": integer
"name": string
"idade": integer
"corOlhos": string
"sexo": string
"email": string
** Utilize um arquivo pessoas.model ** e importe essa interface ao componente
pessoas.
6) No componente pessoas:
a) declare uma propriedade pessoas que será um array de pessoas. ** let
pessoasArray: pessoas[] = [ARRAY DE PESSOAS AQUI]; **
b) um booleano chamado detalhePessoa que deverá ser inicializado como
falso.
c) um objeto do tipo pessoa.
d) uma função para receber como output os dados de uma pessoa (id,nome) e
alterar o nome da pessoa no array de pessoas.
7) Crie um serviço Pessoas com injectable e provideIn: root ( ** pode utilizar o ng
generate service pessoas ** ) Caso tenha problemas, adicione no providers do
app.module o serviço Pessoas.
8) Importe a interface Pessoas no serviço de Pessoas e crie o array de pessoas do
JSON adicionado na tarefa.
9) No serviço Pessoas:
a) declare uma propriedade pessoas que será um array de pessoas. ** let
pessoasArray: pessoas[] = [ARRAY DE PESSOAS AQUI]; **
b) crie um método getPessoas que deverá retornar um array de Pessoas
listagem de todas as pessoas.
c) crie um método getPessoa(id) que deverá retornar os dados específicos de
uma pessoa. Este método deverá percorrer seu array de Pessoas e
encontrar a pessoa pelo id e retornar apenas os dados desta pessoa.
d) Crie um método atualizarPessoa(id) que deverá exibir no console.log o id
recebido como parâmetro para atualizar a pessoa.
10) Coloque no construtor do componente pessoas a injeção de dependência do serviço
pessoas.
11) Crie no método ngOnInit do componente pessoas a chamada da função getPessoas
do serviço pessoas salvando o resultado no array de pessoas criado no
componente.
12) Template Componente pessoas:
a) Coloque no template do componente pessoas uma tabela que irá conter 4
colunas: id, nome, e-mail, detalhe.
b) Faça um ngFor para cada linha dessa tabela exibir estes dados das pessoas
que foram salvas no array de pessoas. Na coluna detalhe, adicione um botão
com o título “Detalhe” observe a função de clique chamando uma função
detalhe que irá receber o id da pessoa como parâmetro
c) Adicione uma div após a tabela com um h1 contendo o título Detalhe da
Pessoa.
d) Adicione um ngIf para essa div ser ativada somente se o booleano do detalhe
da pessoa estiver como true
e) Nessa div, inclua o componente pessoas-detalhe passando através de input
os dados do objeto pessoa declarado no componente Pessoas e criando o
output para receber dados atualizados referentes a essa pessoa.
13) A função detalhe deverá:
a) ativar o booleano detalhe
b) chamar o método getPessoaId do serviço passando o id clicado como
parâmetro
c) salvar o resultado no objeto pessoa definido.
14) No componente/template pessoa-detalhe:
a) Instanciar o serviço Pessoas com injeção de dependência (não esquecer de
Importar o serviço)
b) receber como input os dados de uma pessoa
c) exibir esses dados no template em uma div e parágrafos para todos os dados
de uma pessoa.
d) Adicionar um botão alterar dados no fim deste template com uma função de
click para atualizar os dados de uma pessoa.
15) A função criada para atualizar os dados deverá:
a) mapear a alteração do nome desta pessoa, passando um objeto que conterá
o id da pessoa e o novo nome atualizado (pode inserir um nome
manualmente, diretamente no Javascript) via output para o componente
pessoas e atualizar o nome da referida pessoa na tabela para o nome
recebido como parâmetro.
b) chamar a função atualizarPessoa do serviço de pessoas.
