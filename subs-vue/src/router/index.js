import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import NotFound from '../components/404.vue'
import DetailsCard from '../components/DetailsCard.vue'
import Seriale from '../components/Seriale.vue'
import Filme from '../components/Filme.vue'
import ToateSubtitrarile from '../components/ToateSubtitrarile.vue'
import Contact from '../components/Contact.vue'
import Regulament from '../components/Regulament.vue'
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
      path:'/details/:id',
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
      path:"/contact",
      name:"Contact",
      component:Contact
    },
    {
      path:"/regulament",
      name:"Regulament",
      component:Regulament
    },
    {
      path:"/filme",
      name:"Filme",
      component:Filme
    },
    {
      path:"/seriale",
      name:"Seriale",
      component:Seriale
    },
    
  ]
})

export default router
