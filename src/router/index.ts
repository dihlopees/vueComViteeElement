import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import Formulario from "../components/Formulario.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    },
    
  ]
})

export default router
