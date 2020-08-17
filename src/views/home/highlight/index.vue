<template>
  <div class="highlight">
    <Row type="flex" justify="center" :gutter="isMobile ? 0 : 20" style="width: 100%; margin: auto" class="row">
      <Col v-for="item in data" :key="item.index" :span="24" :sm="12" :lg="5">
        <div class="square">
          <img :src="require(`../../../assets/images/heightlight-desktop-${item.index}.png`)" :alt="`highlight pic-${item.index}`">
          <div class="text-wrap">
            <h2 class="title">{{ item.title }}</h2>
            <p class="content">{{ item.content }}</p>
            <div class="bg"></div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'highlight',
  data () {
    return {
      data: [
        {
          index: 1,
          title: 'Shop Promotions',
          content: 'Check out the latest offers in shops!'
        },
        {
          index: 2,
          title: 'Smart Buys',
          content: 'Well-priced, high-quality wines!'
        },
        {
          index: 3,
          title: 'Top Rated Wines',
          content: 'Wine scores 90 points or higher!'
        },
        {
          index: 4,
          title: 'Events',
          content: 'What is happening now!'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'isMobile'
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';

.highlight {
  width: 100%;
}

.row {
  max-width: 1700px;
  padding: 0 15px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    max-width: 700px;
  }

  @media screen and (max-width: $i-view-sm-screen-width) {
    max-width: 400px;
  }
}

.square {
  width: 100%;
  position: relative;
  margin-bottom: 14px;
  cursor: pointer;

  img {
    width: 100%;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 6px;
    position: absolute;
    bottom: 5px;
    background-color: rgba(95, 58, 22, 0.75);

    .title {
      font-size: 20px;
      color: #fbfafa;
      font-weight: bold;

      @media screen and (max-width: 1400px) {
        font-size: 16px;
      }
    }

    .content {
      font-size: 16px;
      color: #fcfcfa;

      @media screen and (max-width: 1400px) {
        font-size: 12px;
      }
    }
  }
}
</style>
