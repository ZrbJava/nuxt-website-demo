<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <!-- 智慧楼宇 -->
    <section class="smart">
      <p class="title">{{ smart.title }}</p>
      <p v-for="(item, index) in smart.info" :key="index" class="content-info">
        {{ item }}
      </p>
    </section>
    <!--智慧物业服务平台 -->
    <section
      class="base-bg property f-pr"
      :style="`background-image: url(${property.bgImg})`"
    >
      <p class="title">{{ property.title }}</p>
      <p class="content-info">{{ property.info }}</p>
      <div class="tag">
        <div v-for="(item, index) in property.tags" :key="index" class="item">
          {{ item }}
        </div>
      </div>
      <img :src="property.imgSrc" class="img f-pa" />
    </section>
  </div>
</template>

<script>
import SmartPropertyMixin from '@/common/mixin/smart-property-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'm-smart-property'

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
  font-size px2rem(28)
  overflow-x hidden
}
.title {
  font-size px2rem(36)
}
.content-info {
  color $color-main-02
  line-height px2rem(50)
  font-weight 300
  margin px2rem(30) 0
}
.smart {
  padding px2rem(50) px2rem(60)

  .title {
    font-size px2rem(48)
    margin-bottom px2rem(30)
  }

  .content-info {
    margin 0
  }
}
.base-bg {
  width 100%
  height px2rem(600)
  background-size cover
  background-repeat no-repeat
  background-position center
  color #fff
}
.item {
  position relative
  padding-left px2rem(20)
  line-height px2rem(50)
  font-weight 300

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
.base {
  padding px2rem(50) px2rem(30)

  .content-info {
    color #fff
  }

  .img {
    width px2rem(528)
    height px2rem(406)
    right px2rem(-76)
    bottom px2rem(-136)
  }
}
.service {
  padding px2rem(180) px2rem(30) px2rem(50) px2rem(30)

  .img {
    width px2rem(551)
    height px2rem(403)
    margin 0 0 px2rem(30) px2rem(100)
  }

  .tag {
    display flex
    flex-wrap wrap

    .item {
      width 50%
    }
  }
}
.property {
  height px2rem(780)
  padding px2rem(50) px2rem(30)

  .content-info {
    color #fff
  }

  .img {
    width px2rem(634)
    height px2rem(362)
    right px2rem(-200)
    bottom px2rem(80)
  }
}
.admin {
  padding px2rem(50) px2rem(30)

  .admin-wrap {
    height px2rem(420)

    .tag {
      top px2rem(20)
      right px2rem(20)
    }

    .img {
      width px2rem(592)
      height px2rem(420)
      left px2rem(-130)
      top 0
    }
  }
}
.robot {
  padding px2rem(50) px2rem(30)
  color $color-main
  height px2rem(800)
  margin-bottom px2rem(90)

  .img {
    width px2rem(526)
    height px2rem(405)
    right px2rem(-110)
    bottom px2rem(-60)
  }
}
</style>
