<template>
  <div :style="'position: relative;height:'+height">
    <div class="el-icon-back arrow arrow-left" @click="$refs.overflow.scrollLeft -= width"></div>
    <div class="el-icon-right arrow arrow-right" @click="$refs.overflow.scrollLeft += width"></div>
    <div ref="overflow" class="scroll">
      <div class="parent" @mousedown="mousedownHandle" @click="clickHandle">
        <slot name="list"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    /*
    type：
      distance：滑动距离*distance
      spring：滑动时间*distance
    */
    props: {
      type: {
        type: String,
        default: 'distance'
      },
      distance: {
        type: Number,
        default: 30
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    data() {
      return {
        width: 0
      }
    },
    mounted() {
      (window.onresize = () => {
        this.width = this.$refs.overflow.clientWidth;
      })()
    },
    beforeDestroy() {
      window.onresize = null;
    },
    methods: {
      clickHandle(e) {
        if (e.target.className != 'parent') {
          this.$emit('click', e);
        }
      },
      mousedownHandle(event) {
        var distance = 0,
          element = this.$refs.overflow;

        element.onmousemove = (e) => {
          if (this.type == 'spring') {
            distance += parseInt(this.distance) * ((e.clientX > event.clientX) ? -1 : 1);
          } else {
            distance = (event.clientX - e.clientX);
          }
        }

        element.onmouseup = (e) => {
          element.scrollLeft += distance;
          element.onmouseup = null;
          element.onmousemove = null;
          element.onmouseleave = null;
        }

        element.onmouseleave = (e) => {
          element.scrollLeft += distance;
          element.onmouseup = null;
          element.onmousemove = null;
          element.onmouseleave = null;
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .scroll {
    /* overflow: scroll hidden; */
    overflow: hidden;
    scroll-behavior: smooth;
    height: inherit;

    .parent {
      width: max-content;
      height: inherit;
      display: flex;
      user-select: none;

      div {
        transition: all .2s;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  .arrow {
    width: 30px;
    height: 30px;
    color: #fff;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.2);
    z-index: 99;
  }

  .arrow-left {
    left: 0;
  }

  .arrow-right {
    right: 0;
  }
</style>
