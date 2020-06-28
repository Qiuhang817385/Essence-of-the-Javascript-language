// 多个直角坐标系
export default {
  dataset: {
    source: [
      ['product', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      ['matcha', 242, 344, 324, 475, 264, 467, 531],
      ['milk', 44, 51, 32, 19, 33, 24, 12]
    ]
  },
  xAxis: [{
    type: 'category',
    gridIndex: 0
  }, {
    type: 'category',
    gridIndex: 1
  }],
  yAxis: [
    {
      gridIndex: 0
    }, {
      gridIndex: 1
    }
  ],
  series: [
    { type: 'bar', seriesLayoutBy: 'row' },
    // x和y必须使用同一个坐标系
    // x和y必须使用同一个坐标系
    // x和y必须使用同一个坐标系
    { type: 'line', seriesLayoutBy: 'row', xAxisIndex: 0, yAxisIndex: 0 },
    { type: 'bar', seriesLayoutBy: 'row', xAxisIndex: 1, yAxisIndex: 1 }],
  grid: [{
    bottom: '55%'
  }, {
    top: '55%'
  }],
};


/*
{
        legend: {},
        tooltip: {},
        xAxis: [{
          type: 'category',
          gridIndex: 0
        }, {
          type: 'category',
          gridIndex: 1
        }],
        yAxis: [{
          gridIndex: 0
        }, {
          gridIndex: 1
        }],
        dataset: {
          source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
          ]
        },
        grid: [{
          bottom: '55%'
        }, {
          top: '55%'
        }],
        series: [
          // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
        ]
      }

*/