import 'vue-router'

export {}

declare module 'vue-router' {
    interface RouteMeta {
        title: string
        icon?: string
        hidden: boolean
        breadcrumb: boolean
    }
}
