<template>
  <div class="home row">

    <div class="col-12">

      <h1>{{ $route.params.msg }}</h1>
      <h1>{{ $route.params.saucisse }}</h1>

      <button class="btn btn-primary" @click="$router.push('User')">User button</button>
      <button class="btn btn-primary" v-on:click="$router.push('User')">User button</button>


      <InputBlock monAttribut="YOLO">
        <h1 slot="header">Head</h1>
        <p>kdsjlksdjlkdfjlksdjdsfjklsd</p>
        <aside slot="footer">Foot</aside>
        <aside slot="poney">Hiiii</aside>
      </InputBlock>
    </div>

  </div>
</template>

<script>

import InputBlock from "@/components/InputBlock"

export default {
  name: 'Home',
  components : {
    InputBlock
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
