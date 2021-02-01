<template>
  <div class="userdetailaction">
    kjsdflkjdfkljsdlkfjsdkljdfkljdslkfjklsdfjkldsfjkldfjslkjsdf
    <h3>userdetailaction</h3>
    msg : {{msg}}
    saucisse : {{saucisse}}
  </div>
</template>

<script>


export default {
  name: 'UserDetailAction',
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
