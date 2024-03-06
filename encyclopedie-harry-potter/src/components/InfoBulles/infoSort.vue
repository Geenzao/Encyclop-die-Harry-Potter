<script>
export default {
    props: {
        sort: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <!-- La div qui représente l'infobulle du sort -->
    <div>
        <!-- Image du sort en action-->
        <div>
            <img :src= "sort.imageSort" alt="Image représentant le sort">
        </div>
        <div>
            <p>Nom: {{sort.nom}}</p>
        </div>
        <div>
            <p>Effet: {{sort.effet}}</p>
        </div>
        <div>
            <p>Description: {{sort.description}}</p>
        </div>
    </div>
</template>

<style scoped>
</style>