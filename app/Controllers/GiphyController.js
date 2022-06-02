import { giphyService } from "../Services/GiphyService.js"
import { ProxyState } from "../AppState.js" 


function _drawGiphys(){
  let template = ''
  ProxyState.giphys.forEach(g => template += g.Template)
  document.getElementById('gifs').innerHTML = template
}
export class GiphyController {

  constructor(){
    ProxyState.on('giphys', _drawGiphys)
  }

  search() {
    window.event.preventDefault()
    let search = window.event.target.search.value
    giphyService.search(search)
  }


}