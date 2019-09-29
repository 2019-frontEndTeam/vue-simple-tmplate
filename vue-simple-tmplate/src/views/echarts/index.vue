<template>
  <div class="echarts">
    <!-- 滑动组件 -->
    <vue-touchmove class="mg" type="distance" distance="50" @click="clickHandle">
      <template v-slot:list>
        <el-card v-for="item in 30" :key="item" style="width: 150px;margin: 20px;">
          点我{{item}}
        </el-card>
      </template>
    </vue-touchmove>
    <!-- 弹窗组件 -->
    <vue-modal :visible.sync="visible" modalTitle="详情" :isButton="false" :isFooter="false">
      <template v-slot:info>
        <el-tabs class="pd" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="展示一" name="1">
            <vue-echart v-if="activeName == 1 && visible" :option="echartOption1"></vue-echart>
          </el-tab-pane>
          <el-tab-pane label="展示二" name="2">
            <vue-echart v-if="activeName == 2 && visible" :option="echartOption2"></vue-echart>
          </el-tab-pane>
        </el-tabs>
      </template>
    </vue-modal>
    <!-- echarts组件 -->
    <el-row>
      <el-col class="pd" :lg="{span:12}" :span="24">
        <el-card shadow="hover">
          <vue-echart :option="echartOption3"></vue-echart>
        </el-card>
      </el-col>
      <el-col class="pd" :lg="{span:12}" :span="24">
        <el-card shadow="hover">
          <vue-echart :option="echartOption4"></vue-echart>
        </el-card>
      </el-col>
      <el-col class="pd" :lg="{span:12}" :span="24">
        <el-card shadow="hover">
          <vue-echart :option="echartOption1"></vue-echart>
        </el-card>
      </el-col>
      <el-col class="pd" :lg="{span:12}" :span="24">
        <el-card shadow="hover">
          <vue-echart :option="echartOption2"></vue-echart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import vueModal from '@/components/vueModal'
  import vueEchart from '@/components/vueEchart'
  import vueTouchmove from '@/components/vueTouchmove'
  import { pieOption, lineOption, GlineOption, barOption, sexPieOption } from './index.js'
  export default {
    components: {
      vueModal,
      vueEchart,
      vueTouchmove
    },
    data() {
      return {
        data: [],
        visible: false,
        activeName: '1',
        echartOption1: JSON.parse(JSON.stringify(pieOption)),
        echartOption2: JSON.parse(JSON.stringify(sexPieOption)),
        echartOption3: JSON.parse(JSON.stringify(GlineOption)),
        echartOption4: JSON.parse(JSON.stringify(barOption)),
      }
    },
    mounted() {
    },
    created() {
      let num = 1;
      setInterval(() => {
        this.echartOption3.xAxis[0].data.push(num++);
        this.echartOption3.series[0].data.push(Math.round(Math.random() * 500));
        if (num > 20) {
          this.echartOption3.xAxis[0].data.shift();
          this.echartOption3.series[0].data.shift();
        }
      }, 500);
    },
    methods: {
      clickHandle() {
        this.visible = true;
        this.activeName = '1';
      }
    },
  }
</script>
<style lang="scss">
  .other {
    .el-dialog__body {
      padding: 0px;
    }
  }
</style>
