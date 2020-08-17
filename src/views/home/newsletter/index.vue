<template>
  <div class="newsletter">
    <Row type="flex" justify="space-between" style="width: 100%; margin: auto" class="row">
      <Col :span="24" :lg="12">
        <div class="text-wrap">
          <img src="../../../assets/images/ponti_wine_cellars-logo_BLACK.png" alt="logo" class="logo">
          <p class="content">{{ content }}</p>
        </div>
      </Col>
      <Col :span="24" :lg="12">
        <div class="email-wrap">
          <div class="link">
            <span v-for="(link, index) in links" :key="index">{{ link }} {{ links.length - 1 === index ? '' : '| ' }}</span>
          </div>
          <span class="newsletter-text">NEWSLETTER</span>
          <Input v-model="email" class="email-input" placeholder="Email Address" />
          <Button>SUBSCRIBE</Button>
          <div class="icons">
            <Icon type="logo-facebook" />
            <Icon type="logo-instagram" />
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'newsletter',
  data () {
    return {
      email: '',
      content: 'Ponti Wine Cellars is an online wine shop in Hong Kong. We offer a comprehensive range of top quality wines from all over the world such as USA, Italy, France, Spain, Argentina, Chile and etc.',
      links: [
        'ABOUT US',
        'SHOP',
        'WINE CLUB BENEFIT',
        'OUR STORES',
        'CONTACT US',
        'FAQ',
        'SITE MAP'
      ]
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
@import '../../../assets/scss/variables';
$text-color: #525050;

.newsletter {
  width: 100%;
  margin: 60px 0;
  padding-top: 30px;
  background-color: #f2f0ea;
}

.row {
  max-width: 1700px;
  padding: 0 100px;

  @media screen and (max-width: $i-view-lg-screen-width) {
    padding: 0 20px;
  }
}

.text-wrap {
  width: 100%;
  text-align: left;
  padding: 0 0 30px 0;

  @media screen and (max-width: $i-view-lg-screen-width) {
    text-align: center;
    padding: 0;
  }

  .logo {
    width: 150px;
  }

  .content {
    max-width: 500px;
    font-size: 20px;
    margin-top: 5px;
    color: $text-color;

    @media screen and (max-width: $i-view-lg-screen-width) {
      margin: auto;
    }
  }
}

.email-wrap {
  width: 100%;
  max-width: 300px;
  margin: 30px 0 20px auto;
  text-align: left;

  @media screen and (max-width: $i-view-lg-screen-width) {
    text-align: center;
    margin: 35px auto 20px auto;
  }

  .link {
    width: 100%;

    span {
      font-size: 20px;
      color: $text-color;
      cursor: pointer;
    }
  }

  .newsletter-text {
    display: inline-block;
    font-size: 16px;
    color: #1e1e1d;
    margin-top: 30px;
  }

  /deep/ .ivu-input {
    width: 100%;
    height: 40px;
    border-radius: unset;
    border-color: #645c58;
  }

  .ivu-btn {
    font-size: 16px;
    border-radius: unset;
    background-color: #b69982;
    color: #ffffff;
    margin-top: 5px;

    @media screen and (max-width: $i-view-lg-screen-width) {
      width: 140px;
      height: 46px;
    }
  }

  .icons {
    width: 100%;
    text-align: right;
    margin-top: 10px;

    @media screen and (max-width: $i-view-lg-screen-width) {
      text-align: center;
    }

    i {
      font-size: 50px;
      color: #000000;
      cursor: pointer;
    }
  }
}
</style>
