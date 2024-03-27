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

<template>
    <div>
        <h1>{{ potion.name }}</h1>
        <div>
            <img :src= "potion.image" alt="Image représentant la potion">
        </div>
        <p>Caractériques : {{potion.charac}}</p>
        <p>Effet principal : {{potion.main}}</p>
        <p>Effets secondaires : {{potion.side}}</p>
        <p>Créateurs : {{potion.creator}}</p>
        <p>Fabricants : {{potion.manufacterer}}</p>
        <p>Difficulté : {{potion.difficulty}}</p>
        <p>Ingrédients : {{potion.ingredients}}</p>
        <p>Temps nécessaire : {{potion.time}}</p>
    </div>
</template>

<style scoped>
</style>
