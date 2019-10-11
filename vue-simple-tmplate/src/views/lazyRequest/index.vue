<template>
  <div class="lazyRequest">
    <div class="text-center">
        <drag-classify class="iblock" :key="1" :list="list1" :group="group" header-text="Todo" />
        <drag-classify class="iblock" :key="2" :list="list2" :group="group" header-text="Working" />
    </div>
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
  import dragClassify from '@/components/dragClassify'
  import { pieOption } from '../echarts/index.js'
  export default {
    components: {
      vueEchart,
      dragClassify
    },
    data() {
      return {
        tableData: list,
        loading1: true,
        loading2: true,
        loading3: true,
        echartOption1: JSON.parse(JSON.stringify(pieOption)),
        group: 'mission',
        list1: [
          { name: 'Mission', id: 1 },
          { name: 'Mission', id: 2 },
          { name: 'Mission', id: 3 },
          { name: 'Mission', id: 4 }
        ],
        list2: [
          { name: 'Mission', id: 5 },
          { name: 'Mission', id: 6 },
          { name: 'Mission', id: 7 }
        ],
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
