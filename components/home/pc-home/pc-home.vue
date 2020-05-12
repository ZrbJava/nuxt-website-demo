<template>
  <div class="wrapper">
    <qm-swiper></qm-swiper>
    <!-- 爱物管领先品牌 -->
    <section class="odd">
      <div class="container">
        <div class="brand">
          <div class="title text-center">{{ brand.title }}</div>
          <div class="info">{{ brand.info }}</div>
          <div class="data-wraper">
            <div
              v-for="(item, index) in brand.data"
              :key="index"
              class="item text-center"
            >
              <!-- <span>{{ item.num }}</span> -->
              <countTo :end-val="item.num" :duration="3000"></countTo>
              <span class="unti">&nbsp;{{ item.unti }}</span>
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 数字化物业服务咨询顾问平台 -->
    <section id="adviser" class="platform even">
      <div class="container wraper">
        <div class="left">
          <div class="title">{{ platform.title }}</div>
          <div class="info">{{ platform.info }}</div>
          <div class="tag">
            <div
              v-for="(item, index) in platform.tags"
              :key="index"
              class="item f-pr width3"
            >
              {{ item }}
            </div>
          </div>
          <router-link to="/home/details">
            <div class="detail_btn">
              了解详情
            </div>
          </router-link>
        </div>
        <div class="right">
          <img
            :src="platform.img"
            alt="数字化物业服务咨询顾问平台"
            class="info_img"
          />
        </div>
      </div>
    </section>
    <!-- 智慧楼宇 -->
    <section id="building" class="building platform odd">
      <div class="container wraper">
        <div class="right">
          <img
            :src="building.img"
            alt="数字化物业服务咨询顾问平台"
            class="info_img"
          />
        </div>
        <div class="left">
          <div class="title">{{ building.title }}</div>
          <div class="info">{{ building.info }}</div>
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
            <div class="detail_btn">
              了解详情
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <!-- 智慧物业  -->
    <section class="property platform even">
      <div class="container wraper">
        <div class="left">
          <div class="title">{{ property.title }}</div>
          <div class="info">{{ property.info }}</div>
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
        <div class="right">
          <img
            :src="property.img"
            alt="数字化物业服务咨询顾问平台"
            class="info_img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import HmoeMixin from '@/common/mixin/home-mixin'
import QmSwiper from '@/components/Swiper/Swiper'
// import {UAnimateContainer, UAnimate} from 'vue-wow'
const COMPONENTS_NAME = 'pc-home'

export default {
  name: COMPONENTS_NAME,
  components: {
    countTo,
    QmSwiper
  },
  mixins: [HmoeMixin]
}
</script>

<style scoped lang="stylus">
.title {
  font-size: pcFn(48);
  color: $color-main-color;
  margin-bottom: pcFn(32);
}

.info {
  font-size: pcFn(18);
  color: $color-main-02;
  line-height: pcFn(32);
  margin-bottom: pcFn(83);
  font-weight: 300;
}

.info_img {
  height: pcFn(480);
}

.brand {
  margin: 0 pcFn(130) 0 pcFn(116);
  padding: pcFn(52) 0 pcFn(91) 0;

  .data-wraper {
    display: flex;
    justify-content: space-between;

    .item {
      font-size: pcFn(52);
      color: $color-num;
      flex: 1;

      .unti {
        font-size: pcFn(28);
      }

      .name {
        font-size: pcFn(18);
        color: $color-main-02;
        margin-top: pcFn(19);
        font-weight: 300;
      }
    }
  }
}

.platform {
  background: $color-even-bg;
  padding: pcFn(90) 0 pcFn(37) 0;

  .wraper {
    display: flex;

    .title {
      font-size: pcFn(36);
    }

    .info {
      margin-bottom: pcFn(20);
    }

    .tag {
      display: flex;
      flex-direction :row;
      flex-wrap: wrap;
      margin-bottom: pcFn(50);
      padding-left: pcFn(10);

      .item {
        position: relative;
        font-size: pcFn(16);
        color: $color-main;
        margin-top: pcFn(20);
        padding-left: pcFn(20);
        width: 50%;
        font-weight: 300;

        &:before {
          content: '';
          position: absolute;
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #c4cfd5;
          top: pcFn(5);
          left: 0;
        }
      }
      .width3 {
        width: 33%;
      }
    }

    .detail_btn {
      width: pcFn(146);
      height: pcFn(36);
      line-height: pcFn(36);
      text-align: center;
      font-size: pcFn(16);
      font-weight: 300;
      color: $color-main;
      background-color: #f8fafc;
      border: solid 1px $color-bd;
      cursor: pointer;
    }

    .right {
      flex: none;
      margin-left: pcFn(86);
    }
  }
}

.odd {
  background: #fff !important;

  .right {
    margin-left: 0 !important;
    margin-right: pcFn(44);
  }
}

.even {
  background: $color-even-bg !important;
}
</style>
