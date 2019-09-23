<template>
  <div class="HelloWorld">
    <vue-select :data="list" :value.sync="value" :multiple="true"></vue-select>
    <div class="text-center">
      <img
        class="pd mg"
        v-for="(item,index) in 20"
        v-lazyImage="item.value"
        :key="index"
        src="../assets/logo.png"
      />
    </div>
    <div v-actionTab="actionTab"></div>
    <div class="actionTab text-center">吸顶</div>
    <div class="text-center">
      <img
        class="pd mg"
        v-for="(item,index) in 20"
        v-lazyImage="item.value"
        :key="index"
        src="../assets/logo.png"
      />
    </div>
  </div>
</template>
<script>
import vueSelect from "./vueSelect";
export default {
  components: {
    vueSelect
  },
  data() {
    return {
      list: [
        {
          label: "qiu",
          value: "1"
        },
        {
          label: "yuan",
          value: "2"
        }
      ],
      value:""
    };
  },
  created() {
    console.log(window);
  },
  methods: {
    
  }
};
</script>

<style scoped>
.HelloWorld {
  height: 3000px;
}
.actionTab {
  width: 100%;
  position: relative;
  background: palegreen;
  top: 0;
  left: 0;
}
</style>
