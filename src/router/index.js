import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage
  }
]

// создает экземпляр маршрутизатора, который определяет, какие компоненты должны быть отображены при изменении URL-адреса веб-приложения
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
