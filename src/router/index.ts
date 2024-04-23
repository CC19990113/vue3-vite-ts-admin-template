import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'
import asyncRoutes from './asyncRoutes'
import constRoutes, { NOT_ROUND_ROUTE } from './constRoutes'



const router = createRouter({
    history: createWebHashHistory(),
    routes: [...constRoutes, ...asyncRoutes, NOT_ROUND_ROUTE] as unknown as RouteRecordRaw[],
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
