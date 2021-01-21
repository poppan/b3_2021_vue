<template>
  <div id="app">
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"><img alt="Logo" src="./assets/logo.png" class="d-inline-block align-top"
                                      style="max-height:2rem;"></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item-dropdown text="Liens Home">
              <b-dropdown-item to="/">Home to="/"</b-dropdown-item>
              <b-dropdown-item :to="'/'">Home :to="'/'"</b-dropdown-item>
              <b-dropdown-item v-bind:to="{path: '/'}">Home v-bind:to="{path: '/'}"</b-dropdown-item>
              <b-dropdown-item v-bind:to="{name: 'Home'}">Home v-bind:to="{name: 'Home'}"</b-dropdown-item>
              <b-dropdown-item :to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}">Home :to="{name: 'Home',
                params: {saucisse : 'Saucisse en param'}}"
              </b-dropdown-item>
              <!--
              <router-link class="nav-link" to="/">Home to="/" </router-link> |<br/>
              <router-link class="nav-link" :to="'/'">Home :to="'/'"</router-link> |<br/>
              <router-link class="nav-link" v-bind:to="{path: '/'}">Home v-bind:to="{path: '/'}"</router-link> |<br/>
              <router-link class="nav-link" v-bind:to="{name: 'Home'}">Home v-bind:to="{name: 'Home'}"</router-link> |<br/>
              <router-link class="nav-link" :to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}">Home v-bind:to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}"</router-link> |<br/>
              -->
            </b-nav-item-dropdown>

            <b-nav-item to="/users">Userprout Vuex</b-nav-item>


            <b-nav-item href="#">Lien a l'ancienne</b-nav-item>
            <b-nav-item href="#" disabled>Lien desactivé</b-nav-item>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">pouet</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Consommation endpoints">
              <b-dropdown-item @click="fetchGetUrl('https://api.coindesk.com/v1/bpi/currentprice.json')">fetch</b-dropdown-item>
              <b-dropdown-item @click="axiosGetUrl('https://api.coindesk.com/v1/bpi/currentprice.json')">axios</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar variant="info" src="https://picsum.photos/20/20" size="2rem"></b-avatar>&nbsp;
                <em>{{ prenom }} - {{ nom }}</em>
              </template>
              <b-dropdown-item to="/users">to="/users"</b-dropdown-item>
              <b-dropdown-item to="/users/monUserId1">to="/users/monUserId1"</b-dropdown-item>
              <b-dropdown-item to="/users/monUserId2/action/monActionDeUser">
                to="/users/monUserId2/action/monActionDeUser"
              </b-dropdown-item>
              <!--
              <router-link class="nav-link" to="/user">user</router-link>
              <router-link class="nav-link" to="/user/monUserId1">user detail</router-link>
              <router-link class="nav-link" to="/user/monUserId2/action/monActionDeUser">user detail action</router-link>
              -->
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <!-- emplacement du contenu rendu par le routeur -->

    <div class="content">
      <router-view/> <!-- name="default" -->
      <router-view name="main"/>
      <router-view name="aside"/>
    </div>

    <!-- mon magnifique footer -->

    <div class="container-fluid">
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="./assets/logo.png" alt="" width="24" height="24">
            <small class="d-block mb-3 text-muted">&copy; 2021</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  components: {},
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'prenom',
      'nom'
    ]),
  },
  methods: {
    ...mapActions([
      'updateUser'
    ]),
    // ou on peut faire un appel a l'action mais bof...
    callStoreActionChangeUser(payload){
      this.$store.dispatch('updateUser', payload)
    },

    // async permet de declarer une fonction comme asynchrone,
    async fetchGetUrl (endpoint) {
      const request = new Request(
          endpoint,
          {
            method: "GET",
            mode: "cors",
            cache: "default",
            // body: JSON.stringify({'property': 'valeur'}) // body est le conteneur qui permet d'envoyer des infos a un POST
          }
      );

      const response = await fetch(request);
      const data = await response.json();
      console.log(data)

      /*
        ou bien encore :
          fetch(request)
            .then(response => response.json())
            .then(data => console.log(data));

        Mais il existe une difference entre les deux :
        - await f(x) => suspend l'execution et attend le retour dans la fonction
        - .then => on "empile" mais n'attend pas la fin pour continuer a faire des trucs
       */
      this.updateUser({
        'nom': data.bpi.USD.code,
        'prenom': data.bpi.USD.rate,

      })

      /* il est possible d'interrompre l'execustion dans le navigateur si vous avez les extensions vue-debug */
      // debugger // eslint-disable-line no-debugger
    },
    async axiosGetUrl (endpoint) {
      axios
        .get(endpoint)
        .then(response => response.data) // axios par défaut va traiter le response json en fonction du type et le mettre dans "data"
        .then(data => {
          console.log(data)
          this.updateUser({
            'nom': data.bpi.EUR.rate,
            'prenom': data.bpi.EUR.code
          })
        });
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
