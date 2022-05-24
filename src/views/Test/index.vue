<script lang="ts" setup>
import TestChild from './components/TestChild.vue'
const num = ref(123)
</script>

<template>
  <p>父： {{num}}</p>
  <TestChild v-model:num="num"/>
</template>


<style lang="less" scoped>
</style>