import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue'),
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/home.vue')
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/classify.vue')
      },
      {
        path: 'rank',
        name: 'rank',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/rank.vue')
      },
      {
        path: 'bookRack',
        name: 'bookRack',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/bookRack.vue'),
        meta: {
          requireAuth: true  
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  // {
  //   path: '/detail/:id',
  //   name: 'detail',
  //   component: () => import(/* webpackChunkName: "detail" */ '../views/Detail/index.vue')
  // },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Login/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to, 'top')
  if (to.meta.requireAuth) {
    // 判断是否登陆 token
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          path: to.fullPath
        }
      })
    }
  } else {
    next()
  }

})



export default router
