import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Observable, of } from 'rxjs'

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

  ngOnInit() {
    this.getLinha()
    this.getLocalizacao()
  }

  private getLinha(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.linhaService.getLinha(id)
    .subscribe(
      linha => this.linha = linha
    )    
  }

  private getLocalizacao(): void {  
    const id = +this.route.snapshot.paramMap.get('id')   
    let lista = []
    fetch(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${ id }`)
    .then(response => response.json())
    .then(data => Object.values(data).filter(d => typeof d == 'object'))
    .then(loc => loc.forEach((l) => lista.push(new Localizacao(l))))

    of(lista).subscribe(
      localizacao => this.localizacao = localizacao
    )
  }

  voltar(): void {
    this.location.back()
  }
}
