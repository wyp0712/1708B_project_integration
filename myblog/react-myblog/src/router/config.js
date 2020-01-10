import loadable from '@/utils/loadable.js'

// 一级
const Home = loadable(()=>import('@/views/Home/index.js'))
const Login = loadable(()=>import('@/views/Login/index.js'))
const Detail = loadable(()=>import('@/views/Detail/index.js'))
const AddContent = loadable(()=>import('@/views/AddContent/index.js'))

// 二级
const HomeIndex = loadable(()=>import('@/views/Home/HomeIndex/index'))
const HomeCart = loadable(()=>import('@/views/Home/HomeCart/index'))
// const HomeInsuranceOrder = loadable(() => import('@/views/Home/pages/InsuranceOrder'))
// const HomeLoansOrder = loadable(() => import('@/views/Home/pages/LoansOrder'))
// const HomeTransferOrder = loadable(() => import('@/views/Home/pages/TransferOrder'))


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        component: HomeIndex
      },
      {
        path: '/home/cart',
        component: HomeCart
      } 
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/add',
    component: AddContent,
  }
]

export default routes;