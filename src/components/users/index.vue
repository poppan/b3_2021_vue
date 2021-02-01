<template>



  <div class="hello">
    <hr/>
    VUEX $store : {{ $store.state.prenom }} - {{ $store.state.nom }}
    <hr/>
    VUEX mapState: {{ prenom }} - {{ nom }}
    <hr/>
    Change prenom avec methode locale qui appelle l'action
    <button @click="callStoreActionChangePrenom({prenom:'saucisse', nom: 'merguez'})"> change prenom </button>

    <hr/>
    Change prenom avec mapActions
    <button @click="updateUser({prenom:'poney', nom: 'club'})"> change prenom </button>
    <hr/>

  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  name: 'userprout',
  components : {

  },
  props: {
    msg: String
  },
  computed : {
    ...mapState([
      'prenom',
      'nom'
    ])
  },
  methods : {
    ...mapActions([
      'updateUser'
    ]),

    callStoreActionChangePrenom(payload){
      this.$store.dispatch('updateUser', payload)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
