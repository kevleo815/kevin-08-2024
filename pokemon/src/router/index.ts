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
          component: () => import('../views/AboutView.vue')

        },
        {
          path: '/team/:id',
          name: 'show-pokemon',
          component: () => import('../views/AboutView.vue')

        }
      ],
    },

  ]
})





export default router
