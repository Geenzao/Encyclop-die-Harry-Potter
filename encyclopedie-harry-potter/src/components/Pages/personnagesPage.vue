<script>
import infoPersonnage from '../InfoBulles/infoPersonnage.vue';
const axios = require('axios');

export default {
    components: {
        infoPersonnage
    },
    data() {
        return {
            personnages: [] // Initialisation du tableau personnage
        };
    },
    mounted() {
        let stringRequeteInformation = "https://api.potterdb.com/v1/characters";
        axios.get(stringRequeteInformation)
            .then(responseFromAPI => {
                console.log(responseFromAPI.data.data);
                for (let i = 0; i < responseFromAPI.data.data.length; i++) {
                    this.personnages.push({
                        imagePersonnage : responseFromAPI.data.data[i].attributes.image,
                        nom: responseFromAPI.data.data[i].attributes.slug,
                        maison: responseFromAPI.data.data[i].attributes.house,
                    });
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des personnages:", error);
            });
    }
};
</script>


<template>
    <div>
        <h1>Personnages de l'univers "Harry Potter"</h1>
        <div v-for="personnage in personnages" :key="personnage.nom">
            <infoPersonnage :personnage="personnage"></infoPersonnage>
        </div>
    </div>
</template>

<style scoped>
</style>
