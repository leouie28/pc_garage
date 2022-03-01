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

    ]
})


export default router