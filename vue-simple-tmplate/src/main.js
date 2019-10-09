// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Button,
  Select,
  Option,
  Input,
  Dialog,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  Notification,
  Table,
  TableColumn,
  Loading,
  Container,
  Header,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Card,
  Icon,
  Main,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Backtop,
  Tabs,
  TabPane,
  Tag,
  Row,
  Col,
  Popover
} from 'element-ui'
import './theme/index.css'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 2000 }
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Container)
Vue.use(Header)
Vue.use(Card)
Vue.use(Icon)
Vue.use(Main)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Backtop)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popover)
Vue.use(Loading.directive)
Vue.prototype.$notify = Notification
Vue.prototype.$loading = Loading.service

// 引入接口文档
import './api'

// 引入图标
import '@/icons' //  全局注册组件

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

// 水波纹
import './utils/waves'

// 全局函数
import '@/utils/func'

// 按需引入echarts

const echarts = equire(['line', 'tooltip','title','pie','legend','bar'])
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
