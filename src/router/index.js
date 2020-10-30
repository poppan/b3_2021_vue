import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    props: true
  },
  {
    path: '/user',
    name: 'client',
    // component: Home
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/User.vue'),
    }
  },
  {
    // utilisation de pattern pour affectation de params, i.E /user/25 => $route.params.user = 25


    //  ## CHEMINS IMBRIQUES ##

    /*
    path = lat long / coord geo
    name = nom de la ville

    Prenons de cas de Paris -> Lyon -> Marseille
    https://www.google.fr/maps/dir/Paris/Marseille/@46.0580098,1.5910633,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!2m2!1d2.3522219!2d48.856614!1m5!1m1!1s0x12c9bf4344da5333:0x40819a5fd970220!2m2!1d5.36978!2d43.296482!3e0
     */


    path: '/user/:user_id', // autoroute [A6]


    // -> /user/25 => $route.params.user = 25
    // -> (pattern/motif)                 /color/:color_value
    // => (uri)                 http://.../color/rouge
    // => (params) $route.params.color_value = "rouge"

    // component: user detail
    // name: 'userdetail',
      components: {
        default: () => import(/* webpackChunkName: "home" */ '../views/User.vue'),
      },
      children: [
        {
          // la ca repond si j'appelle http://localhost:8080/user/xxxx

          path: '', // pas de suite, donc fin de l'[A6]  = lyon
          name: 'userdetail',
          components: {
            default: () => import(/* webpackChunkName: "home" */ '../views/User/UserDetail.vue'),
          },
          // transfert de props a la view, /!\ il faut que la view les autorise
          props: {
            saucisse: 'lyon'
          },
        },
        {
          // la ca repond si j'appelle http://localhost:8080/user/xxxx/action/yyy
          path: 'action/:action',  // ensuite emprunter l'[A7] = Marseille
          name: 'userdetailaction',
          components: {
            default: () => import(/* webpackChunkName: "home" */ '../views/User/UserDetailAction.vue'),
          },
          props: {
            saucisse: 'marseille'
          },
        }
      ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
