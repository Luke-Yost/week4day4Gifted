export class Giphy {
  constructor(gifUrl) {
    this.gifUrl = gifUrl
    console.log(gifUrl)
  }

  get Template() {
    return this.gifUrl
  }
}