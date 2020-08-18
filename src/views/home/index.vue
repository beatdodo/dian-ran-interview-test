<template>
  <div class="home">
    <carousel></carousel>
    <feature></feature>
    <highlight></highlight>
    <product :title="'Ponti\'s top picks'" :data="topPicksJson.data"></product>
    <product :title="'New arrival...'" :data="topPicksJson.data"></product>
    <newsletter></newsletter>
  </div>
</template>

<script>
import carousel from '@/views/home/carousel'
import feature from '@/views/home/feature'
import highlight from '@/views/home/highlight'
import product from '@/views/home/product'
import newsletter from '@/views/home/newsletter'
import topPicksJson from '../../json/top-picks.json'

export default {
  name: 'home',
  data () {
    return {
      topPicksJson
    }
  },
  components: {
    carousel,
    feature,
    highlight,
    product,
    newsletter
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.home {
  width: 100%;
  margin-bottom: -60px;
}
</style>
