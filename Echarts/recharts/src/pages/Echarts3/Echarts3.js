import React from 'react'
import './Echart3.scss'
import { Row, Col } from 'antd';
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
export default function Echarts3 () {
  return (
    <div className="echarts3">
      <Row gutter={[16, 16]}>
        <Col span={24}><Demo1></Demo1></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}><Demo2></Demo2></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}><Demo3></Demo3></Col>
      </Row>
    </div>
  )
}
