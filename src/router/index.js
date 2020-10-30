import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
      default : () => import(/* webpackChunkName: "home" */ '../views/HelloWorld.vue'),
    }
  },
  {
    path: '/user/:user_id/action/:action',
    name: 'user',
    // component: Home
    components: {
      default : () => import(/* webpackChunkName: "home" */ '../views/HelloWorld.vue'),
    },
    props:{
      saucisse : 'toulouse'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
