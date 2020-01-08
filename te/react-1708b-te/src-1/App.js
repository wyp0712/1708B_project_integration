import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import RouterView from '@/router/index'
import config from '@/router/config'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <RouterView routes={config} /> 
        </BrowserRouter>
       </div>
    );
  }
}

export default App;
