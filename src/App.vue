<template>
  <div id="app">
    <Header></Header>
    <!-- emplacement du contenu rendu par le routeur -->

    <div class="content">
      <router-view/> <!-- name="default" -->
      <router-view name="main"/>
      <router-view name="aside"/>
    </div>

    <!-- mon magnifique footer -->

    <div class="container-fluid">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {

    }
  },
   methods: {
    ...mapActions([
      'retrieveUser'
    ]),
  },
  // beforeCreate(){
  //   this.$store.dispatch('retrieveUser')
  //   // ici, this.retrieveUser() ne marcherai pas car le mapActions n'est pas encore effectif avant la creation du composant
  // },
  created () {
    this.retrieveUser()
  }
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/

  > header {
    background: #42b983;
  }

  > .content {
    background: darkgray;
  }

  > footer {
    background: bisque;
  }
}
</style>
