import React from 'react'
import CommonCard from './CommonCard'
import './Card.scss';
import ReactEcharts from 'echarts-for-react';
const getOption = () => {
  return {
    xAxis: {
      type: 'category',
      data: [
        '00:00',
        '01:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
      ],
      show: false
    },
    yAxis: {
      show: false
    },
    series: [{
      type: 'bar',
      data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
      barWidth: '60%',
    }],
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    tooltip: { show: true },
    color: '#A593E0',
  }
}

const Content = () => {
  return <>
    <div className="compare-wrapper">
      <ReactEcharts
        notMerge={true}
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
export default function TodayUser () {
  return (
    <div>
      <CommonCard title="累计订单量" value="2,123,223" Content={<Content />} Footer={<Footer />} />
    </div>
  )
}
