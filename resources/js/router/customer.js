export default [
    {
        path: '/dashboard',
        component: () => import('../pages/customer/dashboard.vue'),
        meta: { requireAuth: true },
        name: 'dashboard'
    },
    {
        path: '/product',
        component: () => import('../pages/customer/product.vue'),
        meta: { requireAuth: true },
        name: 'product'
    },
    {
        path: '/cart',
        component: () => import('../components/customer/checkout.vue'),
        meta: { requireAuth: true },
        name: 'cart'
    },
]