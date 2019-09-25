<template>
  <section class="app-main">
    <transition name="el-zoom-in-bottom">
      <router-view v-show="true"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
  }
</script>
<style scoped>
  .app-main {
    height: 100%;
    box-sizing: border-box;
    padding: 30px 20px;
    width: 100%;
  }
</style>
