<script>
import PCCooperation from '@/components/cooperation/pc-cooperation/pc-cooperation'
import MCooperation from '@/components/cooperation/m-cooperation/m-cooperation'

const COMPONENTS_NAME = 'cooperation'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PCCooperation.name]: PCCooperation,
    [MCooperation.name]: MCooperation
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-cooperation')
    }
    return createElement('m-cooperation')
  }
}
</script>
