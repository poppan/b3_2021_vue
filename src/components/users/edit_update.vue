<template>

  <!-- en vue 2.x on n'a qu'un element racine dans un template -->
  <form class="passwordForm" @submit.prevent.stop="faitProut" style="border: 2px solid lime">
    <!-- preventDefault() && stopPropagation()-->
    <h1> components/user/edit-update.vue </h1>
    <p>dans le source il y a un petit code CSS en SCSS </p>
    <div class="form-group">

      <!--        prend le contenu declaré dans le composant parent pour ce tag-->
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
      <slot name="poney"></slot>

      <pre>
        <code>
          Shorthand/raccourci pour v-on: => @
          Shorthand/raccourci pour v-bind: => :
        </code>
      </pre>

      <label for="passwordForm__input">
        mon label trop bi1
        {{ monAttribut }}
        {{ maVariableQuiReprendMonAttribut }}
        {{ avecProut }}
      </label>

      <input
          name="passwordForm__input"
          placeholder="poneyclubdu22"
          class="form-control"
          v-bind:class="{'passwordForm__input--error' : is_error}"
          v-model="maVariableQuiReprendMonAttribut"
      />

      <small class="form-text text-muted">
        {{ maVariableFaitPlusDe5Chars ? 'ca va c assez long' : 'trop court' }}
      </small>

      <small class="form-text text-muted" v-if="maVariableFaitPlusDe5Chars">
        trop court
      </small>
      <small class="form-text text-muted" v-else>
        ca va c assez long
      </small>
      <small class="form-text text-muted" v-if="monAttribut == null || monAttribut == ''">
        vide
      </small>
      <small class="form-text text-muted">
        pas de message
      </small>
      <button type="submit" class="btn btn-primary">fait Prout</button>
    </div>
  </form>
  <!--           Convention BEM -->
  <!--            Block__Element&#45;&#45;Modifier
              casing :
              - snake : machin_truc
              - kebab : machin-truc
              - camel : machinTruc
              - pascal: MachinTruc

              en General, on nomme les "Classes" en PascalCase et les "Instances" en camelCase
              i.E :
              // PHP // var monTablo = new Array();

              let string = new String() //
              let bigMac = new BigMac() // "bigMac" est une instance de la classe "BigMac"
              let bigMac = new BigMac() // "bigMac" est cree a partir de la recette du "BigMac"

              Apparté : GoF (Gang of Four) *Design Patterns*

              let number = 25
              number.toString() // une methode est une instance de Function-->


  <!--    SUBMIT (event)-->
  <!--    empecher l'evenement par defaut => preventDefault()-->
  <!--    quand SUBMIT alors preventDefault()-->

  <!--    en vue 3.x on peut en avoir plusieurs-->
</template>

<script>
export default {
  name: 'UserEditUpdate',
  // props recupere les données transmises en tant qu'attribut par le composant parent
  // i.E <InputBlock monAttribut="Valeur transmise" />
  props: {
    monAttribut: String
  },
  // ne jamais faire ca :
  /*
    data: {
    },
  */
  // data = données
  // manipuler les données
  // MVC / MVVM / MVW
  data () {
    return {
      maVariableQuiReprendMonAttribut: ' DATA INIT ',
      is_error: false
    }
  },
  // traite les fonctions d'affichage des données
  /*
    1000 => 1000,00
    1 000 => 1000,00
    1,000 => 1,00
  */
  computed: {
    avecProut: function () {
      return this.maVariableQuiReprendMonAttribut + " COMPUTED "
    }
  },
  // surveille les variables de la couche data et declenche une action si elles changent
  watch: {
    maVariableQuiReprendMonAttribut: function (newVal, oldVal) {
      if (oldVal !== newVal) {
        console.log('OK les nouvelles valeurs sont différentes')
      } else {
        console.log('hey ho t\'as ecrit la meme chose')
      }
    }
  },

  // *lifecycle*
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    maVariableFaitPlusDe5Chars () {
      if (this.maVariableQuiReprendMonAttribut.length > 5) {
        return true
      }
      return false
    },
    faitProut () {
      // this.monAttribut += " PROUT1 "
      this.maVariableQuiReprendMonAttribut += " FAIT PROUT "
    },
    // function *classique*
    // - dans la fct classique le *this* est le contexte d'appel'
    // - Kevin né en vendée vit a paris
    // ici (this place) => paris
    nomDeMethodeClassique: function (arg) {
      return (arg + 1)
    },
    // function flechée
    // - dans la fct flechée le *this* est le contexte de declaration
    // dans la fonction fléche il y a un retour par defaut, i.E return ()
    // - Kevin né en vendée vit a paris
    // ici (this place) => vendée
    nomDeMethodeFlechée: (arg) => {
      arg + 1
    },
    nomDeMethodeFlechéeSimplifiée: arg => arg + 1,

  }
}


</script>
<!--

<style lang="scss" scoped>
    .passwordForm{
        color: #2c3e50;
    }


    .bigmac {
        color : white;
        &:hover{
            font-weight : 600;
        }
        &__pain {
            color : bisque;
        }
        &__sauce {
            color : orange;
        }
        &__steak {
            color : brown;
            &&#45;&#45;moisi{
                color : lime;
            }
        }
        &__cornichon {
            color : green;
            &:hover{
                transition : all .25s ease;
                font-size : 8rem;
            }
            &&#45;&#45;error{
                color: red;
            }
        }
    }


    /*CSS : Cascading Stylesheet*/
    /*notion d'heritage : element enfant *herite* des propriétés de son/ses parents*/

    /*<div class="toto">*/
    /*    <div class="machin">*/
    /*        Coucou*/
    /*    </div>*/
    /*</div>*/
    /*<style>*/
    /*.toto {*/
    /*    color : aliceblue;*/
    /*}*/
    /*.machin {*/
    /*    color : bisque;*/
    /*}*/
     </style>


    /*
        si un style est scoped il ne s'applique qu'au bloc d'execution (composant en cours)
        scope = portée
        var vs let & const


        var n'est pas scoped proprement ===> hoisting
        :: hoisting ::

        // JS a l'ancienne
        function toto(){
            // (ici , machin existe)

            console.log(machin); // ====> undefined : existe mais on sait pas ce que c'est
            console.log(truc); // ====> undefined : existe mais on sait pas ce que c'est
            console.log(bidule); // ====> ERROR : NOT DEFINED

            var machin = "yolo";

            for (var i = 0; i > 5 ; i++){
                var truc = "yolo";
            }

            function tata (){
                var bidule = "pouet";
            }
        }


    */

</style>
-->
