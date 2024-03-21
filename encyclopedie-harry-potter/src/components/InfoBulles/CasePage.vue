<template>
  <div class="popup">
    <img :src="image" alt="Image" />
    <p>{{ description }}</p>
  </div>
</template>
  
<script>
  export default {
    name: 'CasePage',
    props: {
      image: String,
      description: String
    },
    mounted() {
      console.log('Texte de l\'image:', this.image);
    }
  }
</script>
  
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
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  