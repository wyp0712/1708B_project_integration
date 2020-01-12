import React, { Component } from 'react'
import RouterView from '../../router/index'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <RouterView routes={this.props.routes}/>
      </div>
    )
  }
}
