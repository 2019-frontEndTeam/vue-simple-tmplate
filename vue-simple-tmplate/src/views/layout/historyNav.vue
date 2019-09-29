<template>
  <el-tabs class="historyNav" v-model="activeName" type="card" :closable="breadcrumb.length > 1" @tab-remove="removeTab"
    @tab-click="clickTab">
    <el-tab-pane v-for="item,index in breadcrumb" :key="index" :name="item.path" :label="item.name" />
  </el-tabs>
</template>
<script>
  export default {
    props: {
      activeName: {
        type: String,
        default: ''
      },
      breadcrumb: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
      }
    },
    methods: {
      clickTab() {
        this.$router.push(this.activeName);
      },
      removeTab(path) {
        this.breadcrumb.forEach((v, i) => {
          if (path == v.path) {
            if (path != this.activeName) {
              this.breadcrumb.splice(i, 1);
            } else {
              if (i == this.breadcrumb.length - 1) {
                this.$router.push(this.breadcrumb[this.breadcrumb.length - 2].path);
              } else {
                this.$router.push(this.breadcrumb[i + 1].path);
              }
              this.breadcrumb.splice(i, 1);
            }
          }
        })
      }
    },
  }
</script>
<style socped>

</style>
<style lang="scss">
  .historyNav {
    padding: 10px 10px 0px 10px;

    .el-tabs__header {
      margin: 0px;
    }
  }
</style>
