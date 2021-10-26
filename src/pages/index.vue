<template>
  <div class="app-container-home app-padding">
    <h1 style="font-size: 48px; text-align: center; margin-top: 100px;"></h1>
  </div>
</template>
<script>
import { connect } from '@/lib'

export default connect (() => {
  return {
    name: 'test/name'
  }
},{})({
  name: 'app-home',
  data() {
    return {

    }
  },
  beforeMount() {
    console.log('欢迎来到kiwi-vue2.0', this.name);
  }
})

</script>
