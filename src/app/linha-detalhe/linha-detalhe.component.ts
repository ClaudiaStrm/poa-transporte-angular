import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Linha } from '../models/linha'
import { LinhaService }  from '../linha.service'


@Component({
  selector: 'app-linha-detalhe',
  templateUrl: './linha-detalhe.component.html',
  styleUrls: ['./linha-detalhe.component.css']
})

export class LinhaDetalheComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private linhaService: LinhaService,
    private location: Location
  ) { }

  @Input() linha: Linha 

  ngOnInit() {
    this.getLinha()
  }

  private getLinha(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.linhaService.getLinha(id)
      .subscribe(linha => this.linha = linha)
  }

  voltar(): void {
    this.location.back()
  }
}
