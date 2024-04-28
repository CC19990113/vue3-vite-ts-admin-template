import request from '../utils/request'

// 登录
export const getLoginLogList = (data = {}) =>{
    return request({
        url: '/login_logs/list',
        method: 'POST',
        data
    })
}


