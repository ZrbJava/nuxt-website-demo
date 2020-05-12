<template>
  <div class="m-footer">
    <img
      src="../../assets/image/footer_logo.png"
      alt="footer_logo"
      class="footer_logo"
    />
    <div class="footer-addr-text text-center addr">
      ©广州启盟信息科技有限公司 版权所有
    </div>
  </div>
</template>

<script>
const COMPONENTS_NAME = 'm-footer'

export default {
  name: COMPONENTS_NAME,
  data() {
    return {
      menu: [
        { icon: 'icon-icon_5', name: '产品服务' },
        { icon: 'icon-icon_1', name: '项目案例' },
        { icon: 'icon-icon_', name: '关于爱物管' },
        { icon: 'icon-icon_4', name: '新闻中心' },
        { icon: 'icon-icon_2', name: '合作联系' },
        { icon: 'icon-icon_3', name: '加入我们' }
      ],
      current: 0
    }
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
@import "../../common/style/variable"

.m-footer {
  height: px2rem(320);
  background $color-footer-bg;
  display flex;
  flex-direction column;
  justify-content center;
  align-items center
  .footer_logo{
    width px2rem(232)
    height px2rem(160)
    margin-bottom px2rem(34)
  }
  .addr{
    color: $color-main-02;
    font-size: px2rem(24);
    font-weight: 300;
  }
}
</style>
