// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 2000 };
Vue.use(Button)
Vue.use(Select)
// 引入接口文档
import './api'

// 过滤器
import * as filters from './utils/filters'
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

// 指令
import * as directives from './utils/directives'
Object.keys(directives).forEach(directiveName => {
  Vue.directive(directiveName, directives[directiveName])
})

// 全局函数
import '@/utils/func'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
