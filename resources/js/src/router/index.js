import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './dashboard'
import crud from './crud'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },

    routes: [
        ...dashboard,
        ...crud,

        {
            path:'/login',
            component: () => import('@/layout/login.vue'),
            name:'login'
        }
    ]
})
router.beforeEach((to, from, next) => {
    Axios.get(`/api/checkadmin`).then(({data})=>{
        if (to.matched.some((record) => record.meta.requiresAuth)) {
          // Check if user is authenticated
          if (!data) {
            next({
              name: 'login',
              query: { redirect: to.fullPath }
            })
          }
        } else {
          next() // make sure to always call next()!
        }
    })
  })


export default router