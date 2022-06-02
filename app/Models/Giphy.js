import { generateId } from "../Utils/generateId.js"

export class Giphy {
  constructor(data) {
    this.gifUrl = data.images.original.webp
    this.id = data.id || generateId()
    console.log(this.gifUrl)
  }

  get Template() {
    return `
    <div class="card m-3" style="width: 18rem;">
      <img onclick="app.giftsController.selectGif('${this.id}')" src="${this.gifUrl}" class="card-img-top" alt="gif">
  </div>
    `
  }
}