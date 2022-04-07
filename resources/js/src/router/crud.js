export default [
    // {
    //     path: '/crud',
    //     component: () => import('../pages/crud/index.vue'),
    //     name: 'crud'
    // },
    {
        path: '/company',
        component: () => import('../pages/crud/company.vue'),
        meta: { requireAuth: true },
        name: 'company'
    },
    {
        path: '/dashboards',
        component: () => import('../pages/crud/dashboard.vue'),
        name: 'dashboards'
    },
    {
        path: '/employee',
        component: () => import('../pages/crud/employee.vue'),
        name: 'employee'
    },
    {
        path: '/customer',
        component: () => import('../pages/crud/customer.vue'),
        name: 'customer'
    },
    {
        path: '/product',
        component: () => import('../pages/crud/product.vue'),
        name: 'product'
    },
    {
        path: '/order',
        component: () => import('../pages/crud/order.vue'),
        name: 'order'
    },
    {
        path: '/payment',
        component: () => import('../pages/crud/payment.vue'),
        name: 'payment'
    },
]