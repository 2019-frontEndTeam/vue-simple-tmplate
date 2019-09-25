import Vue from 'vue'
import Router from 'vue-router'
import _import from './import'
import login from '@/views/login'
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
      component: resolve => require(['@/views/layout/index.vue'], resolve),
      children: [
        {
          path: '/index',
          name: '主页',
          component: resolve => require(['@/views/index/index.vue'], resolve),
          meta: {
            index: 0
          }
        },
        {
          path: '/other',
          name: '其他',
          component: resolve => require(['@/views/other/index.vue'], resolve),
          meta: {
            index: 1
          }
        }
      ]
    }
  ]
})
