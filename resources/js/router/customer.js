export default [
    // {
    //     path: '/dashboard',
    //     component: () => import('../pages/customer/dashboard.vue'),
    //     meta: { requireAuth: true },
    //     name: 'dashboard'
    // },
    {
        path: '/product',
        component: () => import('../pages/customer/product.vue'),
        meta: { requireAuth: true },
        name: 'product'
    },
    {
        path: '/product/:id',
        component: () => import('../components/customer/product/product-profile.vue'),
        meta: { requireAuth: true },
        name: 'product-profile'
    },
    {
        path: '/orders',
        component: () => import('../pages/customer/orders.vue'),
        meta: { requireAuth: true },
        name: 'orders'
    },
    {
        path: '/orders/:id',
        component: () => import('../components/customer/order/order-profile.vue'),
        name: 'order-profile',
        meta: { requireAuth: true },
    },
    {
        path: '/cart',
        component: () => import('../components/customer/checkout.vue'),
        meta: { requireAuth: true },
        name: 'cart'
    },
    {
        path: '/recommendations',
        component: () => import('../pages/customer/recommendation.vue'),
        meta: { requireAuth: true },
        name: 'recommendations'
    },
    {
        path: '/checkout',
        component: () => import('../pages/customer/checkout.vue'),
        meta: { requireAuth: true },
        name: 'checkout'
    },
]