export default [
    {
        path: '/hello',
        component: () => import('./pages/login.vue'),
        // meta: { requireAuth: true },
        name: 'hello'
    },
]