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
  tipo: string
  
  constructor(
    private linhaService: LinhaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.setTipo()
    this.getLinhas()
  }

  getLinhas(): void {
    this.linhaService
    .getLinhas()
    .subscribe(linhas => this.linhas = linhas)
  }

  private setTipo(): void {
    this.tipo = this.route.snapshot.paramMap.get('tipo')
  }
}
