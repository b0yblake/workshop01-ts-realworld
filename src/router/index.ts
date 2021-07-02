import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'), // use default page
    children: [
      { path: '/pokemon/:id.html', component: () => import('@/views/DetailPage.vue') },
      // { path: '/', component: () => import('./views/index.vue') },
      // { path: '/song/:path/:id.html', component: () => import('./views/song.vue')},
      {
        path: '/:path(.*)*',
        component: () => import('@/views/NotFound.vue'),
      },
    ],
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
