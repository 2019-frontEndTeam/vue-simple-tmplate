<template>
  <div :style="'height:'+height+';'+'width:'+width" ref="echart"></div>
</template>
<script>
export default {
  props: {
    option: {
      type: Object,
      default: {}
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "500px"
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeEcharts);
  },
  watch: {
    // 深度监听配置表，更新数据
    option: {
      handler: function() {
        this.$echarts.init(this.$refs.echart).setOption(this.option);
      },
      deep: true
    },
    loading(n, o) {
      if (n) {
        this.$echarts.init(this.$refs.echart).showLoading();
      } else {
        this.$echarts.init(this.$refs.echart).hideLoading();
      }
    }
  },
  mounted() {
    const echart = this.$echarts.init(this.$refs.echart);
    echart.setOption(this.option);
    // 图表自适应
    window.addEventListener("resize", this.resizeEcharts);
    if (this.loading) {
      this.$echarts.init(this.$refs.echart).showLoading();
    }
  },
  methods: {
    resizeEcharts() {
      this.$echarts.init(this.$refs.echart).resize();
    }
  }
};
</script>
