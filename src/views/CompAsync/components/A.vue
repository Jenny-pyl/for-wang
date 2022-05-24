<script lang="ts" setup>
import axios from 'axios'
let list = ref([])
let res = await axios({
  method: 'GET',
  url: 'http://testapi.xuexiluxian.cn/api/slider/getSliders'
})
list.value = res.data.data.list

</script>

<template>
  <div class="dv">
    <h4>A组件</h4>
    {{list}}
  </div>
</template>

<style lang="less" scoped>
.dv {
  height: 800px;
  width: 100%;
  background-color: skyblue;
}
</style>