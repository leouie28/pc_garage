export default [
    // {
    //     path: '/crud',
    //     component: () => import('../pages/crud/index.vue'),
    //     name: 'crud'
    // },
    {
        path: '/comp',
        component: () => import('../pages/crud/index_company.vue'),
        name: 'comp'
    },
    {
        path: '/dash',
        component: () => import('../pages/crud/index_dashboard.vue'),
        name: 'dash'
    },
    {
        path: '/emp',
        component: () => import('../pages/crud/employee.vue'),
        name: 'emp'
    },
    {
        path: '/cust',
        component: () => import('../pages/crud/customer.vue'),
        name: 'cust'
    },
    {
        path: '/prod',
        component: () => import('../pages/crud/product.vue'),
        name: 'prod'
    },
    {
        path: '/ord',
        component: () => import('../pages/crud/order.vue'),
        name: 'ord'
    },
    {
        path: '/pay',
        component: () => import('../pages/crud/payment.vue'),
        name: 'pay'
    },
]