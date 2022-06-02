


const giphyApiKey = 'HlU3G9Lxkvf5FQAbZ16iSsGWRcExi0sE'

const giphyApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=`,
  timeout: 2000
})

// https://api.giphy.com/v1/gifs/search?api_key=HlU3G9Lxkvf5FQAbZ16iSsGWRcExi0sE&q=


class GiphyService {

  search(search) {
    
  }
}

export const giphyService = new GiphyService()