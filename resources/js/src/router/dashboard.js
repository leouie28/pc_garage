export default [
    {
        path: '/dashboard',
        component: () => import('../pages/dashboard/index.vue'),
        meta:{ requiresAuth: true },
        name: 'dashboard'
    }
]