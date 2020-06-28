export const Option1 = {
  xAxis: {
    type: 'category',
    // 贴边
    boundaryGap: false,
  },
  yAxis: {
    show: false
  },
  grid: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 30,
  },
  series: [{
    type: 'line',
    data: [
      330,
      310,
      320,
      302,
      298,
      286,
      264,
      253,
      232,
      211,
      198,
      195,
      176,
      154,
      143,
      99,
      50,
      12,
    ],
    areaStyle: {
      color: '#80d4f6',
    },
    lineStyle: {
      color: '#2b90d9',
    },
    itemStyle: {
      opacity: 0
    }
  }],

}
export const Option2 = {
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  yAxis: {
    show: false
  },
  series: [{
    type: 'line',
    data: [
      500,
      450,
      420,
      470,
      390,
      475,
      251,
      384,
      182,
      388,
      98,
      289,
      231,
      419,
      239,
      249,
      159,
      521,
      152,
      321,
    ],
    areaStyle: {
      color: '#80d4f6',
    },
    lineStyle: {
      color: '#2b90d9',
    },
    itemStyle: {
      opacity: 0,
    },
    smooth: true,
  }],
  grid: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}