import Vue from 'vue'
import Router from 'vue-router'
import Lenta from '@/components/Lenta'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lenta',
      component: Lenta
    }
  ]
})
