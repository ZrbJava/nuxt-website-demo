<template>
  <div class="nav">
    <nav class="wraper">
      <a href="/">
        <img src="@/assets/image/logo.png" alt="logo" class="logo" />
      </a>
      <ul class="menu-wraper">
        <li
          v-for="(item, index) in menu"
          :key="index"
          class="item"
          @mouseover="overHandle(item, index)"
          @mouseleave="leaveHandle(item)"
        >
          <a
            class="nav-a"
            href="javascript:void(0);"
            @click="toggleMenu(index)"
          >
            <i
              :class="[
                item.icon,
                current === index ? 'active' : '',
                'iconfont',
                'ficon'
              ]"
            ></i>
            <span class="name" :class="current === index ? 'active' : ''">{{
              item.name
            }}</span>
            <small
              v-show="item.children && item.showChild"
              class="arrow-up"
            ></small>
          </a>
          <div v-if="item.showChild && currentMenu === 0" class="sub-nav">
            <div class="sn-container sn-box">
              <div
                v-for="(sub, subIndex) in item.children"
                :key="'f' + subIndex"
                class="sn-item"
              >
                <i :class="['iconfont', sub.icon]"></i>
                <span class="sn-name">{{ sub.name }}</span>
                <p class="intro">{{ sub.intro }}</p>
                <router-link class="more-a" :to="sub.path"
                  >了解详情</router-link
                >
              </div>
            </div>
          </div>
          <div v-if="item.showChild && currentMenu === 2" class="sub-nav">
            <div class="sn-container sn-about">
              <div
                v-for="(sub, menuIndex) in item.children"
                :key="'s' + menuIndex"
                class="sn-about-link"
              >
                <a :href="`/about#${sub.path}`">
                  {{ sub.name }}
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import RecalcMixin from '@/common/mixin/recalc-mixin'
import HeaderMixin from '@/common/mixin/header-mixin'

const COMPONENTS_NAME = 'pc-header'

export default {
  name: COMPONENTS_NAME,
  mixins: [HeaderMixin, RecalcMixin],
  data() {
    return {
      currentMenu: 0
    }
  },
  methods: {
    overHandle(item, index) {
      this.currentMenu = index
      item.showChild = true
    },
    leaveHandle(item) {
      this.currentMenu = ''
      item.showChild = false
    }
  }
}
</script>

<style scoped lang="stylus">

.nav {
  width: 100%;
  height: pcFn(88);
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.07);
  z-index: $zIndex-2000;
}

.arrow-up {
  position absolute
  left 50%
  bottom 0
  margin-left pcFn(-5)
  border: pcFn(10) solid;
  border-color: transparent transparent #f2f5f6;
}

.wraper {
  width: pcFn(1200);
  height: pcFn(88);
  margin: 0 auto;

  .logo {
    width pcFn(158)
    height pcFn(47)
    float left
    margin-top pcFn(20)
    display block
  }
}

.sub-nav {
  width: 100%;
  position absolute
  top pcFn(88)
  left 0
  right 0
  box-shadow 0 5px 5px 0 rgba(5, 69, 111, 0.3)
  background-image: linear-gradient(#f2f5f6, #f8f8f8);
  .sn-box {
    display flex
  }
  .sn-container {
    width pcFn(1200)
    margin auto
    text-align center
    box-sizing border-box
    .iconfont {
      font-size pcFn(72)
    }
    .intro {
      font-size pcFn(14)
      line-height 1.4
      margin-bottom pcFn(40)
    }
    .sn-name {
      font-size pcFn(18)
      display block
      margin pcFn(20) auto
    }
    .more-a {
      font-size pcFn(14)
      border 1px solid #e9edef
      line-height pcFn(32)
      padding pcFn(5) pcFn(30)
      color #666
      background-color #fff
    }
    .sn-about-link {
      line-height pcFn(40)
      display block
      text-align left
      a:hover{
        color $color-nav-active
      }
    }
  }
  .sn-about {
    padding pcFn(20) 0 pcFn(20) pcFn(650)
  }
  .sn-item {
    padding pcFn(40) pcFn(10)
    flex 1
  }
}

.menu-wraper {
  float right
  .item {
    margin-right: pcFn(40);
    float left

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      .ficon, .name {
        color: $color-nav-active;
      }
    }

    a.nav-a {
      display: flex;
      align-items: center;
      position relative
      line-height pcFn(88)
    }
  }

  .iconfont {
    margin-right: pcFn(10);
    color: #c4cfd5;
    font-size: pcFn(28);
    min-width: pcFn(28);
  }

  .name {
    color: $color-main;
    font-size: pcFn(18);
  }

  .active {
    color: $color-nav-active;
  }
}
</style>
