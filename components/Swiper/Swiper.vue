<template>
  <div class="swiper" :class="isPc ? 'pc-swiper' : 'm-swiper'">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in banner"
        :key="index"
        class="swiper-slide"
      >
        <img
          :src="isPc ? item.pc_img : item.m_img"
          :alt="item.title"
          class="itemImg"
        />
        <div class="text-wraper">
          <div class="min">{{ item.title1 }}</div>
          <div class="big">{{ item.title2 }}</div>
        </div>
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'QmSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        }
      },
      banner: [
        {
          title1: '爱物管的使命',
          title2: '让天下没有难管的物业',
          pc_img: require('@/assets/image/top_banner_01.jpg'),
          m_img: require('@/assets/image/m_home_banner.jpg')
        }
      ]
    }
  },
  computed: {
    ...mapState(['isPc'])
  }
}
</script>

<style lang="stylus" scoped>
.pc-swiper {
  .swiper-slide {
    width: 100%;
    height: pcFn(500);
  }

  /deep/ .swiper-pagination-bullet-custom {
    width: pcFn(8);
    height: pcFn(8);
    background: #fff;
    border-radius: pcFn(4);
    transition: all 0.2s;
    opacity: 1;

    &.swiper-pagination-bullet-active {
      width: pcFn(42);
      opacity: 1;
      background: #61b8e8;
    }
  }

  .itemImg {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  .text-wraper {
    position: absolute;
    top: pcFn(192);
    left: 50%;
    transform: translateX(-50%);
    color: #fff;

    .min {
      font-size: pcFn(24);
      margin-bottom: pcFn(18);
    }

    .big {
      font-size: pcFn(60);
    }
  }
}

.m-swiper {
  .swiper-slide {
    width: 100%;
    height: px2rem(640);
    background: #ccc;
  }

  /deep/ .swiper-pagination-bullet-custom {
    width: px2rem(8);
    height: px2rem(8);
    background: #fff;
    border-radius: px2rem(4);
    transition: all 0.2s;
    opacity: 1;

    &.swiper-pagination-bullet-active {
      width: px2rem(42);
      opacity: 1;
      background: #61b8e8;
    }
  }

  .itemImg {
    display: block;
    width: 100%;
    height: 100%;
    // max-width: 100%;
    // max-height: 100%;
  }

  .text-wraper {
    position: absolute;
    top: px2rem(209);
    left: px2rem(75);
    color: #fff;

    .min {
      font-size: px2rem(28);
      margin-bottom: px2rem(18);
    }

    .big {
      font-size: px2rem(60);
    }
  }
}
</style>
