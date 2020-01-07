import React, { Component } from 'react'
// import { getTabData } from '../../api/api'
import { NavLink } from 'react-router-dom'

import RouterView from '@/router/index'
import loadable from '@/utils/loadable'

import { Menu, Icon, Button } from 'antd';
const { SubMenu } = Menu;

const HeaderBar = loadable(() => import('@/components/Header'));
const FooterBar = loadable(() => import('@/components/Footer'));

export default class componentName extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className='home-page'>
        <div className='left'>
        <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span> <NavLink to='/home/index'>HomeIndex</NavLink> </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span> <NavLink to='/home/classify'>HomeClassify</NavLink> </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
        </div>
        <div className='right'>
          <RouterView routes={this.props.routes}/>
        </div>
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
