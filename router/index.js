import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main
    }
  ]
})
