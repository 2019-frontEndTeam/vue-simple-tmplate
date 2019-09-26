<template>
  <div class="other">
    <el-button @click="change">改变</el-button>
    <vue-echart :option="echartOption1"></vue-echart>
    <vue-echart :option="echartOption2"></vue-echart>
    <vue-echart :option="echartOption3"></vue-echart>
    <vue-echart :option="echartOption4"></vue-echart>
  </div>
</template>
<script>
  import vueEchart from '@/components/vueEchart'
  import { pieOption, lineOption, GlineOption, barOption, sexPieOption } from './index.js'
  export default {
    components: {
      vueEchart
    },
    data() {
      return {
        data: [],
        echartOption1: JSON.parse(JSON.stringify(pieOption)),
        echartOption2: JSON.parse(JSON.stringify(sexPieOption)),
        echartOption3: JSON.parse(JSON.stringify(GlineOption)),
        echartOption4: JSON.parse(JSON.stringify(barOption)),
      }
    },
    mounted() {
    },
    created() {
    },
    methods: {
      change() {
        this.echartOption1.series[0].data = [
          { value: 123, name: '直接访问' },
          { value: 321, name: '邮件营销' },
          { value: 22, name: '联盟广告' },
          { value: 1, name: '视频广告' },
          { value: 13, name: '搜索引擎' }
        ]
      }
    },
  }
</script>
