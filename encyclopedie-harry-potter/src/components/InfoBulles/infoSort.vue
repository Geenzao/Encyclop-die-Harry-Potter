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
    <div class="popup">
        <!-- Image du sort en action-->
        <div>
            <img :src= "sort.imageSort" alt="Image représentant le sort">
        </div>
        <div>
            <p class="title">Nom:</p><p> {{sort.nom}}</p>
        </div>
        <br>
        <div>
            <p class="description">Effet:</p><p> {{sort.effet}}</p>
        </div>
        <br>
        <div>
            <p class="description">Geste:</p><p> {{sort.description}}</p>
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
    max-height: 200px;
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
.description {
    font-size: 14px;
    color: #666;
}
</style>
