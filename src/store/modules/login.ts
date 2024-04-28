import { defineStore } from 'pinia'
import { getToken, setToken} from '@/utils/tools.ts'
import { login } from '@/api/login.ts'
interface State {
    token: string | null
}
export interface loginType{
    username:string,
    password:string
}
const useLoginStore = defineStore('login', {
    state: (): State => {
        return {
            token: getToken(),
        }
    },
    getters: {},
    actions: {
        // 登录操作
        async loginAction(data:loginType) {
            const res = await login(data)
            console.log(res)
            setToken(res.data.token)
            return res
        }
    }
})

export default useLoginStore
