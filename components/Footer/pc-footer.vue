<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div>
          <ul class="footer-menu">
            <li style="flex:1.2">
              <img
                src="@/assets/image/footer_logo.png"
                alt="footer_logo"
                class="footer_logo"
              />
            </li>
            <li style="flex:1.2">
              <div class="title">{{ footer_menu.production.title }}</div>
              <div class="production_list">
                <router-link
                  v-for="(item, index) in footer_menu.production.list"
                  :key="index"
                  :to="item.href"
                  class="item"
                  >{{ item.text }}</router-link
                >
              </div>
            </li>
            <li style="flex:1">
              <div class="title">{{ footer_menu.about.title }}</div>
              <div class="production_list">
                <a
                  v-for="(item, index) in footer_menu.about.list"
                  :key="index"
                  :href="`/about#${item.href}`"
                  class="item"
                  @click="got(item.href)"
                >
                  {{ item.text }}
                </a>
              </div>
            </li>
            <li style="flex:0.5">
              <div class="title">微信公众号</div>
              <img
                src="@/assets/image/footer_ewm.png"
                alt="footer_ewm"
                class="footer_ewm"
              />
            </li>
          </ul>
        </div>
        <div class="footer-addr-text text-center addr">
          ©广州启盟信息科技有限公司 版权所有 |
          <a
            href="http://www.beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            >粤ICP备17131755号</a
          >
        </div>
        <div class="footer-addr-text text-center ">
          地址：广州市黄埔区鱼珠智谷E-PARK创意园B18号
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
const COMPONENTS_NAME = 'pc-footer'

export default {
  name: COMPONENTS_NAME,
  data() {
    return {
      footer_menu: {
        production: {
          title: '爱物管产品',
          list: [
            {
              text: '数字化物业服务咨询顾问平台',
              href: '/home/details'
            },
            {
              text: '智慧楼宇',
              href: '/home/smart-building'
            },
            {
              text: '智慧物业',
              href: '/home/smart-property'
            }
          ]
        },
        about: {
          title: '关于爱物管',
          list: [
            {
              text: '发展历程',
              href: 'progress'
            },
            {
              text: '发起团队',
              href: 'team'
            },
            {
              text: '爱物管简介',
              href: 'management'
            },
            {
              text: '企业荣誉',
              href: 'honor'
            }
          ]
        }
      }
    }
  },
  methods: {
    getId(id) {
      sessionStorage.setItem('id', id)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../common/style/variable"

.footer {
  background: $color-footer-bg;
  padding pcFn(43) 0 pcFn(33) 0

  a{
    color $color-main-02
  }
  .container{
    padding  0 pcFn(20)
  }
  .footer-menu {
    display: flex;
    justify-content space-between
  }
   .title{
      font-size pcFn(20)
      color:#fff
      &::after {
         content:''
         display block
         width pcFn(38)
         height pcFn(3)
         margin pcFn(13) 0 pcFn(35) 0
         background $color-main-03
      }

    }
  .production_list{
    .item{
      display block
      font-size pcFn(16)
      font-weight 300
      &:not(:last-child){
        margin-bottom pcFn(26)
      }
    }
  }


  .footer_logo {
    width: pcFn(232);
    margin-top pcFn(62)
  }
  .footer_ewm{
     width: pcFn(118);
  }
}

.footer-menu-text {
  color: $color-main-02;
  font-size: pcFn(16);
}

.footer-addr-text {
  color: $color-main-02;
  font-size: pcFn(16);
  margin-left pcFn(-76)
  font-weight 300
}
.addr{
  margin pcFn(50) 0  pcFn(18) 0
}
</style>
