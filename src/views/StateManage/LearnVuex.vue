<!-- <script lang="ts" setup>
import { useStore } from 'vuex';
const store = useStore()
let num1 = computed(() => store.state.num1)
let total = computed(() => store.getters.total)
let userInfo = computed(() => store.state.user.userInfo)

const change = () => {
  store.commit('changeNum')
  // store.dispatch('test')
}

const changeUserInfo = () => {
  store.commit('changeInfo')
}

console.log(store.state.user.userInfo)
</script>

<template>
  <h1>num1: {{num1}}</h1>
  <h2>total: {{total}}</h2>
  <button @click="change">修改num1的值</button>
  <h3>userInfo: {{userInfo}}</h3>
  <button @click="changeUserInfo">修改userInfo</button>
</template>

<style lang="less" scoped>
</style> -->