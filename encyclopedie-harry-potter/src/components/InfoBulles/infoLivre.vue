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
    <div class="popup">
        <!-- Image du livre-->
        <div>
            <img :src= "livre.imageLivre" alt="Image représentant le sort">
        </div>
        <div>
            <p class="title">Titre:</p><p> {{livre.titre}}</p>
        </div>
        <br>
        <div>
            <p class="author">Auteur:</p><p>{{livre.auteur}}</p>
        </div>
        <br>
        <div>
            <p class="description">Description:</p><p> {{livre.datePubli}}</p>
        </div>
    </div>
</template>

<style scoped>
    .popup {
        max-width: 300px;
        max-height: 500px;
        background-color: white;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .popup img {
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
    }
    .popup p {
        margin: 0;
    }
    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .author {
        font-style: italic;
        margin-bottom: 5px;
    }
    .description {
        font-size: 14px;
        color: #666;
    }
    img {
        max-width: 100%;
        height: auto;
    }
</style>
