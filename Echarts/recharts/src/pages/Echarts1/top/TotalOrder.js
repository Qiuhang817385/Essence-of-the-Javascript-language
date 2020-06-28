import React from 'react'
import CommonCard from './CommonCard'
import './Card.scss';
import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
// import 'echarts/lib/chart/line'
// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/markPoint';

const getOption = () => {
  return {
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: 'line',
        data: [620, 432, 220, 543, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
        areaStyle: {
          color: '#30A9DE',
        },
        lineStyle: {
          color: '#30A9DE'
        },
        itemStyle: {
          opacity: 0
        },
        smooth: true
      }
    ],
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }
}


const Content = () => {
  return <>
    <div className="compare-wrapper" id="total-order-template">
      <ReactEcharts
        option={getOption()}
        style={{
          height: '100%',
          width: '100%'
        }}
      />
    </div></>
}
const Footer = () => {
  return <>
    <span>昨日销售额</span>
    <span className="emphasis">$ 32,039,165</span>
  </>
}
export default function TotalOrder () {
  return (
    <div>
      <CommonCard title="累计订单量" value="2,123,223" Content={<Content />} Footer={<Footer />} />
    </div>
  )
}
