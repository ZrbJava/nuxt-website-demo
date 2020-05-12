<script>
import PCNews from '@/components/news/pc-news/pc-news'
import MNews from '@/components/news/m-news/m-news'

const COMPONENTS_NAME = 'news'

export default {
  name: COMPONENTS_NAME,
  components: {
    [PCNews.name]: PCNews,
    [MNews.name]: MNews
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  render(createElement) {
    if (this.isPc) {
      return createElement('pc-news')
    }
    return createElement('m-news')
  }
}
</script>
