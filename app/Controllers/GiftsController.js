import { ProxyState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";

export class GiftsController {
  
  selectGif(id) {
    // console.log(`giftsController.selectGif('${id}')`)
    // ProxyState.selectedGifId = id
    // id.value for tag
    // sandbox is api/gifts/:id
    // put request
    // https://bcw-sandbox.herokuapp.com/api/gifts
  }

  create() {
    window.event.preventDefault()
    let tag = window.event.target.tag.value
    console.log(tag)
  }
}