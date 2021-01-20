import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: { // data
    prenom: "toto",
    nom: "yolo"
  },
  mutations: {
    UPDATE_PRENOM (state, payload) {
      return state.prenom = payload.prenom
    },
    UPDATE_NOM (state, payload) {
      return state.nom = payload.nom
    }
  },
  actions: {
    updateNomPrenom (context, payload) {
      context.commit('UPDATE_PRENOM', payload)
      context.commit('UPDATE_NOM', payload)
    }
  }
})

export default store
