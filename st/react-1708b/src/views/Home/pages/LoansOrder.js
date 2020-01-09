import React, { Component } from 'react'
import Echarts from 'echarts'
import { EchartsBox } from './style/style'
import { selectInsurance } from '@/api/api'

export default class componentName extends Component {
  render() {
    return (
      <EchartsBox className='app-echarts' id='app-echarts'>
        LoansOrder
      </EchartsBox>
    )
  }

  getInsurance() {
    selectInsurance().then(res => {
      console.log(res, 'res')
    })
  }

  getEchartsDemo() {
   // 基于准备好的dom，初始化echarts实例
   var myChart = Echarts.init(document.getElementById('app-echarts')); 
   myChart.setOption({
     title: {
         text: 'ECharts 入门示例'
     },
     tooltip: {},
     xAxis: {
         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
     },
     yAxis: {},
     series: [{
         name: '销量',
         type: 'bar',
         data: [5, 20, 36, 10, 10, 20]
     }]
   });
  }

  componentDidMount() {
    this.getInsurance()
    this.getEchartsDemo()
  }
}



