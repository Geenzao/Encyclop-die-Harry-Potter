<script>
import infoSort from '../InfoBulles/infoSort.vue';
const axios = require('axios');

export default {
    components: {
        infoSort
    },
    data() {
        return {
            sorts: [] // Initialisation du tableau livres
        };
    },
    mounted() {
        let stringRequeteInformation = "https://api.potterdb.com/v1/spells";
        axios.get(stringRequeteInformation)
            .then(responseFromAPI => {
                for (let i = 0; i < responseFromAPI.data.data.length; i++) {
                    this.sorts.push({
                        nom: responseFromAPI.data.data[i].attributes.name,
                        effet: responseFromAPI.data.data[i].attributes.effect,
                        description: responseFromAPI.data.data[i].attributes.hand,
                        imageSort: responseFromAPI.data.data[i].attributes.image
                    });
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des livres:", error);
            });
    }
};
</script>

<template>
    <div>
        <h1>Sorts de l'univers "Harry Potter"</h1>
        <div v-for="sort in sorts" :key="sort.nomSort">
            <infoSort :sort="sort"></infoSort>
        </div>
    </div>
</template>

<style scoped>
</style>
