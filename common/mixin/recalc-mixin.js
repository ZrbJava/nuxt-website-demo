import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.$nextTick(() => {
      const resizeEvt =
        'orientationchange' in window ? 'orientationchange' : 'resize'
      const resetRecalc = () => {
        const __clientWidth =
          document.documentElement.clientWidth || document.body.clientWidth
        if (__clientWidth < 1024) {
          this.$store.commit('SET_ISPC', false)
          document.documentElement.style.fontSize = `${parseInt(
            __clientWidth / 10,
            10
          )}px`
        } else {
          this.$store.commit('SET_ISPC', true)
          document.documentElement.style.fontSize = ''
        }
      }
      window.addEventListener(resizeEvt, resetRecalc.bind(this), false)
      document.addEventListener(
        'DOMContentLoaded',
        resetRecalc.bind(this),
        false
      )
    })
  },
  methods: {
    ...mapMutations(['SET_ISPC'])
  }
}
