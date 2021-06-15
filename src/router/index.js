import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import blist from '../components/blist.vue'
import detail from '../components/detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: blist
    
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
