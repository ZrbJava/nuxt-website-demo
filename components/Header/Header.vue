<script>
import { mapState } from 'vuex'
import PcHeader from './pc-header'
import MHeader from './m-header'
const COMPONENTS_NAME = 'qm-header'
export default {
  name: COMPONENTS_NAME,
  components: {
    [PcHeader.name]: PcHeader,
    [MHeader.name]: MHeader
  },
  computed: {
    ...mapState(['isPc'])
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-header')
    }
    return createElement('m-header')
  }
}
</script>
