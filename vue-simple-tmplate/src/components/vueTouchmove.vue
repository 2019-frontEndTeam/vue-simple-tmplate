<template>
  <div :style="styles">
    <div class="el-icon-back arrow arrow-left" @click="move($refs.overflow,150,-1)"></div>
    <div class="el-icon-right arrow arrow-right" @click="move($refs.overflow,150,1)"></div>
    <div ref="overflow" class="scroll">
      <div class="parent" @mousedown="mousedownHandle" @click="clickHandle">
        <slot name="list"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      distance: {
        type: Number,
        default: 100
      },
      height: {
        type: String,
        default: '200px'
      }
    },
    computed: {
      styles() {
        return `position: relative;height:${this.height}`
      }
    },
    methods: {
      clickHandle(e) {
        if (e.target.className != 'parent') {
          this.$emit('click', e);
        }
      },
      move(element, distance, direction) {
        var time;
        clearInterval(time);
        time = setInterval(() => {
          distance -= 1;
          element.scrollLeft += Math.floor((distance / 20) * 2.5 * direction);
          if (distance <= 0 || element.scrollLeft == 0 || element.scrollLeft == element.scrollWidth) {
            clearInterval(time);
          }
        })
        element.onmouseup = null;
        element.onmousemove = null;
        element.onmouseleave = null;
      },
      mousedownHandle(event) {
        var distance = 0,
          element = this.$refs.overflow,
          direction;

        element.onmousemove = (e) => {
          distance = (event.clientX - e.clientX);
          if (distance < 0) {
            direction = -1
          } else {
            direction = 1
          }
          // 限定滑动距离上限
          distance = Math.abs(distance) > 250 ? 250 : Math.abs(distance);
        }

        element.onmouseup = (e) => {
          this.move(element, distance, direction);
        }

        element.onmouseleave = (e) => {
          this.move(element, distance, direction);
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .scroll {
    overflow: hidden;
    height: inherit;


    .parent {
      position: relative;
      height: inherit;
      user-select: none;
      white-space: nowrap;

      div {
        transition: all .2s;
        cursor: pointer;
        display: inline-block;
        height: 80%;
        margin: 20px 10px 10px 10px;

        &:hover {
          transform: scale(1.1);
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
