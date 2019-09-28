export const pieOption = {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
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

export const sexPieOption = {
  color: ['#6098FF', '#FB617F'],
  title: {
    text:'性别比例',
    x: 'left',
    textStyle: {
      // fontSize: '24',
      color: '#2D8CF0'
    }
  },
  legend: {
    bottom: 10,
    data: ['男', '女']
  },
  grid: {
    left: '5px',
    right: '5px',
    bottom: '5px',
    containLabel: true
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} :  {d}%'
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: '50%',
      center: ['50%', '60%'],
      data: [{ value: 12, name: '男' }, { value: 45, name: '女' }],
      label: {
        normal: {
          position: 'inner',
          formatter: '{d}%'
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 1,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

export const lineOption = {
  title: {
    text: '堆叠区域图'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      areaStyle: { normal: {} },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

const echarts = equire(['line'])

export const GlineOption = {
  title: {
    text: '粉丝趋势',

  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {},
  toolbox: {
    feature: {}
  },
  grid: {
    left: '1%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: [],
      axisLine: {
        show: false,
        lineStyle: {
          color: '#A4A8BA'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLabel: {
        formatter: function(value) {
          if (isNaN(value) || value == null) {
            return '--'
          } else {
            if (value == 0 || (value < 100000 && value > -100000)) {
              // return value
              return (
                value &&
                value
                  .toString()
                  .replace(/^\d+/, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ','))
              )
            } else {
              return (
                parseInt(value / 10000)
                  .toString()
                  .replace(/^\d+/, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ',')) +
                'w'
              )
            }
          }
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#A4A8BA'
        }
      },
      axisTick: {
        show: false
      },
      data: []
    }
  ],
  series: [
    {
      // symbol: 'circle',
      // symbolSize: 8, //设定实心点的大小
      // smooth: true,
      itemStyle: {
        normal: {
          color: '#6098FF',
          borderWidth: 2,
          // borderColor: '#fff',
          lineStyle: {
            color: '#6098FF',
            width: 2.5
          }
        }
      },
      type: 'line',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#d5e4ff'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ])
        }
      },
      data: [23, 3, 111, 233, 59, 32, 23]
    }
  ]
}

export const barOption = {
  color: ['#6098FF'],
  tooltip: {
    formatter: '{b} :  {c}%',
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  title: {
    text: '年龄分布'
  },
  grid: {
    left: '1%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      show: true,
      lineStyle: {
        color: '#A4A8BA'
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: function(value) {
        return value + '%'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed'
      }
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#A4A8BA'
      }
    }
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        emphasis: {
          barBorderRadius: 50
        },
        normal: {
          barBorderRadius: [10, 10, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#6098FF' },
            { offset: 0.5, color: '#6098FF' },
            { offset: 1, color: '#4E67FF' }
          ])
        }
      }
    }
  ]
}
