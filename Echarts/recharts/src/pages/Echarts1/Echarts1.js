import React from 'react'
import { Col, Row, Card } from 'antd';
import TodayUser from './top/TodayUser';
import TotalCard from './top/TotalCard';
import TotalOrder from './top/TotalOrder';
import TotalUser from './top/TotalUser';
import Sales from './Sales/index'
import KeyWordView from './KeyWordView/KeyWordView'
import Classification from './Classification/Classification'
import './Echarts1.scss';
export default function Echarts1 () {
  return (
    <div className="row-view">
      <Row gutter={[20, 20]}>
        <Col span={6}><Card hoverable><TotalCard /></Card></Col>
        <Col span={6}><Card hoverable><TotalOrder /></Card></Col>
        <Col span={6}><Card hoverable><TodayUser /></Card></Col>
        <Col span={6}><Card hoverable><TotalUser /></Card></Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Sales></Sales>
      </Row>
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <KeyWordView></KeyWordView>
        </Col>
        <Col span={12}>
          <Classification />
        </Col>
      </Row>
    </div>
  )
}
