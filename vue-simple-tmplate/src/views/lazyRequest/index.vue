<template>
  <div class="lazyRequest">
    <el-table height="500" element-loading-spinner="el-icon-orange" element-loading-background="rgba(255,255,255,.7)"
      element-loading-custom-class="rotate-loading" v-loading="loading1" :data="tableData" v-lazyRequest="query1">
      <el-table-column prop="value" label="#" align="center"></el-table-column>
      <el-table-column prop="label" label="姓名" align="center"></el-table-column>
    </el-table>
    <div class="arrow">↓</div>
    <el-table height="500" element-loading-spinner="el-icon-orange" element-loading-background="rgba(255,255,255,.7)"
      element-loading-custom-class="rotate-loading" v-loading="loading2" border :data="tableData"
      v-lazyRequest="query2">
      <el-table-column prop="value" label="#" align="center"></el-table-column>
      <el-table-column prop="label" label="姓名" align="center"></el-table-column>
    </el-table>
    <div class="arrow">↓</div>
    <vue-echart :option="echartOption1" :loading="loading3" v-lazyRequest="query3"></vue-echart>
  </div>
</template>
<script>
  import { list } from './index.js';
  import vueEchart from '@/components/vueEchart'
  import { pieOption } from '../echarts/index.js'
  export default {
    components: {
      vueEchart
    },
    data() {
      return {
        tableData: list,
        loading1: true,
        loading2: true,
        loading3: true,
        echartOption1: JSON.parse(JSON.stringify(pieOption)),
      }
    },
    methods: {
      query1() {
        this.loading1 = false;
      },
      query2() {
        this.loading2 = false;
      },
      query3() {
        this.loading3 = false;
        this.echartOption1.series[0].data = [
          { value: 11, name: '直接访问' },
          { value: 321, name: '邮件营销' },
          { value: 98, name: '联盟广告' },
        ]
      },
    },
  }
</script>
<style scoped>
  .lazyRequest {
    user-select: none;
  }

  .arrow {
    color: #0178f4;
    text-align: center;
    font-size: 200px;
    height: 400px;
    line-height: 500px;
    animation: updown 1s ease infinite;
  }

  @keyframes updown {
    0% {
      transform: translateY(-120px);
    }

    50% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-120px);
    }
  }
</style>
