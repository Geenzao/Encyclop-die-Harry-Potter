<script>
import infoLivre from '../InfoBulles/infoLivre.vue';
const axios = require('axios');

export default {
    components: {
        infoLivre
    },
    data() {
        return {
            livres: [] // Initialisation du tableau livres
        };
    },
    mounted() {
        let stringRequeteInformation = "https://api.potterdb.com/v1/books";
        axios.get(stringRequeteInformation)
            .then(responseFromAPI => {
                for (let i = 0; i < responseFromAPI.data.data.length; i++) {
                    this.livres.push({
                        titre: responseFromAPI.data.data[i].attributes.title,
                        auteur: responseFromAPI.data.data[i].attributes.author,
                        datePubli: responseFromAPI.data.data[i].attributes.release_date,
                        imageLivre: responseFromAPI.data.data[i].attributes.cover
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
        <h1>Livres de l'univers "Harry Potter"</h1>
        <div v-for="livre in livres" :key="livre.titre">
            <infoLivre :livre="livre"></infoLivre>
        </div>
    </div>
</template>

<style scoped>
</style>
