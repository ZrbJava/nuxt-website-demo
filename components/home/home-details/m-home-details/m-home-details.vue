<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <!-- 咨询顾问平台 -->
    <section class="platform">
      <p class="title">{{ platform.title }}</p>
      <p
        v-for="(item, index) in platform.info"
        :key="index"
        class="content-info"
      >
        {{ item }}
      </p>
      <div class="data-wraper">
        <div
          v-for="(item, index) in platform.imgText"
          :key="index"
          class="item"
        >
          <img :src="item.icon" class="icon" />
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </section>
    <!-- 服务内容 -->
    <section class="service" :style="`background-image: url(${content.bgImg})`">
      <p class="title">{{ content.title }}</p>
      <div class="tag">
        <div v-for="(item, index) in content.tags" :key="index" class="item">
          {{ item }}
        </div>
      </div>
    </section>
    <!-- 驻场服务 -->
    <section class="wrap-resident">
      <div class="seize"></div>
      <div class="wrap-img"><img :src="resident.imgSrc" class="img" /></div>
      <div class="resident">
        <p class="title">{{ resident.title }}</p>
        <p class="content-info">{{ resident.info }}</p>
      </div>
    </section>
    <!-- AI楼宇数据指挥中心 -->
    <section class="even clear-fix">
      <div class="command">
        <div class="seize"></div>
        <div class="wrap-img">
          <img :src="command.imgSrc" class="img" />
        </div>
        <div class="left">
          <p class="title">{{ command.title }}</p>
          <p
            v-for="(item, index) in command.info"
            :key="index"
            class="content-info"
          >
            {{ item }}
          </p>
          <div class="tag">
            <div
              v-for="(item, index) in command.tags"
              :key="index"
              class="item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HmoeDetailsMixin from '@/common/mixin/home-details-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'm-home-details'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner
  },
  mixins: [HmoeDetailsMixin]
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
.title {
  font-size px2rem(36)
  margin-bottom  px2rem(30)
}
.content-info {
  color $color-main-02
  line-height px2rem(50)
  font-weight 300
}
.tag {
  color $color-main-02

  .item {
    position relative
    padding-left px2rem(20)
    line-height px2rem(50)
    font-weight 300
    color $color-main

    &:before {
      content ''
      position absolute
      display inline-block
      width px2rem(8)
      height px2rem(8)
      background #c4cfd5
      top: px2rem(20)
      left 0
    }
  }
}
.platform {
  padding px2rem(50) px2rem(60) 0 px2rem(60)

  .title {
    font-size px2rem(48)
  }

  .data-wraper {
    display flex
    margin px2rem(50) 0 px2rem(70) 0

    .item {
      flex 1
      text-align center

      .icon {
        width px2rem(100)
        height px2rem(100)
        margin-bottom px2rem(14)
      }

      .name {
        font-size px2rem(24)
        color $color-main-02
        font-weight 300
      }
    }
  }
}
.service {
  width 100%
  height px2rem(510)
  background-size 100% 50%
  background-repeat no-repeat
  background-position bottom
  background-color $color-even-bg
  padding px2rem(44) px2rem(30)
}

.wrap-resident {

  .seize {
    float left
    height px2rem(400)
    width px2rem(1)
  }

  .wrap-img {
    float left
    clear left
    position relative
    width px2rem(440)
    height px2rem(406)

    .img {
      position absolute
      width px2rem(528)
      height px2rem(406)
      top px2rem(0)
      left px2rem(-90)
    }
  }

  .resident {
    margin-top px2rem(20)
    padding px2rem(30)
  }

}

.command {
  padding px2rem(46) 0 px2rem(70) 0

  .left {
    padding 0 px2rem(30)
  }

  .seize {
    float right
    height px2rem(446)
    width px2rem(1)
  }

  .wrap-img {
    float right
    clear right
    position relative
    width px2rem(433)
    height px2rem(426)

    .img {
      position absolute
      width px2rem(733)
      height px2rem(426)
      top px2rem(0)
      right px2rem(-300)
    }
  }
}
.even {
  background $color-even-bg
  margin-top px2rem(60)
}
</style>
