import React from 'react'
import { Card } from 'antd';
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';
import Theme from './Theme';
// 这样就可以使用主题了
echarts.registerTheme('mock', Theme);
export default function Demo6 (props) {
  const { option } = props
  return (
    <div>
      <Card style={{ width: '100%' }}>
        <ReactEcharts
          // theme={"mock"}
          // 大屏幕使用svg,canvas渲染更快
          // opts={{ renderer: 'svg' }}
          option={option}
          style={{ width: '100%', height: '300px' }}
          opts={{ renderer: 'svg' }}
        />
      </Card>
    </div>
  )
}
