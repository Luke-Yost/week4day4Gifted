import { giphyService } from "../Services/GiphyService.js"



export class GiphyController {

  search() {
    window.event.preventDefault()
    let search = window.event.target.search.value
    giphyService.search(search)
  }
}