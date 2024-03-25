<script>
export default {
    props: {
        personnage: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <!-- La div qui représente l'infobulle d'un personnage -->
    <div class="popup">
        <!-- Image de la potion--> 
        <div>
            <img :src= "personnage.imagePersonnage" alt="Image représentant le personnage">
        </div>
        <div>
            <p>nom :{{personnage.nom}}</p>
        </div>
        <div>
            <p>maison :{{personnage.maison}}</p>
        </div>
    </div>
</template>

<style scoped>
    .popup {
        max-width: 300px;
        max-height: 500px;
        background-color: white;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .popup img {
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
    }
    .popup p {
        margin: 0;
    }
    .router-link {
        text-decoration: none;
        color: inherit; /* Utilisez la couleur par défaut */
    }
</style>