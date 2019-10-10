<template>
  <div class="layout">
    <el-container style="height: 100vh;">
      <side-menu :route="route" :index="index" :isCollapse="isCollapse"></side-menu>
      <el-container>
        <el-header>
          <div @click="switchChange">
            <i class="el-icon-s-fold fl switch" ref="switch"></i>
          </div>
          <el-dropdown trigger="click" class="fr" @command="handleCommand">
            <div>
              <svg-icon icon-class="user" style="font-size: 20px;" />
              <span>admin</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>语言切换</el-dropdown-item>
              <el-dropdown-item command="zh">
                中文
              </el-dropdown-item>
              <el-dropdown-item command="en">
                英文
              </el-dropdown-item>
              <el-dropdown-item disabled>其他操作</el-dropdown-item>
              <el-dropdown-item command="exit">
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <history-nav :activeName="activeName" :breadcrumb="breadcrumb"></history-nav>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import appMain from './appMain'
  import sideMenu from './sideMenu.vue'
  import historyNav from './historyNav.vue'
  export default {
    components: {
      appMain,
      sideMenu,
      historyNav
    },
    data() {
      return {
        index: '1',
        route: [],
        activeName: '',
        breadcrumb: [],
        isCollapse: true,
      }
    },
    watch: {
      $route(to, from, next) {
        this.activeName = to.path;
        this.index = to.meta.index;
        this.breadcrumb = this.$fn.filterBreadcrumb(this.breadcrumb, this.$route.name);
      }
    },
    created() {
      this.$fn.init(this);
      this.breadcrumb = [{ name: this.$route.name, path: this.$route.path }];
      this.route = this.$store.state.user.menus;
      this.index = this.$route.meta.index;
      this.activeName = this.$route.path;

    },
    methods: {
      handleCommand(value) {
        if (value != 'exit') {
          this.$cl(value);
        } else {
          this.$router.push({
            path: '/'
          })
        }
      },
      switchChange() {
        if (this.isCollapse) {
          this.$refs.switch.classList.add('rotate');
        } else {
          this.$refs.switch.classList.remove('rotate');
        }
        this.isCollapse = !this.isCollapse;
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
