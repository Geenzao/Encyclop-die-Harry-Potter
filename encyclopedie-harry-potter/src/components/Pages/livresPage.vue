<script>
import infoLivre from '../InfoBulles/infoLivre.vue'; // Importez votre composant SortInfo

export default {
    components: {
        infoLivre
    },
    data() {
        return {
            monLivre: {
                titre: 'Nickeur de quentin',
                auteur: 'Fait 10 dégâts, si l adversaire est quetin, dégâts *= 1O^500K',
                datePubli: 'Invoque la main de la daronne de quentin pour le gifler',
                imageLivre: 'https://media.bateaux.com/src//applications/showroom/images/images-produit/4bdc4f7ea254ef234efa78485e6c8e68.webp'
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Sorts de l'univers "Harry Potter"</h1>
        <infoLivre :livre="monLivre"></infoLivre>
    </div>
</template>

<style scoped>
</style>
