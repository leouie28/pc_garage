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
    {
        path: '/admin/order',
        component: () => import('../pages/admin/order.vue'),
        meta: { requireAuth: true },
        name: 'admin-order'
    },
    {
        path: '/admin/customer',
        component: () => import('../pages/admin/customer.vue'),
        meta: { requireAuth: true },
        name: 'admin-customer'
    },
]