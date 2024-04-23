import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {getToken, removeName, removeToken} from "./tools.ts";
import router from '../router/index'
import {ElMessage} from "element-plus";

const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 20000
})
// request拦截器
service.interceptors.request.use(
    config => {
        config.headers.token = getToken()

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response拦截器
service.interceptors.response.use(
    async (response:AxiosResponse) => {
        const res = response.data
        // token过期+
        if (res.status.code == 202) {
            // 清除token
            removeToken()
            removeName()
            // 重新登录
            await router.push('/login')
            return
        }
        // 约定成功code 为200
        if (res.status.code != 200) {
            ElMessage({
                message: res.data || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            return Promise.reject(new Error(res.data || 'Error'))
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
