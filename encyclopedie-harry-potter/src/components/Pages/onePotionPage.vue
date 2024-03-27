<script>
const axios = require('axios');

export default {
    data() {
        return {
            potion : {
                image: "",
                charac: "",
                main: "",
                side: "",
                creator: "",
                manufacterer: "",
                difficulty: "",
                time: "",
                ingredients: ""
            }
        }
    },
    mounted() {
        let stringRequeteInformation = `https://api.potterdb.com/v1/potions/${this.$route.params.id}`;
        console.log(stringRequeteInformation);
        axios.get(stringRequeteInformation)
        .then(responseFromAPI => {
            this.potion = ({
                name: responseFromAPI.data.data.attributes.name,
                image : responseFromAPI.data.data.attributes.image,
                charac: responseFromAPI.data.data.attributes.characteristics,
                main: responseFromAPI.data.data.attributes.effect,
                side: responseFromAPI.data.data.attributes.side_effects,
                creator: responseFromAPI.data.data.attributes.inventors,
                manufacterer: responseFromAPI.data.data.attributes.manufacturers,
                difficulty: responseFromAPI.data.data.attributes.difficulty,
                time: responseFromAPI.data.data.attributes.time,
                ingredients : responseFromAPI.data.data.attributes.ingredients
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération d'une potion:", error);
        });
    }
}
</script>

<template><br>
    <div class="potion-details">
        <h1>{{ potion.name }}</h1>
        <div class="potion-image">
            <img :src="potion.image" alt="Image représentant la potion">
        </div>
        <div class="potion-info">
            <p><strong>Caractéristiques :</strong> {{ potion.charac }}</p>
            <p><strong>Effet principal :</strong> {{ potion.main }}</p>
            <p><strong>Effets secondaires :</strong> {{ potion.side }}</p>
            <p><strong>Créateurs :</strong> {{ potion.creator }}</p>
            <p><strong>Fabricants :</strong> {{ potion.manufacterer }}</p>
            <p><strong>Difficulté :</strong> {{ potion.difficulty }}</p>
            <p><strong>Ingrédients :</strong> {{ potion.ingredients }}</p>
            <p><strong>Temps nécessaire :</strong> {{ potion.time }}</p>
        </div>
    </div>
</template>

<style scoped>
.potion-details {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.potion-image img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.potion-info p {
    margin-bottom: 10px;
}

.potion-info p strong {
    font-weight: bold;
}

</style>

