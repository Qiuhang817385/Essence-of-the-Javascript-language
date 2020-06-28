import React from 'react'
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';
import Demo6 from './Demo6';
import { Row, Col } from 'antd';
import './echarts2.scss'
import { option1, option2, option3, option4, option5, option6 } from './option'
export default function Echarts () {
  return (
    <div className="echarts2">
      <Row gutter={[16, 16]}>
        <Col span={12}><Demo1 option={option1} /></Col>
        <Col span={12}><Demo2 option={option2} /></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}><Demo3 option={option3} /></Col>
        <Col span={12}><Demo4 option={option4} /></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}><Demo5 option={option5} /></Col>
        <Col span={12}><Demo6 option={option6} /></Col>
      </Row>
    </div>
  )
}
