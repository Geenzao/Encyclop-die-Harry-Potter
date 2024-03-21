<script>
export default {
    props: {
        potion: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <!-- La div qui représente l'infobulle de la potion -->
    <router-link :to="'/potions/' + potion.nomPotion" class="router-link">
        <div class="popup">
            <!-- Image de la potion--> 
            <div>
                <img :src= "potion.imagePotion" alt="Image représentant la potion">
            </div>
            <div>
                <p>{{potion.nomPotion}} </p>
            </div>
        </div>
    </router-link>
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