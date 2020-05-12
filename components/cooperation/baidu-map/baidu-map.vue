<template>
  <div>
    <baidu-map
      :class="[isPc ? 'wrapper' : 'm-wrapper']"
      :ak="headquarters.ak"
      :center="{
        lng: headquarters.position.longitude,
        lat: headquarters.position.latitude
      }"
      :scroll-wheel-zoom="true"
      :zoom="15"
    >
      <bm-marker
        :position="{
          lng: headquarters.position.longitude,
          lat: headquarters.position.latitude
        }"
      >
        <bm-label
          :content="headquarters.title"
          :label-style="{
            color: '#0c5c9d',
            fontSize: '16px',
            padding: '4px 12px',
            border: 'none',
            background: 'transparent'
          }"
          :offset="{ width: -40, height: -25 }"
        />
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import { BaiduMap, BmMarker, BmLabel } from 'vue-baidu-map'
import CooperationMixin from '@/common/mixin/cooperation-mixin'

const COMPONENTS_NAME = 'mq-map'

export default {
  name: COMPONENTS_NAME,
  components: {
    BaiduMap,
    BmMarker,
    BmLabel
  },
  mixins: [CooperationMixin],
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  }
}
</script>

<style scoped lang="stylus">
 .wrapper {
  width 100%
  height pcFn(480)
  padding pcFn(40) 0 pcFn(60) 0
}
.m-wrapper {
  width 100%
  height px2rem(480)
  margin-top px2rem(50)
}
</style>
