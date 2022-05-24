<script lang="ts" setup>
import mixin from '@/mixins/mixin'
console.log(mixin())
let { num, fav, favBtn}  = {...mixin()}
</script>

<template>
  <h3>A组件</h3>
  <p>{{num}}</p>
  <p>{{fav}}</p>
  <button @click="favBtn">
    {{fav? '收藏中...': '收藏'}}
  </button>
</template>

<style lang="less" scoped>
</style>