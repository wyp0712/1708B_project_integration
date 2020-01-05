import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'

import RouterView from './router/index'
import config from './router/config'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <RouterView routes={config} /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
