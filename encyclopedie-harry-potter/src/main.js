import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Test de Hugo Faveyrial pour récupérer des données de l'API (personnages)

//const axios = require('axios')

// var stringRequeteInformation = "https://api.potterdb.com/v1/characters"

// axios({
//     method: 'get',
//     url: stringRequeteInformation,
//     responseType: 'json'
// }).then(function (response) {
//     console.log(response.data)
// })

createApp(App).use(router).mount('#app')
