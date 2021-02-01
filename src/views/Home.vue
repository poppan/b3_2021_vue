<template>
  <div class="home row">
    <Pano source="plop.jpg" style="height:20rem;"></Pano>
    <div class="container">
      <div class="col-12">

        <h1>{{ $route.params.msg }}</h1>
        <h1>{{ $route.params.saucisse }}</h1>

        <button class="btn btn-primary" @click="$router.push('User')">User button</button>
        <button class="btn btn-primary" v-on:click="$router.push('User')">User button</button>


        <UserEditUpdate monAttribut="YOLO">
          <h1 slot="header">header envoyé depuis Home.vue</h1>
          <p>*default* envoyé depuis Home.vue</p>
          <aside slot="footer">*footer* envoyé depuis Home.vue</aside>
          <aside slot="poney">*poney* envoyé depuis Home.vue</aside>
        </UserEditUpdate>

        <!--        liste du tablo-->
        <p>liste des entrées de "montablo" </p>
        <ul class="list-group">
          <li class="list-group-item" v-for="(elt, idx) in monTablo" v-bind:key="idx">{{ elt }}</li>
        </ul>
        <!--        liste des props de l'objet-->
        <!--      <p>liste des propriétés de "monObjet" </p>-->
        <!--      <ul class="list-group">-->
        <!--        <li class="list-group-item" v-for="(value, key) in monObjet" v-bind:key="key">{{key}} : {{value}}</li>-->
        <!--      </ul>-->

        <!--        liste des props de l'objet-->
        <p>liste des entrées de "monObjet" </p>
        <dl>
          <div v-for="(value, key) in monObjet" :key="key">
            <dt>{{ key }}</dt>
            <dd>{{ value }}</dd>
          </div>
        </dl>

      </div>
    </div>
  </div>
</template>

<script>
import {Pano} from 'vuejs-vr'
import UserEditUpdate from "@/components/users/edit_update"

export default {
  name: 'Home',
  components: {
    Pano,
    UserEditUpdate
  },
  props: {
    msg: String,
    saucisse: String
  },
  data () {
    return {
      monObjet: {
        prop1: 'toto',
        prop2: 'tata',
        prop3: 'titi',
        prop4: 'tutu'
      },
      monTablo: [
        'plip',
        'plop',
        'plap',
        'plup'
      ]
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
