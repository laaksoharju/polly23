import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import SelectView from '../views/SelectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartView
    },
    {
      path: '/select/',
      name: 'SelectView',
      component: SelectView
    },
    {
      path: '/joinroom/',
      name: 'JoinRoomView',
      component: () => import('../views/JoinRoomView.vue')
    },
    {
      path: '/settings/:roomCode',
      name: 'SettingsView',
      component: () => import('../views/SettingsView.vue')
    },

    {
      path: '/input/:roomCode',
      name: 'InputView',
      component: () => import('../views/InputView.vue')
    },
    {
      path: '/load/:roomCode',
      name: 'LoadingView',
      component: () => import('../views/LobbyView.vue')
    },
    {
      path: '/questions/:roomCode',
      name: 'QuestionView',
      component: () => import('../views/QuestionView.vue')
    },
    {
      path: '/winner/:roomCode',
      name: 'WinnerView',
      component: () => import('../views/WinnerView.vue')
    },
    {
      path: '/final/:roomCode',
      name: 'FinalView',
      component: () => import('../views/FinalView.vue')
    }
  ]
})

export default router
