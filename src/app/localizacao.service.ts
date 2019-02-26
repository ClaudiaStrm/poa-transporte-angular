import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'

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
    private route: ActivatedRoute,
    private localizacaoService: LocalizacaoService
  ) { }

    public async getLocalizacaoAPI(id:number) {      
    return await 
      fetch(`${this.urlLinha}${ id }`)
      .then(response => response.json())
    }

  public getLocalizacao(id:number): Observable<Localizacao[]> {        
    const data = fetch(`${this.urlLinha}${ id }`)
    .then(response => response.json())
    
    return of(Object.values(data)
    .filter(d => typeof d === 'object')
    .map(l => (new Localizacao(l))))
  }
}
