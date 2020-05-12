<script>
import PSmartProperty from './pc-smart-property/pc-smart-property'
import MSmartProperty from './m-smart-property/m-smart-property'

const COMPONENTS_NAME = 'smart-property'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PSmartProperty.name]: PSmartProperty,
    [MSmartProperty.name]: MSmartProperty
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-smart-property')
    }
    return createElement('m-smart-property')
  }
}
</script>
