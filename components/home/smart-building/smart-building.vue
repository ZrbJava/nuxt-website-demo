<script>
import PSmartBuilding from './pc-smart-building/pc-smart-building'
import MSmartBuilding from './m-smart-building/m-smart-building'

const COMPONENTS_NAME = 'smart-building'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PSmartBuilding.name]: PSmartBuilding,
    [MSmartBuilding.name]: MSmartBuilding
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-smart-building')
    }
    return createElement('m-smart-building')
  }
}
</script>
