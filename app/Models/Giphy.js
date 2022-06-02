export class Giphy {
  constructor(data) {
    this.gifUrl = data.images.original.webp
    console.log(this.gifUrl)
  }

  get Template() {
    return this.gifUrl
  }
}