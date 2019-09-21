/*千分位分隔符*/
export const ThousandFilter = function(value) {
  if (value == null || value == '') {
    return '--'
  }
  return (
    value &&
    value.toString().replace(/^\d+/, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ','))
  )
}
/*万位分隔符，异常数据处理*/
export const tenThousandFilter = function(value, list) {
  if (isNaN(value) || value == null) {
    return '--'
  } else {
    if (value == 0 || (value < 10000 && value > -10000)) {
      // return value
      return (
        value &&
        value
          .toString()
          .replace(/^\d+/, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ','))
      )
    } else {
      return (
        parseInt(value / 10000)
          .toString()
          .replace(/^\d+/, m => m.replace(/(?=(?!^)(\d{3})+$)/g, ',')) + 'w'
      )
    }
  }
}

/*百分比过滤*/
export const proportionFilter = function(value, list) {
  if (isNaN(value) || value == null) {
    return '--'
  } else {
    if (value > 1000) {
      return parseInt(value) + '%'
    } else {
      return value + '%'
    }
  }
}
