import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
// import Home from '@/views/Home.vue'
import CardItemDetail from '@/components/global/card/CardItemDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      { path: 'pokemon/:pokeName', name: 'CardItemDetail', component: CardItemDetail }
    ],
  },
  {
    path: '/post',
    name: 'PostView',
    component: () => import('@/views/PostView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  // createWebHashHistory make "#" in last of url
  history: createWebHistory(),
  routes,
})

export default router