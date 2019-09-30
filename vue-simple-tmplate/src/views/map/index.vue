<template>
  <div id="container">
   <div class="info">
     <img class="map-url" 
     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RDlDOTA3RDJDQUExMUU3QUY3REU4MDc1M0MzNjY5RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RDlDOTA3RTJDQUExMUU3QUY3REU4MDc1M0MzNjY5RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhEOUM5MDdCMkNBQTExRTdBRjdERTgwNzUzQzM2NjlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhEOUM5MDdDMkNBQTExRTdBRjdERTgwNzUzQzM2NjlGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RQc1VAAACpVJREFUeNrsnHts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" draggable="false" data-spm-anchor-id="0.0.0.i11.42e51c4e2IBCO9">
    <div class="input-item">
      <div class="input-item-prepend">
        <span class="input-item-text" style="width:8rem;">请输入关键字</span>
      </div>
      <input id='tipinput' type="text" @blur="blur(auto)">
    </div>
</div>
  </div>
  
</template>
<script>
  export default {
    data() {
      return {
        map:'',
        auto:'',
      };
    },
    mounted() {
      this.init()
    },
    methods: {
      blur(){
          console.log(this.auto);
      },
      // 初始化地图
      async init() {
        let map = this.map =  new AMap.Map("container", {
          // mapStyle: 'amap://styles/blue', //地图颜色
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 5, //初始化地图层级
          // center: [104.397428, 35.90923], //初始化地图中心点
          showIndoorMap: false, // 	  是否在有矢量底图的时候自动展示室内地图
          expandZoomRange: true // 拓展zoom
        });
      // setInterval(()=>{
           this.orther()
      // },2000)
    //输入提示
    var auto =this.auto = new AMap.Autocomplete({
        input: "tipinput"
    });
     var placeSearch = new AMap.PlaceSearch({
        map: this.map
    });  //构造地点查询类
    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
    
    function select(e) {
      console.log(e)
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name);  //关键字查询查询
    }

  
      },
    async orther(){
          // let position = {
          //  0: [114.597181,37.605161],
          //  1: [113.597181,36.605161],
          //  2: [113.897181,35.605161],
          // }
            let marker = new AMap.Marker({
              map: this.map,
               position:[113.597181,36.605161],
                icon:new AMap.Icon({
                image:'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=8899159308f79052ef4a4f383cc3fbf2/78310a55b319ebc41f7810198326cffc1e171629.jpg',
                size: new AMap.Size(60, 62),
                imageSize: new AMap.Size(60, 62)
                }),
                offset: new AMap.Pixel(-30, -13),
                autoRotation: true,
              });
        marker.setMap(this.map);
      },
     
    }
  };
</script>
<style scoped lang='scss'>
  #container {
    width: 100%;
    height: 82vh;
  }
  .info{
    display:flex;
    position: relative;
    z-index: 2201;
    width: 360px;
    height: 44px;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0,0,0,.15);
    border-radius: 3px;
  }
  .input-item{
    width: 100%;
  }
  .amap-sug-result{
    visibility: visible;
    display: block;
    left: 220px !important;
    top: 196px !important;
    min-width: 175px;
  }
</style>
