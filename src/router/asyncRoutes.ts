import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from "vue-router";

const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/operation',
        component: Layout,
        redirect: '/operation/loginLog',
        name: 'operation',
        meta: {
            title: '运营管理',
            icon: 'HelpFilled',
            hidden: false,
            breadcrumb: true
        },
        children: [
            {
                path: '/operation/accountList',
                component: () => import('@/views/accountList/index.vue'),
                name: '用户账号管理',
                meta: { title: '用户账号管理', icon: 'HelpFilled', hidden: false, breadcrumb: true }
            },
            {
                path: '/operation/menuManagement',
                component: () => import('@/views/menuManagement/index.vue'),
                name: '菜单管理',
                meta: { title: '菜单管理', icon: 'HelpFilled', hidden: false, breadcrumb: true }
            },
            {
                path: '/operation/loginLog',
                component: () => import('@/views/loginLog/index.vue'),
                name: '登录日志',
                meta: { title: '登录日志', icon: 'HelpFilled', hidden: false, breadcrumb: true }
            },
        ]
    },

    {
        path: '/user',
        component: Layout,
        name: '用户管理',
        redirect: '/user/userNoticeList',
        meta: { title: '用户管理', icon: 'UserFilled', hidden: false, breadcrumb: true },
        children: [
            {
                path: '/user/userNoticeList',
                component: () => import('@/views/userNoticeList/index.vue'),
                meta: { title: '消息通知', icon: 'UserFilled', hidden: false, breadcrumb: true },
                name: '消息通知'
            },
        ]
    },


]

export default asyncRoutes
