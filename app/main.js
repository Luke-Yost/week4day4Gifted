import { GiftsController } from "./Controllers/GiftsController.js"
import { GiphyController } from "./Controllers/GiphyController.js"


class App {
  // valuesController = new ValuesController();
  giftsController = new GiftsController()
  giphyController = new GiphyController()
}

window["app"] = new App();

// TODO API KEY
// HlU3G9Lxkvf5FQAbZ16iSsGWRcExi0sE