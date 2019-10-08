var that
const fn = {
  init(thisVue) {
    that = thisVue
  },
  successHandle(obj = {}) {
    Object.keys(obj).forEach(key => {
      that[key] = obj[key]
    })
  },
  // 处理接口状态码
  responseHandle(status, message, obj) {
    if (status == 200) {
      that.$notify.success({
        title: message
      })
      // 响应成功后 do something...
      fn.successHandle(obj)
      return true
    } else {
      that.$notify.error({
        title: message
      })
      return false
    }
  },
  // 下拉数据封装 是否缓存
  selectList(selectApi, name, cache = false, data = {}) {
    if (localStorage.getItem(name)) {
      that[name] = JSON.parse(localStorage.getItem(name))
    } else {
      selectApi(data).then(res => {
        if (cache) {
          localStorage.setItem(name, JSON.stringify(res.data.rows))
        }
        that[name] = res.data.rows
      })
    }
  },
  // 判断对象是否为空
  isEmptyObject(obj) {
    for (var key in obj) {
      return false
    }
    return true
  },
  // 滚动分页
  scrollPaging(totalData, tableData, row = 20) {
    for (var i = that.page * row - row; i < that.page * row; i++) {
      if (!fn.isEmptyObject(totalData[i])) {
        tableData.push(totalData[i])
      }
    }
  },
  //小于10的数字补0
  num2digit(num) {
    return num * 1 < 10 ? '0' + num : '' + num
  },
  //格式日期 时间戳转为yy-mm-dd
  formatDate1(date) {
    if (date == 'NaN-NaN-NaN' || date == '' || !date) {
      return ''
    }
    let date1 = new Date(date),
      dateStr =
        date1.getFullYear() +
        '-' +
        fn.num2digit(date1.getMonth() + 1) +
        '-' +
        fn.num2digit(date1.getDate())
    return dateStr
  },
  //格式日期 时间戳转为yy-mm-dd hh:mm:ss
  formatDate2(date) {
    let date1 = new Date(date),
      dateStr =
        date1.getFullYear() +
        fn.num2digit(date1.getMonth() + 1) +
        fn.num2digit(date1.getDate()) +
        fn.num2digit(date1.getHours()) +
        fn.num2digit(date1.getMinutes()) +
        fn.num2digit(date1.getSeconds()),
      ymdData =
        dateStr.slice(0, 4) +
        '-' +
        dateStr.slice(4, 6) +
        '-' +
        dateStr.slice(6, 8),
      timeData =
        dateStr.slice(8, 10) +
        ':' +
        dateStr.slice(10, 12) +
        ':' +
        dateStr.slice(12, 14),
      videoData = ymdData + ' ' + timeData

    return videoData
  },
  //格式日期 时间戳转为hh:mm:ss
  formatDate3(date) {
    let date1 = new Date(date),
      dateStr =
        date1.getFullYear() +
        fn.num2digit(date1.getMonth() + 1) +
        fn.num2digit(date1.getDate()) +
        fn.num2digit(date1.getHours()) +
        fn.num2digit(date1.getMinutes()) +
        fn.num2digit(date1.getSeconds()),
      timeData =
        dateStr.slice(8, 10) +
        ':' +
        dateStr.slice(10, 12) +
        ':' +
        dateStr.slice(12, 14)
    return timeData
  },
  // 过滤路由
  filterBreadcrumb(breadcrumb, name) {
    breadcrumb.push({
      name: name,
      path: that.$route.path
    })
    return breadcrumb.reduce(
      (all, next) =>
        all.some(v => v['name'] == next['name']) ? all : [...all, next],
      []
    )
  },
  // 表格动态高度
  tableH(height = 60) {
    that.$nextTick(() => {
      ;(window.onresize = () => {
        let appE = document.getElementsByClassName('app-main')[0]
        that.TableH = appE.clientHeight - height
      })()
    })
  },
  // 处理成标准格式
  convertTree(
    tree,
    map = { value: 'id', title: 'name', children: 'children' },
    isChecked = false
  ) {
    const result = []
    tree.map((item, i) => {
      let obj = { ...(isChecked ? { checked: false } : null) }
      // 如果有子节点，递归
      if (item[map.children]) {
        item[map.children] = fn.convertTree(item[map.children], map, isChecked)
      } else {
        item[map.children]
      }
      Object.keys(map).forEach(key => {
        obj[key] = item[map[key]]
      })

      result.push(obj)
    })
    return result
  },
  exportExcel(excelApi) {
    excelApi({ ...that.form }, { responseType: 'arraybuffer' })
      .then(res => {
        let date = this.formatDate1(new Date())
        let fileName = res.headers['content-disposition'].split('=')[1]
        let name = fileName.substr(0, fileName.length)
        let blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, name)
        } else {
          var link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = date + decodeURI(name)
          link.click()
          window.URL.revokeObjectURL(link.href)
        }
      })
      .catch(() => {})
  },
  // 表格框选
  boxChoose(element) {
    element.onmousedown = e => {
      if (e.button == 2) {
        element.onmousemove = null
        element.onmouseup = null
        return
      }
      let div = document.createElement('div')
      div.style.top = e.y + 'px'
      div.style.left = e.x + 'px'
      div.style.position = 'fixed'
      div.style.transformOrigin = '0 0'
      div.style.background = 'rgba(0,0,0,0.2)'
      document.body.appendChild(div)

      let tbodys = document.querySelectorAll('.el-table__body tbody'),
        rows = []
      for (var val of tbodys) {
        rows.push(...val.children)
      }
      for (let i = 0; i < rows.length; i++) {
        rows[i].style.background = 'none'
      }
      element.onmousemove = event => {
        if (e.x < event.x) {
          // 从右往下
          div.style.transform = 'rotate(0)'
          div.style.width = event.x - e.x + 'px'
          div.style.height = event.y - e.y + 'px'
          for (let i = 0; i < rows.length; i++) {
            if (
              rows[i].getBoundingClientRect().y + rows[i].clientHeight > e.y &&
              rows[i].getBoundingClientRect().y < event.y
            ) {
              rows[i].style.background = '#fef0f0'
            } else {
              rows[i].style.background = 'none'
            }
          }
        } else if (e.x > event.x) {
          // 从左往上
          div.style.transform = 'rotate(180deg)'
          div.style.width = e.x - event.x + 'px'
          div.style.height = e.y - event.y + 'px'
          for (let i = 0; i < rows.length; i++) {
            if (
              rows[i].getBoundingClientRect().y < e.y &&
              rows[i].getBoundingClientRect().y > event.y - rows[i].clientHeight
            ) {
              rows[i].style.background = '#fef0f0'
            } else {
              rows[i].style.background = 'none'
            }
          }
        }
      }
      element.onmouseup = event => {
        document.body.removeChild(div)
        element.onmousemove = null
      }
      element.onmouseleave = event => {
        document.body.removeChild(div)
        element.onmousemove = null
      }
    }
  },
   /*echarts 数据中间丢失，取两边丢失数据的斜率估算this.$fn.getFakeY*/
   getFakeY(dataArr) {
    let resArr = [...dataArr]
    dataArr.forEach((item, index) => {
      if (item == null) {
        /*前面没有数据处理不了直接return*/
        if (index == 0 || resArr[index - 1] == null) {
          return
        }
        let dataNum = 0 //预估增量
        for (let i = index; i < dataArr.length; i++) {
          let maxData = resArr[i]
          if (maxData != null) {
            dataNum = (resArr[i] - resArr[index - 1]) / (i - (index - 1))
            console.log(
              '进行估算：' + Math.round(resArr[index - 1] + dataNum)
            )
            resArr[index] = Math.round(resArr[index - 1] + dataNum)
            return
          }
        }
      } else {
        resArr[index] = dataArr[index]
      }
    })
    let isAllNull = true
    dataArr.forEach(item => {
      if (item != null) {
        isAllNull = false
        return
      }
    })

    if (isAllNull) {
      resArr = []
    }
    return resArr
  },
}
Vue.prototype.$fn = fn
