// import Vue from 'vue'




// import NomDeComposant from '@/components/users/userprout.vue'
/*

const toto = []
let tata = {}
let truc = function(){}

export {toto, tata, truc}
"exposer"


//--

import {toto} from '...'
*/

/*
let disney = ["mickey", "donald"]
let billet = ["moi"]
let douchka = [...disney, ...billet] // ==> ["mickey", "donald", "moi"]

let init = {souris:"mickey", canard:"donald"}
let override = {souris:"minnie"}

let surprise1 = {...init, ...override} // copy
let surprise2 = {...override, ...init}

*/




export default [
  {
    path: '/users',
    name: 'UsersIndex',
    components: {
      // NomDeComposant
      default: () => import(/* webpackChunkName: "users" */ '@/components/users/index.vue'),
    },
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


    path: '/users/:user_id', // autoroute [A6]

    // -> /users/25 => $route.params.user = 25
    // -> (pattern/motif)                 /color/:color_value
    // => (uri)                 http://.../color/rouge
    // => (params) $route.params.color_value = "rouge"

    components: {
      // la ca donne le composant parent
      default: () => import(/* webpackChunkName: "users" */ '@/views/User.vue'),
    },
    children: [
      {
        // la ca repond si j'appelle http://localhost:8080/user/xxxx

        path: '', // pas de suite, donc fin de l'[A6]  = lyon
        name: 'UserDetail',
        components: {
          default: () => import(/* webpackChunkName: "users" */ '@/components/users/detail.vue'),
          secondaire: () => import(/* webpackChunkName: "users" */ '@/components/users/detail.vue'),
        },
        // transfert de props a la view, /!\ il faut que la view les autorise
        props: {
          saucisse: 'lyon'
        },
      },
      {
        // la ca repond si j'appelle http://localhost:8080/user/xxxx/action/yyy
        path: 'action/:action',  // ensuite emprunter l'[A7] = Marseille
        name: 'UserDetailAction',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/components/users/detail_action.vue'),
        },
        props: {
          saucisse: 'marseille'
        },
      }
    ]
  }
]
