<script>
import { mapState } from 'vuex'
import PcFooter from './pc-footer'
import MFooter from './m-footer'
const COMPONENTS_NAME = 'qm-footer'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PcFooter.name]: PcFooter,
    [MFooter.name]: MFooter
  },
  computed: {
    ...mapState(['isPc'])
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-footer')
    }
    return createElement('m-footer')
  }
}
</script>
