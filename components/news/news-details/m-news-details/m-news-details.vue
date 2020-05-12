/* eslint-disable vue/no-v-html */
<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <div class="details">
      <p class="title">{{ detailsData.title }}</p>
      <div class="time">
        <span>{{ detailsData.time }}</span>
        <span>来源：{{ detailsData.source }}</span>
      </div>
      <div class="content" v-html="detailsData.html"></div>
      <div class="footer-p clear-fix">
        <div
          v-if="detailsData.up"
          class="up"
          :class="[detailsData.down ? '' : 'w100']"
          @click="upFn"
        >
          <p class="left">上一篇</p>
          <p class="text">{{ detailsData.up }}</p>
        </div>
        <div
          v-if="detailsData.down"
          class="down"
          :class="[detailsData.up ? '' : 'w100']"
          @click="nextFn"
        >
          <p class="right">下一篇</p>
          <p class="text">{{ detailsData.down }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsMixin from '@/common/mixin/news-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'm-news-details'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner
  },
  mixins: [NewsMixin]
}
</script>

<style scoped lang="stylus">
.wrapper {
  width 100%
  height 100%
  position relative
  font-size px2rem(28)
  overflow-x hidden
}
.details {
  padding px2rem(50) px2rem(30)

  .title {
    font-size px2rem(42)
    line-height px2rem(50)
    margin-bottom px2rem(26)
  }

  .time {
    color $color-main-04
    margin-bottom px2rem(30)

    span {
      margin-right px2rem(20)
      font-weight 300
    }
  }

  .img-center {
    margin px2rem(30) 0

    .img {
      width 100%
    }
  }

  .info {
    font-weight 300
    text-indent 2em
    margin-bottom px2rem(30)
    line-height 1.8
  }

  .content {
    font-weight 300
    line-height 1.8

    /deep/ p {
      margin-bottom: px2rem(20)
      text-indent px2rem(45)
    }
    /deep/ .img {
      max-width 100%
      margin px2rem(20) auto
      display block
    }
    /deep/ h3 {
      font-weight bold
      font-size px2rem(24)
      margin: px2rem(20) auto
    }

    &.first {
      font-weight 400
    }
  }

  .footer-p {
    padding-top px2rem(40)

    div {
      cursor pointer
    }

    p {
      font-weight 300
    }

    .text {
      line-height 1.5
    }

    .up {
      width 45%
      float left

      &.w100 {
        width 100%
      }

      .left {
        margin-bottom px2rem(12)

        &:before {
          content '<<';
          display inline-block
          margin-right px2rem(6)
        }
      }
    }

    .down {
      width 45%
      float right
      text-align right

      &.w100 {
        width 100%
      }

      .right {
        margin-bottom px2rem(12)

        &:after {
          content '>>';
          display inline-block
          margin-left px2rem(6)

        }
      }
    }

  }
}
</style>
