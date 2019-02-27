import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  tipo: string

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/detalhes/28'])
 }

  buscar(id: number) {
    return this.router.navigate([`/detalhes/${ id }`])
  }

}
