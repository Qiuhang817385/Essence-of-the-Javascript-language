export default {
  title: {
    text: '组件',
    subtext: '组件化测试哦'
  },
  xAxis: {
    // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    type: 'category'
  },
  // 图例
  legend: {
    // 具体的内容,必须和系列的name进行绑定
    data: [{
      name: '分类',
      icon: 'circle',    //改变形状
      textStyle: {
        color: 'red'
      },
    }, '折线图', '柱状图'],
    left: 150
  },
  // 工具箱
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: false
      },/* 区域缩放 的问题 如果没有数据,这个时候y轴不是0-max,
      选中的时候,默认是y轴的第一个坐标轴
        需要设置成1  或者一个不存在的坐标轴,一般填成false */
      restore: {},
      saveAsImage: {}
    }
  },
  dataZoom: [
    {
      show: true,
      start: 0,
      end: 100
    }
  ],
  yAxis: {},
  dataset: {
    source: [
      ['1', 100, 100, 'XX', 123],
      ['2', 12, 12, 'YY', 13],
      ['3', 42, 42, 'ZZ', 24],
      ['4', 31, 31],
      ['5', 30, 30],
      ['6', 92, 92],
      ['7', 42, 42],
      ['8', 31, 31],
      ['9', 200, 200],
      ['10', 32, 32],
      ['11', 42, 42],
      ['12', 31, 31],
    ]
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: '20%',
  },
  series: [{
    name: '分类',
    type: 'bar',
    barWidth: '40%',
    encode: { x: 0, y: 2 }
  }, {
    name: '折线图',
    type: 'line',
    encode: { x: 0, y: 1 }
  }, {
    name: '柱状图',
    type: 'pie',
    center: ['35%', 60],
    radius: 35,
    encode: { itemName: 3, value: 4 }
  }]
};