import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuyView from '../views/BuyView.vue'
import RentView from '../views/RentView.vue'
import ContactView from '../views/ContactView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ContactView
  },
  {
    path: '/buy',
    name: 'buy',
    component: BuyView
  },
  {
    path: '/rent',
    name: 'rent',
    component: RentView
  },
  {
    path: '/contact',
    name: 'contact',
    component: HomeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
