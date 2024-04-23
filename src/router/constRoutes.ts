import Layout from '@/layout/index.vue'
import {RouteRecordRaw} from "vue-router";

const constRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        name: 'layout',
        redirect: '/home',
        meta: {title: '主页', icon: 'HomeFilled', hidden: false, breadcrumb: false},
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                meta: {title: '主页', icon: 'HomeFilled', hidden: false, breadcrumb: false},

                name: '主页'
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        meta: {title: '登录', hidden: true, breadcrumb: false},
        component: () => import('@/views/login/index.vue'),
    },
]

export const NOT_ROUND_ROUTE = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notFound/index.vue'),
    meta: {
        title: '页面走丢了...',
        hidden: true,
        breadcrumb: false
    },
}
export default constRoutes
