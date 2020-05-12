<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <div class="container details">
      <p class="title text-center">{{ detailsData.title }}</p>
      <div class="time text-center">
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
        <div v-if="detailsData.up" class="up" @click="upFn">
          <p class="left">上一篇</p>
          <p>{{ detailsData.up }}</p>
        </div>
        <div v-if="detailsData.down" class="down" @click="nextFn">
          <p class="right">下一篇</p>
          <p>{{ detailsData.down }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectMixin from '@/common/mixin/project-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'pc-project-details'

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
}
.details {
  font-size pcFn(20)
  padding pcFn(100) 0 pcFn(50) 0

  .title {
    font-size pcFn(42)
    margin-bottom pcFn(26)
  }

  .time {
    color $color-main-04

    span {
      margin-right pcFn(30)
      font-weight 300
    }
  }

  .img-center {
    text-align center
    margin pcFn(50)

    .img {
      width 80%
    }
  }

  .info {
    font-weight 300
    text-indent 2em
    margin-bottom pcFn(30)
    line-height 1.8
  }

  .footer-p {
    padding-top pcFn(40)

    div {
      cursor pointer
    }

    p {
      font-weight 300
    }

    .up {
      float left

      .left {
        margin-bottom pcFn(12)

        &:before {
          content '<<';
          display inline-block
          margin-right pcFn(6)
        }
      }
    }

    .down {
      float right
      text-align right

      .right {
        margin-bottom pcFn(12)

        &:after {
          content '>>';
          display inline-block
          margin-left pcFn(6)

        }
      }
    }

  }
}
</style>
