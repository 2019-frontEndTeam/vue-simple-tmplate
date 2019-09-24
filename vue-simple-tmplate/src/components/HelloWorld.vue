<template>
  <div class="HelloWorld">
    <vue-modal class="pd" :componentList="componentList"></vue-modal>
    <vue-select class="pd" :data="list" :value.sync="value" :multiple="true" id="value" name="label"></vue-select>
    <div class="text-center">
      <img class="pd mg" v-for="(item,index) in 20" v-lazyImage="item.value" :key="index" src="../assets/logo.png" />
    </div>
    <div v-actionTab="actionTab"></div>
    <div class="actionTab text-center">吸顶</div>
    <div class="text-center">
      <img class="pd mg" v-for="(item,index) in 20" v-lazyImage="item.value" :key="index" src="../assets/logo.png" />
    </div>
  </div>
</template>
<script>
  import vueSelect from "./vueSelect";
  import vueModal from "./vueModal"
  export default {
    components: {
      vueSelect,
      vueModal
    },
    data() {
      return {
        form: {

        },
        list: [
          {
            label: "qiu",
            value: "1"
          },
          {
            label: "yuan",
            value: "2"
          }
        ],
        componentList: [
          {
            title: '姓名',
            field: 'id',
            name: 'label',
            id: 'value',
            component: 'vue-select',
            data: [
              {
                label: "qiu",
                value: "1"
              },
              {
                label: "yuan",
                value: "2"
              }
            ],
          },
          {
            title: '性别',
            field: 'type',
            name: 'label',
            id: 'value',
            required: true,
            component: 'vue-select',
            data: [
              {
                label: "qiu",
                value: "1"
              },
              {
                label: "yuan",
                value: "2"
              }
            ],
          }
        ],
        value: ""
      };
    },
    created() {
      // yyyy-mm-dd
      console.log(this.$fn.formatDate1(new Date()))
      // yyyy-mm-dd hh:mm:ss
      console.log(this.$fn.formatDate2(new Date()))
      // hh:mm:ss
      console.log(this.$fn.formatDate3(new Date()))
      // 3600*1000*24 = 24h
      console.log(this.$fn.formatDate2(new Date() - 3600 * 1000 * 24))
    },
    methods: {

    }
  };
</script>

<style scoped>
  .HelloWorld {
    height: 3000px;
  }

  .actionTab {
    width: 100%;
    position: relative;
    background: palegreen;
    top: 0;
    left: 0;
  }
</style>
