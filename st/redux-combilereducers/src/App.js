import React, { Component } from 'react'
import TodoList from './components/todo'
import { Provider } from 'react-redux'
import store from './store/index'

export default class App extends Component {
  render() {
    return (  
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}
