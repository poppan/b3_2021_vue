<template>
  <div class="userdetail">
    <h3>userdetail</h3>
    <br/>route param : {{ $route.params.user_id }}
    <br/>msg : {{msg}}
    <br/>saucisse : {{saucisse}}
  </div>
</template>

<script>


export default {
  name: 'UserDetail',
  components : {
  },
  props: {
    msg: String,
    saucisse : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  color: red;
}
</style>
