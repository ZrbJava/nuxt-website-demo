<template>
  <div :class="[isPC ? 'case-wrapper' : 'm-wrapper']">
    <img :src="source.imgSrc" class="img" />
    <div class="wrap" :class="{ open: source.showIntro }">
      <p class="title">{{ source.title }}</p>
      <p class="info">{{ source.info }}</p>
      <p v-if="!isPC" class="operate-btn" @click="operate(source)">
        {{ source.showIntro ? '收起' : '简介' }}
      </p>
    </div>
  </div>
</template>

<script>
const COMPONENTS_NAME = 'case'

export default {
  name: COMPONENTS_NAME,
  props: {
    source: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isPC() {
      return this.$store.state.isPc
    }
  },
  methods: {
    onClick() {
      this.$emit('getIndex', this.index)
    },
    operate(item) {
      item.showIntro = !item.showIntro
    }
  }
}
</script>

<style scoped lang="stylus">
.case-wrapper {
  width 100%
  height 100%
  position relative
  background-color #fff
  box-shadow: pcFn(1) pcFn(1) pcFn(5) pcFn(1) rgba(0,0,0,.1)

  /* &:hover {
    top pcFn(-10)
    box-shadow: pcFn(1) pcFn(1) pcFn(10) pcFn(3) rgba(0,0,0,.2)
    cursor: pointer
  } */

  .img {
    width pcFn(442)
    height pcFn(300)
  }
  .wrap {
    transition all 0.4s ease
    padding pcFn(30)
    position absolute
    top pcFn(300)
    background #fff

    .title {
      font-size pcFn(24)
      overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
    }

    .info {
      font-size pcFn(14)
      color #fff
      font-weight 300
      line-height pcFn(28)
      margin-top pcFn(14)/*
      overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 6 */
    }
  }
  &:hover {
    .wrap {
      top 0
      bottom 0
      background #0c5c9d
      .title {
        color #fff
        line-height pcFn(30)
      }
    }
  }
}
.m-wrapper {
  width 100%
  height 100%
  position relative
  transition transform 0.25s ease
  background-color #fff
  font-size px2rem(28)

  .img {
    width 100%
    height px2rem(560)
  }
  .open {
    &.wrap {
      top 0
      bottom 0
      background #0c5c9d
      .title {
        color #fff
      }
      .operate-btn {
        color #fff
        &:after {
          border-color #fff
          transform rotate(45deg)
          top px2rem(10)
        }
      }
    }
  }
  .wrap {
    padding px2rem(30)
    position absolute
    top px2rem(560)
    transition all 0.4s ease

    .title {
      font-size px2rem(36)
      line-height px2rem(48)
      overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 1
    }

    .info {
      color #fff
      line-height px2rem(50)
      margin-top px2rem(14)
      overflow hidden
      /* display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 5 */
    }

    .operate-btn {
      font-size px2rem(32)
      line-height px2rem(48)
      position absolute
      top px2rem(30)
      right px2rem(30)
      color #0c5c9d
      &:after {
        content ' '
        display block
        height px2rem(14)
        width px2rem(14)
        border-right 3px solid #b5c5d2
        border-bottom 3px solid #b5c5d2
        transform rotate(-135deg)
        transform-origin 50% 50%
        position absolute
        left px2rem(-40)
        top px2rem(18)
      }
    }
  }
}
</style>
