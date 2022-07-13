export default [
    {
        path: '/admin/dashboard',
        component: () => import('../pages/admin/dashboard.vue'),
        name: 'admin-dashboard',
        meta: { requireAuth: true },
    },
    {
        path: '/admin/product',
        component: () => import('../pages/admin/product.vue'),
        name: 'admin-product',
        meta: { requireAuth: true },
    },
]