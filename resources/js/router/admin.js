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
        path: '/admin/compatibility',
        component: () => import('../pages/admin/compatibility.vue'),
        meta: { requireAuth: true },
        name: 'admin-compatibility'
    },
    {
        path: '/admin/compatibility/:id',
        component: () => import('../pages/admin/item-profile/compatibility-profile.vue'),
        meta: { requireAuth: true },
        name: 'admin-compatibility-profile'
    },
    {
        path: '/admin/recommendation',
        component: () => import('../pages/admin/recommendation.vue'),
        meta: { requireAuth: true },
        name: 'admin-recommendation'
    },
    {
        path: '/admin/inventory/report',
        component: () => import('../pages/admin/inventory/report.vue'),
        meta: { requireAuth: true },
        name: 'admin-inventory-report'
    },
    {
        path: '/admin/inventory/stock',
        component: () => import('../pages/admin/inventory/stock.vue'),
        meta: { requireAuth: true },
        name: 'admin-inventory-stock'
    },
    {
        path: '/admin/inventory/stock/:id',
        component: () => import('../pages/admin/item-profile/stock-profile.vue'),
        meta: { requireAuth: true },
        name: 'admin-inventory-stock-profile'
    },
]