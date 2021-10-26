<template>
  <div class="app-container-manage">
    <div class="app-container__side">
      <div class="app-container__side__menu">
        <app-side>
          <app-menu></app-menu>
        </app-side>
      </div>
    </div>
    <div class="app-container__main">
      <div class="app-container__main__crumbs">
        <app-crumbs></app-crumbs>
      </div>
      <div class="app-container__main__content">
        <router-view></router-view>
      </div>
      <div class="app-float-window">
      </div>
    </div>
  </div>
</template>
<script>
import { connect } from '@/lib'
import appSide from '@/components/side'
import appCrumbs from '@/components/crumbs'
import appMenu from '@/components/menu'

export default connect(
  () => ({
  }),
  {
  }
)({
  name: 'app-manage',
  components: {
    appSide,
    appCrumbs,
    appMenu
  },
  data() {
    return {
      showDialog: false,
      isRes: false
    }
  },
  beforeMount() {
    console.log('welcome');
  }
})
</script>
<style lang="less">
  .app-container-manage {
    height: 100%;
    overflow: hidden;
  }
  .app-float-window {
    width: 100%;
    background: rgba(255, 255, 255, .8);
    position: absolute;
    top: 50px;
    z-index: 99;
  }
</style>

