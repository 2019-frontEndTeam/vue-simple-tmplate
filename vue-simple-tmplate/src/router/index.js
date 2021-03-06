import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import login from '@/views/login'
import layout from '@/views/layout'
import redirect404 from '@/views/404'
import { getToken } from '@/utils/auth'
import { Notification } from 'element-ui'
// 模拟菜单接口
import { dynamicRoutes } from './dynamicRoutes'

store.commit('SET_MENU', dynamicRoutes)

store.commit('SET_ROUTES', dynamicRoutes)

const router = new Router({
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
      children: store.state.user.routes.concat({
        path: '/404',
        name: '404',
        meta: {
          index: -1
        },
        hidden: true,
        component: redirect404
      })
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (!token) {
    if (to.path != '/') {
      Notification.warning({
        title: '请重新登录'
      })
      next('/')
    } else {
      next()
    }
  } else {
    if (to.matched.length == 0) {
      next('/404')
    } else {
      next()
    }
  }
})

export default router
