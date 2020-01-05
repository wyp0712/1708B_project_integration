import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue')
  },
  {
    path: '/list',
    component: () => import(/* webpackChunkName: "list" */ '../views/StarbuckList/index.vue')
  },
  {
    path: '/overtime',
    component: () => import(/* webpackChunkName: "overtime" */ '../views/Overtime/index.vue')
  },
  {
    path: '/vacation',
    component: () => import(/* webpackChunkName: "vacation" */ '../views/Vacation/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
