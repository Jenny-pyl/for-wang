<template>
  <div>
    <p>子：{{num}}</p>
    <button @click="change">点击更改num</button>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  num: number
}>()

const emit = defineEmits(['update:num'])

const change = () => {
  emit('update:num',200)
}
</script>

<style lang="less" scoped>
</style>