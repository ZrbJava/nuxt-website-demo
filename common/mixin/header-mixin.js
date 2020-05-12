export default {
  data() {
    return {
      menu: [
        {
          icon: 'icon-icon_5',
          name: '产品服务',
          path: '/home',
          showChild: false,
          children: [
            {
              name: '咨询服务',
              path: '/home/details',
              icon: 'icon-icon_211',
              intro: '建立更低廉、更即时、更直观、更独特的楼宇模型'
            },
            {
              name: '智慧楼宇',
              path: '/home/smart-building',
              icon: 'icon-icon_22',
              intro: '为写字楼、园区等商业地产打造AI智慧楼宇服务系统'
            },
            {
              name: '智慧物业',
              path: '/home/smart-property',
              icon: 'icon-icon_23',
              intro: '实现利用率提升、服务品质提升以及有效的人力成本节省'
            }
          ]
        },
        { icon: 'icon-icon_1', name: '项目案例', path: '/project' },
        {
          icon: 'icon-icon_',
          name: '关于爱物管',
          path: '/about',
          showChild: false,
          children: [
            { name: '发展历程', path: 'progress' },
            { name: '发起团队', path: 'team' },
            { name: '爱物管简介', path: 'management' },
            { name: '企业荣誉', path: 'honor' }
          ]
        },
        { icon: 'icon-icon_4', name: '新闻中心', path: '/news' },
        { icon: 'icon-icon_2', name: '合作联系', path: '/cooperation' },
        { icon: 'icon-icon_3', name: '加入我们', path: '/job' }
      ],
      current: 0,
      change: false
    }
  },

  created() {
    // console.log(this.$route)
    const path = this.$route.path
    this.menu.forEach((item, index) => {
      if (path === item.path) {
        this.current = index
      }
    })
  },
  computed: {
    isPc() {
      return this.$store.state.isPc
    }
  },
  methods: {
    toggleMenu(index) {
      this.current = index
      if (!this.isPc) {
        this.changeMenu()
      }
      if (index === 5) {
        window.open('https://app.mokahr.com/apply/aipm/6366#/?_k=k5mywj')
        return
      }
      this.$router.push({
        path: this.menu[index].path
      })
    },
    changeMenu() {
      this.change = !this.change
    }
  }
}
