import React, { Component } from 'react'
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import styled from 'styled-components'
import * as type from '@/api/api'
// type.pageSizeFn  selectInsurance
const columns = [
  {
    title: '订单号',
    width: 100,
    dataIndex: 'order_id',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '下单时间',
    width: 100,
    dataIndex: 'order_time',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '用户名称',
    dataIndex: 'username',
    key: '1',
    width: 100,
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
    key: '2',
    width: 150,
  },
  {
    title: '产品类型',
    dataIndex: 'pro_type',
    key: '3',
    width: 100,
  },
  {
    title: '贷款金额',
    dataIndex: 'loan_amount',
    key: '4',
    width: 150,
  },
  {
    title: '贷款利率',
    dataIndex: 'loan_rate',
    key: '5',
    width: 150,
  },
  {
    title: '订单状态',
    dataIndex: 'order_status',
    key: '6',
    width: 100,
  },
  {
    title: '贷款利率',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

// axios



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
          scroll={{ x: 1000, y: 480 }} 
          onChange={ (params) => { this.bindPageSize(params) } }
        />
      </HomeIndexBox>
    )
  }

  componentDidMount() {
    const data = [];
    // let params = { current:1, pageSize: 150 };
    // selectInsurance
    // type.selectInsurance().then(res => {
    //   console.log(res, 'res')
    // })
      type.selectInsurance().then(res => {
      let arrayList = res.data;
      for (let i = 0; i < arrayList.length; i++) {
        data.push({
          key: arrayList[i].order_id,
          order_id: arrayList[i].order_id,
          order_time: arrayList[i].order_time,
          username: arrayList[i].username,
          phone: arrayList[i].phone,
          pro_type: arrayList[i].pro_type,
          loan_amount: arrayList[i].loan_amount,
          loan_rate: arrayList[i].loan_rate,
          order_status: arrayList[i].order_status
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
