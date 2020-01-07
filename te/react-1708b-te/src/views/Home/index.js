import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RouterView from '@/router/index'
import { Menu, Icon } from 'antd';
import styled from 'styled-components';

const { SubMenu } = Menu;

const Wrapped = styled.div`
   width: 100vw;
   height: 755px;
   overflow: auto; 
   display: flex;
   border:1px solid #ccc;
   .left {
     width:275px;
   }
   .right {
     width: calc(100vw - 275px);
   }
`;


export default class componentName extends Component {
  state = {
    collapsed: false,
    openKeys: ['sub1'],
  };

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Wrapped>
        <div className='left'>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: '100%',height:'100%' }}
          theme="dark"
        >
           <Menu.Item key="0">
            <Icon type="pie-chart" />
            <div style={{width:'80%',display: 'inline-block',}}><NavLink style={{width:'100%',height:'100%',display:'inline-block',color:'#fff'}} to='/home/index'>首页</NavLink></div>
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
            <Menu.Item key="1">
              <NavLink to='/home/loans'>贷款订单</NavLink>
            </Menu.Item>

            <Menu.Item key="2">
              <NavLink to='/home/transfer'>转单订单</NavLink>
            </Menu.Item>

            <Menu.Item key="3">
              <NavLink to='/home/insurance'>保险订单</NavLink>
            </Menu.Item>

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
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
        </div>
        <div className='right'>
          <RouterView routes={this.props.routes}/>
        </div>
      </Wrapped>
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
