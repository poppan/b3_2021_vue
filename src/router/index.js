import Vue from 'vue'
import VueRouter from 'vue-router'

//import UsersRoutes from '@/components/users/routes'

Vue.use(VueRouter)

const routes = [

  // spread/apply
  //...UsersRoutes,

  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
      default : () => import(/* webpackChunkName: "home" */ '../views/HelloWorld.vue'),
    }
  },

  // {
  //   path: '/user/:user_id/action/:action',
  //   name: 'user',
  //   // component: Home
  //   components: {
  //     default : () => import(/* webpackChunkName: "home" */ '../views/HelloWorld.vue'),
  //   },
  //   props:{
  //     saucisse : 'toulouse'
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/*
router.beforeEach( (to, from, next) => {
  if (to.meta.requireAuth === true) {
    //la je vrifie si il est authentifié
    let isAuthenticated = 1
    if(isAuthenticated){
      next()
    }else{
      next('/users/login')
    }
  }
})
*/
export default router
