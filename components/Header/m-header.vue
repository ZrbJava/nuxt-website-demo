<template>
  <div class="wrapper">
    <div class="m-header">
      <i
        class="iconfont icon"
        :class="[change ? 'icon-icon-25 close' : 'icon-icon-23']"
        @click="changeMenu"
      />
      <a href="/">
        <img src="@/assets/image/logo.png" alt="logo" class="logo" />
      </a>
    </div>
    <transition name="slide">
      <ul v-if="change" class="menu">
        <li v-for="(item, index) in menu" :key="index" class="item">
          <i
            class="iconfont menu-icon"
            :class="[item.icon, current === index ? 'active' : '']"
          ></i>
          <p
            class="name"
            :class="current === index ? 'active' : ''"
            @click="toggleMenu(index)"
          >
            {{ item.name }}
          </p>
          <ul v-if="index === 0" class="sub-nav">
            <li v-for="(sub, liIndex) in item.children" :key="'s' + liIndex">
              <a class="sub-name" @click="subClick(sub.path)">{{ sub.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import HeaderMixin from '@/common/mixin/header-mixin'
import RecalcMixin from '@/common/mixin/recalc-mixin'

const COMPONENTS_NAME = 'm-header'

export default {
  name: COMPONENTS_NAME,
  mixins: [HeaderMixin, RecalcMixin],
  data() {
    return {
      change: false
    }
  },
  methods: {
    changeMenu() {
      this.change = !this.change
    },
    subClick(path) {
      this.changeMenu()
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style scoped lang="stylus">

.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.slide-enter-active{
  transition all .5s linear
}
.slide-leave-active{
  transition all .5s linear
}
.slide-enter,
.slide-leave-to{
  transform translateY(-100%)
}
.slide-enter-to{
  transform translateY(0)
}
.m-header {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: px2rem(108);
  z-index: $zIndex-2000;
  background: $color-even-bg;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.04), 0 1px 5px 0 rgba(0, 0, 0, 0.04);

  .icon {
    margin-left: px2rem(30);
    color: #b5c5d2;
    font-size: px2rem(50);
    width: px2rem(70);
  }

  .close {
    font-size: px2rem(60);
  }

  .logo {
    width: px2rem(162);
    height: px2rem(47);
    margin-left: px2rem(202);
  }
}

.menu {
  width 100%
  // height px2rem(560)
  position fixed
  top px2rem(108)
  left 0
  background-color #fff
  padding px2rem(30)
  z-index $zIndex-1000

  .item {
    // display flex
    line-height px2rem(50)
    &:not(:last-child) {
      margin-bottom px2rem(20)
    }

    .menu-icon {
      font-size px2rem(50)
      margin-right px2rem(24)
    }

    .name {
      font-size px2rem(32)
      display inline-block
      vertical-align top
    }

    .active {
      color: $color-nav-active;
    }

    .sub-nav {
      padding-left px2rem(40)
      .sub-name {
        display block
        font-size px2rem(32)
        position relative
        padding-left px2rem(36)
        color #666
        margin-bottom px2rem(10)
        line-height px2rem(50)
        &:before {
          display block
          position absolute
          left 0
          top px2rem(15)
          content ' '
          border px2rem(5) solid #ccc
          border-radius 50%
          height px2rem(10)
          width px2rem(10)
        }
      }
    }
  }
}
</style>
