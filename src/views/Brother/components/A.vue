<script lang="ts" setup>
import emitter from '@/plugins/Bus';
let str = ref("A组件数据")

const btn = () => {
  emitter.emit('fn',str)
}
</script>

<template>
  <h1>AAAAAAAAAA</h1>
  <button @click="btn">A传给B</button>
</template>

<style lang="less" scoped>
</style>