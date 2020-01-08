import React, { Component } from 'react'
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import styled from 'styled-components'
import * as type from '@/api/api'
// type.pageSizeFn
const columns = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'id',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '创建时间',
    width: 100,
    dataIndex: 'create_at',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    key: '1',
    width: 150,
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    key: '2',
    width: 150,
  },
  {
    title: '休假类型',
    dataIndex: 'list_type',
    key: '3',
    width: 150,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: '4',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>删除</a>,
  },
];






export default class componentName extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <HomeIndexBox>
        <Table
          style={{width: '100%'}} 
          columns={columns} 
          dataSource={this.state.list}
          scroll={{ x: 1000, y: 300 }} 
          onChange={ (params) => { this.bindPageSize(params) } }
        />
      </HomeIndexBox>
    )
  }

  componentDidMount() {
    const data = [];
    let params = { current:1, pageSize: 150 };
      type.pageSizeFn({...params}).then(res => {
      let arrayList = res.data;
      for (let i = 0; i < arrayList.length; i++) {
        data.push({
          key: arrayList[i].id,
          id: arrayList[i].id,
          create_at: arrayList[i].create_at,
          startTime: arrayList[i].startTime,
          endTime: arrayList[i].endTime,
          list_type: arrayList[i].list_type,
          status: arrayList[i].status
        });
      }
      this.setState({
        list: data
      })
    })
  }

  bindPageSize = (params) => {
    // console.log(type, 'type')
    // const { current, pageSize } = params;
    // console.log(params, 'prams')
    // type.pageSizeFn({...params}).then(res => {
    //   // console.log(res, 'res-----')
    //   let obj = []
    //   res.data.forEach((item, index) => {
    //      obj.push({
    //        id: item.id,
    //        create_at: item.create_at,
    //        startTime: item.startTime,
    //        endTime: item.endTime,
    //        list_type: item.list_type,
    //        status: item.status
    //      })
    //   })
    //   console.log(obj, 'obj')
    //   this.setState({
    //     list: res.data
    //   })
    // })
  }  
}




const HomeIndexBox = styled.div`
   width: 100%;
   height: 100vh;
   display:flex;
   padding:2%;
`;
const LeftDiv = styled.div`
    width: 100px;
    background: #ccc;
`;
const RightDiv = styled.div`
    width: calc(100% - 100px);
    background: #eee;
`;
