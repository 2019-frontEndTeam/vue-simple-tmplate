import store from '@/store'
import _import from '../../router/import'
const user = {
  state: {
    name: '',
    token: '',
    routes: []
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROUTES: (state, data) => {
      data.forEach((v, i) => {
        if (v.children) {
          store.commit('SET_ROUTES', v.children)
        } else {
          v.component = _import(v.path)
        }
      })
      state.routes = data
    }
  },
  actions: {}
}
export default user
