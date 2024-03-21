<script>
import infoPotion from '../InfoBulles/infoPotion.vue';

export default {
    components: {
        infoPotion
    },
    data() {
        return {
            maPotion: {
                nomPotion: "Potion anti-chinois",
                lienPotion: "Potion anti-chinois",
                imagePotion: "https://media.bateaux.com/src//applications/showroom/images/images-produit/4bdc4f7ea254ef234efa78485e6c8e68.webp"
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Potions Page</h1>
        <infoPotion :potion="maPotion"></infoPotion>
    </div>
</template>

<style scoped>
</style>
