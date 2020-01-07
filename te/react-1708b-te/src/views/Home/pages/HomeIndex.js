import React, { Component } from 'react'
import { Pagination } from 'antd';

export default class componentName extends Component {

  render() {
    // const { page,size }= 
    return (
     <div>

        <Pagination
          onChange={() => this.onShowSizeChange(1, 5)}
          defaultCurrent={1} total={50} />
     </div>
    )
  }

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  
}
