<template>
  <div class="wrapper">
    <mq-banner
      :text="banner.text"
      :bg-img="banner.bgImg"
      :img-src="banner.imgSrc"
    />
    <div class="container-project project">
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

const COMPONENTS_NAME = 'pc-project'

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
.container-project {
  width pcFn(1406px)
  margin 0 auto
}
.wrapper {
  width 100%
  height 100%
  position relative
}
.project {
  display flex
  flex-wrap wrap
  padding pcFn(100) 0

  .case {
    width pcFn(442)
    height pcFn(380)
    margin 0 pcFn(40) pcFn(40) 0
    overflow hidden
    box-shadow: pcFn(1) pcFn(1) pcFn(5) pcFn(1) rgba(0,0,0,.1)

    &:nth-child(3n) {
      margin-right 0
    }
  }
}
</style>
