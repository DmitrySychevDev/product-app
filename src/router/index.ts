import { createRouter, createWebHistory } from 'vue-router'
import ProductsListPage from '@/pages/ProductsListPade/ProductsListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsListPage
    },
    {
      path: '/category/:category',
      name: 'category',
      component: ProductsListPage
    }
  ]
})

export default router
