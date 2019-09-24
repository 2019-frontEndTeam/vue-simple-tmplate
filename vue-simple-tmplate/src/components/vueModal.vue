<template>
  <div class="vueModal">
    <el-dialog :title="modalTitle" :visible.sync="visible">
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item v-for="(item,index) in componentList" :key="index" :label="item.title" :prop="item.field"
          :rules="{required:item.required,message:'必填'}">
          <component :data="item.data" :value.sync="form[item.field]" :id='item.id' :name="item.name" :is="item.component">
          </component>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-button @click="openModal">{{modalTitle}}</el-button>
  </div>
</template>
<script>
  import vueSelect from "./vueSelect.vue"
  export default {
    props: {
      componentList: {
        type: Array,
        default: []
      },
      modalTitle: {
        type: String,
        default: '新增'
      }
    },
    components: {
      vueSelect
    },
    data() {
      return {
        visible: false,
        form: {}
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log(this.form);
            this.visible = false;
            this.$emit("click", this.form);
          } else {
            return false;
          }
        })

      },
      openModal() {
        this.visible = true;
        this.$nextTick(() => {
          this.$refs.form.resetFields();
        })
      }
    }
  };
</script>
