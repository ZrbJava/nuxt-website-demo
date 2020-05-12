<script>
import PCHomeDetails from './pc-home-details/pc-home-details'
import MHomeDetails from './m-home-details/m-home-details'

const COMPONENTS_NAME = 'home-details'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PCHomeDetails.name]: PCHomeDetails,
    [MHomeDetails.name]: MHomeDetails
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-home-details')
    }
    return createElement('m-home-details')
  }
}
</script>
