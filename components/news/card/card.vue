<template>
  <div :class="[isPc ? 'p-wrapper' : 'm-wrapper']" @click="onClick()">
    <img :src="source.imgSrc" class="img" />
    <div class="wrap">
      <p class="title">{{ source.title }}</p>
      <p v-if="isPc" class="time">{{ source.time }}</p>
      <p v-if="isPc" class="info">{{ source.info }}</p>
    </div>
  </div>
</template>

<script>
const COMPONENTS_NAME = 'card'

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
    isPc() {
      return this.$store.state.isPc
    }
  },
  methods: {
    onClick() {
      this.$emit('getIndex', this.index)
    }
  }
}
</script>

<style scoped lang="stylus">
.p-wrapper {
  width 100%
  height 100%
  position relative
  display flex
  transition transform 0.25s ease
  background-color #fff
  box-shadow: pcFn(1) pcFn(1) pcFn(5) pcFn(1) rgba(0,0,0,.1)

  &:hover {
    box-shadow: pcFn(1) pcFn(1) pcFn(10) pcFn(3) rgba(0,0,0,.2)
    cursor: pointer
  }

  .img {
    width pcFn(300)
    height pcFn(300)
  }

  .wrap {
    width pcFn(820)
    margin pcFn(50) pcFn(40)
    font-size pcFn(18)

    .title {
      font-size pcFn(32)
      overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 1
    }

    .time {
      color #999
      font-weight 300
      margin-top pcFn(20)
    }

    .info {
      color $color-main-02
      font-weight 300
      margin-top pcFn(20)
      line-height pcFn(30)
      overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 4
    }
  }
}
.m-wrapper {
  width 100%
  height 100%
  position relative
  display flex
  transition transform 0.25s ease
  background-color #fff
  box-shadow: px2rem(1) px2rem(1) px2rem(5) px2rem(1) rgba(0,0,0,.1)

  .img {
    width px2rem(230)
    height px2rem(230)
  }

  .wrap {
    position absolute
    left px2rem(230)
    right 0
    padding px2rem(15) px2rem(30)

    .title {
      font-size px2rem(36)
      line-height 1.5
      /* overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2 */
    }

    .info {
      color $color-main-02
      font-weight 300
      margin-top px2rem(20)
      line-height px2rem(44)
      overflow hidden
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      font-size px2rem(32)
    }
  }
}
</style>
