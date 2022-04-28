import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import NotFound from '../components/404.vue'
import DetailsCard from '../components/DetailsCard.vue'
import ToateSubtitrarile from '../components/ToateSubtitrarile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path:'/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path:'/details',
      name:'DetailsCard',
      component:DetailsCard      
    }
    ,
    {
      path:"/subtitrari",
      name:"ToateSubtitrarile",
      component:ToateSubtitrarile

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
