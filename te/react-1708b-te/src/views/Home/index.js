import React, { Component } from 'react'
// import { getTabData } from '../../api/api'

import RouterView from '@/router/index'
import loadable from '@/utils/loadable'

const HeaderBar = loadable(() => import('@/components/Header'));
const FooterBar = loadable(() => import('@/components/Footer'));

export default class componentName extends Component {
  state = {
  }

  render() {
    return (
      <div>
        home
        <HeaderBar />
          <RouterView routes={this.props.routes}/>
        <FooterBar />
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
