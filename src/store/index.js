import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: { // data
    prenom: "mon prenom",
    nom: "mon nom"
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
