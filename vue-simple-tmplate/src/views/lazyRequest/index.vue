<template>
  <div class="lazyRequest">
    <el-popover ref="popover" trigger="hover">
      <el-button type="success" @click="$refs.popover.doClose()">修改</el-button>
      <el-button type="danger" @click="$refs.popover.doClose()">删除</el-button>
    </el-popover>
    <el-table height="500" @row-contextmenu="rowContextmenu" element-loading-spinner="el-icon-orange"
      element-loading-background="rgba(255,255,255,.7)" element-loading-custom-class="rotate-loading"
      v-loading="loading1" :data="tableData" v-lazyRequest="query1">
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
    <el-table height="500" element-loading-spinner="el-icon-orange" element-loading-background="rgba(255,255,255,.7)"
      element-loading-custom-class="rotate-loading" v-loading="loading3" border :data="tableData"
      v-lazyRequest="query3">
      <el-table-column prop="value" label="#" align="center"></el-table-column>
      <el-table-column prop="label" label="姓名" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { list } from './index.js';
  export default {
    data() {
      return {
        tableData: list,
        loading1: true,
        loading2: true,
        loading3: true,
      }
    },
    mounted() {
      this.$fn.boxChoose(this.$el);
    },
    methods: {
      rowContextmenu(row, col, event) {
        event.preventDefault();
        let popover = this.$refs.popover.$el.children[0].style;
        popover.left = event.x - 5 + 'px';
        popover.top = event.y - 5 + 'px';
        this.$refs.popover.doShow()
      },
      query1() {
        this.loading1 = false;
      },
      query2() {
        this.loading2 = false;
      },
      query3() {
        this.loading3 = false;
      },
    },
  }
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }
</style>
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
