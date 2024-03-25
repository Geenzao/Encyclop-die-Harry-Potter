<script>
import infoSort from '../InfoBulles/infoSort.vue';
const axios = require('axios');

export default {
    components: {
        infoSort
    },
    data() {
        return {
            sorts: [], // Initialisation du tableau de sorts
            currentPage: 1, // Page actuelle
            sortsPerPage: 20 // Nombre de sorts par page
        };
    },
    mounted() {
        this.fetchSorts();
    },
    methods: {
        fetchSorts() {
            let stringRequeteInformation = "https://api.potterdb.com/v1/spells";
            axios.get(stringRequeteInformation)
                .then(responseFromAPI => {
                    this.sorts = responseFromAPI.data.data.map(sort => ({
                        nom: sort.attributes.name,
                        effet: sort.attributes.effect,
                        description: sort.attributes.hand,
                        imageSort: sort.attributes.image
                    }));
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des sorts:", error);
                });
        },
        paginateSorts() {
            const startIndex = (this.currentPage - 1) * this.sortsPerPage;
            const endIndex = startIndex + this.sortsPerPage;
            return this.sorts.slice(startIndex, endIndex);
        },
        setPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        totalPages() {
            return Math.ceil(this.sorts.length / this.sortsPerPage);
        }
    }
};
</script>

<template>
    <div>
        <h1>Sorts de l'univers "Harry Potter"</h1>
        <div class="pagination">
            <button v-for="pageNumber in totalPages()" :key="pageNumber" @click="setPage(pageNumber)" class="page-button">
                {{ pageNumber }}
            </button>
        </div>
        <br>
        <div class="sorts-container">
            <div v-for="sort in paginateSorts()" :key="sort.nom" class="sort-item">
            <infoSort :sort="sort"></infoSort>
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
    .sorts-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; /* Aligner les potions à gauche */
    }

    .sort-item {
        width: calc(25% - 10px); /* Chaque potion occupe 25% de largeur avec un espace entre eux */
        margin-bottom: 20px; /* Espace entre les lignes */
    }

    @media screen and (max-width: 768px){
        .sorts-container {
            justify-content: center; /* Centrer les éléments */
        }

        .sort-item {
            width: calc(50% - 10px); /* Sur les écrans plus petits, chaque potion occupe 50% de largeur */
        }
    }

    @media screen and (max-width: 576px){
        .sort-item {
            width: calc(100% - 10px); /* Sur les écrans très petits, chaque potion occupe 100% de largeur */
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
</style>

