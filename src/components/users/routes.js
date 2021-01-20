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
    name: 'usersprout',
    components: {
      // NomDeComposant
      default: () => import(/* webpackChunkName: "home" */ '@/components/users/userprout.vue'),
    },

    children: [
      {
        path: '/plop',
        name: 'usersprout',
        components: {
          default: () => import(/* webpackChunkName: "home" */ '@/components/users/userprout.vue'),
        },
        meta: {
          requireAuth : true
        },
      }
    ]
  }
]
