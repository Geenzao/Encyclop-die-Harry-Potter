<script>
    export default {
        name: 'SommaireComp'
    }
</script>

<template>
<div class="sommaire">
    <h2>Sommaire</h2>
    <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/livres">Livres</router-link></li>
        <li><router-link to="/personnages">Personnages</router-link></li>
        <li><router-link to="/potions">Potions</router-link></li>
        <li><router-link to="/sorts">Sorts</router-link></li>
    </ul>
</div>
</template>

<style scoped>
    .sommaire {
    background-color: #f8f9fa;
    padding: 10px;
    border: 1px solid #dee2e6;
    }

    .sommaire h2 {
    font-size: 1.2em;
    }

    .sommaire ul {
    list-style-type: none;
    padding: 0;
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
</style>
