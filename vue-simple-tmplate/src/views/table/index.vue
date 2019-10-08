<template>
  <div class="table">
    <el-popover ref="popover" trigger="hover">
      <el-button type="success" @click="$refs.popover.doClose()">修改</el-button>
      <el-button type="danger" @click="$refs.popover.doClose()">删除</el-button>
    </el-popover>
    <el-table v-tableH v-tableScroll="{totalData, tableData, row}" @row-contextmenu="rowContextmenu" :data="tableData">
      <el-table-column type="index" align="center"></el-table-column>
      <el-table-column prop="label" label="姓名" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        totalData: [],
        tableData: [],
        row: 50
      }
    },
    mounted() {
      // 初始化实例
      this.$fn.init(this);
      // 鼠标框选
      this.$fn.boxChoose(this.$el);
    },
    created() {
      this.totalData = new Array(1000).fill({ label: 'qiu' });
    },
    methods: {
      //  右键操作栏
      rowContextmenu(row, col, event) {
        event.preventDefault();
        let popover = this.$refs.popover.$el.children[0].style;
        popover.left = event.x - 5 + 'px';
        popover.top = event.y - 5 + 'px';
        this.$refs.popover.doShow();
      }
    },
  }
</script>
<style scoped>
  .table {
    user-select: none;
  }
</style>
