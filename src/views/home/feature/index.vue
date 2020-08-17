<template>
  <div class="feature">
    <Row type="flex" justify="center" :gutter="isMobile ? 15 : 60" style="width: 100%; margin: auto">
      <Col v-for="item in data" :key="item.index" :span="7" :lg="6">
        <div class="feature-wrap">
          <img :src="require(`../../../assets/images/feature-${item.index}.png`)" :alt="`feature pic-${item.index}`">
          <div class="text-wrap">
            <h2 class="title">{{ item.title }}</h2>
            <p v-html="item.content" class="content"></p>
          </div>
        </div>
      </Col>
    </Row>
    <Divider />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'feature',
  data () {
    return {
      data: [
        {
          index: 1,
          title: 'Trusted Wine Delivery Service',
          content: 'Deliver Wines with Our New Temperature Controlled Truck'
        },
        {
          index: 2,
          title: 'Incredible Value Premium Wines',
          content: 'Work with Producers and Negociants to Being You Best Value Wines'
        },
        {
          index: 3,
          title: 'Free Delivery',
          content: 'Spend <b style="color: #4e4e4e">HK$1,800</b> to enjoy free delivery to single location in Hong Kong Island. Kowloon or New Territories'
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

.feature {
  width: 100%;
}

.feature-wrap {
  width: 100%;
  padding-top: 80px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    padding-top: 40px;
  }

  img {
    width: 100%;
    min-width: 100px;
    max-width: 150px;

    @media screen and (max-width: $i-view-lg-screen-width) {
      min-width: 60px;
      max-width: 140px;
    }
  }

  .title {
    color: #626262;
    font-size: 24px;
    margin-top: 5px;

    @media screen and (max-width: $i-view-lg-screen-width) {
      font-size: 18px;
    }
  }

  .content {
    color: #afafaf;
    font-size: 20px;
    margin-top: 5px;

    @media screen and (max-width: $i-view-lg-screen-width) {
      font-size: 16px;
    }
  }
}

.ivu-divider {
  width: 40%;
  min-width: unset;
  height: 3px;
  margin: 70px auto;
  background-color: #7c6454;

  @media screen and (max-width: $i-view-lg-screen-width) {
    width: 60%;
    height: 4px;
    margin: 30px auto 40px auto;
  }
}
</style>
