import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contents from '../views/Content.vue'
import ContentDetail from '../components/ContentDetail.vue'
import NotFound from '../components/404.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contents',
      name: 'content',
      component: Contents
    },
    {
      props:true,
      path:'/contents/:id',
      name:'ContentDetail',
      component: ContentDetail
    },
    {
      path:'/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
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
