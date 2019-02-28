import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule }    from '@angular/common/http'

import { NgxPaginationModule } from 'ngx-pagination'

import { AppComponent } from './app.component'
import { LinhasComponent } from './linhas/linhas.component'
import { LinhaDetalheComponent } from './linha-detalhe/linha-detalhe.component'
import { AppRoutingModule } from './app-routing.module'
import { InicialComponent } from './inicial/inicial.component'

@NgModule({
  declarations: [
    AppComponent,
    LinhasComponent,
    LinhaDetalheComponent,
    InicialComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
