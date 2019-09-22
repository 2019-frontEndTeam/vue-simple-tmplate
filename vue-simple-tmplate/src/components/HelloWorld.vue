<template>
  <div class="HelloWorld">
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
export default {
  data() {
    return {
      imgList: [
        {
          value: "123.png"
        },
        {
          value: "321.png"
        }
      ]
    };
  },
  created() {
    console.log(window);
  },
  methods: {}
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
