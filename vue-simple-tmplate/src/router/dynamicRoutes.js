export const dynamicRoutes = [
  {
    name: '图片懒加载',
    icon: 'el-icon-tickets',
    id: 1,
    children: [
      {
        path: '/lazyImage',
        name: '图片懒加载',
        meta: {
          index: 2
        }
      }
    ]
  },
  {
    name: '图表展示',
    icon: 'el-icon-odometer',
    id: 3,
    children: [
      {
        path: '/echarts',
        name: '图表展示',
        meta: {
          index: 4
        }
      }
    ]
  },
  {
    path: '/lazyRequest',
    name: '请求懒加载',
    icon: 'el-icon-loading',
    meta: {
      index: 5
    }
  },
  {
    path: '/map',
    name: '异步加载地图',
    icon: 'el-icon-s-promotion',
    meta: {
      index: 6
    }
  },
  {
    path: '/table',
    name: '表格其他功能',
    icon: 'el-icon-coin',
    meta: {
      index: 7
    }
  }
]
