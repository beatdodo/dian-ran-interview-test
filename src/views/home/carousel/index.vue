<template>
  <div class="carousel">
    <div v-show="isMobile" class="discount-text">{{ mobileDiscountText }}</div>
    <div class="slogan-wrap">
      <p class="slogan slogan-1">{{ slogan1 }}</p>
      <p class="slogan slogan-2">{{ slogan2 }}</p>
      <Button class="see-more-btn">SEE MORE</Button>
    </div>
    <Carousel
        v-model="value"
        :height="setting.height"
        :loop="setting.loop"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
      <CarouselItem v-for="index in 3" :key="index">
        <div :class="'slider slider-' + index"></div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'carousel',
  data () {
    return {
      mobileDiscountText: 'Free shipping for over $1,000',
      value: 0,
      setting: {
        height: null, // 高度
        loop: true, // 是否循環播放
        autoplay: false, // 是否自動播放
        autoplaySpeed: 4000, // 播放數度 單位 ms
        dots: 'none', // 下方點點顯示位置
        radiusDot: false, // 下方點點是否圓形
        trigger: 'click', // 點點觸發方式
        arrow: 'always' // 是否顯示箭頭切換按鈕
      },
      slogan1: 'Trusted wine delivery',
      slogan2: 'with temperature controlled wine delivery truck'
    }
  },
  computed: {
    ...mapState([
      'scrollWidth',
      'isMobile'
    ]),
  },
  watch: {
    'isMobile': {
      immediate: true,
      handler (newVal) {
        this.setting.height = newVal ? 500 : 844
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';

.carousel {
  width: 100%;
  position: relative;
}

.discount-text {
  width: 100%;
  color: #eae9e9;
  background-color: #525050;
  margin-top: $mobile-header-height;
}

.slider {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;

  &.slider-1 {
    background-image: url('../../../assets/images/slider-1.png');
  }

  &.slider-2 {
    background-image: url('../../../assets/images/slider-2.png');
  }

  &.slider-3 {
    background-image: url('../../../assets/images/slider-3.png');
  }
}

.slogan-wrap {
  position: absolute;
  z-index: 999;
  right: 3%;
  bottom: 21%;
  text-align: left;

  @media screen and (max-width: $i-view-lg-screen-width) {
    width: 100%;
    height: 100%;
    text-align: center;
    right: unset;
    bottom: unset;
    padding-top: 116px;
  }

  .slogan {
    font-weight: bold;
    font-family: cursive, sans-serif;
    white-space: nowrap;

    &.slogan-1 {
      color: #ffffff;
      font-size: 64px;

      @media screen and (max-width: $i-view-lg-screen-width) {
        font-size: 35px;
      }
    }

    &.slogan-2 {
      color: #fcfcfa;
      font-size: 28px;

      @media screen and (max-width: $i-view-lg-screen-width) {
        font-size: 17px;
      }
    }
  }

  .see-more-btn {
    width: 185px;
    height: 46px;
    font-size: 20px;
    font-weight: bold;
    color: #f6f6f6;
    background-color: #c4c4c4;
    margin-top: 10px;
    border-radius: unset;

    @media screen and (max-width: $i-view-lg-screen-width) {
      margin-top: 177px;
      font-weight: normal;
    }
  }
}

/deep/ .ivu-carousel-arrow {
  z-index: 1000;
  width: 45px;
  height: 45px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    &:hover {
      background-color: unset;
    }
  }

  i {
    font-size: 45px;
    font-weight: bold;
  }
}
</style>
