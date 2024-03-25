<script>
import infoPersonnage from '../InfoBulles/infoPersonnage.vue';
const axios = require('axios');

export default {
    components: {
        infoPersonnage
    },
    data() {
        return {
            personnages: [], // Initialisation du tableau personnage
            currentPage: 1, // Page actuelle
            personnagesPerPage: 20, // Nombre de personnages par page
            searchQuery: '' // Chaîne de recherche
        };
    },
    mounted() {
        this.fetchPersonnages();
    },
    methods: {
        fetchPersonnages() {
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
        },
        paginatePersonnages() {
            const startIndex = (this.currentPage - 1) * this.personnagesPerPage;
            const endIndex = startIndex + this.personnagesPerPage;
            return this.filteredPersonnages.slice(startIndex, endIndex);
        },
        setPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        totalPages() {
            return Math.ceil(this.filteredPersonnages.length / this.personnagesPerPage);
        },
        filterPersonnages() {
            return this.personnages.filter(personnage => personnage.nom.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    computed: {
        filteredPersonnages() {
            return this.searchQuery ? this.filterPersonnages() : this.personnages;
        }
    }
};
</script>

<template>
    <div>
        <h1>Personnages de l'univers "Harry Potter"</h1>
        <div class="search-container">
            <input type="text" v-model="searchQuery" placeholder="Recherche...">
        </div>
        <div class="pagination">
            <button v-for="pageNumber in totalPages()" :key="pageNumber" @click="setPage(pageNumber)" class="page-button">
                {{ pageNumber }}
            </button>
        </div>
        <br>
        <div class="personnages-container">
            <div v-for="personnage in paginatePersonnages()" :key="personnage.nom" class="personnage-item">
                <infoPersonnage :personnage="personnage"></infoPersonnage>
            </div>
        </div>
        <div class="pagination">
            <button v-for="pageNumber in totalPages()" :key="pageNumber" @click="setPage(pageNumber)" class="page-button">
                {{ pageNumber }}
            </button>
        </div>
    </div>
</template>

<style scoped>
    .personnages-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; /* Aligner les personnages à gauche */
    }

    .personnage-item {
        width: calc(25% - 10px); /* Chaque personnage occupe 25% de largeur avec un espace entre eux */
        margin-bottom: 20px; /* Espace entre les lignes */
    }

    @media screen and (max-width: 768px){
        .personnages-container {
            justify-content: center; /* Centrer les éléments */
        }

        .personnage-item {
            width: calc(50% - 10px); /* Sur les écrans plus petits, chaque personnage occupe 50% de largeur */
        }
    }

    @media screen and (max-width: 576px){
        .personnage-item {
            width: calc(100% - 10px); /* Sur les écrans très petits, chaque personnage occupe 100% de largeur */
        }
    }

    .pagination {
        margin-top: 20px;
        text-align: center;
    }

    .page-button {
        margin-right: 5px;
        cursor: pointer;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 8px 16px;
        font-size: 16px;
        transition: background-color 0.3s ease;
    }

    .page-button:hover {
        background-color: #0056b3;
    }

    .search-container {
        margin-bottom: 20px;
    }

    .search-container input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 300px;
    }
</style>
