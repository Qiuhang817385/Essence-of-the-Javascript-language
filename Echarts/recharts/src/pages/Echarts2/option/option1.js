export default {
  title: {
    text: 'D恶魔1',
  },
  xAxis: {
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  },
  yAxis: {},
  grid: {},
  series: [{
    type: 'bar',
    data: [100, 12, 42, 31, 30, 92, 42, 31, 200, 32, 42, 31],
    barWidth: '40%'
  }, {
    type: 'line',
    data: [100, 12, 42, 31, 30, 92, 42, 31, 200, 32, 42, 31],
  }, {
    type: 'pie',
    center: ['35%', 60],
    radius: 35,
    data: [
      { name: 'XX', value: '123' },
      { name: 'YY', value: '13' },
      { name: 'ZZ', value: '24' },
    ]
  }]
}