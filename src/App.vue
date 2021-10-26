<template>
  <div class="app-container" :class="[theme, fullScreen ? null : 'min']">
    <div class="app-container__header">
      <div class="app-container__header__logo" >
        <!-- <app-logo></app-logo> -->
      </div>
      <div class="app-container__header__nav">
        <!-- <app-header></app-header> -->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { connect } from '@/lib'

export default connect (() => {
  return {
    theme: 'theme',
    fullScreen: 'fullScreen',
  }
},{})({
  name: 'app-container',
  mounted() {
    console.log(this.$router.options.routes);
  }
})

</script>

<style lang="less">
.app-container-home {
  height: 100%;
  overflow: auto;
  .app-home__config {
    float: right;
  }
}
</style>
