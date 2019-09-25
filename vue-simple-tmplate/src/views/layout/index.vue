<template>
  <div class="layout">
    <el-container style="height: 100vh;">
      <Menu :route="route" :index="index" :isCollapse="isCollapse"></Menu>
      <el-container>
        <el-header>
          <div @click="switchChange">
            <i class="el-icon-s-fold fl switch" ref="switch"></i>
          </div>
          <el-dropdown trigger="click" class="fr">
            <i class="el-icon-setting">
              <span style="padding: 10px;">qiuqiuqiuqiu</span>
            </i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="exit">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
    <el-backtop target=".el-main"></el-backtop>
  </div>
</template>
<script>
  import appMain from './appMain'
  import Menu from './Menu.vue'
  export default {
    components: {
      Menu,
      appMain
    },
    data() {
      return {
        index: '1',
        route: [],
        isCollapse: true,
      }
    },
    watch: {
      $route(to, from, next) {
        this.index = to.meta.index
      }
    },
    created() {
      this.route = this.$router.options.routes[1].children;
      this.index = this.$route.meta.index;
    },
    methods: {
      exit() {
        this.$router.push({
          path: '/'
        })
      },
      switchChange(boolean) {
        if (this.isCollapse) {
          this.$refs.switch.classList.add('rotate');
          this.isCollapse = false;
        } else {
          this.$refs.switch.classList.remove('rotate');
          this.isCollapse = true;
        }

      }
    }
  }

</script>
<style lang='scss'>
  .layout {
    .rotate {
      transform: rotate(540deg);
    }

    .switch {
      position: relative;
      transition: all 0.8s;
      font-size: 35px;
      top: 10px;
      left: -10px;
    }

    .logo {
      background-size: 145%;
      background-position: -35px -57px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      padding: 5px;
      overflow: hidden;
    }

    .el-header {
      background: #fff;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      line-height: 60px;
    }
  }
</style>
