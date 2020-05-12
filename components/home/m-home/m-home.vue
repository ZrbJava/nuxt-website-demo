<template>
  <div class="wrapper">
    <qm-swiper></qm-swiper>
    <!-- 爱物管领先品牌 -->
    <section class="odd">
      <div class="brand">
        <div class="title text-center">{{ brand.title }}</div>
        <div class="info">{{ brand.info }}</div>
        <div class="data-wraper">
          <div
            v-for="(item, index) in brand.data"
            :key="index"
            class="item text-center"
          >
            <countTo :end-val="item.num" :duration="3000"></countTo>
            <span class="unti">&nbsp;{{ item.unti }}</span>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </section>
    <!-- 数字化物业服务咨询顾问平台 -->
    <section class="platform">
      <div class="wraper">
        <div>
          <div class="title">{{ platform.title }}</div>
          <div class="info">{{ platform.info }}</div>
        </div>
        <div class="production">
          <div class="tag-wraper">
            <div class="tag">
              <div
                v-for="(item, index) in platform.tags"
                :key="index"
                class="item f-pr"
              >
                {{ item }}
              </div>
            </div>
            <router-link to="/home/details">
              <div class="detail_btn">了解详情</div>
            </router-link>
          </div>
        </div>
      </div>
      <img :src="platform.img" :alt="platform.title" class="info_img" />
    </section>
    <!-- 智慧楼宇 -->
    <section class="building platform odd">
      <div class="wraper">
        <div>
          <div class="title">{{ building.title }}</div>
          <div class="info">{{ building.info }}</div>
        </div>
        <div class="production">
          <div class="tag-wraper">
            <div class="tag">
              <div
                v-for="(item, index) in building.tags"
                :key="index"
                class="item f-pr"
              >
                {{ item }}
              </div>
            </div>
            <router-link to="/home/smart-building">
              <div class="detail_btn">了解详情</div>
            </router-link>
          </div>
        </div>
      </div>
      <img :src="building.img" :alt="building.title" class="info_img" />
    </section>
    <!-- 智慧物业  -->
    <section class="property platform">
      <div class="wraper">
        <div>
          <div class="title">{{ property.title }}</div>
          <div class="info">{{ property.info }}</div>
        </div>
        <div class="production">
          <div class="tag-wraper">
            <div class="tag">
              <div
                v-for="(item, index) in property.tags"
                :key="index"
                class="item f-pr"
              >
                {{ item }}
              </div>
            </div>
            <router-link to="/home/smart-property">
              <div class="detail_btn">了解详情</div>
            </router-link>
          </div>
          <img :src="property.img" :alt="property.title" class="info_img" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import HmoeMixin from '@/common/mixin/home-mixin'
import QmSwiper from '@/components/Swiper/Swiper'

const COMPONENTS_NAME = 'm-home'

export default {
  name: COMPONENTS_NAME,
  components: {
    QmSwiper,
    countTo
  },
  mixins: [HmoeMixin]
}
</script>

<style scoped lang="stylus">
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  font-size: px2rem(28);
  overflow-x: hidden
}

.title {
  font-size: px2rem(48);
  color: $color-main-color;
  margin-bottom: px2rem(38);
}

.info {
  font-size: px2rem(28);
  color: $color-main-02;
  line-height: px2rem(48);
  margin-bottom: px2rem(53);
  font-weight: 300;
}

.info_img {
  width: px2rem(525);
  height: px2rem(403);
  position: absolute;
  right: px2rem(-74);
  bottom : px2rem(-70);
}

.brand {
  margin: px2rem(50) px2rem(55) px2rem(50) px2rem(45);

  .data-wraper {
    display: flex;
    justify-content: space-between;

    .item {
      flex: 1;
      font-size: px2rem(52);
      color: $color-num;

      .unti {
        font-size: px2rem(24);
      }

      .name {
        font-size: px2rem(18);
        color: $color-main-02;
        margin-top: px2rem(19);
        font-weight: 300;
      }
    }
  }
}

.platform {
  background: $color-even-bg;
  padding-top: px2rem(50);
  margin-bottom: px2rem(124);
  position: relative;

  .wraper {
    padding: 0 px2rem(30);

    .production {
      display: flex;
      justify-content: space-between;
    }

    .title {
      font-size: px2rem(36);
    }

    .info {
      margin-bottom: px2rem(20);
    }

    .tag {
      margin-bottom: px2rem(50);

      .item {
        font-size: px2rem(28);
        color: $color-main;
        margin-top: px2rem(26);
        position: relative;
        padding-left: px2rem(20);
        font-weight: 300;

        &:before {
          content: '';
          position: absolute;
          display: inline-block;
          width: px2rem(8);
          height: px2rem(8);
          background: #c4cfd5;
          top: px2rem(10);
          left: 0;
        }
      }
    }

    .detail_btn {
      width: px2rem(180);
      height: px2rem(72);
      line-height: px2rem(72);
      text-align: center;
      font-size: px2rem(28);
      color: $color-main;
      background-color: #f8fafc;
      border-1px();
      cursor: pointer;
      margin-bottom: px2rem(30);
      font-weight: 300;
    }

    .right {
      flex: none;
      margin-left: px2rem(86);
    }
  }
}

.property {
  margin-bottom: 0 !important;

  .info_img {
    width: px2rem(480);
    heigth: px2rem(368);
    right: px2rem(-76);
    bottom: px2rem(170);
  }
}

.building {
  margin-bottom: 0;

  .info_img {
    width: px2rem(480);
    heigth: px2rem(368);
    left: px2rem(-30);
    bottom: px2rem(70);
  }
}

.odd {
  background: #fff !important;
  padding-top: 0 !important;

  .production {
    flex-direction: row-reverse;
  }
}

.even {
  background: #fff !important;
}
</style>
