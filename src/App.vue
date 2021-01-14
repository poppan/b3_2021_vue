<template>
  <div id="app">
    <hr/>
    [APP] VUEX mapState: {{ prenom }} - {{ nom }}
    <hr/>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  computed : {
    ...mapState([
      'prenom',
      'nom'
    ])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
