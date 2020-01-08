import React from 'react';
import { Provider} from "react-redux"
import store from "./store/index.js.js"
import { BrowserRouter} from "react-router-dom"
import RouteIndex from "./route/index.js.js"
import config from "./route/config.js.js"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <main className="main">
              <RouteIndex routrs={config}/>
            </main>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    )
  }
}


export default App;
