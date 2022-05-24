<script lang="ts" setup>
import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'
let tabelist = reactive([
  {id: 0, name: 'A准备让好面试题', com: markRaw(A)},
  {id: 1, name: 'B准备好简历', com: markRaw(B)},
  {id: 2, name: 'C准备好项目', com: markRaw(C)}
])

let currComp = reactive({
  com: A
})

const change = (index: number) => {
  currComp.com = tabelist[index].com
}
</script>

<template>
  <ul>
    <li @click="change(item.id)" v-for="item in tabelist" :key="item.id">{{item.name}}</li>
  </ul>
  <div class="container">
    <component :is="currComp.com"></component>
  </div>
</template>

<style lang="less" scoped>
ul li {
  display: inline-block;
  margin: 0 10px;
  border: 1px solid #ccc;
}
</style>