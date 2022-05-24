<script lang="ts" setup>
import emitter from '@/plugins/Bus';
let s = ref("")

onBeforeMount(() => {
  emitter.on('fn', (e) => {
    console.log(e)
    // s.value = e.value
  })
})
</script>

<template>
  <div id="container"></div>
  <h1>BBBBBBBBBBB</h1>
  {{s}}
  <teleport to="#container">
    <p>这是teleport中的数据</p>
  </teleport>
</template>

<style lang="less" scoped>
</style>