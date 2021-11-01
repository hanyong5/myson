import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import blist1 from '../components/blist1.vue'
import blist2 from '../components/blist2.vue'
import blist3 from '../components/blist3.vue'
import detail1 from '../components/detail1.vue'
import detail2 from '../components/detail2.vue'
import detail3 from '../components/detail3.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list1',
    name: 'list1',
    component: blist1,
    
  },
  {
    path: '/list2',
    name: 'list2',
    component: blist2,
    
  },
  {
    path: '/detail2/:id',
    name: 'detail2',
    component: detail2
    
  },
  {
    path: '/detail1/:id',
    name: 'detail1',
    component: detail1
    
  },
  ,
  {
    path: '/list3',
    name: 'list3',
    component: blist3,
    
  },
  {
    path: '/detail3/:id',
    name: 'detail3',
    component: detail3
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
