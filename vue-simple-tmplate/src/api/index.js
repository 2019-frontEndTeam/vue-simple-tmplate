import * as homePageApi from './homePageApi'

const api = {
  ...homePageApi,
}
Vue.prototype.$api = api
