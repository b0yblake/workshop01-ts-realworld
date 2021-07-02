import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
// import Home from '@/views/Home.vue'
import DetailPage from '@/views/DetailPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'pokemon/:pokeName',
        name: 'DetailPage',
        component: DetailPage
      }
    ],
  },
  {
    path: '/poke',
    name: 'DetailPage1',
    component: () => import('@/views/DetailPage.vue'),
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