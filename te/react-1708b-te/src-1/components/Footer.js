import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <NavLink to='/home'>home</NavLink> |
        <NavLink to='/detail'>detail</NavLink> |
        <NavLink to='/login'>login</NavLink>
      </div>
    )
  }
}
