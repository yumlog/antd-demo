import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/home',
    name: '메인',
    component: () => import('@/views/Home'),
    alias: '/',
    meta: { transitionName: 'fade' }
  },
  {
    path: '/about',
    name: '소개',
    component: () => import('@/views/About'),
    meta: { transitionName: 'fade' }
  },
  {
    path: '/example',
    name: '예시',
    component: () => import('@/views/Example'),
    meta: { transitionName: 'slide' }
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
    meta: { layout: 'BlankLayout' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/notFound'
  }
]

Vue.use(VueRouter)

// eslint-disable-next-line
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
})

export default router;