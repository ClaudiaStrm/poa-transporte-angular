import { Localizacao } from './localizacao'

export class Linha {
  id: number
  idlinha: number
  nome: string
  codigo: string
  localizacao: Localizacao[]

  constructor(json) {
    this.id = json.id || json.idlinha
    this.nome = json.nome
    this.codigo = json.codigo
  }
}