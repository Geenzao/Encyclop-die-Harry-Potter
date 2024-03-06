<script>
  import SommaireComp from './components/Sommaire/SommaireComp.vue'

  export default {
    components: {
      SommaireComp
    }
  }
</script>

<template>
  <h1>Encyclopédie Harry Potter</h1>
  <SommaireComp/>

  <router-view></router-view>
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
</style>./components/Sommaire/SommaireComp.vue
