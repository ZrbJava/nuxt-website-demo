<template>
  <div class="m-wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <!-- 爱物管简介 -->
    <section class="management">
      <p class="en">{{ about.en }}</p>
      <p class="title">{{ about.title }}</p>
      <p v-for="(item, index) in about.info" :key="index" class="info">
        {{ item }}
      </p>
    </section>
    <!-- 发展历程 -->
    <section class="progress">
      <img :src="progress.imgSrc2" class="img" />
      <div class="list">
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="(item, index) in progress.list"
            :key="index"
            class="item"
          >
            <div class="date border-bottom-1px">{{ item.date }}</div>
            <div v-for="(val, i) in item.tags" :key="i" class="tags">
              <p class="info">{{ val }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- 发起团队 -->
    <section class="team">
      <p class="en">{{ team.en }}</p>
      <p class="title">{{ team.title }}</p>
      <div class="wrap">
        <div v-for="(item, index) in team.list" :key="index" class="team-list">
          <img :src="item.imgSrc" class="img" />
          <div class="item">
            <p class="one">
              <span class="name">{{ item.name }}</span>
              <span class="position">{{ item.position }}</span>
            </p>
            <div class="wrap-info">
              <p v-for="(val, i) in item.info" :key="i" class="info">
                {{ val }}
              </p>
              <p class="introduction">{{ item.introduction }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 企业荣誉 -->
    <section class="honor">
      <div class="honor-p">
        <p class="en">{{ honor.en }}</p>
        <p class="title">{{ honor.title }}</p>
      </div>
      <div class="honor-bg" :style="`background-image: url(${honor.imgBg2})`">
        <div class="left">
          <p class="title">{{ honor.patent.title }}</p>
          <p
            v-for="(item, index) in honor.patent.list"
            :key="index"
            class="info"
          >
            {{ item }}
          </p>
        </div>
        <img :src="honor.imgRight" class="img" />
      </div>
      <div class="prize-wrap">
        <div class="right">
          <p class="title">{{ honor.prize.title }}</p>
          <p
            v-for="(item, index) in honor.prize.list"
            :key="index"
            class="info"
          >
            {{ item }}
          </p>
        </div>
        <img :src="honor.imgLeft2" class="img" />
      </div>
      <div class="natural">
        <div class="text">
          <p class="title">{{ honor.natural.title }}</p>
          <p
            v-for="(item, index) in honor.natural.list"
            :key="index"
            class="info"
          >
            {{ item }}
          </p>
        </div>
        <img :src="honor.natimg" class="img" />
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AboutMixin from '@/common/mixin/about-mixin'
import MqBanner from '@/components/Banner/banner'
import 'swiper/css/swiper.css'

const COMPONENTS_NAME = 'm-about'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner,
    Swiper,
    SwiperSlide
  },
  mixins: [AboutMixin],
  data() {
    return {
      swiperOptions: {
        autoplay: true, // 自动轮播
        speed: 1000 // 轮播速度
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.m-wrapper {
  width 100%
  height 100%
  position relative
  font-size px2rem(28)
  overflow-x hidden
}

.en {
  font-size px2rem(24)
  color #eef1f3
  margin-bottom px2rem(4)
}

.title {
  font-size px2rem(36)
  margin-bottom px2rem(30)
}

.info {
  font-weight 300
  line-height px2rem(50)
  color $color-main-02
}
.management {
  padding px2rem(50) px2rem(30)
  .info {
    margin-bottom px2rem(10)
  }
}
.progress {

  .img {
    width 100%
    height px2rem(380)
  }

  .list {
    width 100%
    height px2rem(350)
    padding  px2rem(50) px2rem(30) 0
    box-sizing border-box

    .date {
      font-size px2rem(42)
      padding-bottom px2rem(20)
      margin-bottom px2rem(20)
    }
  }
}
$width = px2rem(50)
.team {
  padding px2rem(50)

  .wrap {
    display flex
    flex-wrap wrap
    margin-top px2rem(50)

    .team-list {
      width calc(50% - 15px)
      margin-bottom px2rem(50)
      background-color $color-even-bg

      &:nth-child(2n) {
        background-color #e8eef2
        margin px2rem(50) 0 0 px2rem(50)
      }

      .img {
        width 100%
      }

      .item {
        padding px2rem(20) px2rem(15) px2rem(20) px2rem(15)

        .one {
          margin-bottom px2rem(16)

          .name {
            font-size px2rem(28)
            margin-right px2rem(14)
          }

          .position {
            font-size px2rem(18)
            font-weight 300
          }
        }

        .wrap-info {
          font-size px2rem(16)
          line-height px2rem(28)
          color $color-main-02
        }

        .info {
          font-size px2rem(28)
          line-height px2rem(38)
          font-weight 300
        }

        .introduction {
          font-weight 300
          margin-top px2rem(10)
          font-size px2rem(28)
          line-height px2rem(38)
        }
      }
    }
  }
}
.honor {
  padding-top px2rem(50)

  .honor-p {
    margin-left px2rem(30)
  }

  .honor-bg {
    width 100%
    height px2rem(900)
    background-size 100% 100%
    background-repeat no-repeat
    margin-top px2rem(-10)

    .left {
      padding px2rem(100) px2rem(80) 0 px2rem(80)
    }
    .img {
      width px2rem(500)
      height px2rem(400)
      margin px2rem(50) 0 0 px2rem(120)
    }
  }

  .prize-wrap {

    .right {
      padding px2rem(30) px2rem(80)
    }

    .img {
      width 100%
      height px2rem(500)
    }
  }
  .natural {
    background-color #07314c
    margin-top px2rem(50)
    padding-bottom px2rem(20)

    .text {
      padding px2rem(50) px2rem(80)
      color #fff
    }

    .img {
      width 100%
      height px2rem(440)
      display block
    }
  }
}
</style>
