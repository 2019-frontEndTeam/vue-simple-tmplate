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
    height: inherit;
    box-sizing: border-box;
    padding:20px;
  }
</style>
