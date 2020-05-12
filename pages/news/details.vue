<script>
import PCNewsDetails from '@/components/news/news-details/pc-news-details/pc-news-details'
import MNewsDetails from '@/components/news/news-details/m-news-details/m-news-details'

const COMPONENTS_NAME = 'news-details'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PCNewsDetails.name]: PCNewsDetails,
    [MNewsDetails.name]: MNewsDetails
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-news-details')
    }
    return createElement('m-news-details')
  }
}
</script>
