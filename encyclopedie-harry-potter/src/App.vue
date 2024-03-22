<script>
  import SommaireComp from './components/Sommaire/SommaireComp.vue'

  export default {
    components: {
      SommaireComp
    }
  }
</script>

<template>
  <div class="main-content">
    <SommaireComp class="sommaireVue"/>
  
    <router-view></router-view>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.sommaireVue {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 999; /* assure que le sommaire est affiché au-dessus du contenu */
  padding: 10px; /* ajustez la marge intérieure selon vos préférences */
}

.main-content {
  padding-top: 100px; /* ajustez la marge supérieure pour créer de l'espace entre le sommaire et le contenu principal */
}

@media screen and (max-width: 768px) {
  .main-content {
    padding-top: 130px; /* ajustez la marge supérieure pour les écrans plus petits */
  }

  .sommaireVue {
    padding: 5px; /* ajustez la taille de la police pour les écrans plus petits */
  }
}
</style>./components/Sommaire/SommaireComp.vue
