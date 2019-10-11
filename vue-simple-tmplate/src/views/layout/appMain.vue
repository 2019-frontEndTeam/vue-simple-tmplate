<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view v-if="$route.path != '/map'" />
    </transition>
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.path == '/map'" />
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
<style lang="scss" scoped>
  .app-main {
    height: calc(100vh - 130px);
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    overflow: auto;
  }

  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-20px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
</style>
