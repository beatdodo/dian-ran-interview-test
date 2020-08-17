<template>
  <div class="home">
    <carousel></carousel>
    <feature></feature>
    <highlight></highlight>
    <newsletter></newsletter>
  </div>
</template>

<script>
import carousel from '@/views/home/carousel'
import feature from '@/views/home/feature'
import highlight from '@/views/home/highlight'
import newsletter from '@/views/home/newsletter'

export default {
  name: 'home',
  components: {
    carousel,
    feature,
    highlight,
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
