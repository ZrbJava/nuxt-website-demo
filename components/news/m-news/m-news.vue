<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <div class="news">
      <div v-for="(item, index) in data" :key="index" class="card">
        <mq-card :source="item" :index="index" @getIndex="getIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import MqCard from '../card/card'
import NewsMixin from '@/common/mixin/news-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'm-news'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner,
    MqCard
  },
  mixins: [NewsMixin]
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
.news {
  padding px2rem(30)

  .card {
    width 100%
    height px2rem(230)
    margin-bottom px2rem(30)

    &:last-of-type {
      margin-bottom 0
    }
  }
}
</style>
