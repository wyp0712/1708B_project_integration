import React, { Component } from 'react'
import echarts from 'echarts'
import { EchartsBox } from './style/style'
import { selectInsurance } from '@/api/api'

var cellSize = [80, 80];
var pieRadius = 30;
function getVirtulData() {
  var date = +echarts.number.parseDate('2017-02-01');
  var end = +echarts.number.parseDate('2017-03-01');
  var dayTime = 3600 * 24 * 1000;
  var data = [];
  for (var time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 10000)
    ]);
  }
  return data;
}

// 饼状图数据
function getPieSeries(scatterData, chart) {
  return echarts.util.map(scatterData, function (item, index) {
    var center = chart.convertToPixel('calendar', item);
    return {
      id: index + 'pie',
      type: 'pie',
      center: center,
      label: {
        normal: {
          formatter: '{c}',
          position: 'inside'
        }
      },
      radius: pieRadius,
      data: [
        { name: '工作', value: Math.round(Math.random() * 24) },
        { name: '娱乐', value: Math.round(Math.random() * 24) },
        { name: '睡觉', value: Math.round(Math.random() * 24) }
      ]
    };
  });
}

function getPieSeriesUpdate(scatterData, chart) {
  return echarts.util.map(scatterData, function (item, index) {
    var center = chart.convertToPixel('calendar', item);
    return {
      id: index + 'pie',
      center: center
    };
  });
}

var scatterData = getVirtulData();
console.log(scatterData, 'scatterData')


export default class componentName extends Component {
  state = {
    titleArr: [],
    dataArr: [],
    scatterData,
    options: {} // 渲染echarts
  }

  render() {
    return (
      <EchartsBox className='app-echarts' id='app-echarts'>
        LoansOrder
      </EchartsBox>
    )
  }

  getInsurance() {
    selectInsurance().then(res => {
      // console.log(res.data.slice(0, 5), 'res----loadans')
      // const data = res.data.slice(0, 5)
      // const titleArr = [];
      // const dataArr = [];
      // data.forEach((item) => {
      //   titleArr.push(item.order_time)
      //   dataArr.push(item.loan_amount)
      // })
      // this.setState({
      //   titleArr: titleArr,
      //   dataArr: dataArr
      // })
      // this.getEchartsDemo()
    })
  }

  getInitOptions() {
    return {
      tooltip: {},
      legend: {
        data: ['工作', '娱乐', '睡觉'],
        bottom: 20
      },
      calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
          show: false,
          textStyle: {
            fontSize: 30
          }
        },
        dayLabel: {
          margin: 20,
          firstDay: 1,
          nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        monthLabel: {
          show: false
        },
        range: ['2017-02']
      },
      series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              return echarts.format.formatTime('dd', params.value[0]);
            },
            offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
            textStyle: {
              color: '#000',
              fontSize: 14
            }
          }
        },
        data: this.state.scatterData
      }]
    };
  }


  // echarts 数据更新并渲染
  getEchartsDemo() {

    this.setState({
      options: this.getInitOptions()
    }, () => {

      console.log(this.state.options, 'options----options----')
          // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('app-echarts'));
      myChart.setOption(this.state.options);

      var pieInitialized;
      setTimeout(() => {
          pieInitialized = true;
          myChart.setOption({
              series: getPieSeries(this.state.scatterData, myChart)
          });
      }, 10);
    })
  }

  componentDidMount() {
    console.log(this.getInitOptions(), 'com-options------options')
    // this.getInsurance()
    this.getEchartsDemo()
  }
}



