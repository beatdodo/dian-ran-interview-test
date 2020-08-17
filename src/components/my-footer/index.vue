<template>
  <div class="my-footer">
    <Row type="flex" justify="space-between" style="width: 100%; margin: auto" class="row">
      <Col :span="24" :lg="12">
        <div class="annotation-wrap">
          <div class="annotation">
            <p>{{ annotationEng }}</p>
            <p>{{ annotationTW }}</p>
          </div>
          <div v-if="!isMobile" class="links">
            <span style="margin-right: 30px">@ 2020, Ponti Wine Cellars</span>
            <span class="link">Terms of Use</span>
            <span> | </span>
            <span class="link">Privacy Policy</span>
            <span> | </span>
            <span class="link">Cookies Policy</span>
          </div>
        </div>
      </Col>
      <Col :span="24" :lg="12">
        <div class="payment-wrap">
          <img src="../../assets/images/payment.png" alt="payment pic">
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'my-footer',
  data () {
    return {
      annotationTW: '根據香港法律，不得在業務過程中，向未成年人售賣或供應令人醺醉的酒類。',
      annotationEng: 'Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor in the course of business.'
    }
  },
  computed: {
    ...mapState([
      'isMobile'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.my-footer {
  width: 100%;
  padding: 10px 0;

  @media screen and (max-width: $i-view-lg-screen-width) {
    padding: 10px 0 20px 0;
  }
}

.row {
  max-width: 1700px;
  padding: 0 100px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    padding: 0 20px;
  }
}

.annotation-wrap {
  width: 100%;
  font-size: 12px;
  text-align: left;
  color: #695f5f;
  padding-right: 15px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    text-align: center;
    padding: 0;
  }

  .links {
    margin-top: 10px;

    .link {
      cursor: pointer;
    }
  }
}

.payment-wrap {
  width: 100%;
  padding: 12px 0 0 15px;
  text-align: right;

  @media screen and (max-width: $i-view-lg-screen-width) {
    text-align: center;
    padding: 12px 0 0 0;
  }

  img {
    width: 100%;
    max-width: 400px;

    @media screen and (max-width: $i-view-lg-screen-width) {
      width: 200px;
    }
  }
}
</style>
