import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login/index'
import Account from '@/components/account/index'
import Dashboard from '@/components/dashboard/index'
import Test from '@/components/dashboard/test'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      auth: false
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      auth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children : [
      {
        path: 'test',
        component: Test,
        meta: {
          auth: true
        }
      }
    ],
    meta: {
      auth: true
    }
  }
]
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
