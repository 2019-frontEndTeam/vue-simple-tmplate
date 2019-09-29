<template>
  <div class="lazyImage">
    <!-- 吸顶，需要参照物 -->
    <div v-actionTab="actionTab"></div>
    <div class="actionTab pd" style="overflow: hidden;">
      <!-- 弹窗组件 -->
      <vue-modal class="fr" modalTitle="修改" :echoData="formData" :visible.sync="visible" :componentList="componentList"
        @confirm="handleSumbit" @open="openHandle">
      </vue-modal>
      <!-- 下拉组件 -->
      <vue-select class="fl" title="性别" :data="list" :value.sync="value1" :multiple="true" id="value" name="label">
      </vue-select>
      <vue-select class="fl" title="姓名" :data="list" :value.sync="value2" :multiple="true" id="value" name="label">
      </vue-select>
    </div>

    <!-- 图片懒加载 -->
    <div class="text-center" v-once>
      <img class="pd mg img" v-for="(item,index) in 50" v-lazyImage="item.value" :key="index" src="@/assets/logo.png" />
    </div>
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
        value1: '1,2,3',
        value2: '',
        disabled: false,
        visible: false,
        selectList: [],
        componentList: componentList
      };
    },
    mounted() { },
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
      openHandle() {
        this.formData = {
          inputValue: '我18岁了'
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .actionTab {
    z-index: 99;
    background: #ecf5ff;
    box-sizing: border-box;
  }

  .img {
    width: 200px;
    height: 200px;
  }
</style>
