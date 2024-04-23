import { createApp } from 'vue'
import App from './App.vue'

// element-plus相关依赖
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 样式初始化
import 'normalize.css/normalize.css'

// pinia依赖
import { createPinia } from 'pinia'

// 路由
import router from './router/index.ts'
import './permission.ts'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, {locale: zhCn})

app.use(createPinia())


app.use(router)

app.mount('#app')
