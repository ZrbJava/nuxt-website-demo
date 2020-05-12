<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <div class="project">
      <div v-for="(item, index) in data" :key="index" class="case">
        <mq-case :source="item" :index="index" @getIndex="getIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import MqCase from '../case/case'
import ProjectMixin from '@/common/mixin/project-mixin'
import MqBanner from '@/components/Banner/banner'

const COMPONENTS_NAME = 'm-project'

export default {
  name: COMPONENTS_NAME,
  components: {
    MqBanner,
    MqCase
  },
  mixins: [ProjectMixin]
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
.project {
  padding px2rem(30) px2rem(30) 0 px2rem(30)

  .case {
    width 100%
    height px2rem(668)
    margin-bottom px2rem(30)
    overflow hidden
    box-shadow: px2rem(1) px2rem(1) px2rem(5) px2rem(1) rgba(0,0,0,.1)
  }
}
</style>
