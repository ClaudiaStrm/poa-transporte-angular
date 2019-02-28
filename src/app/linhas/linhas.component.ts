import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Linha } from '../models/linha'
import { LinhaService } from '../linha.service'

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.css']
})

export class LinhasComponent implements OnInit {

  linhas: Linha[]
  tipoLinha: string
  tipoBusca: string
  
  constructor(
    private linhaService: LinhaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.setTipo()
    this.getLinhas(this.tipoBusca)
  }

  getLinhas(tipoBusca): void {
    this.linhaService
    .getLinhas(tipoBusca)
    .subscribe(linhas => this.linhas = linhas)
  }

  buscarPorNome(nome) {
    this.linhaService.buscarPorNome(nome, this.tipoBusca)
    .subscribe(linhas => this.linhas = linhas)
  }

  private setTipo(): void {
    this.tipoBusca = this.route.snapshot.paramMap.get('tipo').charAt(0)
    this.tipoBusca === 'o' ? this.tipoLinha = 'ônibus' : this.tipoLinha = 'lotação'
  }
}
