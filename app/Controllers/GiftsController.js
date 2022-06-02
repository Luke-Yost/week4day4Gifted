import { giftsService } from "../Services/GiftsService.js";

export class GiftsController {
  
  selectGif(id) {
    console.log('giftsController.selectGif(id)')
  }

  create() {
    window.event.preventDefault()
    let tag = window.event.target.tag.value
    console.log(tag)
  }
}