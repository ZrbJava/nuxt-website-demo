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
      <div class="img-center">
        <img :src="detailsData.imgSrc" class="img" />
      </div>
      <p v-for="(item, index) in detailsData.info" :key="index" class="info">
        {{ item }}
      </p>
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
import ProjectMixin from '@/common/mixin/project-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'm-project-details'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner
  },
  mixins: [ProjectMixin]
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
    margin-bottom px2rem(20)
  }

  .time {
    color $color-main-04

    span {
      margin-right px2rem(20)
      font-weight 300
    }
  }

  .img-center {
    padding px2rem(30) 0

    .img {
      width 100%
    }
  }

  .info {
    font-weight 300
    text-indent 2em
    margin-bottom px2rem(20)
    line-height 1.8
  }

  .footer-p {
    padding-top px2rem(40)

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
