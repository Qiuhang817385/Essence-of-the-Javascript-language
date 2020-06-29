export const option1 = {
  title: {
    text: 'demo1'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    type: 'bar',
    name: '订单量',
    data: [
      1000,
      2000,
      1500,
      3000,
      2000,
      1200,
      800
    ]
  }],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 30
  }
}

export const option2 = {
  title: {
    text: 'demo2'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['OFO', '摩拜', '小蓝']
  },
  xAxis: {
    type: 'category',
    data: [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'OFO',
      type: 'bar',
      data: [
        2000,
        3000,
        5500,
        7000,
        8000,
        12000,
        20000
      ]
    },
    {
      name: '摩拜',
      type: 'bar',
      data: [
        1500,
        3000,
        4500,
        6000,
        8000,
        10000,
        15000
      ]
    },
    {
      name: '小蓝',
      type: 'bar',
      data: [
        1000,
        2000,
        2500,
        4000,
        6000,
        7000,
        8000
      ]
    },
  ],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 30
  }
}