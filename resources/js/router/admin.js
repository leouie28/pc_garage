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
        path: '/admin/order/:id',
        component: () => import('../pages/admin/item-profile/order-profile.vue'),
        name: 'admin-order-profile',
        meta: { requireAuth: true },
    },
    {
        path: '/admin/category',
        component: () => import('../pages/admin/category.vue'),
        meta: { requireAuth: true },
        name: 'admin-category'
    },
    {
        path: '/admin/customer',
        component: () => import('../pages/admin/customer.vue'),
        meta: { requireAuth: true },
        name: 'admin-customer'
    },
    {
        path: '/admin/recommendation',
        component: () => import('../pages/admin/recommendation.vue'),
        meta: { requireAuth: true },
        name: 'admin-recommendation'
    },
    {
        path: '/admin/inventory',
        component: () => import('../pages/admin/inventory.vue'),
        meta: { requireAuth: true },
        name: 'admin-inventory'
    },
]