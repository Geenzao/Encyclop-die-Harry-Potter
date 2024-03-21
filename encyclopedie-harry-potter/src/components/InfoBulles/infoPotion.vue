<script>
export default {
    props: {
        potion: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <!-- La div qui représente l'infobulle de la potion -->
    <a :href="potion.lienPotion"><div>
        <!-- Image de la potion-->
        <div>
            <img :src= "potion.imagePotion" alt="Image représentant la potion">
        </div>
        <div>
            <p>{{potion.nomPotion}} </p>
        </div>
    </div></a>
</template>

<style scoped>
</style>