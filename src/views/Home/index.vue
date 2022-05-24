<template>
  <h1>{{obj}}</h1>
  <h2>{{msg}}</h2>
  <h2>{{msgChange}}</h2>
  <input type="text" v-model="text">
  <input type="text" v-model="obj.c">
  <button @click="btn">update</button>
  <HomeChild :nums="nums" @change="change" @update="update"/>  
</template>

<script lang="ts" setup>
import HomeChild from './components/HomeChild.vue'

const msg = ref('11111')
const obj = reactive({a: 1, b: 2, c: [1,2,3]})
const text = ref("3333")
const nums = reactive([5,10,30,9,8])

let { a, b } = toRefs(obj)

const msgChange = computed(() => {
  return msg.value.slice(1,2)
})

const btn = () => {
  console.log(a,b)
  a.value = 4
  msg.value = "222222"
}

const change = function(id:number, name:string) {
  console.log(id, name)
}

const update = function(value:string) {
  console.log(value)
}

watch([text,obj],( newVal, oldVal ) => {
  console.log(newVal, oldVal)
})

</script>

<style lang="less" scoped>
</style>