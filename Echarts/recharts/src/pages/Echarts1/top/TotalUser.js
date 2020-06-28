import React from 'react'
import CommonCard from './CommonCard'
import './Card.scss';
import ReactEcharts from 'echarts-for-react'
const getOption = () => {
  return {
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      show: false,
      type: 'category'
    },
    series: [{
      type: 'bar',
      data: [200],
      barWidth: 10,
      stack: '总量'
      // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
    },
    {
      type: 'bar',
      data: [300],
      stack: '总量',
      itemStyle: {
        color: '#abc',
      },
    },
    {
      type: 'custom',
      stack: '总量',
      data: [200],
      renderItem: (params, api) => {
        const value = api.value(0)
        const endPoint = api.coord([value, 0]) // 将点于绘图建立连接
        return {
          type: 'group', // 可以设置返回多个自定义图标
          position: endPoint,
          children: [
            {
              type: 'path',
              shape: {
                d:
                  'M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z',
                x: -10,
                y: -25,
                width: 20,
                height: 20,
              },
              style: {
                fill: 'red',
              },
            },
            {
              type: 'path',
              shape: {
                d:
                  'M46.967467 697.617067L446.395733 234.666667a87.04 87.04 0 0 1 131.208534 0l399.428266 462.9504a52.462933 52.462933 0 0 1-6.2464 74.8544 54.613333 54.613333 0 0 1-34.986666 12.5952H88.200533C58.333867 785.066667 34.133333 761.275733 34.133333 731.9552c0-12.5952 4.539733-24.746667 12.834134-34.338133z',
                x: -10,
                y: 5,
                width: 20,
                height: 20,
              },
              style: {
                fill: 'green',
              },
            },
          ],
        }
      },
    },
    ],
    grid: { left: 0, right: 0, top: 0, bottom: 0 }
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
export default function TotalUser () {
  return (
    <div>
      <CommonCard title="累计订单量" value="2,123,223" Content={<Content />} Footer={<Footer />} />
    </div>
  )
}
