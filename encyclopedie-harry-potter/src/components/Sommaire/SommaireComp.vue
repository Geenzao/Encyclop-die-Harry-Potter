<script>
    export default {
        name: 'SommaireComp'
    }
</script>

<template>
  <div class="sommaireVue">
    <h1>Encyclopédie Harry Potter</h1>
    <div class="sommaire">
      <ul class="sommaire-list">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/livres">Livres</router-link></li>
        <li><router-link to="/personnages">Personnages</router-link></li>
        <li><router-link to="/potions">Potions</router-link></li>
        <li><router-link to="/sorts">Sorts</router-link></li>
      </ul>
    </div>
  </div>
</template>
  
  <style scoped>
  .sommaire {
    background-color: #f8f9fa;
    padding: 10px;
    border: 1px solid #dee2e6;
  }
  
  .sommaire-list {
    display: flex; /* Utiliser la disposition flex */
    justify-content: space-between; /* Pour répartir les éléments uniformément sur la ligne */
    list-style-type: none;
    padding: 0;
    margin-left: 100px;
    margin-right: 100px;
  }
  
  .sommaire li {
    margin-bottom: 5px;
  }
  
  .sommaire li a {
    text-decoration: none;
    color: #007bff;
  }
  
  .sommaire li a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px){
    .sommaire-list {
      display: flex; /* Utiliser la disposition flex */
      justify-content: space-between; /* Pour répartir les éléments uniformément sur la ligne */
      list-style-type: none;
      padding: 0;
      margin-left: 10px;
      margin-right: 10px;
    }
    h1 {
      font-size: 1.5em;
    }
  }
  </style>
  