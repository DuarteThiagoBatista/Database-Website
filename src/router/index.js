import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/definicao',
      name: 'definicao',
      component: () => import('../views/Definicao.vue')
    },
    {
      path: '/importancia',
      name: 'importancia',
      component: () => import('../views/Importancia.vue')
    },
    {
      path: '/gerenciadores',
      name: 'gerenciadores',
      component: () => import('../views/Gerenciadores.vue')
    },
    {
      path: '/modelos',
      name: 'modelos',
      component: () => import('../views/Modelos.vue')
    },
    {
      path: '/aplicacoes',
      name: 'aplicacoes',
      component: () => import('../views/Aplicacoes.vue')
    }
  ]
})

export default router
