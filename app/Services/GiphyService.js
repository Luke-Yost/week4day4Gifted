import { ProxyState } from "../AppState"
import { Giphy } from "../Models/Giphy"



const giphyApiKey = 'HlU3G9Lxkvf5FQAbZ16iSsGWRcExi0sE'
const limit = 20
const rating = 'pg-13'

const giphyApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&limit=${limit}&rating=${rating}&q=`,
  timeout: 2000
})

// https://api.giphy.com/v1/gifs/search?api_key=HlU3G9Lxkvf5FQAbZ16iSsGWRcExi0sE&limit=20&q=


class GiphyService {

  async search(search) {
    try {
      const res = await giphyApi.get(search)
      console.log(res.data.data)
      ProxyState.giphys = res.data.data.map(g => new Giphy(g.images.original.webp))
    } catch(error) {
      console.log(error)
    }
  }
}

export const giphyService = new GiphyService()