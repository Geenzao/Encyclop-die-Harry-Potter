<script>
    import { ref } from 'vue'
    import TitrePage from '../Titres/TitrePage.vue'
    import CasePage from '../InfoBulles/CasePage.vue'

    export default {
    components: {
        TitrePage,
        CasePage
    },
    setup() {
        const titre = ref('Accueil')
        return { titre }
    }
    }
</script>

<template>
    <div>
        <TitrePage>{{ titre }}</TitrePage>
        <p>Bienvenue sur l'encyclopédie Harry Potter</p><br>
        <p>Vous trouverez ici toutes les informations sur l'univers de Harry Potter tels que les personnages, les livres, les sort ainsi que toutes les potions.</p><br>
        <p>Voici toutes les catégories disponnibles :</p><br>
        <div class="case-pages-container">
            <router-link to="/livres" class="router-link"><CasePage :image="require('../../Images/livre.png')" description="Vous trouverez ici tout les livres de l'univers d'Harry Potter." /></router-link>
            <router-link to="/personnages" class="router-link"><CasePage :image="require('../../Images/personnages.jpg')" description="Vous trouverez ici tout les personnages de l'univers d'Harry Potter." /></router-link>
            <router-link to="/potions" class="router-link"><CasePage :image="require('../../Images/potion.png')" description="Vous trouverez ici toute les potions de l'univers d'Harry Potter." /></router-link>
            <router-link to="/sorts" class="router-link"><CasePage :image="require('../../Images/sort.png')" description="Vous trouverez ici tout les sorts de l'univers d'Harry Potter." /></router-link>
        </div>  
    </div>
</template>

<style scoped>
    .case-pages-container {
        display: flex;
        justify-content: space-between;
    }

    .router-link {
        text-decoration: none;
        color: inherit; /* Utilisez la couleur par défaut */
    }
</style>
