import router from './router/index'
import * as NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import {getToken,getPageTitle} from "@/utils/tools.ts";
import {RouteRecordRaw} from "vue-router";

const whiteList = ['/login', '/notFound']

NProgress.configure({showSpinner: false}) // NProgress Configuration

router.beforeEach(async (to, _from, next) => {
    NProgress.start()
    let roleList: string[] = ['/home','/operation/loginLog','/user/userNoticeList','/operation/accountList']
    function getMenu(router: any[]) {
        router.forEach(item => {
            // 没有子路由并且没有权限
            // debugger;

            if (!item.children && !roleList.includes(item.path)) {
                item.meta!.hidden = true
            }
            // 没有子路由但是有权限
            if (!item.children && roleList.includes(item.path)) {
                item.meta!.hidden = false
            }
            // 有子路由
            if (item.children && item.children.length > 0) {
                getMenu(item.children)
            }
        })
    }
    document.title = getPageTitle(to.meta.title)
    if (getToken()) {
        // 有token 已经登录
        if (to.path === '/login') {
            // 登录状态如果去登录页，重定向到首页
            next('/')
            NProgress.done()
            return
        }
        if (to.path === '/notFound') {
            // 登录状态去404页面，直接放行
            next()
            NProgress.done()
            return
        }
        // 获取用户权限

        // const res = await xxx()
        // res.data.forEach((item: { link: string }) => {
        //     roleList.push(item.link)
        // })
        // getMenu(router.options.routes as RouteRecordRaw[])

        // 判断权限，在权限内的直接放行，否则跳转到404
        if (roleList.includes(to.path)) {
            next()
        } else {
            next('/notFound')
        }
        NProgress.done()

    } else {
        // 没有token 未登录
        if (whiteList.includes(to.path)) {
            // 在免登录白名单，直接进入
            next()
            NProgress.done()
        } else {
            // 其他页面全部重定向到登录页
            next('/login')
            NProgress.done()
        }
    }
})
