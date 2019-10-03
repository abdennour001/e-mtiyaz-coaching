import Vue from 'vue'
import Router from 'vue-router'
import ParcoursClassique from './components/Parcours/ParcoursClassique'
import Home from './components/Home'
import ParcoursElite from './components/Parcours/ParcoursElite'
import ParcoursDeclic from './components/Parcours/ParcoursDeclic'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/parcours/parcours-classique', name: 'classique', component: ParcoursClassique },
    { path: '/parcours/parcours-elite', name: 'elite', component: ParcoursElite },
    { path: '/parcours/parcours-declic', name: 'declic', component: ParcoursDeclic },
  ],
  scrollBehavior (to, from, savedPosition) {
    // return desired position
  }
})
