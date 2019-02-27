import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { of } from 'rxjs'

import { Linha } from '../models/linha'
import { Localizacao } from '../models/localizacao'
import { LinhaService }  from '../linha.service'


import { LocalizacaoService } from '../localizacao.service'


@Component({
  selector: 'app-linha-detalhe',
  templateUrl: './linha-detalhe.component.html',
  styleUrls: ['./linha-detalhe.component.css']
})

export class LinhaDetalheComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private linhaService: LinhaService,
    private location: Location,
    private localizacaoService: LocalizacaoService
  ) { }

  @Input() linha: Linha 
  @Input() localizacao: Localizacao[]

  private id = +this.route.snapshot.paramMap.get('id')
  private urlLinha = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p='

  ngOnInit() {
    this.getLinha(this.id)
    this.getLocalizacao(this.id)
  }

  private getLinha(id): void {
    this.linhaService.getLinha(id)
    .subscribe(
      linha => this.linha = linha
    )    
  }

  private async getLocalizacao(id) {   
    const data = await fetch(`${ this.urlLinha }${ id }`)
    .then(response => response.json())
    
    of(Object.values(data)
    .filter(d => typeof d === 'object')
    .map(l => (new Localizacao(l))))
    .subscribe(
      localizacao => this.localizacao = localizacao
    )
  }

  voltar(): void {
    this.location.back()
  }
}
