<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <ul class="top-tab border-bottom-1px">
      <a
        v-for="(item, index) in tab"
        :key="index"
        class="li-tab"
        :class="current === index ? 'active' : ''"
        :href="`#${point[index]}`"
        @click="toggleTab(index)"
      >
        {{ item }}
        <div v-if="current === index" class="active-line"></div>
      </a>
    </ul>
    <!-- 爱物管简介 -->
    <section id="management" class="container management">
      <p class="en">{{ about.en }}</p>
      <p class="title">{{ about.title }}</p>
      <p v-for="(item, index) in about.info" :key="index" class="info">
        {{ item }}
      </p>
    </section>
    <!-- 发展历程 -->
    <section id="progress" class="progress">
      <img :src="progress.imgSrc" class="img" />
      <div class="container list">
        <div v-for="(item, index) in progress.list" :key="index" class="item">
          <div class="date border-bottom-1px">{{ item.date }}</div>
          <div v-for="(val, i) in item.tags" :key="i" class="tags">
            <p class="val">{{ val }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 发起团队 -->
    <section id="team" class="container team">
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
    <section id="honor">
      <div class="container honor">
        <p class="en">{{ honor.en }}</p>
        <p class="title">{{ honor.title }}</p>
        <div class="honor-bg" :style="`background-image: url(${honor.imgBg})`">
          <div class="left">
            <p class="title-h">{{ honor.patent.title }}</p>
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
          <img :src="honor.imgLeft" class="img" />
          <div class="right">
            <p class="title-h">{{ honor.prize.title }}</p>
            <p
              v-for="(item, index) in honor.prize.list"
              :key="index"
              class="info"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="natural"
        :style="`background-image: url(${honor.natural.natBg})`"
      >
        <div class="container text">
          <p class="title-h">{{ honor.natural.title }}</p>
          <p
            v-for="(item, index) in honor.natural.list"
            :key="index"
            class="info"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutMixin from '@/common/mixin/about-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'pc-about'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner
  },
  mixins: [AboutMixin],
  data() {
    return {
      current: 0,
      point: ['management', 'progress', 'team', 'honor']
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (window) {
        window.addEventListener('scroll', this.handleScroll)
        this.getlocal()
        sessionStorage.setItem('id', '')
      }
    })
  },
  methods: {
    getlocal() {
      const id = sessionStorage.getItem('id')
      const doc = document.getElementById(id)
      if (id) {
        doc.scrollIntoView()
      }
    },
    toggleTab(index) {
      this.current = index
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper {
  width 100%
  height 100%
  position relative

  .en {
    font-size pcFn(24)
    color #eef1f3
    margin-bottom pcFn(4)
  }

  .title {
    font-size pcFn(36)
    margin-bottom pcFn(30)
  }

  .title-h {
    font-size pcFn(28)
    margin-bottom pcFn(20)
  }

  .info {
    font-size pcFn(18)
    font-weight 300
    line-height pcFn(30)
    margin-bottom pcFn(10)
    color $color-main-02
  }
}
.top-tab {
  width 100%
  height pcFn(54)
  background-color $color-even-bg
  display flex
  justify-content center
  align-items center

  .li-tab {
    font-size pcFn(16)
    margin 0 pcFn(47)
    width pcFn(90)
    cursor pointer
    position relative
    text-align center

    &:hover {
      color $color-nav-active
    }

    .active-line {
      width pcFn(88)
      height pcFn(4)
      background-color $color-nav-active
      position absolute
      left 0
      bottom pcFn(-17)
    }
  }

  .active {
    color $color-nav-active
  }
}
.management {
  padding pcFn(90) pcFn(150) 0 pcFn(150)
}
.progress {
  padding-top pcFn(90)

  .img {
    width 100%
    height pcFn(380)
  }

  .list {
    margin-top pcFn(40)
    display flex

    .item {
      flex 1
      margin-right pcFn(50)

      .date {
        font-size pcFn(32)
        padding-bottom pcFn(10)
      }

      .tags {
        margin-top pcFn(18)

        .val {
          font-size pcFn(18)
          font-weight 300
          color $color-main-02
          line-height pcFn(22)
          margin-bottom pcFn(10)
        }
      }
    }
  }
}
.team {
  padding-top pcFn(90)

  .wrap {
    margin-top pcFn(60)
    display flex

    .team-list {
      width pcFn(300)
      height pcFn(600)
      background-color $color-even-bg

      &:nth-child(2n) {
        background-color #e8eef2
        margin-top pcFn(40)
      }

      .img {
        width pcFn(300)
        height  pcFn(300)
      }

      .item {
        padding pcFn(20)

        .one {
          margin-bottom pcFn(16)

          .name {
            font-size pcFn(28)
            margin-right pcFn(14)
          }

          .position {
            font-size pcFn(18)
            font-weight 300
          }
        }

        .wrap-info {
          font-size pcFn(16)
          line-height pcFn(28)
          color $color-main-02
        }

        .info {
          font-weight 300
        }

        .introduction {
          font-weight 300
          margin-top pcFn(10)
        }
      }
    }
  }
}
.honor {
  padding-top pcFn(90)

  .honor-bg {
    width pcFn(1200)
    height pcFn(560)
    background-size 100% 100%
    background-repeat no-repeat
    margin-top pcFn(-10)
    display flex
    justify-content space-between

    .left {
      margin pcFn(190) 0 0 pcFn(80)
    }
    .img {
      width pcFn(500)
      height pcFn(400)
      margin pcFn(80) pcFn(90) 0 0
    }
  }

  .prize-wrap {
    position relative

    .img {
      width pcFn(930)
      height pcFn(320)
      margin-top pcFn(150)
    }

    .right {
      position absolute
      top pcFn(20)
      right pcFn(40)
    }
  }
}
.natural {
  width 100%
  height pcFn(550)
  background-size 100% 100%
  background-repeat no-repeat
  background-color #07314c
  margin-top pcFn(30)

  .text {
    padding pcFn(50) pcFn(80)
    color #fff
  }
}
</style>
