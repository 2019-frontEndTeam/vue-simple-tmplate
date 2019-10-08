<template>
  <section class="app-main">
    <transition name="el-zoom-in-bottom">
      <router-view v-if="$route.path != '/map'" v-show="true"></router-view>
    </transition>
    <transition name="el-zoom-in-bottom">
      <keep-alive>
        <router-view v-if="$route.path == '/map'" v-show="true"></router-view>
      </keep-alive>
    </transition>
    <el-backtop target=".app-main"></el-backtop>
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
    padding: 20px;
    overflow: auto;
  }
</style>
