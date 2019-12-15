import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import AppMain from '@/views/AppMain.vue'
import NoChat from '@/views/NoChat.vue'
import ChatPage from '@/views/ChatPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/app',
    name: 'app-main',
    component: AppMain,
    children: [
      {
        path: '',
        redirect: '/app/main'
      },
      {
        path: '/app/main',
        name: 'no-chat',
        component: NoChat
      },
      {
        path: '/app/:userId',
        name: 'chat',
        component: ChatPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
