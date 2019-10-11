const getters = {
  name: state => state.user.name,
  token: state => state.user.token,
  routes: state => state.user.routes
}

export default getters
