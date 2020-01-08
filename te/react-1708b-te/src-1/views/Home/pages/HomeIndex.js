import React, { Component } from 'react'
import { Pagination } from 'antd';

import styled from 'styled-components'

const HomeIndexBox = styled.div`
   width: 100%;
   height: 100vh;
   display:flex;
`;
const LeftDiv = styled.div`
    width: 100px;
    background: #ccc;
`;
const RightDiv = styled.div`
    width: calc(100% - 100px);
    background: #eee;
`;

export default class componentName extends Component {

  render() {

    return (
      <HomeIndexBox>
        <LeftDiv></LeftDiv>
        <RightDiv></RightDiv>
      </HomeIndexBox>
    )
  }

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  
}
