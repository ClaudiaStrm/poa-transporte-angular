import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LinhasComponent } from './linhas/linhas.component'
import { InicialComponent } from './inicial/inicial.component'
import { LinhaDetalheComponent } from './linha-detalhe/linha-detalhe.component'

const routes: Routes = [
  { path: '', redirectTo: '/inicial', pathMatch: 'full' },
  { path: 'inicial', component: InicialComponent },
  { path: 'linhas/:tipo', component: LinhasComponent },
  { path: 'linhas/:tipo', component: LinhasComponent },
  { path: 'detalhes/:id', component: LinhaDetalheComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 

}
