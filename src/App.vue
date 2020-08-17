<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <!--  Header  -->
    <my-header></my-header>
    <!--  分頁  -->
    <router-view/>
    <!--  Footer  -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/my-header'
import myFooter from '@/components/my-footer'

export default {
  name: 'app',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
