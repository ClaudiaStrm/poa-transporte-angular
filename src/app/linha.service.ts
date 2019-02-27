import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Linha } from './models/linha'
import { LocalizacaoService } from './localizacao.service'

@Injectable({
  providedIn: 'root'
})

export class LinhaService {
  constructor(
    private http: HttpClient,
    private localizacaoService: LocalizacaoService
    ) { }

  private listaUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t='
  private linhaUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p='

  getLinhas(tipo: string): Observable<Linha[]> {
    return this.http.get<Linha[]>(`${ this.listaUrl }${ tipo }`)
    .pipe(
      tap(_ => console.log('fetched linhas')),
      catchError(this.handleError('getLinhas', []))
    )
  }

  getLinha(id: number): Observable<Linha> {    
    const url = `${ this.linhaUrl }${ id }`;
    return this.http.get<Linha>(url)
    .pipe(
      tap(_ => console.log(`fetched linha id=${ id }`)),
      catchError(this.handleError<Linha>(`getLinha id=${ id }`))
    );
  } 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error) // log to console instead
      console.log(`${ operation } failed: ${ error.message }`)
      return of(result as T)
    }
  }
}
