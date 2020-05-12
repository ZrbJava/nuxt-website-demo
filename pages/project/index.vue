<script>
import PCProject from '@/components/project/pc-project/pc-project'
import MProject from '@/components/project/m-project/m-project'

const COMPONENTS_NAME = 'project'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PCProject.name]: PCProject,
    [MProject.name]: MProject
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-project')
    }
    return createElement('m-project')
  }
}
</script>
