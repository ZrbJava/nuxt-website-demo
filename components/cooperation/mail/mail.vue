<template>
  <a
    :class="[isPc ? 'wrapper' : 'm-wrapper']"
    :href="`mailto:${source.email}`"
    @mouseover="over()"
    @mouseout="outFn()"
  >
    <div class="top" :class="[source.hot ? 'active' : '']">
      <i :class="`iconfont ${source.icon} top-icon`"></i>
    </div>
    <div class="mail-c">
      <p class="text">{{ source.text }}</p>
      <p class="email">{{ source.email }}</p>
    </div>
  </a>
</template>

<script>
const COMPONENTS_NAME = 'mail'

export default {
  name: COMPONENTS_NAME,
  props: {
    source: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  methods: {
    outFn() {
      this.source.hot = !this.source.hot
    },
    over() {
      this.source.hot = !this.source.hot
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper{
  width 100%
  height 100%
  position relative
  border-1px(#eee, 1px, solid)
  margin-right pcFn(20)

  &:last-child {
    margin-right 0
  }

  &:hover {
    border-1px($color-icon, 1px, solid)
    cursor pointer
  }

  .top {
    width 100%
    height pcFn(120)
    line-height pcFn(120)
    text-align center

    &.active {
      background-color $color-icon

      .top-icon {
        color #fff
      }
    }

    .top-icon {
      font-size pcFn(70)
      color #ccc
    }
  }

  .mail-c {
    padding pcFn(30)
    font-size pcFn(20)

    .text {
      line-height pcFn(30)
      font-weight 300
      color $color-main
    }

    .email {
      color $color-main-04
      font-weight 300
    }
  }
}
.m-wrapper{
  width calc(50% - 10px)
  height 100%
  position relative
  border-1px(#eee, 1px, solid)
  margin px2rem(10)

  &:nth-child(2n) {
    margin-right 0
    margin-bottom 0
  }

  &:hover {
    border-1px($color-icon, 1px, solid)
    cursor pointer
  }

  .top {
    width 100%
    height px2rem(120)
    line-height px2rem(120)
    text-align center

    &.active {
      background-color $color-icon

      .top-icon {
        color #fff
      }
    }

    .top-icon {
      font-size px2rem(70)
      color #ccc
    }
  }

  .mail-c {
    padding px2rem(30)
    font-size px2rem(28)

    .text {
      line-height px2rem(50)
      font-weight 300
      color $color-main
    }

    .email {
      color $color-main-04
      font-weight 300
    }
  }
}
</style>
