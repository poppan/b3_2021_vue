<template>
  <div id="app">
    <header class="container-fluid">
<!--      <img alt="Vue logo" src="./assets/logo.png">-->
      <nav class="nav">
        <router-link class="nav-link" to="/">Home to="/" </router-link> |<br/>
        <router-link class="nav-link" :to="'/'">Home :to="'/'"</router-link> |<br/>
        <router-link class="nav-link" v-bind:to="{path: '/'}">Home v-bind:to="{path: '/'}"</router-link> |<br/>


        <router-link class="nav-link" v-bind:to="{name: 'Home'}">Home v-bind:to="{name: 'Home'}"</router-link> |<br/>
        <router-link class="nav-link" :to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}">Home v-bind:to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}"</router-link> |<br/>



        <router-link class="nav-link" to="/user">user</router-link> |
        <router-link class="nav-link" to="/user/monUserId1">user detail </router-link> |
        <router-link class="nav-link" to="/user/monUserId2/action/monActionDeUser">user detail action</router-link> |
      </nav>
    </header>

    <div class="container content">
      <router-view/> <!-- name="default" -->
      <router-view name="main"/>
      <router-view name="aside"/>
    </div>

  <footer class="container-fluid">
    footer de la win
  </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: function(){
    return {
      lyonOuMarseille : 48
    }
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

  > header{
    background: #42b983;
  }
  > .content{
    background: darkgray;
  }
  > footer{
    background: bisque;
  }
}
</style>
