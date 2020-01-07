import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'

import RouterView from '@/router/index'
import config from '@/router/config'
import { Button } from 'antd';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Button type="primary">确定按钮</Button>
        <BrowserRouter>
          <RouterView routes={config} /> 
        </BrowserRouter>
       </div>
    );
  }
}

export default App;
