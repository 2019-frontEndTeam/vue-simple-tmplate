<template>
  <transition name="fade">
    <div class="backtop" v-show="back">
      ↑
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      distance: {
        type: Number,
        default: 400
      },
      className: {
        type: String,
        default: 'app-main'
      }
    },
    data() {
      return {
        back: false,
        event: null,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll, true);
    },
    methods: {
      handleScroll(e) {
        if (e.target.className == this.className) {
          this.event = e.target;
          if (e.target.scrollTop > this.distance) {
            this.back = true;
          } else {
            this.back = false;
          }
        }
      },
      backToTop(e) {
        var time = setInterval(() => {
          this.event.scrollTop = this.event.scrollTop - this.event.scrollTop / 5;
          if (this.event.scrollTop == 0) {
            clearInterval(time);
          }
        }, 10)
      },
    },
  }

</script>
<style>
  .backtop {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 999;
    font-size: 40px;
    color: #2b85e4;
    cursor: pointer;
    height: 45px;
    line-height: 40px;
    border-radius: 3px;
  }
</style>
