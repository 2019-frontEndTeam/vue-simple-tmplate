<template>
  <div id="app">
    <transition name="el-zoom-in-center">
      <router-view v-show="true"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',

  }
</script>

<style lang="scss">
  @import "./styles/index.scss";
  .amap-sug-result {
    position: fixed;
  }
</style>
