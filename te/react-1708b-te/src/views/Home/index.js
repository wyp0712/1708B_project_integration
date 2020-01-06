import React, { Component } from 'react'
// import { getTabData } from '../../api/api'

export default class componentName extends Component {
  state = {
    obj: {
      status: 0,
      type: 'overtime',
      create_at: 0,
      pageSize: 10,
      page: 1
    }
  }

  render() {
    return (
      <div>
        home
        <button onClick={ () => this.props.history.push('/cart') } >跳转详情页面</button>
      </div>
    )
  }

  componentDidMount() {
    // getTabData({
    //   url: 'http://127.0.0.1:3000/api/task/list',
    //   method: 'get',
    //   params: {...this.state.obj}
    // }).then(res => {
    //   console.log(res, 'res') 
    // })
  }
}
