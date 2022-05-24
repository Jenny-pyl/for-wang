<script lang="ts" setup>
import { useStore } from '@/store/index';
const store = useStore()
console.log(store)
let counter = store.counter
</script>

<template>
  <h1>{{counter}}</h1>
</template>

<style lang="less" scoped>
</style>