<script>
import infoSort from '../InfoBulles/infoSort.vue'; // Importez votre composant SortInfo

export default {
    components: {
        infoSort
    },
    data() {
        return {
            monSort: {
                nom: 'Nickeur de quentin',
                effet: 'Fait 10 dégâts, si l adversaire est quetin, dégâts *= 1O^500K',
                description: 'Invoque la main de la daronne de quentin pour le gifler',
                imageSort: 'https://media.bateaux.com/src//applications/showroom/images/images-produit/4bdc4f7ea254ef234efa78485e6c8e68.webp'
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Sorts de l'univers "Harry Potter"</h1>
        <infoSort :sort="monSort"></infoSort>
    </div>
</template>

<style scoped>
</style>
