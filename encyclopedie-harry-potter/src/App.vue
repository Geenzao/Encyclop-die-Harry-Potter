<script>
import { createRouter, createWebHistory } from 'vue-router'

const Home = { template: '<div>Go to Home</div>' }
const About = { template: '<div>Go to About</div>' }

export default {
  name: 'App',
  created() {
    // Créez une instance de router avec vos routes
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
        // Ajoutez d'autres routes au besoin
      ]
    })
    this.$router = router;
  }
}
</script>

<template>
  <div id="app">
    <!-- Utilisez les composants router-link pour naviguer entre les différentes routes -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <!-- Utilisez le composant router-view pour afficher le composant correspondant à la route actuelle -->
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
</style>
