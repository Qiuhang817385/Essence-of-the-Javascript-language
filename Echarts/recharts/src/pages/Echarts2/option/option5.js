// 双坐标系，一个图
export default {
  xAxis: {
    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    // 多坐标系，需要对x轴明确指定类型
    type: 'category'
  },
  yAxis: [
    {
      min: 0,
      max: 600
    },
    {
      splitLine: {
        show: false
      },
      min: 0,
      max: 100
    }
  ],
  dataset: {
    source: [
      ['product', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      ['matcha', 242, 344, 324, 475, 264, 467, 531],
      ['milk', 44, 51, 32, 19, 33, 24, 12]
    ]
  },
  series: [
    {
      type: 'bar',
      seriesLayoutBy: 'row',
      yAxisIndex: 0
    },
    {
      type: 'line',
      seriesLayoutBy: 'row',
      yAxisIndex: 1
    }
  ]
};