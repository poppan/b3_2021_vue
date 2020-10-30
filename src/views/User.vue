<template>
  <div class="user">

    <h1>OUECH C LA PAGE USER </h1>
    msg : {{msg}}
    saucisse : {{saucisse}}
    en dessous y'a un router-view

    <br/>
    <router-view />

  </div>
</template>

<script>


export default {
  name: 'User',
  components : {
  },
  props: {
    msg: String,
    saucisse : String
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
