export default [
    {
        path: '/dashboard',
        component: () => import('../pages/admin/dashboard.vue'),
        meta: { requireAuth: true },
        name: 'dashboard'
    },
    {
        path: '/product',
        component: () => import('../pages/admin/product.vue'),
        meta: { requireAuth: true },
        name: 'product'
    },
]