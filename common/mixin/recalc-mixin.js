import { mapMutations } from 'vuex'

export default {
  created() {
    if (process.client) {
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
      window.addEventListener('load', resetRecalc.bind(this), false)
    }
  },
  methods: {
    ...mapMutations(['SET_ISPC'])
  }
}
