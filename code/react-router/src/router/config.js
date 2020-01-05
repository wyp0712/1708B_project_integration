import Cart from '../views/Cart/index'
import Home from '../views/Home/index'

import Carttab1 from '../views/Cart/pages/tab1'
import Carttab2 from '../views/Cart/pages/tab2'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: Home
  },
  {
    path: '/cart',
    components: Cart,
    children: [
      {
        path: '/cart',
        redirect: '/cart/tab1'
      },
      {
        path: '/cart/tab1',
        components: Carttab1
      },
      {
        path: '/cart/tab2',
        components: Carttab2
      }
    ]
  }
]

export default routes;