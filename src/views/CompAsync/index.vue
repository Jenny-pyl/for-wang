<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'
import B from './components/B.vue'

const C = defineAsyncComponent( () => import('./components/C.vue'))
const A = defineAsyncComponent( () => import('./components/A.vue'))

const target = ref(null)
const targetIsVisible = ref(false)
const { stop } = useIntersectionObserver(
  target,
  ([{isIntersecting}]) => {
    if(isIntersecting) {
      targetIsVisible.value = isIntersecting
    }
  }
)
</script>

<template>
  <Suspense>
    <template #default>
      <A/>
    </template>
    <template #fallback>
      加载中.......
    </template>
  </Suspense>
  <B/>

  <div ref="target">
    <Suspense v-if="targetIsVisible">
      <template #default>
        <C/>
      </template>
      <template #fallback>
        加载中.....
      </template>
    </Suspense>
  </div> 
  <!-- <div ref="target">
    <C v-if="targetIsVisible"/>
  </div> -->
</template>

<style lang="less" scoped>
</style>