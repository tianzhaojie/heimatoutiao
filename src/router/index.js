import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
   {
    path:'/login',
    name: 'login',
    component:() => import('@/views/login/index.vue')//懒加载
   }
]

const router = new VueRouter({
  routes
})

export default router
