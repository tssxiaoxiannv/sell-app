import Vue from 'vue'
import Router from 'vue-router'
// import Box from './views/Box'
import Merchant from './views/Merchant'
import Evaluate from './views/Evaluate'
import Items from './views/Items'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Items',
      component: Items
    },
    {
      path: '/evaluate',
 
      component: Evaluate
    },
    {
      path: '/merchant',
     
      component: Merchant
    }
  
  ]
})
 // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')