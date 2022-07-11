import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },

    routes: [

        {
            path:'/login',
            component: () => import('../layout/login.vue'),
            name:'login'
        }
    ]
})
router.beforeEach((to, from, next) => {
    Axios.get(`/admin/checkadmin`).then(({data})=>{
        if (to.matched.some(record => record.meta.requiresAuth)) {
          // this route requires auth, check if logged in
          // if not, redirect to login page.
          if (data) {
            next()
          } else {
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