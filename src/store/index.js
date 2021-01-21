import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: { // data
    prenom: "mon prenom",
    nom: "mon nom"
  },
  mutations: {
    RETRIEVE_PRENOM (state){
      if(localStorage.getItem('prenom')) {
        state.prenom = localStorage.getItem('prenom')
      }
    },
    UPDATE_PRENOM (state, payload) {
      localStorage.setItem('prenom', payload.prenom)
      return state.prenom = payload.prenom
    },
    RETRIEVE_NOM (state){
      if(localStorage.getItem('nom')) {
        state.nom = localStorage.getItem('nom')
      }
    },
    UPDATE_NOM (state, payload) {
      localStorage.setItem('nom', payload.nom)
      return state.nom = payload.nom
    }
  },
  actions: {
    retrieveUser (context) {
      context.commit('RETRIEVE_PRENOM')
      context.commit('RETRIEVE_NOM')
    },
    /**
     *
     * @param context
     * @param payload object {'nom' : '', 'prenom': ''}
     */
    updateUser (context, userObject) {
      context.commit('UPDATE_PRENOM', userObject)
      context.commit('UPDATE_NOM', userObject)
    }
  }
})

export default store
