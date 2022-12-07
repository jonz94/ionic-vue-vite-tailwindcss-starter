import AppTabs from '@/components/AppTabs.vue'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: AppTabs,
    children: [
      {
        path: '',
        redirect: 'tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/AppTab1.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/AppTab2.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/AppTab3.vue'),
      },
    ],
  },
]

// https://vitejs.dev/guide/env-and-mode.html
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
