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

  buscarPorId(id: string) {
    if (!id || !parseInt(id)) {
      document.getElementById("id-invalido").style.display = "block"
      return
    }
    return this.router.navigate([`/detalhes/${ id }`])
  }

}
