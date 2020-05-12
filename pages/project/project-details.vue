<script>
import PCProjectDetails from '@/components/project/project-details/pc-project-details/pc-project-details'
import MProjectDetails from '@/components/project/project-details/m-project-details/m-project-details'

const COMPONENTS_NAME = 'home-details'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PCProjectDetails.name]: PCProjectDetails,
    [MProjectDetails.name]: MProjectDetails
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-project-details')
    }
    return createElement('m-project-details')
  }
}
</script>
