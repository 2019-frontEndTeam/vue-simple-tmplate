import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  var date = new Date()
  date.setTime(date.getTime() + 3600 * 2000) //1表示1秒钟，2小时后cookie失效
  return Cookies.set(TokenKey, token, { expires: date })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
