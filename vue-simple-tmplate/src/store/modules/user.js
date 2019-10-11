import store from '@/store'
import router from '@/router'
import _import from '../../router/import'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    name: '',
    token: getToken(),
    routes: [],
    menus: []
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TOKEN: (state, token) => {
      setToken(token)
    },
    SET_MENU: (state, menus) => {
      // 菜单展示
      state.menus = menus
    },
    SET_ROUTES: (state, routes) => {
      // 递归抽取子级菜单（父级不需要注册路由）
      routes.forEach((v, i) => {
        if (v.children) {
          store.commit('SET_ROUTES', v.children)
        } else {
          // 注册路由
          v.component = _import(v.path)
          // 存储抽取的路由
          state.routes.push(v)
        }
      })
    }
  },
  actions: {
    // 登出
    LogOut({ commit }) {
      removeToken()
      router.push('/')
    }
  }
}
export default user
