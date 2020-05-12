<script>
import { mapState } from 'vuex'
import PCHome from '@/components/home/pc-home/pc-home'
import MHome from '@/components/home/m-home/m-home'

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
      return createElement('pc-home')
    }
    return createElement('m-home')
  }
}
</script>
