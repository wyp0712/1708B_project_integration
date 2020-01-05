import React from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import { getLogin, testPostList } from './api/api'

class App  extends  React.Component {
  componentDidMount() {
    testPostList({
      user:'devin',
      pwd: '123'
    }).then(res => {
      console.log(res, 'res')
    })
    // axios.post('/api/post_test',{
    //   name: 'devin',
    //   pwd: '123'
    // }).then(res => {
    //   console.log(res, 'res')
    // })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
