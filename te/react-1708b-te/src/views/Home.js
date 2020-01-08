import React, { Component } from 'react'
import { connect} from "react-redux"
import axios from "axios"
import "../mock/mock.js"

class Home extends Component {
  render() {
    return (
      <div className="Home-main">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)