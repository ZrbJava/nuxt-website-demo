<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <!-- 咨询顾问平台 -->
    <section>
      <div class="container">
        <div class="platform">
          <p class="title">{{ platform.title }}</p>
          <p class="title-en">{{ platform.en }}</p>
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
        </div>
      </div>
    </section>
    <!-- 服务内容 -->
    <section>
      <div class="container">
        <div class="service" :style="`background-image: url(${content.bgImg})`">
          <p class="title">{{ content.title }}</p>
          <div class="tag">
            <div
              v-for="(item, index) in content.tags"
              :key="index"
              class="item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 驻场服务 -->
    <section>
      <div class="container">
        <div class="resident">
          <img :src="resident.imgSrc" class="img" />
          <div class="right">
            <p class="title">{{ resident.title }}</p>
            <p class="content-info">{{ resident.info }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- AI楼宇数据指挥中心 -->
    <section class="even">
      <div class="container">
        <div class="command">
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
          <div class="right">
            <img :src="command.imgSrc" class="img" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HmoeDetailsMixin from '@/common/mixin/home-details-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'pc-home-details'

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
  font-size pcFn(18)
}
.title {
  font-size pcFn(28)
  margin-bottom pcFn(30)
}
.content-info {
  color $color-main-02
  line-height pcFn(32)
  font-weight 300
}
.tag {
  margin-top pcFn(20)
  color $color-main-02

  .item {
    position relative
    padding-left pcFn(20)
    line-height pcFn(40)
    font-weight 300

    &:before {
      content ''
      position absolute
      display inline-block
      width pcFn(6)
      height pcFn(6)
      background #c4cfd5
      top: pcFn(15)
      left 0
    }
  }
}
.platform {
  padding pcFn(40) pcFn(150) 0 pcFn(150)

  .title {
    font-size pcFn(48)
  }

  .title-en {
    font-size pcFn(28)
    margin pcFn(-22) 0 pcFn(30) 0
  }

  .data-wraper {
    display flex
    margin pcFn(80) 0 pcFn(70) 0

    .item {
      flex 1
      display flex
      align-items center

      .icon {
        width pcFn(70)
        height pcFn(70)
        margin-right pcFn(20)
      }

      .name {
        font-size pcFn(24)
        color $color-main-02
        font-weight 300
      }
    }
  }
}
.service {
  width pcFn(1200)
  height pcFn(400)
  background-size 100% 100%
  background-repeat no-repeat
  background-color $color-even-bg
  padding pcFn(44) pcFn(30)

  .item {
    font-size pcFn(20)
  }
}
.resident {
  display flex
  margin-top pcFn(70)
  justify-content space-between

  .img {
    width pcFn(528)
    height pcFn(406)
  }

  .right {
    width pcFn(576)
  }
}
.command {
  display flex
  padding pcFn(46) 0 pcFn(70) 0
  justify-content space-between

  .left {
    width pcFn(450)

    .content-info {
      margin-bottom pcFn(10)
    }

    .item {
      color $color-main
    }
  }

  .right {
    position relative

    .img {
      width pcFn(733)
      height pcFn(426)
      position absolute
      right pcFn(-70)
      top pcFn(70)
    }
  }
}
.even {
  background $color-even-bg
  margin-top pcFn(60)
}
</style>
