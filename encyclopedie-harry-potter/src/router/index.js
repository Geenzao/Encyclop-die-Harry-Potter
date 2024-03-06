import { createRouter, createWebHistory } from 'vue-router'
import livresPage from '../components/Pages/livresPage.vue'
import personnagesPage from '../components/Pages/personnagesPage.vue'
import potionsPage from '../components/Pages/potionsPage.vue'
import sortsPage from '../components/Pages/sortsPage.vue'
import accueilPage from '../components/Pages/accueilPage.vue'

const routes = [
  { path: '/livres', component: livresPage},
  { path: '/personnages', component: personnagesPage },
  { path: '/potions', component: potionsPage },
  { path: '/sorts', component: sortsPage },
  { path: '/', component: accueilPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
