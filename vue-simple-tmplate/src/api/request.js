const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000
})

service.interceptors.request.use(
  config => {

    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {

    return response
  },
  error => {
    Promise.reject(error)
  }
)

export default service
