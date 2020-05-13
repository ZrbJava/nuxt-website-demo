<template>
  <div v-if="isPc !== ''" class="layout">
    <Header />
    <!-- <view> -->
    <nuxt />
    <!-- </view> -->
    <Footer />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import RecalcMixin from '../common/mixin/recalc-mixin'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    Header,
    Footer
  },
  mixins: [RecalcMixin],
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  methods: {
    ...mapMutations(['SET_ISPC'])
  }
}
</script>
<style lang="stylus">
@import "../../common/style/variable"
.layout {
  padding-top: pcFn(88);
}
</style>
