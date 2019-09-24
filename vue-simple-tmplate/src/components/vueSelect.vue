<template>
  <div>
    <el-select ref="select" class="vue-select" :value="setArr(value)" placeholder="请选择" clearable :multiple="multiple"
      collapse-tags @change="selectChange">
      <el-option v-for="(item,index) in data" :key="index" :label="item[name]" :value="item[id]"
        :disabled="item.disabled" v-show="!item.hidden">
      </el-option>
    </el-select>
    <div hidden>
      <div ref="action" class="fixed">
        <el-button v-if="multiple" @click="checkAllHandle">{{checkName}}</el-button>
        <el-input style="width:initial;" v-model="input" clearable placeholder="请输入内容"></el-input>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Array,
        default: []
      },
      value: {
        default: ''
      },
      multiple: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: 'name'
      },
      id: {
        type: String,
        default: 'id'
      }
    },
    data() {
      return {
        input: "",
        checkAll: false,
        checkName: '全选'
      }
    },
    watch: {
      input() {
        this.searchHandle()
      }
    },
    mounted() {
      this.$refs.select.$children[1].$el.prepend(this.$refs.action);
    },
    methods: {
      setArr(v) {
        this.$emit("update:value", v);
        if (v == null || v == "") {
          v = ""
          return
        }
        if (this.multiple) {
          return v.split(',');
        } else {
          return v;
        }
      },
      selectChange(item) {
        if (this.multiple) {
          item = item.join(',');
        }
        this.setArr(item);
      },
      searchHandle() {
        this.data.forEach(item => {
          if (item[this.label].includes(this.input)) {
            item.hidden = false;
          } else {
            item.hidden = true;
          }
        })
      },
      checkAllHandle() {
        this.checkAll = !this.checkAll;
        this.setArr(
          this.checkAll ? Array.from(this.data, ({ value }) => value).join(',') : ""
        )
        this.checkName = this.checkAll ? '清空' : '全选';
      }
    }
  }
</script>
<style>
  .fixed {
    position: fixed;
    padding: 10px 0px 5px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ebeef5;
    width: 500px;
    background: #fff;
    z-index: 999;
  }

  .el-scrollbar {
    width: 500px;
  }

  .el-select-dropdown__list {
    padding-top: 50px;
  }

  .el-select-dropdown__item {
    display: inline-block;
    width: 33.3%;
  }
</style>
