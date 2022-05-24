import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home/index.vue")
    },
    {
      path: '/test',
      name: "test",
      component: () => import("@/views/Test/index.vue")
    },
    {
      path: '/brother',
      name: 'brother',
      component: () => import("@/views/Brother/index.vue")
    },
    {
      path: '/compActive',
      name: 'compActive',
      component: () => import("@/views/CompActive/index.vue")
    },
    {
      path: '/compAsync',
      name: 'compAsync',
      component: () => import("@/views/CompAsync/index.vue")
    },
    {
      path: '/learnVuex',
      name: 'learnVuex',
      component: () => import("@/views/StateManage/LearnVuex.vue")
    },
    {
      path: '/',
      name: 'learnPinia',
      component: () => import("@/views/StateManage/LearnPinia.vue")
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next)
// })
export default router