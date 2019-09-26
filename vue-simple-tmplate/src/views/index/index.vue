<template>
  <div class="index">
    <!-- 弹窗组件 -->
    <vue-modal
      class="pd"
      :visible.sync="visible"
      :componentList="componentList"
      @confirm="handleSumbit"
    ></vue-modal>
    <!-- 下拉组件 -->
    <vue-select
      class="pd"
      :data="list"
      :value.sync="value"
      :multiple="true"
      id="value"
      name="label"
    ></vue-select>
    <!-- 图片懒加载 -->
    <div class="text-center" v-once>
      <img
        class="pd mg img"
        v-for="(item,index) in 20"
        v-lazyImage="item.value"
        :key="index"
        src="@/assets/logo.png"
      />
    </div>
    <!-- 吸顶，需要参照物 -->
    <div v-actionTab="actionTab"></div>
    <div class="actionTab text-center">吸顶</div>
    <!-- 图片懒加载 -->
    <div class="text-center" v-once>
      <img
        class="pd mg img"
        v-for="(item,index) in 20"
        v-lazyImage="item.value"
        :key="index"
        src="@/assets/logo.png"
      />
    </div>
    <el-table
      height="500"
      element-loading-spinner="el-icon-orange"
      element-loading-background="rgba(255,255,255,.7)"
      element-loading-custom-class="rotate-loading"
      v-loading="loading"
      border
      :data="tableData"
      v-lazyRequest
    >
      <el-table-column prop="value" label="#" align="center"></el-table-column>
      <el-table-column prop="label" label="姓名" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { componentList, list } from "./index.js";
import vueSelect from "@/components/vueSelect";
export default {
  components: {
    vueModal(resolve) {
      require(["@/components/vueModal.vue"], resolve);
    },
    vueSelect
  },
  data() {
    return {
      form: {},
      value: "",
      list: list,
      loading: true,
      disabled: false,
      visible: false,
      tableData: [],
      selectList: [],
      componentList: componentList
    };
  },
  mounted() {},
  created() {
    // 初始化this
    this.$fn.init(this);
    // 下拉数据  true开启缓存
    this.$fn.selectList(this.$api.listApi, "selectList", true);
    // yyyy-mm-dd
    console.log(this.$fn.formatDate1(new Date()));
    // yyyy-mm-dd hh:mm:ss
    console.log(this.$fn.formatDate2(new Date()));
    // hh:mm:ss
    console.log(this.$fn.formatDate3(new Date()));
    // 3600*1000*24 = 24h
    console.log(this.$fn.formatDate2(new Date() - 3600 * 1000 * 24));
  },
  methods: {
    handleSumbit(value) {
      // 子组件处理好的请求参数
      console.log(value);
      // 响应处理
      this.$fn.responseHandle(200, "保存成功", { visible: false });
    },
    query() {
      // this.$api.listApi()
      this.tableData = this.list;
      this.loading = false;
    }
  }
};
</script>
<style lang="scss">
.rotate-loading {
  i {
    font-size: 30px;
    color: #0178f4;
    animation: rotating 1s linear infinite;
  }
}
</style>
<style lang="scss" scoped>
.actionTab {
  background: palegreen;
  z-index: 9999;
}

.img {
  width: 200px;
  height: 200px;
}
</style>
