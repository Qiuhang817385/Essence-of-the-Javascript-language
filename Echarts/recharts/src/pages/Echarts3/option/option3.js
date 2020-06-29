export const option1 = {
  title: {
    text: '用户骑行订单',
    x: 'center'
  },
  // 
  legend: {
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    // lengend里面的data对应series当中的name,
    // 而且也可以对应二级数据的name
    // 而且也可以对应二级数据的name
    // 而且也可以对应二级数据的name
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      name: '订单量',
      type: 'pie',
      radius: '55%',
      center: [
        '50%', '60%'
      ],
      data: [
        {
          value: 1000,
          name: '周一'
        },
        {
          value: 1000,
          name: '周二'
        },
        {
          value: 2000,
          name: '周三'
        },
        {
          value: 1500,
          name: '周四'
        },
        {
          value: 3000,
          name: '周五'
        },
        {
          value: 2000,
          name: '周六'
        },
        {
          value: 1200,
          name: '周日'
        },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
export const option2 = {
  title: {
    text: '用户骑行订单',
    x: 'center'
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
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
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      name: '订单量',
      type: 'pie',
      radius: ['50%', '80%'],
      center: [
        '50%', '60%'
      ],
      data: [
        {
          value: 1000,
          name: '周一'
        }, {
          value: 1000,
          name: '周二'
        }, {
          value: 2000,
          name: '周三'
        }, {
          value: 1500,
          name: '周四'
        }, {
          value: 3000,
          name: '周五'
        }, {
          value: 2000,
          name: '周六'
        }, {
          value: 1200,
          name: '周日'
        }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ],

}
export const option3 = {
  title: {
    text: '用户骑行订单',
    x: 'center'
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
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
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      name: '订单量',
      type: 'pie',
      radius: '55%',
      center: [
        '50%', '50%'
      ],
      data: [
        {
          value: 1000,
          name: '周一'
        }, {
          value: 1000,
          name: '周二'
        }, {
          value: 2000,
          name: '周三'
        }, {
          value: 1500,
          name: '周四'
        }, {
          value: 3000,
          name: '周五'
        }, {
          value: 2000,
          name: '周六'
        }, {
          value: 1200,
          name: '周日'
        }
      ].sort(function (a, b) { return a.value - b.value; }),
      roseType: 'radius',
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 400;
      }
    }
  ]
}