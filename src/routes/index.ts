import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserFormView from '@/views/UserFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    component: UserFormView
  },
  {
    path: '/register',
    component: UserFormView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router