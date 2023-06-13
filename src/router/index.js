import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/home',
    name: '메인',
    component: () => import('@/views/Home'),
    alias: '/',
    meta: {
      TransitionName: 'fade'
    }
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
    meta: {
      TransitionName: 'fade',
      layout: 'BlankLayout'
    }
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