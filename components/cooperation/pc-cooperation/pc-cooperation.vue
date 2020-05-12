<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <div class="container">
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
      <mq-map />
    </div>
  </div>
</template>

<script>
import MqMail from '../mail/mail'
import MqMap from '../baidu-map/baidu-map'
import CooperationMixin from '@/common/mixin/cooperation-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'pc-cooperation'

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
}
.title {
  position relative
  padding pcFn(50) 0
  font-size pcFn(28)

  &:after {
    content ''
    width pcFn(40)
    height pcFn(3)
    background-color #019fe8
    position absolute
    top pcFn(100)
    left pcFn(0)
  }
}
.contact {
  display flex
  height pcFn(240)
  margin-top pcFn(16)
}
.headquarters {
  font-size pcFn(20)
  margin-top pcFn(10)

  .addr {
    font-weight 300
    line-height pcFn(34)
  }
}
</style>
