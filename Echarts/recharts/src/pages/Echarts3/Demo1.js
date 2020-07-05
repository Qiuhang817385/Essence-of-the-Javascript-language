import React from 'react'
import { Col, Row, Card } from 'antd';
import { option1, option2 } from './option/option1'
import Theme from './Theme';
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';
echarts.registerTheme('mock', Theme);
export default function Demo1 () {
  return (
    <div>
      <Row style={{ height: 300 }} gutter={[16, 16]}>
        <Col span={8}>
          <Card className='card' hoverable title='Demo1'>
            <ReactEcharts
              theme={"mock"}
              option={option1}
              style={{ width: '100%', height: 200 }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card className='card' hoverable title='Demo2'>
            <ReactEcharts
              theme={"mock"}
              option={option2}
              style={{ width: '100%', height: 200 }}
            /></Card>
        </Col>
        <Col span={8}>
          <Card className='card' hoverable title='Demo3'>
            <ReactEcharts
              theme={"mock"}
              option={option2}
              style={{ width: '100%', height: 200 }}
            /></Card>
        </Col>
      </Row>
    </div>
  )
}
