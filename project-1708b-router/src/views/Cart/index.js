import React, { Component } from 'react'
import RouterView from '../../router/index'
import { NavLink } from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <div>
        cart
        <NavLink to='/cart/tab1'>tab1</NavLink>
        <NavLink to='/cart/tab2'>tab1</NavLink>
        <div onClick={ () => { this.props.history.go(-1) } }>back</div>
        <RouterView  routes={ this.props.routes } />
      </div>
    )
  }
}
