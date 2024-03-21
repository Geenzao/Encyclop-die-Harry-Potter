<script>
export default {
    props: {
        livre: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <!-- La div qui représente l'infobulle du livre -->
    <div>
        <!-- Image du livre-->
        <div>
            <img :src= "livre.imageLivre" alt="Image représentant le sort">
        </div>
        <div>
            <p>Titre: {{livre.titre}}</p>
        </div>
        <div>
            <p>Auteur: {{livre.auteur}}</p>
        </div>
        <div>
            <p>Description: {{livre.datePubli}}</p>
        </div>
    </div>
</template>

<style scoped>
</style>