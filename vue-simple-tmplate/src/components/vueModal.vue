<template>
  <div class="vueModal">
    <el-dialog :title="modalTitle" :visible.sync="visible" :before-close="beforeClose" :append-to-body="true">
      <el-form :model="form" ref="form" label-width="80px" style="text-align-last: justify;margin:0px 80px;">
        <el-form-item v-for="(item,index) in componentList" :key="index" :label="item.title" :prop="item.field"
          :rules="{required:item.required,message:'必填'}">
          <!-- 下拉框 -->
          <vue-select v-if="item.component=='select'" :data="item.data" :value.sync="form[item.field]" :id='item.id'
            :name="item.name">
          </vue-select>
          <!-- 输入框 -->
          <el-input v-else-if="item.component=='input'" placeholder="请输入内容" v-model="form[item.field]"></el-input>
          <!-- 单选 -->
          <el-radio-group v-else-if="item.component=='radio'" v-model="form[item.field]">
            <el-radio v-for="(radioItem,radioIndex) in item.data" :key="radioIndex" :label="radioItem[item.id]">
              {{radioItem[item.name]}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <slot name="formItem"></slot>
      </el-form>
      <slot name="info"></slot>
      <div v-if="isFooter" slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-button v-if="isButton" type="primary" @click="openModal">{{modalTitle}}</el-button>
  </div>
</template>
<script>
  import vueSelect from './vueSelect.vue'
  export default {
    components: {
      vueSelect
    },
    props: {
      componentList: {
        type: Array,
        default: []
      },
      modalTitle: {
        type: String,
        default: '新增'
      },
      visible: {
        type: Boolean,
        default: false
      },
      isFooter: {
        type: Boolean,
        default: true
      },
      isButton: {
        type: Boolean,
        default: true
      },
      echoData: {
        default: {}
      }
    },
    data() {
      return {
        form: {}
      };
    },
    watch: {
      visible() {
        this.$emit("update:visible", this.visible);
      },
      echoData() {
        this.form = this.echoData;
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$emit("confirm", this.form);
          } else {
            return false;
          }
        })
      },
      beforeClose() {
        this.visible = false;
        this.$refs.form.resetFields();
      },
      openModal() {
        // this.componentList.forEach(item => {
        //   this.$set(this.form, item.field, "");
        // })
        this.visible = true;
        this.$emit('open');
      }
    }
  };
</script>
<style lang="scss">
  .el-dialog__header {
    border-bottom: 1px solid #eee;
  }
</style>
