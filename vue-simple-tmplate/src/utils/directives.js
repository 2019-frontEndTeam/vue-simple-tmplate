export const drag = function(el, binding) {
  var dv
  if (binding.expression) {
    dv = el.querySelector('.' + binding.expression)
  } else {
    dv = el
  }
  //获取元素
  var x = 0
  var y = 0
  var l = 0
  var t = 0
  var isDown = false
  //鼠标按下事件
  dv.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX
    y = e.clientY

    //获取左部和顶部的偏移量
    l = dv.offsetLeft
    t = dv.offsetTop
    //开关打开
    isDown = true
    //设置样式
    dv.style.cursor = 'move'
  }
  //鼠标移动
  window.onmousemove = function(e) {
    if (isDown == false) {
      return
    }
    //获取x和y
    var nx = e.clientX
    var ny = e.clientY
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - l)
    var nt = ny - (y - t)

    dv.style.left = nl + 'px'
    dv.style.top = nt + 'px'
  }
  //鼠标抬起事件
  dv.onmouseup = function() {
    //开关关闭
    isDown = false
    dv.style.cursor = 'default'
  }
}

export const isPermission = function(el, binding) {
  // 当前菜单权限集
  let perms = [1, 2, 3]
  // 初始化按钮
  el.style.display = 'none'
  // binding.value 传入的权限标识
  perms.forEach(element => {
    if (element == binding.value) el.style.display = 'block'
  })
}

export const pc = function(el) {
  var userAgentInfo = navigator.userAgent
  var Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ]
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      el.style.display = 'none'
      break
    }
  }
}

function Debounce(fn, delay = 500) {
  let timer
  return function() {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn(args)
    }, delay)
  }
}

// 防抖
export const debounce = {
  bind: function(element, binding, node) {
    // 默认事件名
    let value = binding.expression || 'query'
    // 存储事件
    let fn = node.context[value]
    // 注销原事件
    node.context[value] = null
    // 停止点击0.5秒后，调用存储事件
    element.onclick = Debounce(function() {
      fn()
    }, 500)
  }
}

// 请求懒加载
export const lazyRequest = {
  bind: function(element, binding, node) {
    let value = binding.expression || 'query'
    let listen = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          setTimeout(() => {
            node.context[value]()
            listen.unobserve(item.target)
          }, 500)
        }
      })
    })
    listen.observe(element)
  }
}

// 图片懒加载
export const lazyImage = {
  bind: function(element, binding, node) {
    let listen = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          element.classList.add('show')
          setTimeout(() => {
            // element.src = binding.value
            element.src =
              'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/40/1b/ac/401bac19-2f4a-e14d-6f29-7e605e259611/AppIcon-0-1x_U007emarketing-0-85-220-0-5.png/180x180bb.png'

            listen.unobserve(item.target)
          }, 500)
        }
      })
    })
    listen.observe(element)
  }
}

// 操作栏吸顶
export const actionTab = {
  bind: function(element, binding) {
    let listen = new IntersectionObserver(entries => {
      let item = entries[0]
      let top = item.boundingClientRect.top
      let e = document.querySelector(`.${binding.expression}`)
      if (top < 0) {
        e.style.position = 'fixed'
      } else {
        e.style.position = 'relative'
      }
    })
    listen.observe(element)
  }
}