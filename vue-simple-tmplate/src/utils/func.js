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
  scrollPaging(totalData, data, row = 20) {
    for (var i = that.page * row - row; i < that.page * row; i++) {
      if (!fn.isEmptyObject(totalData[i])) {
        data.push(totalData[i])
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
  }
}
Vue.prototype.$fn = fn
