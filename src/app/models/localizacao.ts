export class Localizacao {
  lat: string
  lng: string

  constructor(json) {
    this.lat = json.lat
    this.lng = json.lng
  }
}