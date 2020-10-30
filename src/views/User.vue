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
<style lang="scss">
  // B_E-M
  /*

  priorité CSS : C'est le plus precis qui gagne
  - precision basse : tag <h3>
  - precision moyenne : classes .classe
  - precision elevée : identifiant id="xxx"
  - override : ligne de definition de style qui fini par !important
  */
  // variable
  $maCouleurDeBase: blueviolet;
  // mixins
  @mixin highlighted-text {
    font-size: 8rem;
  }
  // function/mixins
  @mixin size-text($size : 8) {
    font-size: ($size)+rem;
    margin: ($size/2)+px;
  }
  @mixin shadow($size : 8) {
    text-shadow: ($size/2)+px ($size/2)+px ($size/2)+px rgba(0,0,0,.75);
    transition: all ease .25s
  }
  // /!\ en SASS/SCSS les noms de variables ou mixins ou function ne font pas la diffiérence entre "-" et "_"
  // $mon-poney <==> $mon_poney


  .user { // block

    h3 {
      color : $maCouleurDeBase;
      @include highlighted-text;
      @include size-text(10);

      &.prout{ // h3.prout
        font-weight: 600;
      }
      &:hover{
        @include shadow(10);
      }
    }

    h2{
      @extend h3;
      @include size-text(8);
    }

  }

</style>
