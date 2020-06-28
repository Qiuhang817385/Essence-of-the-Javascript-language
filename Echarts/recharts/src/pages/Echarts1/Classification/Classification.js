import React from 'react'
import { Card, Row } from 'antd';
import ReactEcharts from "echarts-for-react";
import './Classification.scss'
const option = {
  title: [{
    text: '品类分布',
    textStyle: {
      fontSize: 14,
      color: '#666',
    },
    left: 20,
    top: 20,
  },
  {
    text: '累计订单量',
    subtext: '390',
    // 这个是根据什么计算的来着?????
    x: '34.5%',
    y: '47.5%',
    textAlign: 'center',
    textStyle: {
      fontSize: 14,
      color: '#999',
    },
    subtextStyle: {
      fontSize: 28,
      color: '#333',
    },
  }],
  // 控制的是右侧哪几个小点点
  legend: {
    // 图例列表的布局朝向。
    orient: 'vertical',
    //图例组件离容器右侧的距离。
    right: '10%',
    top: '10%',
    data: ['粉面粥店', '简餐便当', '汉堡披萨'],
  },
  // tooltip的API没有看,看一看
  tooltip: {
    /* 
    'item'
    数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
    'axis'
    坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
     */
    trigger: 'item',
    formatter: params => {
      const str =
        params.seriesName +
        '<br/>' +
        params.marker +
        params.data.legendname +
        '<br/>' +
        '数量: ' +
        params.data.value +
        '<br/>' +
        '占比' +
        params.data.percent +
        '%'
      return str
    },
  },
  series: [
    {
      name: '商品',
      type: 'pie',
      data: [
        {
          legendname: '粉面粥店',
          value: 67,
          percent: '15.40',
          itemStyle: {
            color: '#ede574',
          },
          name: '粉面粥店',
        },
        {
          legendname: '简餐便当',
          value: 97,
          percent: '22.30',
          itemStyle: {
            color: '#f1bbba',
          },
          name: '简餐便当',
        },
        {
          legendname: '汉堡披萨',
          value: 92,
          percent: '21.15',
          itemStyle: {
            color: '#00dffc',
          },
          name: '汉堡披萨',
        },
      ],
      // 这个是干嘛的
      label: {
        normal: {
          // 提示信息
          show: true,
          position: 'outter',
          // 如果单纯的只是写了函数,而没有返回值,那么默认是不会有提示信息的
          formatter: params => {
            // 这个倒是没看懂是什么意思???
            return params.data.legendname
          },
        }
      },
      // 圆心的位置,宽度的35%,50%
      center: ['35%', '55%'],
      // 这个就是环的半径,根据最短的是直径
      radius: ['65%', '80%'],
      // 指示线条,这个效果不怎么滴
      labelLine: {
        normal: {
          length: 5,
          length2: 3,
          smooth: true,
        },
      },
      // 每一个环形百分比之间的间隔
      itemStyle: {
        borderWidth: 4,
        borderColor: '#fff',
      },
    }
  ]
}
export default function Classification () {
  return (
    <div>
      <Card title={'分类销量排行'} hoverable style={{ width: '100%' }}>
        <Row gutter={16}>
          <ReactEcharts option={option} style={{ width: '100%', height: '400px' }} />
        </Row>
      </Card>
    </div>
  )
}
