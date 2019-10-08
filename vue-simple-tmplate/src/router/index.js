import Vue from 'vue'
import Router from 'vue-router'
// 异步加载路由
import _import from './import'
import login from '@/views/login'
import layout from '@/views/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/layout',
      name: '主页',
      component: layout,
      children: [
        {
          path: '/lazyImage',
          name: '图片懒加载',
          icon: 'el-icon-tickets',
          component: _import('/lazyImage'),
          meta: {
            index: 0
          }
        },
        {
          path: '/echarts',
          name: '图表展示',
          icon: 'el-icon-odometer',
          component: _import('/echarts'),
          meta: {
            index: 1
          }
        },
        {
          path: '/lazyRequest',
          name: '请求懒加载',
          icon: 'el-icon-loading',
          component: _import('/lazyRequest'),
          meta: {
            index: 2
          }
        },
        {
          path: '/map',
          name: '异步加载地图',
          icon: 'el-icon-s-promotion',
          component: _import('/map'),
          meta: {
            index: 3
          }
        },
        {
          path: '/table',
          name: '表格其他功能',
          icon: 'el-icon-coin',
          component: _import('/table'),
          meta: {
            index: 4
          }
        }
      ]
    }
  ]
})
