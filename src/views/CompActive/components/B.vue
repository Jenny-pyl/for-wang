<script lang="ts" setup>
import mixin from '@/mixins/mixin'
let{num,fav} = {...mixin()}
</script>

<template>
  <h3>B组件</h3>
  {{num}}
</template>

<style lang="less" scoped>
</style>