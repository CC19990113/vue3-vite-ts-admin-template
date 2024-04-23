import request from '../utils/request'
import {loginType} from "../store/modules/login.ts";

// 登录
export const login = (data:loginType) =>{
    return request({
        url: '/login',
        method: 'POST',
        data
    })
}
