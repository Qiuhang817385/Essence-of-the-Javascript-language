import React from 'react'
import { Card, Row, Col } from 'antd';
// import ReactEchartsCore from 'echarts-for-react/lib/core';
import ReactEcharts from "echarts-for-react";
// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid';
import './KeyWordView.scss'
import CommonCard from '../top/CommonCard'
import { Option1, Option2 } from './option';
const Content1 = () => {
  return <>
    <ReactEcharts
      option={Option1}
      style={{ width: '100%', height: '100%' }}
    />
  </>
}
const Content2 = () => {
  return <>
    <ReactEcharts
      option={Option2}
      style={{ width: '100%', height: '100%' }}
    />
  </>
}
const Footer = () => {
  return <></>
}

export default function KeyWordView () {
  return (
    <div>
      <Card style={{ width: '100%' }} hoverable title="关键词搜索">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <CommonCard title="搜索用户数" value="94,893" Content={<Content1 />} Footer={<Footer />}></CommonCard>
          </Col>
          <Col span={12}>
            <CommonCard title="搜索量" value="187,422" Content={<Content2 />} Footer={<Footer />}></CommonCard>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
