<script>
import { mapState } from 'vuex'
import PCHome from '@/components/about/pc-about/pc-about'
import MHome from '@/components/about/m-about/m-about'

const COMPONENTS_NAME = 'home'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PCHome.name]: PCHome,
    [MHome.name]: MHome
  },
  computed: {
    ...mapState(['isPc'])
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-about')
    }
    return createElement('m-about')
  }
}
</script>
