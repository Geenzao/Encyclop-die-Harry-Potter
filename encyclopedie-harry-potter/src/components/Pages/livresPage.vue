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
        <div class="livres-container">
            <div v-for="livre in livres" :key="livre.titre" class="livre-item">
                <infoLivre :livre="livre"></infoLivre>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .livres-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; /* Aligner les livres à gauche */
    }

    .livre-item {
        width: calc(25% - 10px); /* Chaque livre occupe 25% de largeur avec un espace entre eux */
        margin-bottom: 20px; /* Espace entre les lignes */
    }

    @media screen and (max-width: 768px){
        .livres-container {
            justify-content: center; /* Centrer les éléments */
        }

        .livre-item {
            width: calc(50% - 10px); /* Sur les écrans plus petits, chaque livre occupe 50% de largeur */
        }
    }

    @media screen and (max-width: 576px){
        .livre-item {
            width: calc(100% - 10px); /* Sur les écrans très petits, chaque livre occupe 100% de largeur */
        }
    }
</style>



