import loadable from '@/utils/loadable.js'

// 一级
const Home = loadable(()=>import('@/views/Home/index.js'))
const Detail = loadable(()=>import('@/views/Detail/index.js'))
const Login = loadable(()=>import('@/views/Login/index.js'))

// 二级
const HomeIndex = loadable(()=>import('@/views/Home/pages/HomeIndex'))
const HomeInsuranceOrder = loadable(() => import('@/views/Home/pages/InsuranceOrder'))
const HomeLoansOrder = loadable(() => import('@/views/Home/pages/LoansOrder'))
const HomeTransferOrder = loadable(() => import('@/views/Home/pages/TransferOrder'))


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
        path: '/home/loans',
        components: HomeLoansOrder
      },
      {
        path: '/home/transfer',
        components: HomeTransferOrder
      },
      {
        path: '/home/insurance',
        components: HomeInsuranceOrder
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