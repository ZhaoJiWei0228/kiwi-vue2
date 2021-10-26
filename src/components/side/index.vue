<template>
  <div class="side-panel">
    <slot></slot>
    <div class="side-panel__oper">
      <i @click="changeFullScreen"
         class="iconfont icon-icon--1"
         :class="fullScreen ? 'icon-icon--1' : 'icon-icon--2'"></i>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app-side',

  computed: {
    ...mapState(['fullScreen'])
  },

  components: {
  },

  methods: {
    ...mapActions({
      changeFullScreen: 'updateFullScreen'
    })
  }
}
</script>
<style lang="less">
.side-panel {
  height: 100%;
  padding-bottom: 50px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  &__oper {
    height: 50px;
    line-height: 50px;
    text-align: center;
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   right: 0;
    .iconfont {
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>

