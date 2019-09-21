/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

//纯数字
export function validateNumber(rule, value, callback) {
  var reg = /^\d{1,}$/
  var pattern = new RegExp(reg)
  if (!pattern.test(value)) {
    callback(new Error('请填写纯数字'))
  } else {
    callback()
  }
}

//[0,1]
export function validateRange01(rule, value, callback) {
  if (value >= 0 && value <= 1 && value != null) {
    callback()
  } else {
    callback(new Error('请填写0到1以内的数字'))
  }
}

export const validateUsername = (rule, value, callback) => {
  if (value.trim().length < 1) {
    callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}

export const validatePass = (rule, value, callback) => {
  if (value.trim().length < 1) {
    callback(new Error('密码不能为空'))
  } else {
    callback()
  }
}
