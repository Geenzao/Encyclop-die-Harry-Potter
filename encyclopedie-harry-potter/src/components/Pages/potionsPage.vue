<script>
import infoPotion from '../InfoBulles/infoPotion.vue';
const axios = require('axios');

export default {
    components: {
        infoPotion
    },
    data() {
        return {
            potions: [] // Initialisation du tableau livres
        };
    },
    mounted() {
        let stringRequeteInformation = "https://api.potterdb.com/v1/potions";
        axios.get(stringRequeteInformation)
            .then(responseFromAPI => {
                for (let i = 0; i < responseFromAPI.data.data.length; i++) {
                    this.potions.push({
                        nomPotion: responseFromAPI.data.data[i].attributes.name,
                        imagePotion: responseFromAPI.data.data[i].attributes.image,
                        slug : responseFromAPI.data.data[i].attributes.slug
                    });
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des potions:", error);
            });
    }
};
</script>

<template>
    <div>
        <h1>Potions Page</h1>
        <div v-for="potion in potions" :key="potion.nomPotion">
            <infoPotion :potion="potion"></infoPotion>
        </div>
    </div>
</template>

<style scoped>
</style>
