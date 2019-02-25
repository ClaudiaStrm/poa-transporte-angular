import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Linha } from './models/linha'
import { Localizacao } from './models/localizacao'

import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {
  urlLinha = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p='
    
  localizacao: Localizacao[]

  constructor(
    private http: HttpClient,
    private localizacaoService: LocalizacaoService
    ) { }

    getLocalizacao(id: number): Observable<Localizacao[]> {    
      this.http.get<Linha>(`${ this.urlLinha } ${ id }`)
      .forEach(loc => this.localizacao.push(new Localizacao(loc)))

      return of(this.localizacao)
    }
}
