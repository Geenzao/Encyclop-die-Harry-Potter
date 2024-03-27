<script>
import infoPotion from '../InfoBulles/infoPotion.vue';
const axios = require('axios');

export default {
    components: {
        infoPotion
    },
    data() {
        return {
            potions: [], // Initialisation du tableau de potions
            currentPage: 1, // Page actuelle
            potionsPerPage: 20, // Nombre de potions par page
            searchQuery: '' // Chaîne de recherche
        };
    },
    mounted() {
        this.fetchPotions();
    },
    methods: {
        fetchPotions() {
            let stringRequeteInformation = "https://api.potterdb.com/v1/potions";
            axios.get(stringRequeteInformation)
                .then(responseFromAPI => {
                    this.potions = responseFromAPI.data.data.map(potion => ({
                        nomPotion: potion.attributes.name,
                        imagePotion: potion.attributes.image,
                        slug : potion.attributes.slug
                    }));
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des potions:", error);
                });
        },
        paginatePotions() {
            const startIndex = (this.currentPage - 1) * this.potionsPerPage;
            const endIndex = startIndex + this.potionsPerPage;
            return this.filteredPotions.slice(startIndex, endIndex);
        },
        setPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        totalPages() {
            return Math.ceil(this.filteredPotions.length / this.potionsPerPage);
        },
        filterPotions() {
            return this.potions.filter(potion => potion.nomPotion.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    computed: {
        filteredPotions() {
            return this.searchQuery ? this.filterPotions() : this.potions;
        }
    }
};
</script>

<template>
    <div>
        <h1>Potions Page</h1>
        <div class="search-container">
            <input type="text" v-model="searchQuery" placeholder="Recherche...">
        </div>
        <div class="pagination">
            <button v-for="pageNumber in totalPages()" :key="pageNumber" @click="setPage(pageNumber)" class="page-button">
                {{ pageNumber }}
            </button>
        </div>
        <br>
        <div class="potions-container">
            <div v-for="potion in paginatePotions()" :key="potion.nomPotion" class="potion-item">
                <infoPotion :potion="potion"></infoPotion>
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
    .potions-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; /* Aligner les potions à gauche */
    }

    .potion-item {
        width: calc(25% - 10px); /* Chaque potion occupe 25% de largeur avec un espace entre eux */
        margin-bottom: 20px; /* Espace entre les lignes */
    }

    @media screen and (max-width: 768px){
        .potions-container {
            justify-content: center; /* Centrer les éléments */
        }

        .potion-item {
            width: calc(50% - 10px); /* Sur les écrans plus petits, chaque potion occupe 50% de largeur */
        }
    }

    @media screen and (max-width: 576px){
        .potion-item {
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
