<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <div class="wrap">
      <p class="title">{{ contact.title }}</p>
      <div class="contact">
        <mq-mail
          v-for="(item, index) in contact.mail"
          :key="index"
          :source="item"
        />
      </div>
      <p class="title">{{ headquarters.title }}</p>
      <div class="headquarters">
        <p
          v-for="(item, index) in headquarters.addr"
          :key="`addr${index}`"
          class="addr"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <mq-map />
  </div>
</template>

<script>
import MqMail from '../mail/mail'
import MqMap from '../baidu-map/baidu-map'
import CooperationMixin from '@/common/mixin/cooperation-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'm-cooperation'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner,
    MqMail,
    MqMap
  },
  mixins: [CooperationMixin]
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
.wrap {
  padding 0 px2rem(30)

  .title {
    position relative
    padding px2rem(50) 0
    font-size px2rem(36)

  &:after {
    content ''
    width px2rem(40)
    height px2rem(3)
    background-color #019fe8
    position absolute
    top px2rem(100)
    left px2rem(0)
  }
}
  .contact {
    display flex
    flex-wrap wrap
    margin-top px2rem(16) px2rem(-15)
  }
  .headquarters {
    margin-top px2rem(10)

    .addr {
      font-weight 300
      line-height px2rem(50)
    }
  }
}
</style>
