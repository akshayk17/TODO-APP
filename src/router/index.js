import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Todo from '../pages/Todo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/todo',
    component: Todo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
