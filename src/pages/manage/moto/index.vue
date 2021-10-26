<template>
  <div>
    摩托车
  </div>
</template>
<script>
import { connect } from '@/lib'

export default connect (() => {
  return {
    name: 'test/name'
  }
},{})({
  name: 'moto'
})

</script>
