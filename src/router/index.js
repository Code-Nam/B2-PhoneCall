import { createRouter, createWebHistory } from 'vue-router'
import KeypadView from '@/views/KeypadView.vue'
import ContactView from '@/views/ContactView.vue'
import CallLogView from '@/views/CallLogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'keypad',
      component: KeypadView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/call-log',
      name: 'call-log',
      component: CallLogView
    }
  ]
})

export default router
