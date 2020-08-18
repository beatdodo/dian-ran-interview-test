<template>
  <div class="product">
    <Row type="flex" justify="space-between" align="middle" style="width: 100%; margin: auto" class="row">
      <Col :span="16" style="text-align: left">
        <h1 class="title">{{ title }}</h1>
      </Col>
      <Col :span="8" style="text-align: right">
        <div class="slide-btn">
          <Button @click="showPre" icon="ios-arrow-back"></Button>
          <Button @click="showNext" icon="ios-arrow-forward"></Button>
        </div>
      </Col>
    </Row>
    <Row type="flex" justify="space-between" style="width: 100%; margin: auto" class="row">
      <Col :span="24">
        <VueSlickCarousel
            ref="carousel"
            @init="onInitCarousel"
            @beforeChange="onBeforeChangeCarousel"
            v-bind="settings">
          <div v-for="item in data" :key="item.id" class="card-wrap">
            <Card :dis-hover="true">
              <!--  收藏  -->
              <Button shape="circle" icon="md-heart" class="heart-btn"></Button>
              <!--  收藏  -->
              <p v-show="item.sale" class="sale-tag">SALE</p>
              <!--  產品資訊  -->
              <Row :gutter="10">
                <Col :span="16" style="text-align: left; height: 100%">
                  <div class="left-wrap">
                    <p class="des">{{ item.des }}</p>
                    <div class="score-wrap">
                      <Row type="flex" justify="center" :gutter="4">
                        <Col :span="8">
                          <div class="score">
                            <div class="score-name">AM</div>
                            <div class="score-grade">{{ item.amEnd ? `${item.amStart}-${item.amEnd}` : item.amStart }}</div>
                          </div>
                        </Col>
                        <Col :span="8">
                          <div class="score">
                            <div class="score-name">WS</div>
                            <div class="score-grade">{{ item.wsEnd ? `${item.wsStart}-${item.wsEnd}` : item.wsStart }}</div>
                          </div>
                        </Col>
                        <Col :span="8">
                          <div class="score">
                            <div class="score-name">WA</div>
                            <div class="score-grade">{{ item.waEnd ? `${item.waStart}-${item.waEnd}` : item.waStart }}</div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <p v-show="item.outOfStock" class="out-of-stock">OUT OF STOCK</p>
                    <div class="price-wrap">
                      <p v-show="item.sale" class="sale-price">HK${{ item.salePrice }}</p>
                      <p class="price" :class="{'line-through': item.sale}">HK${{ item.price }}</p>
                    </div>
                  </div>
                </Col>
                <Col :span="8">
                  <img src="../../../assets/images/W-SA-015-PT-205.png" :alt="`product pic-${item.id}`">
                </Col>
              </Row>
            </Card>
            <!--  Add to cart  -->
            <Row type="flex" justify="space-between" align="middle" :gutter="10" class="add-to-cart-row">
              <Col :span="10">
                <InputNumber :min="1" v-model="addToCartCount" class="add-input"></InputNumber>
              </Col>
              <Col :span="14">
                <Button class="add-btn">Add to cart</Button>
              </Col>
            </Row>
          </div>
        </VueSlickCarousel>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import json from '../../../json/top-picks.json'
export default {
  name: 'product',
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    title: {
      type: String,
      required: true,
      default: () => ''
    }
  },
  data () {
    return {
      // data: [],
      addToCartCount: 1,
      settings: {
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        focusOnSelect: false,
        initialSlide: 0,
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'isMobile'
    ])
  },
  methods: {
    onInitCarousel () {
    },
    onBeforeChangeCarousel (oldSlideIndex, newSlideIndex) {
      // console.log('onBeforeChangeCarousel', oldSlideIndex, newSlideIndex)
    },
    showPre () {
      this.$refs.carousel.prev()
    },
    showNext () {
      this.$refs.carousel.next()
    }
  },
  components: {
    VueSlickCarousel
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';

.product {
  width: 100%;
  padding: 60px 0 0 0;
}

.row {
  max-width: 1700px;
  padding: 0 100px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    padding: 0 20px;
  }
}

.title {
  font-size: 60px;
  font-family: cursive, sans-serif;
  padding-left: 30px;
  letter-spacing: -1px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    font-size: 28px;
    padding-left: 10px;
  }
}

.slide-btn {
  margin-top: 35px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    margin: unset;
  }

  .ivu-btn {
    width: 40px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    border-color: #b59983;
    margin: 0 2px;
  }
}

.slick-slider {
  max-width: 1700px;

  .card-wrap {
    padding: 10px;

    .ivu-card {
      position: relative;
      padding-top: 25px;
      font-size: 16px;
      border-radius: unset;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, .3);

      .heart-btn {
        width: 36px;
        height: 36px;
        font-size: 24px;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
        color: #b59983;
        border-color: #b59983;

        &:hover {
          color: red;
          border-color: red;

          @media screen and (max-width: $i-view-lg-screen-width) {
            color: unset;
            border-color: unset;
          }
        }

        &.favourite {
          color: red;
        }
      }

      .sale-tag {
        width: 76px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        left: -8px;
        top: -8px;
        z-index: 1000;
        font-size: 24px;
        background-color: #c22121;
        color: #ffffff;
      }

      .des {
        color: #000000;
        text-align: left;
      }

      img {
        width: 100%;
        max-width: 80px;
        padding-top: 80%;
      }
    }
  }
}

.left-wrap {
  width: 100%;

  .score-wrap {
    max-width: 150px;
    margin-top: 30px;

    .score {
      border: 1px solid #5d3a1a;

      .score-name {
        color: #ffffff;
        background-color: #5d3a1a;
        padding: 1px;
      }

      .score-grade {
        padding: 1px;
      }

    }
  }

  .out-of-stock {
    color: #c22121;
    margin: 10px 0;
    text-align: left;
  }

  .price-wrap {
    width: 100%;
    text-align: left;
    margin: auto 0 0 0 ;
    font-weight: bold;

    .sale-price {
      font-size: 20px;
      color: #c11616;
    }

    .price {
      font-size: 18px;
      color: #5d3a1a;

      &.line-through {
        text-decoration: line-through;
      }
    }
  }
}

.add-to-cart-row {
  height: 70px;
  background-color: #b59983;
  margin: 0 !important;
  position: relative;
  top: -1px;
  box-shadow: 1.5px 2px 4px 1px rgba(0, 0, 0, .3);

  .add-input {
  }

  .add-btn {
    width: 110px;
    height: 36px;
    font-size: 16px;
    border-radius: 40px;
    border-color: #775252;
    background-color: #775252;
    color: #ffffff;
  }
}
</style>
