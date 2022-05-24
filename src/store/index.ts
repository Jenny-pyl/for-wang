//1.vuex
// import { createStore} from 'vuex'
// import user from "./modules/user"

// import persistedState from 'vuex-persistedstate'

// export default createStore({
//   state: {
//     num1: 10,
//     num2: 20,
//     str: '这是store数据'
//   },
//   getters: {
//     total(state) {
//       return state.num1 + state.num2
//     }
//   },
//   mutations: {
//     changeNum(state) {
//       state.num1 = 20
//     }
//   },
//   actions: {
//     test() {
//       alert(1)
//     }
//   },
//   modules: {
//     user
//   },
//   //配置vuex中数据持久化存储的插件
//   plugins: [persistedState({
//     key: 'Jenny',
//     paths: ['user']
//   })]
// })


//2.pinia
import { defineStore } from "pinia";
export const useStore = defineStore('storeId',{
  state: () => {
    return {
      counter: 0,
      name: 'Jenny'
    }
  },
  getters: {},
  actions: {}
})