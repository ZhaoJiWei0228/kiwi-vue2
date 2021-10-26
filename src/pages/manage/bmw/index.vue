<template>
  <div>
    宝马宝马
  </div>
</template>
<script>
import { connect } from '@/lib'

export default connect (() => {
  return {
    name: 'test/name'
  }
},{})({
  name: 'bmw'
})

</script>
