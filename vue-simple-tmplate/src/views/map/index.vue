<template>
  <div id="container">
    <div class="info">
      <div class="input-item">
        <el-input id='tipinput' v-model="value" type="text" placeholder="请输入关键字" @blur="blur(auto)" />
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        map: '',
        auto: '',
        value: ''
      };
    },
    mounted() {
      this.init()
    },
    methods: {
      blur() {
        console.log(this.auto);
      },
      // 初始化地图
      async init() {
        let map = this.map = new AMap.Map("container", {
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
        var auto = this.auto = new AMap.Autocomplete({
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
      async orther() {
        // let position = {
        //  0: [114.597181,37.605161],
        //  1: [113.597181,36.605161],
        //  2: [113.897181,35.605161],
        // }
        let marker = new AMap.Marker({
          map: this.map,
          position: [113.597181, 36.605161],
          icon: new AMap.Icon({
            image: 'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=8899159308f79052ef4a4f383cc3fbf2/78310a55b319ebc41f7810198326cffc1e171629.jpg',
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

  .info {
    display: flex;
    position: relative;
    z-index: 2201;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .15);
    border-radius: 3px;
  }

  .amap-sug-result {
    visibility: visible;
    display: block;
    left: 220px !important;
    top: 196px !important;
    min-width: 175px;
  }
</style>
