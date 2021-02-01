<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/"><img alt="Logo" src="@/assets/logo.png" class="d-inline-block align-top"
                                    style="max-height:2rem;"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown text="Liens Home" :class="$route.path == '/'?' active':''">
<!--            <b-nav-item-dropdown text="Liens Home" :class="if ($route.path == '/') { return 'active'} else { return ''}">-->
            <b-dropdown-item exact-active-class=" active" to="/">Home to="/"</b-dropdown-item>
            <b-dropdown-item exact-active-class=" active" :to="'/'">Home :to="'/'"</b-dropdown-item>
            <b-dropdown-item exact-active-class=" active" v-bind:to="{path: '/'}">Home v-bind:to="{path: '/'}"</b-dropdown-item>
            <b-dropdown-item exact-active-class=" active" v-bind:to="{name: 'Home'}">Home v-bind:to="{name: 'Home'}"</b-dropdown-item>
            <b-dropdown-item exact-active-class=" active" :to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}">Home :to="{name: 'Home',
              params: {saucisse : 'Saucisse en param'}}"
            </b-dropdown-item>
            <!--
            <b-nav-item-dropdown :class="$route.path == '/' ? ' active' : ''" text="Liens Home">
            <b-dropdown-item exact-active-class=" active" to="/">Home to="/"</b-dropdown-item>
            <router-link class="nav-link" to="/">Home to="/" </router-link> |<br/>
            <router-link class="nav-link" :to="'/'">Home :to="'/'"</router-link> |<br/>
            <router-link class="nav-link" v-bind:to="{path: '/'}">Home v-bind:to="{path: '/'}"</router-link> |<br/>
            <router-link class="nav-link" v-bind:to="{name: 'Home'}">Home v-bind:to="{name: 'Home'}"</router-link> |<br/>
            <router-link class="nav-link" :to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}">Home v-bind:to="{name: 'Home', params: {saucisse : 'Saucisse en param'}}"</router-link> |<br/>
            -->
          </b-nav-item-dropdown>

          <b-nav-item to="/users" exact-active-class=" active">Userprout Vuex</b-nav-item>

          <b-nav-item @click="testLocalstorage">Herisson plat ?</b-nav-item>


          <b-nav-item href="#">Lien a l'ancienne</b-nav-item>
          <b-nav-item href="#" disabled>Lien desactivé</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent.stop="subscribeEmail">
            <b-form-input size="sm" class="mr-sm-2" placeholder="email" id="subscriberEmail"
                          v-model="subscriber.email" @keyup="liveEmailCheck" ></b-form-input>

            <b-button size="sm" class="my-2 my-sm-0" type="submit">Subscribe</b-button>
<!--            <b-tooltip ref="subscriberEmailTooltip" target="subscriberEmail" :triggers="'manual'"-->
<!--                       :show="subscriber.error">-->
<!--              {{ subscriber.errorMessage }}-->
<!--            </b-tooltip>-->
          </b-nav-form>

          <b-nav-item-dropdown text="Consommation endpoints">
            <b-dropdown-item @click="fetchGetUrl('https://api.coindesk.com/v1/bpi/currentprice.json')">fetch</b-dropdown-item>
            <b-dropdown-item @click="axiosGetUrl('https://api.coindesk.com/v1/bpi/currentprice.json')">axios</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar variant="info" src="https://picsum.photos/20/20" size="2rem"></b-avatar>&nbsp;
              <em>{{ prenom }} - {{ nom }}</em>
            </template>
            <b-dropdown-item exact-active-class=" active" to="/users">to="/users"</b-dropdown-item>
            <b-dropdown-item exact-active-class=" active" to="/users/monUserId1">to="/users/monUserId1"</b-dropdown-item>
            <b-dropdown-item exact-active-class=" active" to="/users/monUserId2/action/monActionDeUser">
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
</template>

<script>
import {mapActions, mapState} from "vuex"
import axios from "axios"

export default {
name: "Header",
  data () {
    return {
      subscriber: {
        email: ''
      }
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
      'retrieveUser',
      'updateUser'
    ]),
    subscribeEmail(){
      // ici je peux acceder a data => this.subscriber.email
      // test avec un REGEX : EXPRESSION REGULIERE
      // KEN / DENIS
      if (this.subscriber.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        // alert('C SUPER !')
        this.fetchRandomUser()
      }else{
        alert('CHEH')
      }
    },
    liveEmailCheck(){
      if (this.subscriber.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        console.log('!W00T!')
      }else{
        console.log('MEH')
      }
    },
    testLocalstorage(){
      localStorage.setItem('herisson', 'plat')
    },
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
    },
    async fetchRandomUser () {
      axios
          .get('https://api.name-fake.com/english-united-states/female/')
          .then(response => response.data) // axios par défaut va traiter le response json en fonction du type et le mettre dans "data"
          .then(data => {
            console.log(data)
            this.updateUser({
              'nom': data.results.name.last,
              'prenom': data.results.name.first
            })
          });
    }


  },
}
</script>

<style scoped>

</style>
