<template>
  <div
    :class="[isPC ? 'wrapper' : 'm-wrapper']"
    :style="`background-image: url(${bgImg})`"
  >
    <div class="content">
      <p>{{ text }}</p>
      <img :src="imgSrc" class="img" />
    </div>
  </div>
</template>

<script>
const COMPONENTS_NAME = 'banner'

export default {
  name: COMPONENTS_NAME,
  props: {
    text: {
      type: String,
      default: '产品服务'
    },
    imgSrc: {
      type: String,
      default: require('@/assets/image/details_text.png')
    },
    bgImg: {
      type: String,
      default: ''
    }
  },
  computed: {
    isPC() {
      return this.$store.state.isPc
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper {
  width 100%
  height pcFn(360)
  background-size 100% 100%
  background-repeat no-repeat

  .content {
    height pcFn(360)
    display flex
    flex-direction column
    justify-content center
    align-items center
    font-size pcFn(60)
    color #fff

    .img {
      width pcFn(320)
      height pcFn(54)
      margin-top pcFn(6)
    }
  }
}
.m-wrapper {
  width 100%
  height px2rem(360)
  background-size cover
  background-repeat no-repeat
  background-position center

  .content {
    height px2rem(360)
    display flex
    flex-direction column
    justify-content center
    align-items center
    font-size px2rem(60)
    color #fff

    .img {
      width px2rem(320)
      height px2rem(54)
      margin-top px2rem(6)
    }
  }
}
</style>
