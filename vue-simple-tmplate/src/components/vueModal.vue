<template>
  <el-dialog title="弹窗" :visible.sync="visible">
    <el-form :model="form"></el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  created() {},
  methods: {
      
  }
};
</script>