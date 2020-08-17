<template>
  <div class="my-header" :class="{'scroll-top': isScrollToTop, 'mobile': isMobile}">
<!--    <div class="bg" :class="{'mobile': isMobile}"></div>-->
    <Row type="flex" justify="space-between" style="height: 100%">
      <Col :span="4" :lg="6" style="text-align: left">
        <!--  聯絡資訊 or Logo  -->
        <transition name="fade" mode="out-in" appear v-if="!this.isMobile">
          <template v-if="isScrollToTop">
            <div class="contact-info">
              <p><b>TEL</b> (852) 2739 7678</p>
              <p><b>EMAIL</b> enquiries@pointiwinecellars.com</p>
            </div>
          </template>
          <template v-else>
            <img
                src="../../assets/images/ponti-wine-cellars-logo-1589532960.png"
                alt="logo"
                class="logo left"
                @click="routerToHome"
            >
          </template>
        </transition>
        <!--  Mobile Menu Icon  -->
        <Dropdown v-if="this.isMobile" trigger="click">
          <Icon type="md-menu" class="menu-icon" />
          <DropdownMenu slot="list">
            <DropdownItem>LOG IN / REGISTER</DropdownItem>
            <DropdownItem>SHOP</DropdownItem>
            <DropdownItem>PROMOTIONS</DropdownItem>
            <DropdownItem>EVENTS</DropdownItem>
            <DropdownItem>ABOUT US</DropdownItem>
            <DropdownItem>CONTACT</DropdownItem>
            <Divider style="margin: 10px 0" />
            <DropdownItem>PRIVACY & POLICY</DropdownItem>
            <DropdownItem>TERMS OF USE</DropdownItem>
            <DropdownItem>COOKIES POLICY</DropdownItem>
            <DropdownItem>FAQ</DropdownItem>
            <DropdownItem>SEARCH</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
      <Col :span="16" :lg="12">
        <!--  Desktop 中間 Logo  -->
        <transition name="fade" appear>
          <img
              v-if="isScrollToTop || this.isMobile"
              :class="{'mobile': isMobile}"
              :src="require(`../../assets/images/${logoSrc}`)"
              alt="logo"
              class="logo"
              @click="routerToHome"
          >
        </transition>
        <!--  Desktop 中間 Menu  -->
        <div id="nav" v-if="!this.isMobile" :class="{'scroll-top': isScrollToTop}">
          <router-link to="/shop">SHOP</router-link>
          <router-link to="/promotions">PROMOTIONS</router-link>
          <router-link to="/events">EVENTS</router-link>
          <router-link to="/about-us">ABOUT US</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </div>
      </Col>
      <Col :span="4" :lg="6">
        <!--  功能按鈕  -->
        <div class="feature-buttons" :class="{'scroll-top': isScrollToTop, 'mobile': isMobile}">
          <span v-if="!isMobile" class="text-buttons">
            <span>Log in</span>
            <span> | </span>
            <span>Register</span>
          </span>
          <Icon v-if="!isMobile" type="ios-search" />
          <Badge :count="cartCount" :offset="[5, 5]">
            <Icon type="ios-cart-outline" :class="{'mobile': isMobile}" />
          </Badge>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'my-header',
  data () {
    return {
      menuIconVisible: false, // 漢堡選單是否開啟
      cartCount: 2 // 購物車內數量
    }
  },
  computed: {
    ...mapState([
      'windowTop',
      'scrollWidth',
      'isMobile'
    ]),
    isScrollToTop () {
      return this.windowTop === 0
    },
    logoSrc () {
      if (this.isMobile) return 'ponti_wine_cellars-logo_BLACK.png'
      else return 'ponti-wine-cellars-logo-1589532960.png'
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("resize", this.onResize);
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    ...mapMutations([
      'setWindowTop',
      'setScrollWidth'
    ]),
    onScroll (e) {
      const windowTop = e.target.documentElement.scrollTop
      if (windowTop >= 0) this.setWindowTop(e.target.documentElement.scrollTop)
      console.log(this.windowTop)
    },
    onResize () {
      const scrollWidth = document.body.scrollWidth
      if (scrollWidth >= 0) this.setScrollWidth(scrollWidth)
      console.log(this.scrollWidth)
    },
    routerToHome () {
      this.$router.push({ name: 'home' })
    },
    handleMenuIconVisible () {
      this.menuIconVisible = !this.menuIconVisible
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
$header-bg-color: #484a50;
$mobile-header-bg-color: #eaeaea;

.my-header {
  width: 100%;
  height: $header-height;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 10000;
  transition: height .3s;
  background-color: rgba(73, 75, 80, .9);

  @media screen and (max-width: $i-view-lg-screen-width) {
    background-color: $mobile-header-bg-color;
  }

  &.scroll-top {
    height: $header-scroll-top-height;
  }

  &.mobile {
    height: $mobile-header-height;
  }
}

//.bg {
//  width: 100%;
//  height: 100%;
//  position: absolute;
//  left: 0;
//  right: 0;
//  top: 0;
//  bottom: 0;
//  background-color: $header-bg-color;
//  opacity: .9;
//  z-index: -1;
//
//  &.mobile {
//    background-color: $mobile-header-bg-color;
//    opacity: 1;
//  }
//}

.contact-info {
  min-width: 260px;
  margin: 20px 0 0 40px;
  text-align: left;
  font-size: 12px;
}

.logo {
  @include img-follow-height;
  cursor: pointer;
  height: 50px;
  margin-top: 10px;
  transition: height .3s;

  &.left {
    height: 40px;
    margin: 10px 0 0 40px;
  }

  &.mobile {
    height: 50px;
    margin-top: 7px;
  }
}

#nav {
  margin-top: 20px;
  transition: margin-top .3s;

  &.scroll-top {
    margin-top: 3px;
  }

  a {
    color: #e6e6e6;
    padding: 0 8px;
    font-size: 16px;

    &.router-link-exact-active {
      color: #fff;
      font-weight: bold;
    }
  }
}

.feature-buttons {
  text-align: right;
  margin: 13px 40px 0 0;
  transition: margin .3s;

  &.scroll-top {
    margin: 20px 40px 0 0;
  }

  &.mobile {
    margin: 12px 20px 0 0;
  }

  .text-buttons {
    margin-right: 10px;

    span {
      cursor: pointer;
      vertical-align: top;
      position: relative;
      top: 2px;
    }
  }

  i {
    @include feature-icon;
    margin-left: 8px;

    &.mobile {
      color: #000;
    }
  }
}

.menu-icon {
  @include feature-icon;
  color: #000;
  margin: 12px 0 0 20px;
}
</style>
