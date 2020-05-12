<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <!-- 智慧物业 -->
    <section>
      <div class="container">
        <div class="smart">
          <p class="title">{{ smart.title }}</p>
          <p class="title-en">{{ smart.en }}</p>
          <p
            v-for="(item, index) in smart.info"
            :key="index"
            class="content-info"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </section>
    <!--智慧物业服务平台 -->
    <section
      class="base-bg"
      :style="`background-image: url(${property.bgImg})`"
    >
      <div class="container">
        <div class="property">
          <div class="left">
            <p class="title">{{ property.title }}</p>
            <p class="content-info">{{ property.info }}</p>
            <div class="tag">
              <div
                v-for="(item, index) in property.tags"
                :key="index"
                class="item"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <img :src="property.imgSrc" class="img" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmartPropertyMixin from '@/common/mixin/smart-property-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'pc-smart-property'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner
  },
  mixins: [SmartPropertyMixin]
}
</script>

<style scoped lang="stylus">
.wrapper {
  width 100%
  height 100%
  position relative
}
.title {
  font-size pcFn(28)
}
.content-info {
  font-size pcFn(18)
  color $color-main-02
  line-height pcFn(32)
  font-weight 300
  margin pcFn(30) 0
}
.smart {
  padding pcFn(40) pcFn(150) 0 pcFn(150)

  .title {
    font-size pcFn(48)
  }

  .title-en {
    font-size pcFn(28)
    margin pcFn(8) 0 pcFn(40) 0
  }

  .content-info {
    margin 0
  }
}
.base-bg {
  width pcFn(1920)
  height pcFn(630)
  background-size 100% 100%
  background-repeat no-repeat
  color #fff
  margin-top pcFn(90)

  &.base-height {
    height pcFn(600)
  }
}
.item {
  font-size pcFn(18)
  position relative
  padding-left pcFn(20)
  line-height pcFn(34)
  font-weight 300

  &:before {
    content ''
    position absolute
    display inline-block
    width pcFn(6)
    height pcFn(6)
    background #c4cfd5
    top: pcFn(16)
    left 0
  }
}
.base {
  display flex
  justify-content space-between
  padding pcFn(120) 0 0 pcFn(30)

  .left {
    width pcFn(490)

    .content-info {
      color #fff
    }
  }

  .img {
    width pcFn(528)
    height pcFn(406)
  }
}
.service {
  display flex
  margin-top pcFn(70)
  justify-content space-between

  .img {
    width pcFn(551)
    height pcFn(403)
  }

  .admin-img {
    width pcFn(592)
    height pcFn(420)
  }

  .right {
    width pcFn(490)
  }
}
.property {
  display flex
  justify-content space-between
  padding pcFn(70) 0 0 pcFn(30)

  .left {
    width pcFn(490)

    .content-info {
      color #fff
    }
  }

  .img {
    width pcFn(634)
    height pcFn(362)
    margin-top pcFn(90)
  }
}
.robot {
  display flex
  justify-content space-between
  padding pcFn(130) 0 0 pcFn(30)

  .left {
    width pcFn(490)
    color $color-main
  }

  .img {
    width pcFn(526)
    height pcFn(405)
  }
}
</style>
