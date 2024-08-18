import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'index' },
      component: () => import('@/shared/layout/LayoutView.vue'),

      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('@/pokemons/pages/index/Index.vue')

        },
        {
          path: '/team',
          name: 'team',
          component: () => import('@/pokemons/pages/team/TeamView.vue')

        },
        {
          path: '/team/:id',
          name: 'show-pokemon',
          component: () => import('@/pokemons/pages/show/ShowView.vue')

        },

      ],
    },

    // Esto se encarga de redirigir a la pagina de inicio si la ruta no existe.
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },






  ]
})





export default router
