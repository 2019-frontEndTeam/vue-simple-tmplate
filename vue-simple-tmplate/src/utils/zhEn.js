var ln = localStorage.getItem('ln')
const zhEn = {
  changeLn(value) {
    localStorage.setItem('ln', value)
    location.reload()
  },
  setText(value) {
    let config = {
        index: '主页',
        lazyImage: '图片懒加载',
        echarts: '图表展示',
        lazyRequest: '请求懒加载',
        map: '异步加载地图',
        table: '表格其他功能'
      },
      text
    Object.keys(config).forEach(key => {
      if (config[key] == value) {
        if (ln == 'en') {
          text = key
        } else {
          text = config[key]
        }
      }
    })
    return text
  }
}
Vue.prototype.$t = zhEn.setText
Vue.prototype.$cl = zhEn.changeLn
