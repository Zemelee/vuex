import Vue from 'vue'
import VueRouter from 'vue-router'
import X from '../views/X.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/x',
    name: 'x',
    component: X
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
