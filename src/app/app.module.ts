import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasDetalhesComponent } from './pessoas-detalhes/pessoas-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    PessoasDetalhesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
