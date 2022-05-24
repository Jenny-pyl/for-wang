<template>
  <p>父：</p>
  <p v-for="(item, index) in nums" :key="index">{{item}}</p>
  <!-- <button @click="clickThis">点击子传父亲</button> -->
</template>

<script lang="ts" setup>

const props = defineProps<{
  nums: Array<number>
}>()

const emit = defineEmits<{
  (e: 'change', id: number, name:string): void
  (e: 'update', value: string): void
}>()


const clickThis = () => {
  emit('change', 2, 'Jenny')
  emit('update', 'abc')
}

</script>

<style lang="less" scoped>
</style>