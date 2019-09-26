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
          path: '/index',
          name: '主页',
          component: _import('/index'),
          meta: {
            index: 0
          }
        },
        {
          path: '/other',
          name: '其他',
          component: _import('/other'),
          meta: {
            index: 1
          }
        }
      ]
    }
  ]
})
