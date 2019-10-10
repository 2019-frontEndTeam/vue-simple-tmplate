<template>
  <div>
    <el-menu :collapse="!isCollapse" :unique-opened="true" class="el-menu-vertical-demo"
      :default-active="index" router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <div class="logo">
        <h1>vue-template</h1>
      </div>
      <div v-for="item in route">
        <el-menu-item v-if="!item.children && item.hidden != true" :index="item.meta.index" :route="item.path"
          :key="item.meta.index">
          <i :class="item.icon"></i>
          <span slot="title">{{$t(item.name)}}</span>
        </el-menu-item>
        <el-submenu v-if="item.children && item.hidden != true" :index="item.id" :key="item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title" v-show="isCollapse">{{$t(item.name)}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="itemChildren in item.children" :index="itemChildren.meta.index"
              :route="itemChildren.path" :key="itemChildren.meta.index">{{$t(item.name)}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
  export default {
    props: {
      route: {
        default: []
      },
      index: {
        default: 0
      },
      isCollapse: {
        default: true
      }
    }
  }
</script>
<style lang="scss">
  .el-menu {
    border-right: none;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    background-image: url('../../assets/timg.jpg');
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }

  @media screen and (max-width: 414px) {
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 0px;
      overflow: hidden;
      height: 100%;
    }
  }

  .el-menu--collapse {
    height: 100%;
  }

  .el-main {
    padding: 0px;
    overflow-y: auto;
  }

  .el-menu-item {
    background: #000c17 !important;
    height: 45px;
    line-height: 45px;
    color: rgba(248, 236, 236, 0.918) !important;
  }

  .el-submenu {
    background: #000c17 !important;
    overflow: hidden;
    color: rgba(248, 236, 236, 0.918) !important;

    .el-submenu__icon-arrow {
      top: 55%;
    }
  }

  .el-submenu__title {
    background: #000c17 !important;
    color: #fff !important;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-item.is-active {
    background-color: #1890ff3b !important;
    color: #e6a23c !important;

    &::before {
      width: 5px;
      background: red;
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
