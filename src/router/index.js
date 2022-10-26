import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Completed from '../views/Completed.vue'
import KnowledgeBase from '../views/KnowledgeBase.vue'
import Scheduled from '../views/Scheduled.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Completed',
    name: 'Completed',
    component: Completed
  },
  {
    path: '/KnowledgeBase',
    name: 'KnowledgeBase',
    component: KnowledgeBase
  },
  {
    path: '/Scheduled',
    name: 'Scheduled',
    component: Scheduled
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
