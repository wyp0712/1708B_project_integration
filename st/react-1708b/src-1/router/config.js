import loadable from '@/utils/loadable.js'

// 一级
const Home = loadable(()=>import('@/views/Home/index.js'))
const Detail = loadable(()=>import('@/views/Detail/index.js'))
const Login = loadable(()=>import('@/views/Login/index.js'))

// 二级
const HomeIndex = loadable(()=>import('@/views/Home/pages/Index'))
const HomeClassify = loadable(()=>import('@/views/Home/pages/Classify'))


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        components: HomeIndex
      },
      {
        path: '/home/classify',
        components: HomeClassify
      }
    ]
  },
  {
    path: '/detail',
    components: Detail,
  },
  {
    path: '/login',
    components: Login,
  }
]

export default routes;