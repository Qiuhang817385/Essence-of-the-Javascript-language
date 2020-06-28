import React, { useState } from 'react'
import { Col, Card, Row } from 'antd'
// import Header from './header';
import ReactEcharts from 'echarts-for-react'
import './sales.scss';
export default function Index () {
  const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ]
  const Container = () => {
    const option = {
      title: {
        text: '年度'
      },
      xAxis: {
        type: 'category',
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        axisTick: {
          // 中心线对应坐标值
          alignWithLabel: true,
          //  横向对应坐标小横线的颜色
          lineStyle: {
            color: '#999',
          },
        },
        axisLine: {
          lineStyle: {
            color: '#999',
          },
        },
        // 文字颜色
        axisLabel: {
          color: '#333',
        },
        // axisTick   axisLine  axisLabel
      },
      yAxis: {
        // 横线
        splitLine: {
          lineStyle: {
            color: ['#eee']
          }
        },
        // 竖向轴
        axisLine: {
          show: false
        },
        // 横向对应坐标小横线
        axisTick: {
          show: false
        }
      },
      tooltip: {
        show: true,
        formatter: '{b0}销量为: {c0}',
      },
      series: [
        {
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
          barWidth: '35%',
          color: '#41D3BD',
        },
      ],
      grid: {
        top: 50,
        left: 50,
        bottom: 20,
        right: 50,
      },
    }
    return <ReactEcharts
      className="sales-view-left"
      option={option}
      style={{ width: '100%', height: 250 }}
    />
  }


  const contentList = {
    tab1: <Container />,
    tab2: <p>content2</p>,
  };


  const [key, setKey] = useState('tab1');
  return (
    <Card style={{ width: '100%' }}
      tabList={tabList}
      activeTabKey={key}
      onTabChange={key => {
        setKey(key)
      }}
      className="box-card"
    >
      <Row gutter={20} className="sales-view-wrapper">
        <Col span={16}>
          {contentList[key]}
        </Col>
        <Col span={8}>2</Col>
      </Row>
    </Card>
  )
}
