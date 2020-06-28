export default {
  title: {
    text: '多坐标系',
  },
  xAxis: {
    // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    type: 'category'
  },
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
  grid: {},
  series: [{
    type: 'bar',
    barWidth: '40%',
    encode: { x: 0, y: 2 }
  }, {
    type: 'line',
    encode: { x: 0, y: 1 }
  }, {
    type: 'pie',
    center: ['35%', 60],
    radius: 35,
    encode: { itemName: 3, value: 4 }
  }]
}