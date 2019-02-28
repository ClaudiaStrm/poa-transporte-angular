import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"

import { LinhaService }  from '../linha.service'

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(
    private router: Router,
    private linhaService: LinhaService
  ) { }

  tipo: string

  ngOnInit() {
  }

  onSubmit() {
 }

  buscar(id: number) {
    return this.router.navigate([`/detalhes/${ id }`])
  }

}
