const user = {
  state: {
    name: '',
    token: ''
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {}
}
export default user
