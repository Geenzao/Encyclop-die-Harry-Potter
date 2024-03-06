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
    <div>
        <!-- Image de la potion-->
        <div>
            <img :src= "livre.imageLivre" alt="Image représentant le sort">
        </div>
        <div>
            
        </div>
    </div>
</template>

<style scoped>
</style>